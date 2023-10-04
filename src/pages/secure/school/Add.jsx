import React, { useEffect, useState, useCallback } from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";
import HttpHelper from "../../../services/HttpHelper";
import UserRolesEnum from "../../../Enums/UserRolesEnum";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Tags from "@yaireo/tagify/dist/react.tagify"; // React-wrapper file
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS
import { compose, withProps } from "recompose";
import Select from "react-select";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
function Add(props) {
  //[51.505, -0.09]
  const icon = L.icon({ iconUrl: "/logo-transprent.png" });
  const [position, setPosition] = useState([]);
  const { notify, showLoader } = useAuth();
  const [errorMsgs, setErrorMsgs] = useState(null);
  const [counties, setCounties] = useState({});
  const [gradeCategories, setGradeCategories] = useState({});
  const [grades, setGrades] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGrads, setSelectedGrads] = useState(null);
  const [selectSteams, setSelectedStreams] = useState(null);
  const [selectSubjects, setSelectedSubjects] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const [streams, setStreams] = useState({});
  const [subjects, setSubjects] = useState({});

  const navigate = useNavigate();
  const getGradeCategories = async () => {
    showLoader(true);
    await HttpHelper.get("lookups/gradeCategories")
      .then((response) => {
        setGradeCategories(response.data.data);
        showLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (lat == null || long == null) {
      notify("error", "Location data is required");
      return false;
    }
    showLoader(true);
    data.category = selectedCategory;
    data.streams = selectSteams;
    data.subjects = selectSubjects;
    data.grads = selectedGrads;
    data.role_id = UserRolesEnum.SCHOOL;
    data.lat = lat;
    data.long = long;
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
  const gradesByCategory = async (id) => {
    showLoader(true);
    await HttpHelper.get("lookups/gradesByCategory/" + id)
      .then((response) => {
        var gradeData = [];
        if (response.data.data) {
          showLoader(false);
          response.data.data.map((item) => {
            gradeData.push({ value: item.id, label: item.name });
          });
          setGrades(gradeData);
        }
      })
      .catch((error) => {});
  };
  const getSubjects = async () => {
    showLoader(true);
    await HttpHelper.get("lookups/subjects")
      .then((response) => {
        showLoader(false);
        var subjects = [];
        response.data.data.map((item) => {
          subjects.push({ value: item.id, label: item.name });
        });
        //setGrades(gradeData);
        setSubjects(subjects);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getStreams = async () => {
    showLoader(true);
    await HttpHelper.get("lookups/streams")
      .then((response) => {
        showLoader(false);
        var streams = [];
        response.data.data.map((item) => {
          streams.push({ value: item.id, label: item.name });
        });
        setStreams(streams);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (selectedCategory) gradesByCategory(selectedCategory);
  }, [selectedCategory]);
  useEffect(() => {
    getCounties();
    getGradeCategories();
    getSubjects();
    getStreams();
    getGeoLocation();
  }, []);
  const onChangeStream = useCallback((e) => {
    setSelectedStreams({ ...selectSteams, e });
  }, []);
  // const onChangeSubject = useCallback((e) => {
  //   setSelectedSubjects({ ...selectSubjects, e });
  // }, []);

  const getGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        setPosition([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      notify("error", "Location data is required");
    }
  };

  return (
    <>
      <Wrapper breakCrum="Dashboard/Add School">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y mt-5">
            <h4 class="mb-4 breadcrumWrapper">
              <span class="text-muted fw-light brreadCrumText">School /</span>{" "}
              Add
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
                      <div className="row">
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <select
                            class={
                              errors.category_id !== undefined
                                ? "is-invalid form-control"
                                : "form-select"
                            }
                            id="county"
                            required=""
                            {...register("category_id", {
                              required: "Category is required",
                            })}
                            onChange={(e) => {
                              setSelectedCategory(e.currentTarget.value);
                            }}
                          >
                            <option value="">Select Category</option>
                            {gradeCategories.length > 0
                              ? gradeCategories.map((gradeCategory, index) => {
                                  return (
                                    <>
                                      <option value={gradeCategory.id}>
                                        {gradeCategory.name}
                                      </option>
                                    </>
                                  );
                                })
                              : null}
                          </select>
                          {errors?.category_id &&
                          errors.category_id.type &&
                          errors.category_id.type === "required" ? (
                            <p className="text-danger" role="alert">
                              Category is required
                            </p>
                          ) : null}
                          <label htmlFor="basic-default-country">
                            Category
                          </label>
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <Select
                            className="form-control"
                            options={grades ? grades : []}
                            isMulti
                            onChange={(e) => {
                              setSelectedGrads(e);
                              console.log(e);
                            }}
                            placeholder="Select Grades"
                            styles={{
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                //borderColor: state.isFocused ? "grey" : "",
                              }),
                            }}
                          />
                          <label htmlFor="basic-default-country">Grades</label>
                        </div>

                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <Select
                            className="form-control"
                            options={subjects ? subjects : []}
                            isMulti
                            placeholder="Select Subjects"
                            onChange={(e) => {
                              setSelectedSubjects(e);
                              console.log(e);
                            }}
                            styles={{
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                //borderColor: state.isFocused ? "grey" : "",
                              }),
                            }}
                          />
                          <label htmlFor="basic-default-country">
                            Subjects
                          </label>
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <Select
                            className="form-control"
                            options={streams ? streams : []}
                            isMulti
                            placeholder="Select Streams"
                            onChange={(e) => {
                              setSelectedStreams(e);
                            }}
                            styles={{
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                              }),
                            }}
                          />
                          <label htmlFor="basic-default-country">Streams</label>
                        </div>
                      </div>
                      <div className="row">
                        <div class="form-floating form-floating-outline mb-4 col-sm-4">
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
                            placeholder="Enter School Name"
                            required=""
                          />
                          {errors?.first_name &&
                          errors.first_name.type &&
                          errors.first_name.type === "required" ? (
                            <p className="text-danger" role="alert">
                              Name is required
                            </p>
                          ) : null}
                          <label htmlFor="basic-default-name">
                            School Name
                          </label>
                        </div>
                        <div class="form-floating form-floating-outline mb-4 col-sm-4">
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
                            placeholder="Enter Offical Email Address"
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
                        <div class="mb-4 form-password-toggle col-sm-4">
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
                                placeholder="Enter Offical Mobile Number"
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
                      </div>
                      <div className="row">
                        <div class="form-floating form-floating-outline mb-4 col-sm-3">
                          <select
                            placeholder="Select County"
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
                          <label htmlFor="basic-default-country">County</label>
                        </div>
                        <div class="mb-4 form-password-toggle col-sm-3">
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
                                placeholder="Enter Town Name"
                                aria-describedby="basic-default-password3"
                                required=""
                              />

                              <label htmlFor="basic-default-password">
                                Town
                              </label>
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
                        <div class="mb-4 form-password-toggle col-sm-3">
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
                                placeholder="Enter Estate Name"
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

                        <div class="mb-4 form-password-toggle col-sm-3">
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
                                placeholder="Enter Building Number"
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
                      </div>
                      {position && position.length > 0 ? (
                        <div class="mb-4 form-password-toggle col-sm-12">
                          <div class="input-group input-group-merge">
                            <label htmlFor="basic-default-password">
                              Your current Location :
                            </label>
                            <MapContainer
                              center={position}
                              zoom={13}
                              scrollWheelZoom={false}
                            >
                              <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              />
                              <Marker position={position} icon={icon}>
                                <Popup>Your current location.</Popup>
                              </Marker>
                            </MapContainer>
                          </div>
                        </div>
                      ) : null}

                      <div className="row col-sm-12 d-none">
                        <div class="mb-4 form-password-toggle col-sm-6">
                          <div class="input-group input-group-merge">
                            <div class="form-floating form-floating-outline">
                              <input
                                class="form-control"
                                disabled={true}
                                defaultValue={lat}
                                {...register("lat")}
                                type="text"
                                id="basic-default-password"
                                placeholder=""
                                aria-describedby="basic-default-password3"
                                required=""
                              />

                              <label htmlFor="basic-default-password">
                                Latitude
                              </label>
                            </div>
                            <span
                              class="input-group-text cursor-pointer"
                              id="basic-default-password3"
                            ></span>
                          </div>
                        </div>
                        <div class="mb-4 form-password-toggle col-sm-6">
                          <div class="input-group input-group-merge">
                            <div class="form-floating form-floating-outline">
                              <input
                                class="form-control"
                                disabled={true}
                                defaultValue={long}
                                {...register("long")}
                                type="text"
                                id="basic-default-password"
                                placeholder=""
                                aria-describedby="basic-default-password3"
                                required=""
                              />

                              <label htmlFor="basic-default-password">
                                Longitude
                              </label>
                            </div>
                            <span
                              class="input-group-text cursor-pointer"
                              id="basic-default-password3"
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div class="form-floating form-floating-outline mb-4 col-sm-6">
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
                        <div class="form-floating form-floating-outline mb-4  col-sm-6">
                          <textarea
                            {...register("bio", {
                              required: true,
                              maxLength: 500,
                            })}
                            class={
                              errors.bio !== undefined
                                ? "is-invalid form-control h-px-75"
                                : "form-control h-px-75"
                            }
                            placeholder="Enter Your School Moto"
                          />
                          {errors?.bio && errors.bio?.type === "maxLength" ? (
                            <p className="text-danger" role="alert">
                              Moto can not be greater then 500 charecters.
                            </p>
                          ) : null}
                          {errors?.bio &&
                          errors.bio.type &&
                          errors.bio.type === "required" ? (
                            <p className="text-danger" role="alert">
                              Moto is required
                            </p>
                          ) : null}
                          <label htmlFor="basic-default-bio">Moto</label>
                        </div>
                      </div>

                      <div class="form-floating form-floating-outline mb-4"></div>
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
                      <div class="mb-3">
                        <label class="switch switch-primary">
                          <input
                            {...register("activate_subscription", {
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
                            Activate Subscription
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
