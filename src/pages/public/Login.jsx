import "../../assets/vendor/css/pages/page-auth.css";
import tree1 from "../../assets/img/illustrations/tree.png";
import tree2 from "../../assets/img/illustrations/tree-2.png";
import bg from "../../assets/img/illustrations/auth-basic-mask-light.png";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import HttpHelper from "../../services/HttpHelper";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
function Login() {
  const { showLoader } = useAuth();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState(null);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    await HttpHelper.post("auth/login", data)
      .then((response) => {
        navigate("/dashboard");
        sessionStorage.setItem("user", JSON.stringify(response.data.data));
        showLoader(false);
      })
      .catch((error) => {
        showLoader(false);
        if (error?.response?.data?.errors) {
          setErrorMsgs(error.response.data);
        }
      });
  };
  const getCsrfToken = async () => {
    showLoader(true);
    axios.defaults.withCredentials = true;
    console.log(axios.defaults);
    await axios
      .get(process.env.REACT_APP_API_BASE_URI + "sanctum/csrf-cookie")
      .then((response) => {
        showLoader(false);
        console.log(response);
      });
  };
  useEffect(() => {
    getCsrfToken();
  }, []);
  return (
    <div className="position-relative">
      <div className="authentication-wrapper loginFormSection authentication-basic container-p-y">
        <div className="authentication-inner loginFormWrapper py-4">
          <div className="card p-2">
            <div className="app-brand justify-content-center mt-5">
              <a href="index.html" className="app-brand-link gap-2">
                <span className="app-brand-logo demo">
                  <span style={{ color: "#9055fd" }}>
                    <img width={"30px"} src={"/logo.png"} />
                  </span>
                </span>
                <span className="app-brand-text demo text-heading fw-semibold">
                  SinTheta
                </span>
              </a>
            </div>
            <div className="card-body mt-2">
              <h4 className="mb-2 text-center">Welcome to SinTheta!</h4>
              <p className="mb-4 text-center">
                Please sign-in to your account and start the adventure
              </p>
              {errorMsgs !== null && errorMsgs?.errors ? (
                <div class="alert alert-danger" role="alert">
                  {errorMsgs.message} :{" "}
                  {errorMsgs.errors.map((erromsg, index) => {
                    return erromsg;
                  })}
                </div>
              ) : null}
              <br />

              <form
                onSubmit={handleSubmit(onSubmit)}
                id="formAuthentication"
                className="mb-3"
              >
                <div className="form-floating form-floating-outline mb-3 formOutline">
                  <input
                    type="text"
                    className={
                      errors.username !== undefined
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    placeholder="Enter your username"
                    autoFocus
                    {...register("username", {
                      required: "Username is required",
                      maxLength: 30,
                    })}
                  />
                  {errors?.username &&
                  errors.username.type &&
                  errors.username.type === "required" ? (
                    <p className="text-danger" role="alert">
                      Username is required
                    </p>
                  ) : null}
                  <label htmlFor="email">Username</label>
                </div>
                <div className="mb-3">
                  <div className="form-password-toggle">
                    <div className="input-group input-group-merge formOutline">
                      <div className="form-floating form-floating-outline">
                        <input
                          {...register("password", {
                            required: "Password is required",
                          })}
                          type={showPassword ? "text" : "password"}
                          //value={password}
                          //onChange={handlePasswordChange}
                          id="password"
                          className={
                            errors.password !== undefined
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          name="password"
                          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                          aria-describedby="password"
                        />

                        <label htmlFor="password">Password</label>
                      </div>
                      <span className="input-group-text cursor-pointer">
                        <i
                          className="mdi mdi-eye-off-outline"
                          onClick={(e) => {
                            if (
                              e.currentTarget.classList.contains(
                                "mdi-eye-off-outline"
                              )
                            ) {
                              e.currentTarget.classList.remove(
                                "mdi-eye-off-outline"
                              );
                              e.currentTarget.classList.add("mdi-eye-outline");
                            } else {
                              e.currentTarget.classList.add(
                                "mdi-eye-off-outline"
                              );
                              e.currentTarget.classList.remove(
                                "mdi-eye-outline"
                              );
                            }
                            togglePasswordVisibility();
                          }}
                        ></i>
                      </span>
                    </div>
                  </div>
                  {errors?.password &&
                  errors.password.type &&
                  errors.password.type === "required" ? (
                    <p className="text-danger" role="alert">
                      password is required
                    </p>
                  ) : null}
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      {...register("remember", {
                        required: false,
                        pattern: /^[01]+$/,
                      })}
                      className="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label className="form-check-label" htmlFor="remember-me">
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                  {/* <a
                    href="auth-forgot-password-basic.html"
                    className="float-end mb-1"
                  >
                    <span>Forgot Password?</span>
                  </a> */}
                </div>
                <br />
                <div className="mb-3">
                  <button
                    className="btn btn-primary btn-login d-grid w-100"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <br />
                </div>
              </form>
            </div>
          </div>
          <img
            src={tree2}
            alt="auth-tree"
            className="authentication-image-object-left d-none d-lg-block"
          />
          <img
            src={bg}
            className="authentication-image d-none d-lg-block"
            alt="triangle-bg"
            data-app-light-img="illustrations/auth-basic-mask-light.png"
            data-app-dark-img="illustrations/auth-basic-mask-dark.png"
          />
          <img
            src={tree1}
            alt="auth-tree"
            className="authentication-image-object-right d-none d-lg-block"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
