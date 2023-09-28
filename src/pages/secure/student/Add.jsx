import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";
import HttpHelper from "../../../services/HttpHelper";
import UserRolesEnum from "../../../Enums/UserRolesEnum";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AddParentModal from "./AddParentModal";
import { useAuth } from "../../../../src/context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [gradeCategories, setGradeCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGrads, setSelectedGrads] = useState(null);
  const [dob, setDob] = useState(null);
  const [startDate, setStartDate] = useState(
    new Date().setMonth(new Date().getMonth() - 30)
  );

  const getStreams = async () => {
    showLoader(true);
    await HttpHelper.get("lookups/streams")
      .then((response) => {
        showLoader(false);
        var streams = [];
        response.data.data.map((item) => {
          streams.push({ value: item.id, label: item.name });
        });
        setStreams(streams);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
  const gradesByCategory = async (id) => {
    showLoader(true);
    await HttpHelper.get("lookups/gradesByCategory/" + id)
      .then((response) => {
        var gradeData = [];
        if (response.data.data) {
          showLoader(false);
          response.data.data.map((item) => {
            gradeData.push({ value: item.id, label: item.name });
          });
          setGrades(gradeData);
        }
      })
      .catch((error) => {});
  };
  useEffect(() => {
    if (selectedCategory) gradesByCategory(selectedCategory);
  }, [selectedCategory]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    debugger;
    showLoader(true);
    data.role_id = UserRolesEnum.STUDENT;
    data.school_id = user.user.id;
    data.date_of_birth = dob;
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
    getGradeCategories();
    getStreams();
  }, []);
  const handleCloseModal = () => {
    setShow(false);
  };
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
  return (
    <>
      <Wrapper breakCrum="Dashboard/Add Student">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y mt-5">
            <h4 class="py-3 mb-4 breadcrumWrapper">
              <span class="text-muted fw-light brreadCrumText">
                Student /Add
              </span>
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
                      <div className="row">
                        <div className="col-sm-4">
                        <div className="input-group input-group-merge">
                          <div class="form-floating form-floating-outline mb-4 col-sm-4">
                            <input
                              defaultValue={user.user.first_name}
                              disabled={true}
                              type="email"
                              id="basic-default-email"
                              class="form-control"
                              placeholder="Enter School Name"
                              required=""
                            />

                            <label htmlFor="basic-default-email">
                              School Name
                            </label>
                            {errors?.email &&
                            errors.email.type &&
                            errors.email.type === "required" ? (
                              <p className="text-danger" role="alert">
                                Email is required
                              </p>
                            ) : null}
                          </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="input-group input-group-merge">
                          <div class="form-floating form-floating-outline mb-4 col-sm-4">
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
                              placeholder="Enter First Name"
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
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="input-group input-group-merge">
                          <div class="form-floating form-floating-outline mb-4 col-sm-4">
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
                              placeholder="Enter Last Name"
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
                        </div>
                        </div>
                      </div>

                      <div className="row">
                        <div class="col-sm-6">
                          <label>Gender</label>
                          <div class="form-floating form-floating-outline mb-4">
                            <div class="form-check mt-2">
                              <label
                                class="form-check-label"
                                style={{ marginRight: "35px" }}
                              >
                                <input
                                  {...register("gender", {
                                    required: "Gender is required",
                                  })}
                                  class="form-check-input"
                                  type="radio"
                                  value="Male"
                                />
                                Male
                              </label>
                              <label class="form-check-label">
                                <input
                                  {...register("gender", {
                                    required: "Gender is required",
                                  })}
                                  class="form-check-input"
                                  type="radio"
                                  value="Female"
                                />
                                Female{" "}
                              </label>
                              {errors?.gender &&
                              errors.gender.type &&
                              errors.gender.type === "required" ? (
                                <p className="text-danger" role="alert">
                                  Gender is required
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
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
                      <div className="row">
                        <div className="col-sm-4">
                          <div class="form-floating form-floating-outline mb-4">
                            <div class="mb-4 form-password-toggle">
                              <div class="input-group input-group-merge">
                                <div class="form-floating form-floating-outline">
                                  <DatePicker
                                    maxDate={new Date()}
                                    className="form-control"
                                    selected={startDate}
                                    placeholderText="Enter Date of Birth"
                                    onChange={(date) => {
                                      setStartDate(date);
                                      var d = date.getDate();
                                      var m = date.getMonth() + 1; //Month from 0 to 11
                                      var y = date.getFullYear();
                                      setDob(
                                        "" +
                                          y +
                                          "-" +
                                          (m <= 9 ? "0" + m : m) +
                                          "-" +
                                          (d <= 9 ? "0" + d : d)
                                      );
                                    }}
                                  />
                                  {/* <input
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
                                  /> */}

                                  {/* <label htmlFor="basic-default-password">
                                    Date of birth
                                  </label> */}
                                </div>
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
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-8">
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
                      <div className="row">
                        <div class="form-floating form-floating-outline mb-4 col-sm-4">
                          <select
                            class={
                              errors.category_id !== undefined
                                ? "is-invalid form-control"
                                : "form-select"
                            }
                            id="county"
                            required=""
                            {...register("category_id", {
                              required: "Category is required",
                            })}
                            onChange={(e) => {
                              setSelectedCategory(e.currentTarget.value);
                            }}
                          >
                            <option value="">Select Category</option>
                            {gradeCategories.length > 0
                              ? gradeCategories.map((gradeCategory, index) => {
                                  return (
                                    <>
                                      <option value={gradeCategory.id}>
                                        {gradeCategory.name}
                                      </option>
                                    </>
                                  );
                                })
                              : null}
                          </select>
                          {errors?.category_id &&
                          errors.category_id.type &&
                          errors.category_id.type === "required" ? (
                            <p className="text-danger" role="alert">
                              Category is required
                            </p>
                          ) : null}
                          <label htmlFor="basic-default-country">
                            Category
                          </label>
                        </div>

                        <div class="form-floating form-floating-outline mb-4 col-sm-4">
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
                                  <option value="">Select Grades</option>
                                  {grads?.length > 0
                                    ? grads.map((grad, index) => {
                                        return (
                                          <>
                                            <option value={grad.value}>
                                              {grad.label}
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
                        <div class="form-floating form-floating-outline mb-4 col-sm-4">
                          <div class="mb-4 form-password-toggle">
                            <div class="input-group input-group-merge">
                              <div class="form-floating form-floating-outline">
                                <select
                                  class={
                                    errors.stream !== undefined
                                      ? "is-invalid form-control"
                                      : "form-select"
                                  }
                                  id="stream"
                                  required=""
                                  {...register("stream", {
                                    required: "Stream is required",
                                  })}
                                >
                                  <option value="">Select Stream</option>
                                  {streams.length > 0
                                    ? streams.map((stream, index) => {
                                        return (
                                          <>
                                            <option value={stream.value}>
                                              {stream.label}
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
                      <div className="row">
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
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
                        <div class="mb-4 form-password-toggle  col-sm-3">
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

                              <label htmlFor="basic-default-password">
                                Town
                              </label>
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
                        <div class="mb-4 form-password-toggle  col-sm-3">
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
                        <div class="mb-4 form-password-toggle  col-sm-3">
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
