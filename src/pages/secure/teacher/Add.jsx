import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";
import HttpHelper from "../../../services/HttpHelper";
import UserRolesEnum from "../../../Enums/UserRolesEnum";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Select from "react-select";

function Add(props) {
  const { notify, showLoader } = useAuth();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [errorMsgs, setErrorMsgs] = useState(null);
  const [counties, setCounties] = useState({});
  const [gradeCategories, setGradeCategories] = useState({});
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [streams, setStreams] = useState({});
  const [subjects, setSubjects] = useState({});
  const [grades, setGrades] = useState([]);
  const [selectedGrads, setSelectedGrads] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);
  const getCounties = async () => {
    showLoader(true);
    await HttpHelper.get("lookups/counties")
      .then((response) => {
        setCounties(response.data.data);
        showLoader(false);
      })
      .catch((error) => {
        console.log(error);
        showLoader(false);
      });
  };
  const getStreams = async () => {
    showLoader(true);
    await HttpHelper.get("lookups/streams")
      .then((response) => {
        const streamOption = response.data.data.map(stream => ({
          value: stream.id, // Adjust the value property as needed
          label: stream.name, // Adjust the label property as needed
        }));
        setStreams(streamOption);
        showLoader(false);
      })
      .catch((error) => {
        console.log(error);
        showLoader(false);
      });
  };
  const getSubjects = async () => {
    showLoader(true);
    await HttpHelper.get("lookups/subjects")
      .then((response) => {
        const subjectOption = response.data.data.map(subject => ({
          value: subject.id, // Adjust the value property as needed
          label: subject.name, // Adjust the label property as needed
        }));

        setSubjects(subjectOption);
        showLoader(false);
      })
      .catch((error) => {
        console.log(error);
        showLoader(false);
      });
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
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    showLoader(true);
    data.role_id = UserRolesEnum.TEACHER;
    data.school_id = user.user.id;
    data.category = selectedCategory;
    data.grads = selectedGrads;
    data.subjects = selectedSubjects;
    data.streams = selectedStream;
    console.log(data);
    await HttpHelper.post("signup", data, "multipart/form-data")
      .then((response) => {
        notify("success", "Teacher added successfully");
        navigate("/teacher/list");
        showLoader(false);
      })
      .catch((error) => {
        notify("error", "Something went wrong!!!");
        if (error?.response?.data?.errors) {
          setErrorMsgs(error.response.data);
        }
        showLoader(false);
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
  useEffect(() => {
    getCounties();
    getGradeCategories();
    getStreams();
    getSubjects();
  }, []);
  return (
    <>
      <Wrapper breakCrum="Dashboard/Add School">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y mt-5">
            <h4 class="py-3 mb-4">
              <span class="text-muted fw-light">School /</span> Add
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
                          {...register("first_name", {
                            required: "First Name is required",
                            maxLength: 50,
                          })}
                          type="text"
                          class={
                            errors.name !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          id="basic-default-name"
                          placeholder="Enter first name"
                          required=""
                        />
                        {errors?.first_name &&
                        errors.first_name.type &&
                        errors.first_name.type === "required" ? (
                          <p className="text-danger" role="alert">
                            First name is required
                          </p>
                        ) : null}
                        <label htmlFor="basic-default-name">
                          Teacher First Name
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
                          placeholder="Enter Last Name"
                          required=""
                        />
                        {errors?.First_name &&
                        errors.last_name.type &&
                        errors.last_name.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Last name is required
                          </p>
                        ) : null}
                        <label htmlFor="basic-default-name">
                          Teacher Last Name
                        </label>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          {...register("id_no", {
                            required: "Id no is required",
                            maxLength: 50,
                          })}
                          type="text"
                          id="basic-default-id_no"
                          class={
                            errors.id_no !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          placeholder="Id no"
                          required=""
                        />

                        <label htmlFor="basic-default-id_no">
                           Id No 
                        </label>
                        {errors?.id_no &&
                        errors.id_no.type &&
                        errors.id_no.type === "required" ? (
                          <p className="text-danger" role="alert">
                            id_no is required
                          </p>
                        ) : null}
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          {...register("date_of_birth", {
                            required: "Date of birth is required",
                            maxLength: 50,
                          })}
                          type="date"
                          id="basic-default-id_no"
                          class={
                            errors.date_of_birth !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          placeholder="Date of birth"
                          required=""
                        />

                        <label htmlFor="basic-default-id_no">
                        Date of birth
                        </label>
                        {errors?.date_of_birth &&
                        errors.date_of_birth.type &&
                        errors.date_of_birth.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Date of Birth is required
                          </p>
                        ) : null}
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
                    
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
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
                        <label htmlFor="basic-default-country">Category</label>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <Select
                          className="form-control"
                          options={grades ? grades : []}
                          isMulti
                          onChange={(e) => {
                            setSelectedGrads(e);
                            console.log(e);
                          }}
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              //borderColor: state.isFocused ? "grey" : "",
                            }),
                          }}
                        />
                        <label htmlFor="basic-default-country">Grades</label>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          {...register("email", {
                            required: "Email is required",
                            maxLength: 50,
                          })}
                          type="email"
                          id="basic-default-email"
                          class={
                            errors.email !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          placeholder="Enter Email"
                          required=""
                        />

                        <label htmlFor="basic-default-email">
                          Email Address
                        </label>
                        {errors?.email &&
                        errors.email.type &&
                        errors.email.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Email is required
                          </p>
                        ) : null}
                      </div>
                      <div class="mb-4 form-password-toggle">
                        <div class="input-group input-group-merge">
                          <div class="form-floating form-floating-outline">
                            <input
                              {...register("mobile", {
                                required: "Mobile is required",
                                minLength: 10,
                                maxLength: 13,
                              })}
                              type="text"
                              id="basic-default-password"
                              class={
                                errors.mobile !== undefined
                                  ? "is-invalid form-control"
                                  : "form-control"
                              }
                              placeholder="Enter Mobile Number"
                              aria-describedby="basic-default-password3"
                              required=""
                            />

                            <label htmlFor="basic-default-password">
                              Mobile Number
                            </label>
                          </div>
                          <span
                            class="input-group-text cursor-pointer"
                            id="basic-default-password3"
                          ></span>
                        </div>
                        {errors?.mobile &&
                        errors.mobile.type &&
                        errors.mobile.type === "minLength" ? (
                          <p className="text-danger" role="alert">
                            Mobile number should atleast 10 digit long
                          </p>
                        ) : null}
                        {errors?.mobile &&
                        errors.mobile.type &&
                        errors.mobile.type === "maxLength" ? (
                          <p className="text-danger" role="alert">
                            Mobile number should not be greater than 13 digits
                          </p>
                        ) : null}
                        {errors?.mobile &&
                        errors.mobile.type &&
                        errors.mobile.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Mobile is required
                          </p>
                        ) : null}
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          {...register("start_do_employment", {
                            required: "Start Do Employment is required",
                            maxLength: 50,
                          })}
                          type="date"
                          id="basic-default-id_no"
                          class={
                            errors.start_do_employment !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          placeholder="Start Date Employment"
                          required=""
                        />

                        <label htmlFor="basic-default-id_no">
                        Start Date Employment
                        </label>
                        {errors?.start_do_employment &&
                        errors.start_do_employment.type &&
                        errors.start_do_employment.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Start Date employment is required
                          </p>
                        ) : null}
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
                        <label htmlFor="basic-default-country">Country</label>
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
                              placeholder="Enter Town Name"
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
                              placeholder="Enter Estate"
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
                              placeholder="Enter building"
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
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          {...register("capacity", {
                            required: "Capacity is required",
                            maxLength: 50,
                          })}
                          type="text"
                          class={
                            errors.capacity !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          id="basic-default-name"
                          placeholder="Enter Capacity"
                          required=""
                        />
                        {errors?.capacity &&
                        errors.capacity.type &&
                        errors.capacity.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Capacity is required
                          </p>
                        ) : null}
                        <label htmlFor="basic-default-name">
                          Capacity
                        </label>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          {...register("moto", {
                            required: "Moto is required",
                            maxLength: 50,
                          })}
                          type="text"
                          class={
                            errors.name !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          id="basic-default-name"
                          placeholder="Enter Moto"
                          required=""
                        />
                        {errors?.moto &&
                        errors.moto.type &&
                        errors.moto.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Moto is required
                          </p>
                        ) : null}
                        <label htmlFor="basic-default-name">
                          Moto
                        </label>
                      </div>
                  
                      
                      <div class="form-floating form-floating-outline mb-4">
                        <Select
                          className="form-control"
                          options={streams ? streams : []}
                          isMulti
                          onChange={(e) => {
                            setSelectedStream(e);
                            console.log(e);
                          }}
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              //borderColor: state.isFocused ? "grey" : "",
                            }),
                          }}
                        />
                        <label htmlFor="basic-default-country">Stream</label>
                      </div>
                         <div class="form-floating form-floating-outline mb-4">
                        <Select
                          className="form-control"
                          options={subjects ? subjects : []}
                          isMulti
                          onChange={(e) => {
                            setSelectedSubjects(e);
                            console.log(e);
                          }}
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              //borderColor: state.isFocused ? "grey" : "",
                            }),
                          }}
                        />
                        <label htmlFor="basic-default-country">Subject</label>
                      </div>
                      
                   
                      <div class="form-floating form-floating-outline mb-4">
                        <textarea
                          {...register("bio", {
                            required: true,
                            minLength: 50,
                            maxLength: 500,
                          })}
                          class={
                            errors.bio !== undefined
                              ? "is-invalid form-control h-px-75"
                              : "form-control h-px-75"
                          }
                          placeholder="Your bio"
                        />
                        {(errors?.bio &&
                          errors.bio.type &&
                          errors.bio?.type === "minLength") ||
                        errors.bio?.type === "maxLength" ? (
                          <p className="text-danger" role="alert">
                            Bio can not be less than 50 charecter or greater
                            then 500 charecters
                          </p>
                        ) : null}
                        {errors?.bio &&
                        errors.bio.type &&
                        errors.bio.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Bio is required
                          </p>
                        ) : null}
                        <label htmlFor="basic-default-bio">Bio</label>
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

            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Add;
