import React from "react";
import userAvator from "../../assets/img/avatars/1.png";
import HttpHelper from "../../services/HttpHelper";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function Header(props) {
  const navigate = useNavigate();
  const { showLoader } = useAuth();
  const logout = async () => {
    showLoader(true);
    await HttpHelper.post("user/logout")
      .then((response) => {
        Cookies.remove("XSRF-TOKEN");
        navigate("/");
        showLoader(false);
      })
      .catch((error) => {
        showLoader(false);
        console.log(error);
      });
  };
  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="#">
            <i className="mdi mdi-menu mdi-24px"></i>
          </a>
        </div>

        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <div className="navbar-nav align-items-center">
            <div className="nav-item navbar-search-wrapper mb-0">
              <a
                className="nav-item nav-link search-toggler fw-normal px-0"
                href="#"
              >
                <i className="mdi mdi-magnify mdi-24px scaleX-n1-rtl"></i>
                <span className="d-none d-md-inline-block text-muted">
                  Search (Ctrl+/)
                </span>
              </a>
            </div>
          </div>

          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item dropdown-language dropdown me-1 me-xl-0">
              <a
                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow waves-effect waves-light"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-translate mdi-24px"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end py-2">
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="#"
                    data-language="en"
                  >
                    <span className="align-middle">English</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect active"
                    href="#"
                    data-language="fr"
                  >
                    <span className="align-middle">French</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="#"
                    data-language="de"
                  >
                    <span className="align-middle">German</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="#"
                    data-language="pt"
                  >
                    <span className="align-middle">Portuguese</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
              <a
                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow waves-effect waves-light"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="mdi mdi-24px mdi-weather-sunny"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="#"
                    data-theme="light"
                  >
                    <span className="align-middle">
                      <i className="mdi mdi-weather-sunny me-2"></i>Light
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="#"
                    data-theme="dark"
                  >
                    <span className="align-middle">
                      <i className="mdi mdi-weather-night me-2"></i>Dark
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="#"
                    data-theme="system"
                  >
                    <span className="align-middle">
                      <i className="mdi mdi-monitor me-2"></i>System
                    </span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-1 me-xl-0">
              <a
                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow waves-effect waves-light"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <i className="mdi mdi-view-grid-outline mdi-24px"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end py-0">
                <div className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h6 className="mb-0 me-auto">Shortcuts</h6>
                    <a
                      href="#"
                      className="dropdown-shortcuts-add text-heading"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      aria-label="Add shortcuts"
                      data-bs-original-title="Add shortcuts"
                    >
                      <i className="mdi mdi-plus mdi-24px"></i>
                    </a>
                  </div>
                </div>
                <div className="dropdown-shortcuts-list scrollable-container ps">
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                        <i className="mdi mdi-calendar-blank mdi-24px"></i>
                      </span>
                      <a href="app-calendar.html" className="stretched-link">
                        Calendar
                      </a>
                      <small>Appointments</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                        <i className="mdi mdi mdi-content-paste mdi-24px"></i>
                      </span>
                      <a
                        href="app-invoice-list.html"
                        className="stretched-link"
                      >
                        Invoice App
                      </a>
                      <small>Manage Accounts</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                        <i className="mdi mdi-account-outline mdi-24px"></i>
                      </span>
                      <a href="app-user-list.html" className="stretched-link">
                        User App
                      </a>
                      <small>Manage Users</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                        <i className="mdi mdi-shield-check-outline mdi-24px"></i>
                      </span>
                      <a
                        href="app-access-roles.html"
                        className="stretched-link"
                      >
                        Role Management
                      </a>
                      <small>Permission</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                        <i className="mdi mdi-monitor mdi-24px"></i>
                      </span>
                      <a href="index.html" className="stretched-link">
                        Dashboard
                      </a>
                      <small>User Profile</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                        <i className="mdi mdi-cog-outline mdi-24px"></i>
                      </span>
                      <a
                        href="pages-account-settings-account.html"
                        className="stretched-link"
                      >
                        Setting
                      </a>
                      <small>Account Settings</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                        <i className="mdi mdi-help-circle-outline mdi-24px"></i>
                      </span>
                      <a
                        href="pages-help-center-landing.html"
                        className="stretched-link"
                      >
                        Help Center
                      </a>
                      <small>FAQs &amp; Articles</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary text-heading rounded-circle mb-3">
                        <i className="mdi mdi-dock-window mdi-24px"></i>
                      </span>
                      <a href="modal-examples.html" className="stretched-link">
                        Modals
                      </a>
                      <small>Useful Popups</small>
                    </div>
                  </div>
                  <div
                    className="ps__rail-x"
                    style={{ left: "0px", bottom: "0px" }}
                  >
                    <div
                      className="ps__thumb-x"
                      tabIndex="0"
                      style={{ left: "0px", width: "0px" }}
                    ></div>
                  </div>
                  <div
                    className="ps__rail-y"
                    style={{ top: "0px", right: "0px" }}
                  >
                    <div
                      className="ps__thumb-y"
                      tabIndex="0"
                      style={{ top: "0px", height: "0px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-2 me-xl-1">
              <a
                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow waves-effect waves-light"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <i className="mdi mdi-bell-outline mdi-24px"></i>
                <span className="position-absolute top-0 start-50 translate-middle-y badge badge-dot bg-danger mt-2 border"></span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end py-0">
                <li className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h6 className="fw-normal mb-0 me-auto">Notification</h6>
                    <span className="badge rounded-pill bg-label-primary">
                      8 New
                    </span>
                  </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container ps">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                          <div className="avatar me-1">
                            <img
                              src={userAvator}
                              alt=""
                              className="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                          <h6 className="mb-1 text-truncate">
                            Congratulation Lettie 🎉
                          </h6>
                          <small className="text-truncate text-body">
                            Won the monthly best seller gold badge
                          </small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <small className="text-muted">1h ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                          <div className="avatar me-1">
                            <span className="avatar-initial rounded-circle bg-label-danger">
                              CF
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                          <h6 className="mb-1 text-truncate">
                            Charles Franklin
                          </h6>
                          <small className="text-truncate text-body">
                            Accepted your connection
                          </small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <small className="text-muted">12hr ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                          <div className="avatar me-1">
                            <img
                              src="../../assets/img/avatars/2.png"
                              alt=""
                              className="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                          <h6 className="mb-1 text-truncate">New Message ✉️</h6>
                          <small className="text-truncate text-body">
                            You have new message from Natalie
                          </small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <small className="text-muted">1h ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                          <div className="avatar me-1">
                            <span className="avatar-initial rounded-circle bg-label-success">
                              <i className="mdi mdi-cart-outline"></i>
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                          <h6 className="mb-1 text-truncate">
                            Whoo! You have new order 🛒
                          </h6>
                          <small className="text-truncate text-body">
                            ACME Inc. made new order $1,154
                          </small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <small className="text-muted">1 day ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                          <div className="avatar me-1">
                            <img
                              src="../../assets/img/avatars/9.png"
                              alt=""
                              className="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                          <h6 className="mb-1 text-truncate">
                            Application has been approved 🚀
                          </h6>
                          <small className="text-truncate text-body">
                            Your ABC project application has been approved.
                          </small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <small className="text-muted">2 days ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                          <div className="avatar me-1">
                            <span className="avatar-initial rounded-circle bg-label-success">
                              <i className="mdi mdi-chart-pie-outline"></i>
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                          <h6 className="mb-1 text-truncate">
                            Monthly report is generated
                          </h6>
                          <small className="text-truncate text-body">
                            July monthly financial report is generated{" "}
                          </small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <small className="text-muted">3 days ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                          <div className="avatar me-1">
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt=""
                              className="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                          <h6 className="mb-1 text-truncate">
                            Send connection request
                          </h6>
                          <small className="text-truncate text-body">
                            Peter sent you connection request
                          </small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <small className="text-muted">4 days ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item waves-effect">
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                          <div className="avatar me-1">
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt=""
                              className="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                          <h6 className="mb-1 text-truncate">
                            New message from Jane
                          </h6>
                          <small className="text-truncate text-body">
                            Your have new message from Jane
                          </small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <small className="text-muted">5 days ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read waves-effect">
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                          <div className="avatar me-1">
                            <span className="avatar-initial rounded-circle bg-label-warning">
                              <i className="mdi mdi-alert-circle-outline"></i>
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 overflow-hidden w-px-250">
                          <h6 className="mb-1">CPU is running high</h6>
                          <small className="text-truncate text-body">
                            CPU Utilization Percent is currently at 88.63%,
                          </small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <small className="text-muted">5 days ago</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div
                    className="ps__rail-x"
                    style={{ left: "0px", bottom: "0px" }}
                  >
                    <div
                      className="ps__thumb-x"
                      tabIndex="0"
                      style={{ left: "0px", width: "0px" }}
                    ></div>
                  </div>
                  <div
                    className="ps__rail-y"
                    style={{ top: "0px", right: "0px" }}
                  >
                    <div
                      className="ps__thumb-y"
                      tabIndex="0"
                      style={{ top: "0px", height: "0px" }}
                    ></div>
                  </div>
                </li>
                <li className="dropdown-menu-footer border-top p-3">
                  <a
                    href="#"
                    className="btn btn-primary d-flex justify-content-center waves-effect waves-light"
                  >
                    Read all notifications
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                className="nav-link dropdown-toggle hide-arrow p-0"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <div className="avatar avatar-online">
                  <img
                    src={userAvator}
                    alt=""
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end mt-3 py-2"
                data-bs-popper="static"
              >
                <li>
                  <a
                    className="dropdown-item pb-2 mb-1 waves-effect"
                    href="pages-account-settings-account.html"
                  >
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-2 pe-1">
                        <div className="avatar avatar-online">
                          <img
                            src={userAvator}
                            alt=""
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">John Doe</h6>
                        <small className="text-muted">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider my-0"></div>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="pages-profile-user.html"
                  >
                    <i className="mdi mdi-account-outline me-1 mdi-20px"></i>
                    <span className="align-middle">My Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="pages-account-settings-account.html"
                  >
                    <i className="mdi mdi-cog-outline me-1 mdi-20px"></i>
                    <span className="align-middle">Settings</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="pages-account-settings-billing.html"
                  >
                    <span className="d-flex align-items-center align-middle">
                      <i className="flex-shrink-0 mdi mdi-credit-card-outline me-1 mdi-20px"></i>
                      <span className="flex-grow-1 align-middle ms-1">
                        Billing
                      </span>
                      <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                        4
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider my-1"></div>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="pages-help-center-landing.html"
                  >
                    <i className="mdi mdi-lifebuoy me-1 mdi-20px"></i>
                    <span className="align-middle">Help</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="pages-faq.html"
                  >
                    <i className="mdi mdi-help-circle-outline me-1 mdi-20px"></i>
                    <span className="align-middle">FAQ</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    href="pages-pricing.html"
                  >
                    <i className="mdi mdi-currency-usd me-1 mdi-20px"></i>
                    <span className="align-middle">Pricing</span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider my-1"></div>
                </li>
                <li>
                  <a
                    className="dropdown-item waves-effect"
                    onClick={(e) => {
                      logout();
                    }}
                  >
                    <i className="mdi mdi-logout me-1 mdi-20px"></i>
                    <span className="align-middle">Log Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navbar-search-wrapper search-input-wrapper d-none">
          <input
            type="text"
            className="form-control search-input container-xxl border-0"
            placeholder="Search..."
            aria-label="Search..."
          />
          <i className="mdi mdi-close search-toggler cursor-pointer"></i>
        </div>
      </nav>
    </>
  );
}

export default Header;
