import React, { useEffect, useState } from "react";
import Wrapper from "../../../../components/common/Wrapper";
import Footer from "../../../../components/common/Footer";
import HttpHelper from "../../../../services/HttpHelper";
import UserRolesEnum from "../../../../Enums/UserRolesEnum";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

function Add(props) {
  const { notify, showLoader } = useAuth();
  const [errorMsgs, setErrorMsgs] = useState(null);
  const [counties, setCounties] = useState({});
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
    getCounties();
  }, []);
  return (
    <>
      <Wrapper breakCrum="Dashboard/Add School">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y mt-5">
            <h4 class="mb-4 breadcrumWrapper">
              <span class="text-muted fw-light brreadCrumText">School /</span> Add
            </h4>
            <div className="row gy-4">
              <div class="col-md mb-4 mb-md-0">
                <div class="card">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="mb-0">Basic Details</h6>
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
                            required: "Name is required",
                            maxLength: 50,
                          })}
                          type="text"
                          class={
                            errors.name !== undefined
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
                            Name is required
                          </p>
                        ) : null}
                        <label htmlFor="basic-default-name">School Name</label>
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
                          placeholder="john.doe"
                          required=""
                        />

                        <label htmlFor="basic-default-email">
                          Offical Email Address
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
                              placeholder=""
                              aria-describedby="basic-default-password3"
                              required=""
                            />

                            <label htmlFor="basic-default-password">
                              Offical Mobile Number
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
                          placeholder="Your school bio"
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
