import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";
import HttpHelper from "../../../services/HttpHelper";
import UserRolesEnum from "../../../Enums/UserRolesEnum";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Add(props) {
  const [errorMsgs, setErrorMsgs] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await HttpHelper.post("subscription/add", data)
      .then((response) => {
        navigate("/subscription/list");
      })
      .catch((error) => {
        if (error?.response?.data?.errors) {
          setErrorMsgs(error.response.data);
        }
      });
  };
  return (
    <>
      <Wrapper breakCrum="Subscription/Add">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y mt-5">
            <h4 class="py-3 mb-4">
              <span class="text-muted fw-light">Subscription /</span> Add
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
                          {...register("name", {
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
                          placeholder="Subscription Title"
                          required=""
                        />
                        {errors?.name &&
                        errors.name.type &&
                        errors.name.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Name is required
                          </p>
                        ) : null}
                        <label htmlFor="basic-default-name">
                          Subscription Title
                        </label>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          {...register("termly_fee", {
                            required: "Termly fee is required",
                            pattern: /^(\d*\.)?\d+$/,
                          })}
                          type="text"
                          id="basic-default-email"
                          class={
                            errors.termly_fee !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          placeholder="00.00"
                          required=""
                        />

                        <label htmlFor="basic-default-name">Termly Fee</label>
                        {errors?.termly_fee &&
                        errors.termly_fee.type &&
                        errors.termly_fee.type === "required" ? (
                          <p className="text-danger" role="alert">
                            Termly fee is required
                          </p>
                        ) : null}
                        {errors?.termly_fee &&
                        errors.termly_fee.type &&
                        errors.termly_fee.type === "pattern" ? (
                          <p className="text-danger" role="alert">
                            Termly fee should be a valid number
                          </p>
                        ) : null}
                      </div>
                      <div class="mb-4 form-password-toggle">
                        <div class="input-group input-group-merge">
                          <div class="form-floating form-floating-outline">
                            <input
                              {...register("yearly_fee", {
                                required: "Yearly fee is required",
                                pattern: /^(\d*\.)?\d+$/,
                              })}
                              type="text"
                              id="basic-default-password"
                              class={
                                errors.yearly_fee !== undefined
                                  ? "is-invalid form-control"
                                  : "form-control"
                              }
                              placeholder="00.00"
                              aria-describedby="basic-default-password3"
                              required=""
                            />

                            <label htmlFor="basic-default-password">
                              Yearly fee
                            </label>
                          </div>
                          <span
                            class="input-group-text cursor-pointer"
                            id="basic-default-password3"
                          ></span>
                        </div>
                        {errors?.yearly_fee &&
                        errors.yearly_fee.type &&
                        errors.yearly_fee.type === "required" ? (
                          <p className="text-danger" role="alert">
                            {errors.yearly_fee.message}
                          </p>
                        ) : null}
                        {errors?.yearly_fee &&
                        errors.yearly_fee.type &&
                        errors.yearly_fee.type === "pattern" ? (
                          <p className="text-danger" role="alert">
                            Yearly fee fee should be a valid number
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
                          <span class="switch-label">Active</span>
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
