import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import HttpHelper from "../../../services/HttpHelper";
import UserRolesEnum from "../../../Enums/UserRolesEnum";
import { useAuth } from "../../../../src/context/AuthContext";

function AddParentModal(props) {
  const { notify, showLoader } = useAuth();
  const { show, handleClose, counties, getParents } = props;
  const [errorMsgs, setErrorMsgs] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    showLoader(true);
    data.role_id = UserRolesEnum.PARENT;
    await HttpHelper.post("signup", data)
      .then((response) => {
        notify("success", "Parent added successfully");
        handleClose();
        getParents();
        showLoader(false);
      })
      .catch((error) => {
        showLoader(false);
        notify("error", error);
        console.log(error);
        if (error?.response?.data?.errors) {
          setErrorMsgs(error.response.data);
        }
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Parent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            id="editUserForm"
            class="row g-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div class="col-12 col-md-6">
              <div class="form-floating form-floating-outline">
                <input
                  {...register("first_name", {
                    required: true,
                  })}
                  type="text"
                  class="form-control"
                  placeholder="John"
                />
                {console.log(errors)}

                {errors?.first_name &&
                errors.first_name.type &&
                errors.first_name.type === "required" ? (
                  <p className="text-danger" role="alert">
                    First Name is required
                  </p>
                ) : null}
                <label for="modalEditUserFirstName">First Name</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating form-floating-outline">
                <input
                  {...register("last_name", {
                    required: "Last Name is required",
                    maxLength: 50,
                  })}
                  type="text"
                  class="form-control"
                  placeholder="Doe"
                />
                <label for="modalEditUserLastName">Last Name</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating form-floating-outline">
                <input
                  {...register("email", {
                    required: "Email is required",
                    maxLength: 50,
                  })}
                  type="text"
                  class="form-control"
                  placeholder=""
                />
                {errors?.email &&
                errors.email.type &&
                errors.email.type === "required" ? (
                  <p className="text-danger" role="alert">
                    Email is required
                  </p>
                ) : null}
                <label for="modalEditUserEmail">Email</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating form-floating-outline">
                <select
                  {...register("relationship", {
                    required: "Relationship is required",
                    maxLength: 50,
                  })}
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="" selected>
                    Status
                  </option>
                  <option value="spouse">Spouse</option>
                  <option value="child">Child</option>
                  <option value="adopted child">Adopted child</option>
                </select>
                {errors?.relationship &&
                errors.relationship.type &&
                errors.relationship.type === "required" ? (
                  <p className="text-danger" role="alert">
                    Relationship is required
                  </p>
                ) : null}
                <label for="modalEditUserStatus">
                  Relationship with Student
                </label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="input-group input-group-merge">
                <span class="input-group-text">Kenya (+254)</span>
                <div class="form-floating form-floating-outline">
                  <input
                    {...register("mobile", {
                      required: "Mobile is required",
                      maxLength: 50,
                    })}
                    type="text"
                    class="form-control phone-number-mask"
                    placeholder="2541234567890"
                  />

                  <label for="modalEditUserPhone">Phone Number</label>
                </div>
              </div>
              {errors?.mobile &&
              errors.mobile.type &&
              errors.mobile.type === "required" ? (
                <p className="text-danger" role="alert">
                  Mobile is required
                </p>
              ) : null}
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating form-floating-outline">
                <select
                  {...register("county", {
                    required: "County is required",
                    maxLength: 50,
                  })}
                  class="select2 form-select"
                  data-allow-clear="true"
                >
                  <option value="">Select</option>
                  <option value="">Select County</option>
                  {counties.length > 0
                    ? counties.map((county, index) => {
                        return (
                          <>
                            <option value={county.id}>{county.name}</option>
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
                <label for="modalEditUserCountry">County</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating form-floating-outline">
                <input
                  {...register("town", {
                    required: "Town is required",
                    maxLength: 50,
                  })}
                  type="text"
                  class="form-control"
                  placeholder=""
                />
                {errors?.town &&
                errors.town.type &&
                errors.town.type === "required" ? (
                  <p className="text-danger" role="alert">
                    Town is required
                  </p>
                ) : null}
                <label for="modalEditUserEmail">Town</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating form-floating-outline">
                <input
                  {...register("estate", {
                    required: "Estate is required",
                    maxLength: 50,
                  })}
                  type="text"
                  class="form-control"
                  placeholder=""
                />
                {errors?.estate &&
                errors.estate.type &&
                errors.estate.type === "required" ? (
                  <p className="text-danger" role="alert">
                    Estate is required
                  </p>
                ) : null}
                <label for="modalEditUserEmail">Estate</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating form-floating-outline">
                <input
                  type="text"
                  {...register("building", {
                    required: false,
                    maxLength: 50,
                  })}
                  class="form-control"
                  placeholder=""
                />
                <label for="modalEditUserEmail">Building</label>
              </div>
            </div>
            <div class="col-12 text-center">
              <button type="submit" class="btn btn-primary me-sm-3 me-1">
                Submit
              </button>
              <button
                onClick={handleClose}
                type="reset"
                class="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default AddParentModal;
