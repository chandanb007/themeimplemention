import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import HttpHelper from "../../services/HttpHelper";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import UserRolesEnum from "../../Enums/UserRolesEnum";
import { useAuth } from "../../context/AuthContext";

function SideBar(props) {
  const { showLoader } = useAuth();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();
  const menuToggle = (e) => {
    var obj = e.currentTarget;
    if (obj) obj.classList.add("menu-item-animating");
    if (obj && obj.classList.contains("open")) {
      obj.classList.remove("open");
    } else {
      obj.classList.add("open");
    }
    setTimeout(() => {
      obj.classList.remove("menu-item-animating");
    }, 300);
  };
  const logout = async () => {
    showLoader(true);
    await HttpHelper.post("user/logout")
      .then((response) => {
        Cookies.remove("XSRF-TOKEN");
        sessionStorage.removeItem("user");
        navigate("/");
        showLoader(false);
      })
      .catch((error) => {
        showLoader(false);
        console.log(error);
      });
  };
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
      data-bg-class="bg-menu-theme"
      style={{
        touchAction: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="app-brand demo" style={{ height: "64px" }}>
        <NavLink to={"/dashboard"} className="app-brand-link">
          <span className="app-brand-logo demo me-1">
            <span style={{ color: "var(--bs-primary)" }}>
              <img width={"30px"} src={"/logo.png"} />
            </span>
          </span>
          <span className="app-brand-text demo menu-text fw-semibold ms-2">
            SinTheta
          </span>
        </NavLink>

        <a href="#" className="layout-menu-toggle menu-link text-large ms-auto">
          <i className="mdi menu-toggle-icon d-xl-block align-middle mdi-20px"></i>
        </a>
      </div>

      <div className="menu-inner-shadow" style={{ display: "none" }}></div>
      {user.user.role_id == UserRolesEnum.SCHOOL ? (                    
        <ul className="menu-inner py-1 ps ps--active-y">
          <li
            class="menu-item"
            onClick={(e) => {
              e.preventDefault();
              menuToggle(e);
            }}
          >
            <a href="javascript:void(0);" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons mdi mdi-school"></i>
              <div data-i18n="Dashboards">Students</div>
            </a>
            <ul class="menu-sub">
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/student/add"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="Analytics">Add Student</div>
                </NavLink>
              </li>
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/student/list"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="Analytics">All Students</div>
                </NavLink>
              </li>
            </ul>
          </li>
          <li
            class="menu-item"
            onClick={(e) => {
              e.preventDefault();
              menuToggle(e);
            }}
          >
            <a href="javascript:void(0);" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons mdi mdi-human-male-board"></i>
              <div data-i18n="Dashboards">Teachers</div>
            </a>
            <ul class="menu-sub">
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/teacher/add"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="Analytics">Add Teacher</div>
                </NavLink>
              </li>
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/teacher/list"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="Analytics">All Teacher</div>
                </NavLink>
              </li>
            </ul>
           
            
          {/* Attendences module */}
            <li
            class="menu-item"
            onClick={(e) => {
              e.preventDefault();
              menuToggle(e);
            }}
          >
            <a href="javascript:void(0);" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons mdi mdi-school"></i>
              <div data-i18n="Dashboards">Attendance</div>
            </a>
            <ul class="menu-sub">
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/attendance/add"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="Analytics">Add</div>
                </NavLink>
              </li>
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/attendance/report"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="Analytics">Report</div>
                </NavLink>
              </li>
            </ul>
          </li>
           {/* Notice-Board module */}
           <li
            class="menu-item"
            onClick={(e) => {
              e.preventDefault();
              menuToggle(e);
            }}
          >
            <a href="javascript:void(0);" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons mdi mdi-school"></i>
              <div data-i18n="Dashboards">Notice Board</div>
            </a>
            <ul class="menu-sub">
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/notice-board/add"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="Analytics">Add</div>
                </NavLink>
              </li>
              {/* <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/notice-board/report"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="Analytics">Report</div>
                </NavLink>
              </li> */}
            </ul>
          </li>
          <li class="menu-item">
              <NavLink
                to={"/profile"}
                href="javascript:void(0);"
                className="menu-link"
              >
                <i class="menu-icon tf-icons mdi  mdi-face-man-profile"></i>
                <div data-i18n="Dashboards">Profile</div>
              </NavLink>
            </li>
          {/* Logout Module */}
          <li
            className="menu-item"
            onClick={(e) => {
              menuToggle(e);
            }}
          >
            <a
              className="menu-link waves-effect"
              onClick={(e) => {
                logout();
              }}
            >
              <i className="menu-icon tf-icons mdi mdi-logout"></i>
              <div data-i18n="Dashboards">Logout</div>
              {/* <div className="badge bg-danger rounded-pill ms-auto">5</div> */}
            </a>
          </li>
          </li>
        </ul>
      ) : (
        <ul className="menu-inner py-1 ps ps--active-y">
          <li
            class="menu-item"
            onClick={(e) => {
              e.preventDefault();
              menuToggle(e);
            }}
          >
            <a href="javascript:void(0);" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons mdi mdi-school"></i>
              <div data-i18n="Dashboards">Schools</div>
            </a>
            <ul class="menu-sub">
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/school/add"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="Analytics">Add School</div>
                </NavLink>
              </li>
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/school/list"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="All Schools">All Schools</div>
                </NavLink>
              </li>
            </ul>
          </li>
          <li
            class="menu-item"
            onClick={(e) => {
              e.preventDefault();
              menuToggle(e);
            }}
          >
            <a href="javascript:void(0);" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons mdi mdi-cash"></i>
              <div data-i18n="Dashboards">Subscription</div>
            </a>
            <ul class="menu-sub">
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/subscription/add"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="Analytics">Add Subscription</div>
                </NavLink>
              </li>
              <li
                class="menu-item"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink
                  to={"/subscription/list"}
                  className={(isActive) =>
                    "menu-link" + (!isActive ? " unselected" : "")
                  }
                >
                  <div data-i18n="All Schools">All Subscription</div>
                </NavLink>
              </li>
            </ul>
          </li>
          <li
            className="menu-item"
            onClick={(e) => {
              menuToggle(e);
            }}
          >
            <a
              className="menu-link waves-effect"
              onClick={(e) => {
                logout();
              }}
            >
              <i className="menu-icon tf-icons mdi mdi-logout"></i>
              <div data-i18n="Dashboards">Logout</div>
              {/* <div className="badge bg-danger rounded-pill ms-auto">5</div> */}
            </a>
          </li>
        </ul>
      )}
    </aside>
  );
}

export default SideBar;
