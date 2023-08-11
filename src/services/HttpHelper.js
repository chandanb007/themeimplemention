import axios from "axios";
import Cookies from "js-cookie";

var baseUri = process.env.REACT_APP_API_BASE_URL;

//if (process.env.NODE_ENV !== "development")
//    baseUri = `${window.location.origin}/Admin`

class httpHelper {
  constructor() {
    axios.defaults.withCredentials = "true";
    this.instance = axios.create({
      timeout: 1000 * 60 * 5,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
          ? Cookies.get("XSRF-TOKEN")
          : "",
      },
      maxRedirects: 5,
    });
  }

  log(message) {
    console.log("%c HTTP:" + message, "background: #222; color: #bada55");
  }

  get(uri, params = {}) {
    return this.instance.get(baseUri + "/" + uri, {
      params,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }
  post(uri, data, contentType = "application/json; charset=utf-8") {
    return this.instance.post(baseUri + "/" + uri, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-type": contentType,
      },
    });
  }
  put(uri, data) {
    return this.instance.put(baseUri + "/" + uri, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }
  delete(uri) {
    return this.instance.delete(baseUri + "/" + uri, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }
}

export default new httpHelper();
