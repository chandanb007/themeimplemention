import React, { useEffect, useState } from "react";
import Wrapper from "../../components/common/Wrapper";
import Footer from "../../components/common/Footer";

import "../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../../assets/vendor/libs/typeahead-js/typeahead.css";
import "../../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css";
import "../../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css";
import "../../assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css";
import "../../assets/vendor/libs/apex-charts/apex-charts.css";
import "../../assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css";
import UserRolesEnum from "../../Enums/UserRolesEnum";
import { useAuth } from "../../context/AuthContext";
import HttpHelper from "../../services/HttpHelper";

function Profile(props) {
  const { notify, showLoader } = useAuth();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [profileData, setProfileData] = useState();

  const getProfileDetails = async (userId) => {
    showLoader(true);
    await HttpHelper.get("user/Profile/" + userId)
      .then((response) => {
        setProfileData(response.data.data);
        showLoader(false);
      })
      .catch((error) => {
        showLoader(false);
        console.log(error);
      });
  };
  useEffect(() => {
    if (user.user.id) getProfileDetails(user.user.id);
  }, []);
  return (
    <>
      <Wrapper breakCrum="Dashboard/home">
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <h4 class="py-3 mb-4">
              <span class="text-muted fw-light">User / View /</span> Account
            </h4>
            <div class="row">
              <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="user-avatar-section">
                      <div class="d-flex align-items-center flex-column">
                        <img
                          class="img-fluid rounded mb-3 mt-4"
                          src={
                            user.profile?.profile_picture
                              ? user.profile.profile_picture
                              : "/user.png"
                          }
                          height="120"
                          width="120"
                          alt="User avatar"
                        />
                        <div class="user-info text-center">
                          <h4>
                            {user.user.first_name}{" "}
                            {user.user?.unique_id
                              ? "(" + user.user.unique_id + ")"
                              : null}
                          </h4>
                          <span class="badge bg-label-danger">
                            {user.user.role_id == UserRolesEnum.SCHOOL
                              ? "School"
                              : "Admin"}
                          </span>
                        </div>
                      </div>
                    </div>
                    {user.user.role_id == UserRolesEnum.SCHOOL ? (
                      <div class="d-flex justify-content-between flex-wrap my-2 py-3">
                        <div class="d-flex align-items-center me-4 mt-3 gap-3">
                          <div class="avatar">
                            <div class="avatar-initial bg-label-primary rounded">
                              <i class="mdi mdi-check mdi-24px"></i>
                            </div>
                          </div>
                          <div>
                            <h4 class="mb-0">
                              {profileData?.student_count
                                ? profileData.student_count
                                : 0}
                            </h4>
                            <span>Students</span>
                          </div>
                        </div>
                        <div class="d-flex align-items-center mt-3 gap-3">
                          <div class="avatar">
                            <div class="avatar-initial bg-label-primary rounded">
                              <i class="mdi mdi-star-outline mdi-24px"></i>
                            </div>
                          </div>
                          <div>
                            <h4 class="mb-0">
                              {profileData?.teacher_count
                                ? profileData.teacher_count
                                : 0}
                            </h4>
                            <span>Teachers</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <h5 class="pb-3 border-bottom mb-3">Details</h5>
                    <div class="info-container">
                      <ul class="list-unstyled mb-4">
                        <li class="mb-3">
                          <span class="h6">Email : </span>
                          <span>{user.user.email}</span>
                        </li>
                        <li class="mb-3">
                          <span class="h6">Status : </span>
                          {user.user.is_active == 1 ? (
                            <span class="badge bg-label-success">Active</span>
                          ) : (
                            <span class="badge bg-label-danger">Inactive</span>
                          )}
                        </li>
                        <li class="mb-3">
                          <span class="h6">Role : </span>
                          <span>
                            {" "}
                            {user.user.role_id == UserRolesEnum.SCHOOL
                              ? "School"
                              : "Admin"}
                          </span>
                        </li>
                        <li class="mb-3">
                          <span class="h6">Contact : </span>
                          <span>{user.user.mobile}</span>
                        </li>
                        {/* <li class="mb-3">
                          <span class="h6">Languages:</span>
                          <span>French</span>
                        </li>
                        <li class="mb-3">
                          <span class="h6">Country:</span>
                          <span>England</span>
                        </li> */}
                      </ul>
                      {/* <div class="d-flex justify-content-center">
                        <a
                          href="javascript:;"
                          class="btn btn-primary me-3"
                          data-bs-target="#editUser"
                          data-bs-toggle="modal"
                        >
                          Edit
                        </a>
                        <a
                          href="javascript:;"
                          class="btn btn-outline-danger suspend-user"
                        >
                          Suspend
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* <div class="card mb-4 border-2 border-primary">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                      <span class="badge bg-label-primary">Standard</span>
                      <div class="d-flex justify-content-center">
                        <sub class="h5 pricing-currency mt-auto mb-2 text-primary">
                          $
                        </sub>
                        <h1 class="display-3 mb-0 text-primary">99</h1>
                        <sub class="h6 pricing-duration mt-auto mb-2 fw-normal">
                          month
                        </sub>
                      </div>
                    </div>
                    <ul class="list-unstyled g-2 my-4 ms-n2">
                      <li class="mb-2 d-flex align-items-center">
                        <i class="mdi mdi-circle-medium text-lighter mdi-24px"></i>
                        <span>10 Users</span>
                      </li>
                      <li class="mb-2 d-flex align-items-center">
                        <i class="mdi mdi-circle-medium text-lighter mdi-24px"></i>
                        <span>Up to 10 GB storage</span>
                      </li>
                      <li class="mb-2 d-flex align-items-center">
                        <i class="mdi mdi-circle-medium text-lighter mdi-24px"></i>
                        <span>Basic Support</span>
                      </li>
                    </ul>
                    <div class="d-flex justify-content-between align-items-center mb-1">
                      <span class="h6 mb-0">Days</span>
                      <span class="h6 mb-0">65%</span>
                    </div>
                    <div
                      class="progress mb-1 rounded"
                      style={{ height: "6px" }}
                    >
                      <div
                        class="progress-bar rounded"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>4 days remaining</span>
                    <div class="d-grid w-100 mt-4">
                      <button
                        class="btn btn-primary"
                        data-bs-target="#upgradePlanModal"
                        data-bs-toggle="modal"
                      >
                        Upgrade Plan
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>

              <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
                <ul class="nav nav-pills flex-column flex-md-row flex-wrap mb-4">
                  <li class="nav-item">
                    <a class="nav-link active" href="javascript:void(0);">
                      <i class="mdi mdi-account-outline mdi-20px me-1"></i>
                      Account
                    </a>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="app-user-view-security.html">
                      <i class="mdi mdi-lock-open-outline mdi-20px me-1"></i>
                      Security
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="app-user-view-billing.html">
                      <i class="mdi mdi-bookmark-outline mdi-20px me-1"></i>
                      Billing & Plans
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="app-user-view-notifications.html">
                      <i class="mdi mdi-bell-outline mdi-20px me-1"></i>
                      Notifications
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Profile;
