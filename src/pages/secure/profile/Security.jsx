import React from "react";

function Security({ show }) {
  return (
    <>
      {show ? (
        <div class="card mb-4">
          <h5 class="card-header">Change Password</h5>
          <div class="card-body">
            <form
              id="formChangePassword"
              method="POST"
              onsubmit="return false"
              class="fv-plugins-bootstrap5 fv-plugins-framework"
              novalidate="novalidate"
            >
              <div class="alert alert-warning" role="alert">
                <h6 class="alert-heading mb-1">
                  Ensure that these requirements are met
                </h6>
                <span>Minimum 8 characters long, uppercase &amp; symbol</span>
              </div>
              <div class="row">
                <div class="mb-3 col-12 col-sm-6 form-password-toggle fv-plugins-icon-container">
                  <div class="input-group input-group-merge">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        placeholder="············"
                      />
                      <label for="newPassword">New Password</label>
                    </div>
                    <span class="input-group-text cursor-pointer">
                      <i class="mdi mdi-eye-off-outline"></i>
                    </span>
                  </div>
                  <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                </div>
                <div class="mb-3 col-12 col-sm-6 form-password-toggle fv-plugins-icon-container">
                  <div class="input-group input-group-merge">
                    <div class="form-floating form-floating-outline">
                      <input
                        class="form-control"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="············"
                      />
                      <label for="confirmPassword">Confirm New Password</label>
                    </div>
                    <span class="input-group-text cursor-pointer">
                      <i class="mdi mdi-eye-off-outline"></i>
                    </span>
                  </div>
                  <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn btn-primary me-2 waves-effect waves-light"
                  >
                    Change Password
                  </button>
                </div>
              </div>
              <input type="hidden" />
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Security;
