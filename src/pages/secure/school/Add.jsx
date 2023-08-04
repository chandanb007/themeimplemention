import React from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";

function Add(props) {
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
                    <form class="browser-default-validation">
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          type="text"
                          class="form-control"
                          id="basic-default-name"
                          placeholder="John Doe"
                          required=""
                        />
                        <label for="basic-default-name">School Name</label>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          type="email"
                          id="basic-default-email"
                          class="form-control"
                          placeholder="john.doe"
                          required=""
                        />
                        <label for="basic-default-email">
                          Offical Email Address
                        </label>
                      </div>
                      <div class="mb-4 form-password-toggle">
                        <div class="input-group input-group-merge">
                          <div class="form-floating form-floating-outline">
                            <input
                              type="text"
                              id="basic-default-password"
                              class="form-control"
                              placeholder=""
                              aria-describedby="basic-default-password3"
                              required=""
                            />
                            <label for="basic-default-password">
                              Offical Mobile Number
                            </label>
                          </div>
                          <span
                            class="input-group-text cursor-pointer"
                            id="basic-default-password3"
                          ></span>
                        </div>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <select class="form-select" id="county" required="">
                          <option value="">Select County</option>
                          <option value="usa">USA</option>
                          <option value="uk">UK</option>
                          <option value="france">France</option>
                          <option value="australia">Australia</option>
                          <option value="spain">Spain</option>
                        </select>
                        <label for="basic-default-country">Country</label>
                      </div>
                      <div class="mb-4 form-password-toggle">
                        <div class="input-group input-group-merge">
                          <div class="form-floating form-floating-outline">
                            <input
                              type="text"
                              id="basic-default-password"
                              class="form-control"
                              placeholder=""
                              aria-describedby="basic-default-password3"
                              required=""
                            />
                            <label for="basic-default-password">Town</label>
                          </div>
                          <span
                            class="input-group-text cursor-pointer"
                            id="basic-default-password3"
                          ></span>
                        </div>
                      </div>
                      <div class="mb-4 form-password-toggle">
                        <div class="input-group input-group-merge">
                          <div class="form-floating form-floating-outline">
                            <input
                              type="text"
                              id="basic-default-password"
                              class="form-control"
                              placeholder=""
                              aria-describedby="basic-default-password3"
                              required=""
                            />
                            <label for="basic-default-password">Estate</label>
                          </div>
                          <span
                            class="input-group-text cursor-pointer"
                            id="basic-default-password3"
                          ></span>
                        </div>
                      </div>
                      <div class="mb-4 form-password-toggle">
                        <div class="input-group input-group-merge">
                          <div class="form-floating form-floating-outline">
                            <input
                              type="text"
                              id="basic-default-password"
                              class="form-control"
                              placeholder=""
                              aria-describedby="basic-default-password3"
                              required=""
                            />
                            <label for="basic-default-password">Building</label>
                          </div>
                          <span
                            class="input-group-text cursor-pointer"
                            id="basic-default-password3"
                          ></span>
                        </div>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <input
                          type="file"
                          class="form-control"
                          id="basic-default-upload-file"
                          required=""
                        />
                        <label for="basic-default-upload-file">
                          School Logo
                        </label>
                      </div>
                      <div class="form-floating form-floating-outline mb-4">
                        <textarea
                          class="form-control h-px-75"
                          id="basic-default-bio"
                          name="basic-default-bio"
                          placeholder="My name is john"
                          rows="3"
                          required=""
                        ></textarea>
                        <label for="basic-default-bio">Short Description</label>
                      </div>
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="basic-default-checkbox"
                            required=""
                          />
                          <label
                            class="form-check-label"
                            for="basic-default-checkbox"
                          >
                            Agree to our terms and conditions
                          </label>
                        </div>
                      </div>
                      <div class="mb-3">
                        <label class="switch switch-primary">
                          <input
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
