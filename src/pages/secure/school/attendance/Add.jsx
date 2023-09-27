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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Add(props) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { notify, showLoader } = useAuth();
  const [errorMsgs, setErrorMsgs] = useState(null);
  const [counties, setCounties] = useState({});
  const [gradeCategories, setGradeCategories] = useState({});
  const [grads, setGrades] = useState({});
  const [attendanceData, setAttendanceData] = useState({});
  const currentDate = new Date().toLocaleString();
  const [startDate, setStartDate] = useState(new Date());
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
    await HttpHelper.get("attendance/search", data)
      .then((response) => {
        setAttendanceData(response.data.data);
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
            <h4 class="py-3 mb-4 breadcrumWrapper">
              <span class="text-muted fw-light brreadCrumText">
                Attendance / Add
              </span>{" "}
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
                        {/* <div class="form-floating form-floating-outline mb-4 col-sm-3">
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
                        </div> */}
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <select
                            class={
                              errors.grade !== undefined
                                ? "is-invalid form-control"
                                : "form-select"
                            }
                            id="grade"
                            required=""
                            {...register("grade_id", {
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
                              Grade is required
                            </p>
                          ) : null}
                          <label htmlFor="basic-default-country">Grade</label>
                        </div>
                        {/* <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <input
                            {...register("name", {
                              required: "Name is required",
                            })}
                            type="text"
                            class="form-control"
                            placeholder="Student Name"
                            required=""
                          />
                          <label htmlFor="basic-default-email">Name</label>
                          {errors?.name &&
                          errors.name.type &&
                          errors.name.type === "required" ? (
                            <p className="text-danger" role="alert">
                              Name is required
                            </p>
                          ) : null}
                          <label htmlFor="basic-default-country">Name</label>
                        </div> */}
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <DatePicker
                            maxDate={new Date()}
                            className="form-control"
                            selected={startDate}
                            placeholderText="Select Date"
                            onChange={(date) => setStartDate(date)}
                          />
                          {/* <input
                            type="date"
                            required=""
                            {...register("date", {
                              required: "Date is required",
                            })}
                            className="form-control"
                          /> */}
                          {/* <label htmlFor="basic-default-country">Date</label> */}
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
            {attendanceData.length > 0 ? (
              <div class="card">
                <form>
                  <h5 class="card-header">Students List</h5>
                  <div class="table-responsive text-nowrap">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Student Name</th>
                          {/* <th>Date</th> */}
                          <th>Present</th>
                          <th>Absent</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0">
                        {attendanceData.map((row) => {
                          return (
                            <tr class="table-default">
                              <td>
                                <img
                                  width={30}
                                  height={30}
                                  src={row.profile.profile_picture}
                                  alt="Avatar"
                                  class="rounded-circle"
                                />{" "}
                                {row.first_name + " " + row.last_name}{" "}
                              </td>

                              {/* <td>
                              <span class="badge bg-label-primary me-1">
                                {currentDate}
                              </span>
                            </td> */}
                              <td>
                                <input
                                  name={"ids[" + row.id + "]"}
                                  type="radio"
                                />
                              </td>
                              <td>
                                <input
                                  name={"ids[" + row.id + "]"}
                                  type="radio"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className="row">
                      <div class="form-floating form-floating-outline ml-5 mb-4 col-sm-3">
                        <button
                          type="submit"
                          class="btn btn-primary waves-effect waves-light customStyle"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : null}
            <Footer />
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Add;
