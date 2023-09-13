import { React, createContext, useContext, useEffect, useState } from "react";
import HttHelper from "../../src/services/HttpHelper";
import { useNavigate } from "react-router-dom";
import userRolesEnum from "../Enums/UserRolesEnum";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider(props) {
  console.log(userRolesEnum);
  // const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMsg, setAlertMsg] = useState(null);
  const [alertType, setAlertType] = useState(null);
  const [showAlertMsg, setShowAlertMsg] = useState(false);
  const [loader, setShowLoader] = useState(false);
  const showLoader = (status) => {
    setShowLoader(status);
  };
  const notify = (type, message) => {
    console.log(type, message);
    if (type == "success") {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    alertMsg,
    setAlertMsg,
    alertType,
    setAlertType,
    showAlertMsg,
    setShowAlertMsg,
    userRolesEnum,
    notify,
    showLoader,
  };
  const getCurrentUser = async () => {
    await HttHelper.get("/user")
      .then((response) => {
        if (response.status === 200) {
          setAuthUser(response.data);
          setIsLoggedIn(true);
          // navigate("/user/dashboard");
        } else {
          setAuthUser(null);
          setIsLoggedIn(false);
          //navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <AuthContext.Provider value={value}>
      {" "}
      <ToastContainer />
      <Oval
        height={100}
        width={80}
        color="#9055fd"
        wrapperStyle={{}}
        wrapperClass="loader-container"
        visible={loader}
        ariaLabel="oval-loading"
        secondaryColor="#9055fd"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      {props.children}
    </AuthContext.Provider>
  );
}
