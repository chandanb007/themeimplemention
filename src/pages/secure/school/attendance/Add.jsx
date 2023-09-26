import React, { useEffect, useState } from "react";
import Wrapper from "../../../../components/common/Wrapper";
import Footer from "../../../../components/common/Footer";
import HttpHelper from "../../../../services/HttpHelper";
import UserRolesEnum from "../../../../Enums/UserRolesEnum";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";

function Add(props) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { notify, showLoader } = useAuth();
  const [errorMsgs, setErrorMsgs] = useState(null);
  const [counties, setCounties] = useState({});
  const [gradeCategories, setGradeCategories] = useState({});
  const [grads, setGrades] = useState({});
  const getCounties = async () => {
    showLoader(true);
    await HttpHelper.get("lookups/counties")
      .then((response) => {
        setCounties(response.data.data);
        showLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    showLoader(true);
    data.role_id = UserRolesEnum.SCHOOL;
    await HttpHelper.post("signup", data, "multipart/form-data")
      .then((response) => {
        notify("success", "School added successfully");
        navigate("/school/list");
        showLoader(false);
      })
      .catch((error) => {
        showLoader(false);
        notify("error", "Something went wrong!!!");
        if (error?.response?.data?.errors) {
          setErrorMsgs(error.response.data);
        }
      });
  };
  useEffect(() => {
    getGradeCategories();
    getSchoolGrads();
  }, []);
  const getGradeCategories = async () => {
    showLoader(true);
    await HttpHelper.get("lookups/gradeCategories")
      .then((response) => {
        setGradeCategories(response.data.data);
        showLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getSchoolGrads = async () => {
    await HttpHelper.get("user/school/getGrads/" + user.user.id + "/true")
      .then((response) => {
        debugger;
        setGrades(response.data.data);
        var data = response.data.data;
        for (var i = 0; i < data.length; i++) {
          console.log(data[i][i]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSelect = (date) => {
    console.log(date); // native Date object
  };
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date().setDate(new Date().getDate() + 5),
    key: "selection",
  };
  return (
    <>
      <Wrapper breakCrum="Dashboard/Add School">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y mt-5">
            <h4 class="py-3 mb-4">
              <span class="text-muted fw-light">Attendance /</span> Add
            </h4>
            <div className="row gy-4">
              <div class="col-md mb-4 mb-md-0">
                <div class="card">
                  <div class="card-body">
                    {errorMsgs !== null && errorMsgs?.errors ? (
                      <div class="alert alert-danger" role="alert">
                        {errorMsgs.errors.map((erromsg, index) => {
                          return (
                            <>
                              {erromsg}
                              <br />
                            </>
                          );
                        })}
                      </div>
                    ) : null}
                    <form
                      class="browser-default-validation"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="row col-sm-12">
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <select
                            class={
                              errors.county !== undefined
                                ? "is-invalid form-control"
                                : "form-select"
                            }
                            id="county"
                            required=""
                            {...register("category", {
                              required: "Category is required",
                            })}
                          >
                            <option value="">Select Category</option>
                            {gradeCategories.length > 0
                              ? gradeCategories.map((category, index) => {
                                  return (
                                    <>
                                      <option value={category.id}>
                                        {category.name}
                                      </option>
                                    </>
                                  );
                                })
                              : null}
                          </select>
                          {errors?.county &&
                          errors.county.type &&
                          errors.county.type === "required" ? (
                            <p className="text-danger" role="alert">
                              Category is required
                            </p>
                          ) : null}
                          <label htmlFor="basic-default-country">
                            Category
                          </label>
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <select
                            class={
                              errors.grade !== undefined
                                ? "is-invalid form-control"
                                : "form-select"
                            }
                            id="grade"
                            required=""
                            {...register("grade", {
                              required: "grade is required",
                            })}
                          >
                            <option value="">Select Grade</option>

                            {console.log(grads)}
                            {grads.length > 0
                              ? grads.map((grad, index) => {
                                  return (
                                    <>
                                      <option value={grad.grads[0].id}>
                                        {grad.grads[0].name}
                                      </option>
                                    </>
                                  );
                                })
                              : null}
                          </select>
                          {errors?.county &&
                          errors.county.type &&
                          errors.county.type === "required" ? (
                            <p className="text-danger" role="alert">
                              County is required
                            </p>
                          ) : null}
                          <label htmlFor="basic-default-country">Country</label>
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <input
                            type="date"
                            required=""
                            {...register("date", {
                              required: "Date is required",
                            })}
                            className="form-control"
                          />
                          <label htmlFor="basic-default-country">
                            State Date
                          </label>
                        </div>
                        {/* <div class="form-floating form-floating-outline mb-4 col-sm-2">
                          <input type="date" className="form-control" />
                          <label htmlFor="basic-default-country">
                            End Date
                          </label>
                        </div> */}
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <button
                            type="submit"
                            class="btn btn-primary waves-effect waves-light"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <h5 class="card-header">Students List</h5>
              <div class="table-responsive text-nowrap">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Users</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody class="table-border-bottom-0">
                    <tr class="table-default">
                      <td>
                        <i class="mdi mdi-palette mdi-20px text-warning me-3"></i>
                        <span class="fw-medium">UI/UX Project</span>
                      </td>
                      <td>Ronnie Shane</td>
                      <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge bg-label-primary me-1">Active</span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-pencil-outline me-1"></i> Edit
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-trash-can-outline me-1"></i>{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="table-active">
                      <td>
                        <i class="mdi mdi-basketball mdi-20px text-info me-3"></i>
                        <span class="fw-medium">Sports Project</span>
                      </td>
                      <td>Barry Hunter</td>
                      <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge bg-label-success me-1">
                          Completed
                        </span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-pencil-outline me-1"></i> Edit
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-trash-can-outline me-1"></i>{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="table-primary">
                      <td>
                        <i class="mdi mdi-wallet-travel mdi-20px text-danger me-3"></i>
                        <span class="fw-medium">Tours Project</span>
                      </td>
                      <td>Albert Cook</td>
                      <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge bg-label-primary me-1">Active</span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-pencil-outline me-1"></i> Edit
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-trash-can-outline me-1"></i>{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="table-secondary">
                      <td>
                        <i class="mdi mdi-greenhouse mdi-20px text-success me-3"></i>
                        <span class="fw-medium">Greenhouse Project</span>
                      </td>
                      <td>Trevor Baker</td>
                      <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge bg-label-info me-1">Scheduled</span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-pencil-outline me-1"></i> Edit
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-trash-can-outline me-1"></i>{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="table-success">
                      <td>
                        <i class="mdi mdi-bank mdi-20px text-primary me-3"></i>
                        <span class="fw-medium">Bank Project</span>
                      </td>
                      <td>Jerry Milton</td>
                      <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge bg-label-warning me-1">Pending</span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-pencil-outline me-1"></i> Edit
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-trash-can-outline me-1"></i>{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="table-danger">
                      <td>
                        <i class="mdi mdi-palette mdi-20px text-danger me-3"></i>
                        <span class="fw-medium">UI/UX Project</span>
                      </td>
                      <td>Sarah Banks</td>
                      <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge bg-label-primary me-1">Active</span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-pencil-outline me-1"></i> Edit
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-trash-can-outline me-1"></i>{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="table-warning">
                      <td>
                        <i class="mdi mdi-shield-account-outline mdi-20px text-info me-3"></i>
                        <span class="fw-medium">Custom Security</span>
                      </td>
                      <td>Ted Richer</td>
                      <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge bg-label-info me-1">Scheduled</span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-pencil-outline me-1"></i> Edit
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-trash-can-outline me-1"></i>{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="table-info">
                      <td>
                        <i class="mdi mdi-lifebuoy mdi-20px text-primary me-3"></i>
                        <span class="fw-medium">Latest Bootstrap</span>
                      </td>
                      <td>Perry Parker</td>
                      <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge bg-label-warning me-1">Pending</span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-pencil-outline me-1"></i> Edit
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-trash-can-outline me-1"></i>{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="table-light">
                      <td>
                        <i class="mdi mdi-checkbox-marked-circle-plus-outline mdi-20px text-danger me-3"></i>
                        <span class="fw-medium">Angular UI</span>
                      </td>
                      <td>Ana Bell</td>
                      <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge bg-label-success me-1">
                          Completed
                        </span>
                      </td>
                      <td>
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-pencil-outline me-1"></i> Edit
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-trash-can-outline me-1"></i>{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="table-dark">
                      <td class="rounded-start-bottom">
                        <i class="mdi mdi-waveform mdi-20px text-success me-3"></i>
                        <span class="fw-medium">Bootstrap UI</span>
                      </td>
                      <td>Jerry Milton</td>
                      <td>
                        <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Lilian Fuller"
                          >
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Sophia Wilkerson"
                          >
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            class="avatar avatar-xs pull-up"
                            title="Christina Parker"
                          >
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              class="rounded-circle"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>
                        <span class="badge bg-label-success me-1">
                          Completed
                        </span>
                      </td>
                      <td class="rounded-end-bottom">
                        <div class="dropdown">
                          <button
                            type="button"
                            class="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-pencil-outline me-1"></i> Edit
                            </a>
                            <a class="dropdown-item" href="javascript:void(0);">
                              <i class="mdi mdi-trash-can-outline me-1"></i>{" "}
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Footer />

            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Add;
