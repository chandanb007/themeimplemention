import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";

import "../../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../../../assets/vendor/libs/typeahead-js/typeahead.css";
import "../../../assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css";
import "../../../assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css";
import "../../../assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css";
import "../../../assets/vendor/libs/apex-charts/apex-charts.css";
import "../../../assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css";
import UserRolesEnum from "../../../Enums/UserRolesEnum";
import { useAuth } from "../../../context/AuthContext";
import HttpHelper from "../../../services/HttpHelper";
import Security from "./Security";
import EditAccount from "./EditAccount";
import Address from "./Address";

function Profile(props) {
  const { notify, showLoader } = useAuth();
  const [activeTab, setActiveTab] = useState({
    edit_account: true,
    security: false,
    address: false,
  });
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [profileData, setProfileData] = useState();

  const handleTabClick = (e, tab) => {
    var tabContainerChildren =
      document.getElementById("tabContainer").childNodes;
    tabContainerChildren.forEach((child) => {
      child.childNodes.forEach((atag) => {
        if (atag.classList.contains("active")) {
          atag.classList.remove("active");
        }
      });
    });
    e.currentTarget.classList.add("active");
    if (tab == "edit_account") {
      setActiveTab({
        edit_account: true,
        address: false,
        security: false,
      });
    } else if (tab == "security") {
      setActiveTab({
        edit_account: false,
        address: false,
        security: true,
      });
    } else {
      setActiveTab({
        edit_account: false,
        address: true,
        security: false,
      });
    }
  };
  return (
    <>
      <Wrapper breakCrum="Dashboard/home">
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y mt-5">
            <h4 class="py-3 mb-4">
              <span class="text-muted fw-light">User /</span> Edit Account
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
                        <div class="customer-info text-center mb-4">
                          <h5 class="mb-1">{user.user.first_name} </h5>
                          <span>ID #{user.user.unique_id}</span>
                        </div>
                        <div class="user-info text-center">
                          <span class="badge bg-label-primary">
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
                <ul
                  class="nav nav-pills flex-column flex-md-row mb-4"
                  id="tabContainer"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link waves-effect waves-light active"
                      onClick={(e) => {
                        handleTabClick(e, "edit_account");
                      }}
                    >
                      <i class="mdi mdi-account-outline mdi-20px me-1"></i>
                      Edit Account
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link waves-effect waves-light"
                      onClick={(e) => {
                        handleTabClick(e, "security");
                      }}
                    >
                      <i class="mdi mdi-lock-open-outline mdi-20px me-1"></i>
                      Security
                    </a>
                  </li>
                  {/* <li class="nav-item">
                    <a
                      class="nav-link waves-effect waves-light"
                      onClick={(e) => {
                        handleTabClick(e, "address");
                      }}
                    >
                      <i class="mdi mdi-bookmark-outline mdi-20px me-1"></i>
                      Address
                    </a>
                  </li> */}
                </ul>
                <EditAccount
                  show={activeTab.edit_account}
                  userId={user.user.id}
                />
                <Security show={activeTab.security} />
                {/* <Address show={activeTab.address} /> */}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Profile;
