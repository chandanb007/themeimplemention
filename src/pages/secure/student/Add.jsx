import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";
import HttpHelper from "../../../services/HttpHelper";
import UserRolesEnum from "../../../Enums/UserRolesEnum";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AddParentModal from "./AddParentModal";
import { useAuth } from "../../../../src/context/AuthContext";

function Add(props) {
  const { notify, showLoader } = useAuth();
  const [show, setShow] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [errorMsgs, setErrorMsgs] = useState(null);
  const [counties, setCounties] = useState({});
  const [parents, setParents] = useState({});
  const [grads, setGrades] = useState({});
  const [subjects, setSubjects] = useState({});
  const [streams, setStreams] = useState({});

  const getCounties = async () => {
    showLoader(true);
    await HttpHelper.get("lookups/counties")
      .then((response) => {
        setCounties(response.data.data);
        showLoader(false);
      })
      .catch((error) => {
        showLoader(false);
        console.log(error);
      });
  };
  const getParents = async () => {
    showLoader(true);
    await HttpHelper.get("user/userByRole/" + UserRolesEnum.PARENT)
      .then((response) => {
        setParents(response.data.data);
        showLoader(false);
      })
      .catch((error) => {
        showLoader(false);
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
    data.role_id = UserRolesEnum.STUDENT;
    data.school_id = user.user.id;
    await HttpHelper.post("signup", data, "multipart/form-data")
      .then((response) => {
        notify("success", "Student added successfully");
        navigate("/student/list");
        showLoader(false);
      })
      .catch((error) => {
        notify("error", "Somthing went wront!!!");
        if (error?.response?.data?.errors) {
          setErrorMsgs(error.response.data);
        }
        showLoader(false);
      });
  };
  const getSchoolGrads = async () => {
    await HttpHelper.get("user/school/getGrads/" + user.user.id)
      .then((response) => {
        setGrades(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getSchoolSubjects = async () => {
    await HttpHelper.get("user/school/getSubjects/" + user.user.id)
      .then((response) => {
        setSubjects(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getSchoolStreams = async () => {
    await HttpHelper.get("user/school/getStreams/" + user.user.id)
      .then((response) => {
        setStreams(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCounties();
    getParents();
    getSchoolSubjects();
    getSchoolGrads();
    getSchoolStreams();
  }, []);
  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <>
      <Wrapper breakCrum="Dashboard/Add Student">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y mt-5">
            <h4 class="py-3 mb-4">
              <span class="text-muted fw-light">Student /</span> Add
            </h4>
            <div className="row gy-4">
              <div class="col-md mb-4 mb-md-0">
                <div class="card">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Basic Details</h5>
                    <small class="text-muted float-end">Basic Details</small>
                  </div>
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
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          defaultValue={user.user.first_name}
                          disabled={true}
                          type="email"
                          id="basic-default-email"
                          class="form-control"
                          placeholder="School Name"
                          required=""
                        />

                        <label htmlFor="basic-default-email">School Name</label>
                        {errors?.email &&
                        errors.email.type &&
                        errors.email.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Email is required
                          </p>
                        ) : null}
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          {...register("first_name", {
                            required: "First Name is required",
                            maxLength: 50,
                          })}
                          type="text"
                          class={
                            errors.first_name !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          id="basic-default-name"
                          placeholder="John Doe"
                          required=""
                        />
                        {errors?.first_name &&
                        errors.first_name.type &&
                        errors.first_name.type === "required" ? (
                          <p className="text-danger" role="alert">
                            First Name is required
                          </p>
                        ) : null}
                        <label htmlFor="basic-default-name">
                          Student First Name
                        </label>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          {...register("last_name", {
                            required: "Last Name is required",
                            maxLength: 50,
                          })}
                          type="text"
                          class={
                            errors.last_name !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          id="basic-default-name"
                          placeholder="John Doe"
                          required=""
                        />
                        {errors?.last_name &&
                        errors.last_name.type &&
                        errors.last_name.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Last Name is required
                          </p>
                        ) : null}
                        <label htmlFor="basic-default-name">
                          Student Last Name
                        </label>
                      </div>
                      <div className="row col-sm-12">
                        <div class="form-floating form-floating-outline mb-4 col-sm-2">
                          <label>Gender</label>
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-2">
                          <div class="form-check mt-2">
                            <label class="form-check-label">
                              <input
                                name="default-radio-1"
                                class="form-check-input"
                                type="radio"
                                value="1"
                              />
                              Male
                            </label>
                          </div>
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-2">
                          <div class="form-check mt-2">
                            <label class="form-check-label">
                              <input
                                name="default-radio-1"
                                class="form-check-input"
                                type="radio"
                                value="1"
                              />
                              Female{" "}
                            </label>
                          </div>
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-6">
                          <div class="mb-4 form-password-toggle">
                            <div class="input-group input-group-merge">
                              <div class="form-floating form-floating-outline">
                                <input
                                  class={
                                    errors.admission_no !== undefined
                                      ? "is-invalid form-control"
                                      : "form-control"
                                  }
                                  {...register("admission_no", {
                                    required: "admission number is required",
                                  })}
                                  type="text"
                                  id="basic-default-password"
                                  placeholder="Enter admission number"
                                  aria-describedby="basic-default-password3"
                                  required=""
                                />

                                <label htmlFor="basic-default-password">
                                  Admission Number
                                </label>
                              </div>
                              <span
                                class="input-group-text cursor-pointer"
                                id="basic-default-password3"
                              ></span>
                            </div>
                            {errors?.admission_no &&
                            errors.admission_no.type &&
                            errors.admission_no.type === "required" ? (
                              <p className="text-danger" role="alert">
                                Admission number is required
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="row col-sm-12">
                        <div class="form-floating form-floating-outline mb-4 col-sm-6">
                          <div class="mb-4 form-password-toggle">
                            <div class="input-group input-group-merge">
                              <div class="form-floating form-floating-outline">
                                <input
                                  type="date"
                                  class={
                                    errors.dob !== undefined
                                      ? "is-invalid form-control"
                                      : "form-control"
                                  }
                                  {...register("dob", {
                                    required: "admission number is required",
                                  })}
                                  id="basic-default-password"
                                  placeholder="Enter admission number"
                                  aria-describedby="basic-default-password3"
                                  required=""
                                />

                                <label htmlFor="basic-default-password">
                                  Date of birth
                                </label>
                              </div>
                              <span
                                class="input-group-text cursor-pointer"
                                id="basic-default-password3"
                              ></span>
                            </div>
                            {errors?.dob &&
                            errors.dob.type &&
                            errors.dob.type === "required" ? (
                              <p className="text-danger" role="alert">
                                Date of Birth is required
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-6">
                          <div class="form-floating form-floating-outline mb-4">
                            <select
                              class={
                                errors.parent !== undefined
                                  ? "is-invalid form-control"
                                  : "form-select"
                              }
                              id="parent"
                              required=""
                              {...register("parent_id", {
                                required: "Parent field is required",
                              })}
                            >
                              <option value="">Select Parent</option>
                              {parents.length > 0
                                ? parents.map((parent, index) => {
                                    return (
                                      <>
                                        <option value={parent.id}>
                                          {parent.first_name +
                                            " " +
                                            parent.last_name}
                                        </option>
                                      </>
                                    );
                                  })
                                : null}
                            </select>
                            {errors?.parent &&
                            errors.parent.type &&
                            errors.parent.type === "required" ? (
                              <p className="text-danger" role="alert">
                                Parent field is required
                              </p>
                            ) : null}
                            <label htmlFor="basic-default-country">
                              Parent
                            </label>
                          </div>
                          <div class="form-floating form-floating-outline mb-4 float-right">
                            <span>
                              Click{" "}
                              <a
                                onClick={(e) => {
                                  setShow(true);
                                }}
                              >
                                here{" "}
                              </a>
                              to create new parent.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row col-sm-12">
                        <div class="form-floating form-floating-outline mb-4 col-sm-6">
                          <div class="mb-4 form-password-toggle">
                            <div class="input-group input-group-merge">
                              <div class="form-floating form-floating-outline">
                                <select
                                  class={
                                    errors.grade !== undefined
                                      ? "is-invalid form-control"
                                      : "form-select"
                                  }
                                  id="county"
                                  required=""
                                  {...register("grade", {
                                    required: "Grade is required",
                                  })}
                                >
                                  <option value="">Select Grade</option>
                                  {console.log(grads?.length)}
                                  {grads?.length > 0
                                    ? grads.map((grad, index) => {
                                        debugger;
                                        console.log(grad);
                                        return (
                                          <>
                                            <option value={index}>
                                              {grad}
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
                                <label htmlFor="basic-default-country">
                                  Grade
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-6">
                          <div class="mb-4 form-password-toggle">
                            <div class="input-group input-group-merge">
                              <div class="form-floating form-floating-outline">
                                <select
                                  class={
                                    errors.stream !== undefined
                                      ? "is-invalid form-control"
                                      : "form-select"
                                  }
                                  id="county"
                                  required=""
                                  {...register("stream", {
                                    required: "Stream is required",
                                  })}
                                >
                                  <option value="">Select Stream</option>
                                  {counties.length > 0
                                    ? counties.map((county, index) => {
                                        return (
                                          <>
                                            <option value={county.id}>
                                              {county.name}
                                            </option>
                                          </>
                                        );
                                      })
                                    : null}
                                </select>
                                {errors?.stream &&
                                errors.stream.type &&
                                errors.stream.type === "required" ? (
                                  <p className="text-danger" role="alert">
                                    Stream is required
                                  </p>
                                ) : null}
                                <label htmlFor="basic-default-country">
                                  Stream
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <select
                          class={
                            errors.county !== undefined
                              ? "is-invalid form-control"
                              : "form-select"
                          }
                          id="county"
                          required=""
                          {...register("county", {
                            required: "County is required",
                          })}
                        >
                          <option value="">Select County</option>
                          {counties.length > 0
                            ? counties.map((county, index) => {
                                return (
                                  <>
                                    <option value={county.id}>
                                      {county.name}
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
                        <label htmlFor="basic-default-country">County</label>
                      </div>
                      <div class="mb-4 form-password-toggle">
                        <div class="input-group input-group-merge">
                          <div class="form-floating form-floating-outline">
                            <input
                              class={
                                errors.town !== undefined
                                  ? "is-invalid form-control"
                                  : "form-control"
                              }
                              {...register("town", {
                                required: "Town is required",
                              })}
                              type="text"
                              id="basic-default-password"
                              placeholder=""
                              aria-describedby="basic-default-password3"
                              required=""
                            />

                            <label htmlFor="basic-default-password">Town</label>
                          </div>
                          <span
                            class="input-group-text cursor-pointer"
                            id="basic-default-password3"
                          ></span>
                        </div>
                        {errors?.town &&
                        errors.town.type &&
                        errors.town.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Town is required
                          </p>
                        ) : null}
                      </div>
                      <div class="mb-4 form-password-toggle">
                        <div class="input-group input-group-merge">
                          <div class="form-floating form-floating-outline">
                            <input
                              class={
                                errors.estate !== undefined
                                  ? "is-invalid form-control"
                                  : "form-control"
                              }
                              {...register("estate", {
                                required: "Estate is required",
                              })}
                              type="text"
                              id="basic-default-password"
                              placeholder=""
                              aria-describedby="basic-default-password3"
                              required=""
                            />

                            <label htmlFor="basic-default-password">
                              Estate
                            </label>
                          </div>
                          <span
                            class="input-group-text cursor-pointer"
                            id="basic-default-password3"
                          ></span>
                        </div>
                        {errors?.estate &&
                        errors.estate.type &&
                        errors.estate.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Estate is required
                          </p>
                        ) : null}
                      </div>
                      <div class="mb-4 form-password-toggle">
                        <div class="input-group input-group-merge">
                          <div class="form-floating form-floating-outline">
                            <input
                              {...register("building", {
                                required: false,
                              })}
                              type="text"
                              id="basic-default-password"
                              class={
                                errors.building !== undefined
                                  ? "is-invalid form-control"
                                  : "form-control"
                              }
                              placeholder=""
                              aria-describedby="basic-default-password3"
                              required=""
                            />
                            {errors?.building &&
                            errors.building.type &&
                            errors.building.type === "required" ? (
                              <p className="text-danger" role="alert">
                                Building is required
                              </p>
                            ) : null}
                            <label htmlFor="basic-default-password">
                              Building
                            </label>
                          </div>
                          <span
                            class="input-group-text cursor-pointer"
                            id="basic-default-password3"
                          ></span>
                        </div>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          {...register("file", {
                            required: true,
                          })}
                          type="file"
                          class={
                            errors.file !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          id="basic-default-upload-file"
                          required=""
                        />
                        {errors?.file &&
                        errors.file.type &&
                        errors.file.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Profile image is required
                          </p>
                        ) : null}
                        <label htmlFor="basic-default-upload-file">
                          Profile image
                        </label>
                      </div>
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            {...register("terms", {
                              required: "This field is required",
                            })}
                            type="checkbox"
                            class="form-check-input"
                            id="basic-default-checkbox"
                          />
                          <label
                            class="form-check-label"
                            htmlFor="basic-default-checkbox"
                          >
                            Agree to our terms and conditions
                          </label>
                        </div>
                        {errors?.terms &&
                        errors.terms.type &&
                        errors.terms.type === "required" ? (
                          <p className="text-danger" role="alert">
                            This field is required
                          </p>
                        ) : null}
                      </div>
                      <div class="mb-3">
                        <label class="switch switch-primary">
                          <input
                            {...register("emails_consent", {
                              required: false,
                            })}
                            type="checkbox"
                            class="switch-input"
                            required=""
                          />
                          <span class="switch-toggle-slider">
                            <span class="switch-on"></span>
                            <span class="switch-off"></span>
                          </span>
                          <span class="switch-label">
                            Send me related emails
                          </span>
                        </label>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <button
                            type="submit"
                            class="btn btn-primary waves-effect waves-light"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
            <AddParentModal
              show={show}
              handleClose={handleCloseModal}
              counties={counties}
              getParents={getParents}
            />
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Add;
