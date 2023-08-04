import React from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";

function List(props) {
  return (
    <>
      <Wrapper breakCrum="Dashboard/home">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row gy-4">
              <div className="col-md-12 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-1">
                      Congratulations John! 🎉
                    </h4>
                    <p className="pb-0">Best seller of the month</p>
                    <h4 className="text-primary mb-1">$42.8k</h4>
                    <p className="mb-2 pb-1">78% of target 🚀</p>
                    <a
                      href="#"
                      className="btn btn-sm btn-primary waves-effect waves-light"
                    >
                      View Sales
                    </a>
                  </div>
                  <img
                    src="../../assets/img/icons/misc/triangle-light.png"
                    className="scaleX-n1-rtl position-absolute bottom-0 end-0"
                    width="166"
                    alt="triangle background"
                    data-app-light-img="icons/misc/triangle-light.png"
                    data-app-dark-img="icons/misc/triangle-dark.png"
                  />
                  <img
                    src="../../assets/img/illustrations/trophy.png"
                    className="scaleX-n1-rtl position-absolute bottom-0 end-0 me-4 mb-4 pb-2"
                    width="83"
                    alt="view sales"
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="card-title m-0 me-2">Transactions</h5>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="transactionID"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-dots-vertical mdi-24px"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="transactionID"
                        >
                          <a className="dropdown-item waves-effect" href="#">
                            Refresh
                          </a>
                          <a className="dropdown-item waves-effect" href="#">
                            Share
                          </a>
                          <a className="dropdown-item waves-effect" href="#">
                            Update
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3">
                      <span className="fw-medium">Total 48.5% growth</span> 😎
                      this month
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-3 col-6">
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-initial bg-primary rounded shadow">
                              <i className="mdi mdi-trending-up mdi-24px"></i>
                            </div>
                          </div>
                          <div className="ms-3">
                            <div className="small mb-1">Sales</div>
                            <h5 className="mb-0">245k</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-initial bg-success rounded shadow">
                              <i className="mdi mdi-account-outline mdi-24px"></i>
                            </div>
                          </div>
                          <div className="ms-3">
                            <div className="small mb-1">Customers</div>
                            <h5 className="mb-0">12.5k</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-initial bg-warning rounded shadow">
                              <i className="mdi mdi-cellphone-link mdi-24px"></i>
                            </div>
                          </div>
                          <div className="ms-3">
                            <div className="small mb-1">Product</div>
                            <h5 className="mb-0">1.54k</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <div className="avatar-initial bg-info rounded shadow">
                              <i className="mdi mdi-currency-usd mdi-24px"></i>
                            </div>
                          </div>
                          <div className="ms-3">
                            <div className="small mb-1">Revenue</div>
                            <h5 className="mb-0">$88k</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-1">Weekly Overview</h5>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="weeklyOverviewDropdown"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-dots-vertical mdi-24px"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="weeklyOverviewDropdown"
                        >
                          <a className="dropdown-item waves-effect" href="#">
                            Refresh
                          </a>
                          <a className="dropdown-item waves-effect" href="#">
                            Share
                          </a>
                          <a className="dropdown-item waves-effect" href="#">
                            Update
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body" style={{ position: "relative" }}>
                    <div
                      id="weeklyOverviewChart"
                      style={{ minHeight: "200px" }}
                    >
                      <div
                        id="apexchartsqxx4sob5f"
                        className="apexcharts-canvas apexchartsqxx4sob5f apexcharts-theme-light"
                        style={{ width: "348px", height: "200px" }}
                      >
                        <svg
                          id="SvgjsSvg2032"
                          width="348"
                          height="200"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xmlnssvgjs="http://svgjs.dev"
                          className="apexcharts-svg apexcharts-zoomable"
                          xmlnsdata="ApexChartsNS"
                          transform="translate(-16, -9)"
                          style={{ background: "transparent" }}
                        >
                          <g
                            id="SvgjsG2034"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(68.8735159556071, 30)"
                          >
                            <defs id="SvgjsDefs2033">
                              <linearGradient
                                id="SvgjsLinearGradient2038"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  id="SvgjsStop2039"
                                  stopOpacity="0.4"
                                  stopColor="rgba(216,227,240,0.4)"
                                  offset="0"
                                ></stop>
                                <stop
                                  id="SvgjsStop2040"
                                  stopOpacity="0.5"
                                  stopColor="rgba(190,209,230,0.5)"
                                  offset="1"
                                ></stop>
                                <stop
                                  id="SvgjsStop2041"
                                  stopOpacity="0.5"
                                  stopColor="rgba(190,209,230,0.5)"
                                  offset="1"
                                ></stop>
                              </linearGradient>
                              <clipPath id="gridRectMaskqxx4sob5f">
                                <rect
                                  id="SvgjsRect2043"
                                  width="291.7170524597168"
                                  height="165"
                                  x="-16.590568415323894"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fff"
                                ></rect>
                              </clipPath>
                              <clipPath id="forecastMaskqxx4sob5f"></clipPath>
                              <clipPath id="nonForecastMaskqxx4sob5f"></clipPath>
                              <clipPath id="gridRectMarkerMaskqxx4sob5f">
                                <rect
                                  id="SvgjsRect2044"
                                  width="262.535915629069"
                                  height="169"
                                  x="-2"
                                  y="-2"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fff"
                                ></rect>
                              </clipPath>
                            </defs>
                            <rect
                              id="SvgjsRect2042"
                              width="12.92679578145345"
                              height="165"
                              x="0"
                              y="0"
                              rx="0"
                              ry="0"
                              opacity="1"
                              strokeWidth="0"
                              strokeDasharray="3"
                              fill="url(#SvgjsLinearGradient2038)"
                              className="apexcharts-xcrosshairs"
                              y2="165"
                              filter="none"
                              fillOpacity="0.9"
                            ></rect>
                            <g
                              id="SvgjsG2063"
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)"
                            >
                              <g
                                id="SvgjsG2064"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              ></g>
                            </g>
                            <g id="SvgjsG2082" className="apexcharts-grid">
                              <g
                                id="SvgjsG2083"
                                className="apexcharts-gridlines-horizontal"
                              >
                                <line
                                  id="SvgjsLine2085"
                                  x1="-14.590568415323892"
                                  y1="0"
                                  x2="273.1264840443929"
                                  y2="0"
                                  stroke="#e7e7e8"
                                  strokeDasharray="8"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2086"
                                  x1="-14.590568415323892"
                                  y1="55"
                                  x2="273.1264840443929"
                                  y2="55"
                                  stroke="#e7e7e8"
                                  strokeDasharray="8"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2087"
                                  x1="-14.590568415323892"
                                  y1="110"
                                  x2="273.1264840443929"
                                  y2="110"
                                  stroke="#e7e7e8"
                                  strokeDasharray="8"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2088"
                                  x1="-14.590568415323892"
                                  y1="165"
                                  x2="273.1264840443929"
                                  y2="165"
                                  stroke="#e7e7e8"
                                  strokeDasharray="8"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                              </g>
                              <g
                                id="SvgjsG2084"
                                className="apexcharts-gridlines-vertical"
                              ></g>
                              <line
                                id="SvgjsLine2090"
                                x1="0"
                                y1="165"
                                x2="258.535915629069"
                                y2="165"
                                stroke="transparent"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                              <line
                                id="SvgjsLine2089"
                                x1="0"
                                y1="1"
                                x2="0"
                                y2="165"
                                stroke="transparent"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                            </g>
                            <g
                              id="SvgjsG2045"
                              className="apexcharts-bar-series apexcharts-plot-series"
                            >
                              <g
                                id="SvgjsG2046"
                                className="apexcharts-series"
                                rel="1"
                                seriesname="Sales"
                                datarealindex="0"
                              >
                                <path
                                  id="SvgjsPath2050"
                                  d="M -6.463397890726725 157L -6.463397890726725 114.33333333333333Q -6.463397890726725 106.33333333333333 1.5366021092732751 106.33333333333333L -1.5366021092732751 106.33333333333333Q 6.463397890726725 106.33333333333333 6.463397890726725 114.33333333333333L 6.463397890726725 114.33333333333333L 6.463397890726725 157Q 6.463397890726725 165 -1.5366021092732751 165L 1.5366021092732751 165Q -6.463397890726725 165 -6.463397890726725 157z"
                                  fill="rgba(240,242,248,0.85)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="round"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-bar-area"
                                  index="0"
                                  clipPath="url(#gridRectMaskqxx4sob5f)"
                                  pathto="M -6.463397890726725 157L -6.463397890726725 114.33333333333333Q -6.463397890726725 106.33333333333333 1.5366021092732751 106.33333333333333L -1.5366021092732751 106.33333333333333Q 6.463397890726725 106.33333333333333 6.463397890726725 114.33333333333333L 6.463397890726725 114.33333333333333L 6.463397890726725 157Q 6.463397890726725 165 -1.5366021092732751 165L 1.5366021092732751 165Q -6.463397890726725 165 -6.463397890726725 157z"
                                  pathfrom="M -6.463397890726725 157L -6.463397890726725 157L 6.463397890726725 157L 6.463397890726725 157L 6.463397890726725 157L 6.463397890726725 157L 6.463397890726725 157L -6.463397890726725 157"
                                  cy="106.33333333333333"
                                  cx="6.463397890726725"
                                  j="0"
                                  val="32"
                                  barheight="58.66666666666667"
                                  barwidth="12.92679578145345"
                                ></path>
                                <path
                                  id="SvgjsPath2052"
                                  d="M 36.625921380784774 157L 36.625921380784774 72.16666666666666Q 36.625921380784774 64.16666666666666 44.625921380784774 64.16666666666666L 41.552717162238224 64.16666666666666Q 49.552717162238224 64.16666666666666 49.552717162238224 72.16666666666666L 49.552717162238224 72.16666666666666L 49.552717162238224 157Q 49.552717162238224 165 41.552717162238224 165L 44.625921380784774 165Q 36.625921380784774 165 36.625921380784774 157z"
                                  fill="rgba(240,242,248,0.85)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="round"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-bar-area"
                                  index="0"
                                  clipPath="url(#gridRectMaskqxx4sob5f)"
                                  pathto="M 36.625921380784774 157L 36.625921380784774 72.16666666666666Q 36.625921380784774 64.16666666666666 44.625921380784774 64.16666666666666L 41.552717162238224 64.16666666666666Q 49.552717162238224 64.16666666666666 49.552717162238224 72.16666666666666L 49.552717162238224 72.16666666666666L 49.552717162238224 157Q 49.552717162238224 165 41.552717162238224 165L 44.625921380784774 165Q 36.625921380784774 165 36.625921380784774 157z"
                                  pathfrom="M 36.625921380784774 157L 36.625921380784774 157L 49.552717162238224 157L 49.552717162238224 157L 49.552717162238224 157L 49.552717162238224 157L 49.552717162238224 157L 36.625921380784774 157"
                                  cy="64.16666666666666"
                                  cx="49.552717162238224"
                                  j="1"
                                  val="55"
                                  barheight="100.83333333333334"
                                  barwidth="12.92679578145345"
                                ></path>
                                <path
                                  id="SvgjsPath2054"
                                  d="M 79.71524065229627 157L 79.71524065229627 90.5Q 79.71524065229627 82.5 87.71524065229627 82.5L 84.64203643374972 82.5Q 92.64203643374972 82.5 92.64203643374972 90.5L 92.64203643374972 90.5L 92.64203643374972 157Q 92.64203643374972 165 84.64203643374972 165L 87.71524065229627 165Q 79.71524065229627 165 79.71524065229627 157z"
                                  fill="rgba(240,242,248,0.85)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="round"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-bar-area"
                                  index="0"
                                  clipPath="url(#gridRectMaskqxx4sob5f)"
                                  pathto="M 79.71524065229627 157L 79.71524065229627 90.5Q 79.71524065229627 82.5 87.71524065229627 82.5L 84.64203643374972 82.5Q 92.64203643374972 82.5 92.64203643374972 90.5L 92.64203643374972 90.5L 92.64203643374972 157Q 92.64203643374972 165 84.64203643374972 165L 87.71524065229627 165Q 79.71524065229627 165 79.71524065229627 157z"
                                  pathfrom="M 79.71524065229627 157L 79.71524065229627 157L 92.64203643374972 157L 92.64203643374972 157L 92.64203643374972 157L 92.64203643374972 157L 92.64203643374972 157L 79.71524065229627 157"
                                  cy="82.5"
                                  cx="92.64203643374972"
                                  j="2"
                                  val="45"
                                  barheight="82.5"
                                  barwidth="12.92679578145345"
                                ></path>
                                <path
                                  id="SvgjsPath2056"
                                  d="M 122.80455992380777 157L 122.80455992380777 35.5Q 122.80455992380777 27.5 130.80455992380777 27.5L 127.73135570526122 27.5Q 135.73135570526122 27.5 135.73135570526122 35.5L 135.73135570526122 35.5L 135.73135570526122 157Q 135.73135570526122 165 127.73135570526122 165L 130.80455992380777 165Q 122.80455992380777 165 122.80455992380777 157z"
                                  fill="rgba(144,85,253,0.85)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="round"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-bar-area"
                                  index="0"
                                  clipPath="url(#gridRectMaskqxx4sob5f)"
                                  pathto="M 122.80455992380777 157L 122.80455992380777 35.5Q 122.80455992380777 27.5 130.80455992380777 27.5L 127.73135570526122 27.5Q 135.73135570526122 27.5 135.73135570526122 35.5L 135.73135570526122 35.5L 135.73135570526122 157Q 135.73135570526122 165 127.73135570526122 165L 130.80455992380777 165Q 122.80455992380777 165 122.80455992380777 157z"
                                  pathfrom="M 122.80455992380777 157L 122.80455992380777 157L 135.73135570526122 157L 135.73135570526122 157L 135.73135570526122 157L 135.73135570526122 157L 135.73135570526122 157L 122.80455992380777 157"
                                  cy="27.5"
                                  cx="135.73135570526122"
                                  j="3"
                                  val="75"
                                  barheight="137.5"
                                  barwidth="12.92679578145345"
                                ></path>
                                <path
                                  id="SvgjsPath2058"
                                  d="M 165.89387919531927 157L 165.89387919531927 72.16666666666666Q 165.89387919531927 64.16666666666666 173.89387919531927 64.16666666666666L 170.82067497677272 64.16666666666666Q 178.82067497677272 64.16666666666666 178.82067497677272 72.16666666666666L 178.82067497677272 72.16666666666666L 178.82067497677272 157Q 178.82067497677272 165 170.82067497677272 165L 173.89387919531927 165Q 165.89387919531927 165 165.89387919531927 157z"
                                  fill="rgba(240,242,248,0.85)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="round"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-bar-area"
                                  index="0"
                                  clipPath="url(#gridRectMaskqxx4sob5f)"
                                  pathto="M 165.89387919531927 157L 165.89387919531927 72.16666666666666Q 165.89387919531927 64.16666666666666 173.89387919531927 64.16666666666666L 170.82067497677272 64.16666666666666Q 178.82067497677272 64.16666666666666 178.82067497677272 72.16666666666666L 178.82067497677272 72.16666666666666L 178.82067497677272 157Q 178.82067497677272 165 170.82067497677272 165L 173.89387919531927 165Q 165.89387919531927 165 165.89387919531927 157z"
                                  pathfrom="M 165.89387919531927 157L 165.89387919531927 157L 178.82067497677272 157L 178.82067497677272 157L 178.82067497677272 157L 178.82067497677272 157L 178.82067497677272 157L 165.89387919531927 157"
                                  cy="64.16666666666666"
                                  cx="178.82067497677272"
                                  j="4"
                                  val="55"
                                  barheight="100.83333333333334"
                                  barwidth="12.92679578145345"
                                ></path>
                                <path
                                  id="SvgjsPath2060"
                                  d="M 208.98319846683077 157L 208.98319846683077 108.83333333333333Q 208.98319846683077 100.83333333333333 216.98319846683077 100.83333333333333L 213.90999424828422 100.83333333333333Q 221.90999424828422 100.83333333333333 221.90999424828422 108.83333333333333L 221.90999424828422 108.83333333333333L 221.90999424828422 157Q 221.90999424828422 165 213.90999424828422 165L 216.98319846683077 165Q 208.98319846683077 165 208.98319846683077 157z"
                                  fill="rgba(240,242,248,0.85)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="round"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-bar-area"
                                  index="0"
                                  clipPath="url(#gridRectMaskqxx4sob5f)"
                                  pathto="M 208.98319846683077 157L 208.98319846683077 108.83333333333333Q 208.98319846683077 100.83333333333333 216.98319846683077 100.83333333333333L 213.90999424828422 100.83333333333333Q 221.90999424828422 100.83333333333333 221.90999424828422 108.83333333333333L 221.90999424828422 108.83333333333333L 221.90999424828422 157Q 221.90999424828422 165 213.90999424828422 165L 216.98319846683077 165Q 208.98319846683077 165 208.98319846683077 157z"
                                  pathfrom="M 208.98319846683077 157L 208.98319846683077 157L 221.90999424828422 157L 221.90999424828422 157L 221.90999424828422 157L 221.90999424828422 157L 221.90999424828422 157L 208.98319846683077 157"
                                  cy="100.83333333333333"
                                  cx="221.90999424828422"
                                  j="5"
                                  val="35"
                                  barheight="64.16666666666667"
                                  barwidth="12.92679578145345"
                                ></path>
                                <path
                                  id="SvgjsPath2062"
                                  d="M 252.07251773834227 157L 252.07251773834227 44.66666666666666Q 252.07251773834227 36.66666666666666 260.0725177383423 36.66666666666666L 256.9993135197957 36.66666666666666Q 264.9993135197957 36.66666666666666 264.9993135197957 44.66666666666666L 264.9993135197957 44.66666666666666L 264.9993135197957 157Q 264.9993135197957 165 256.9993135197957 165L 260.0725177383423 165Q 252.07251773834227 165 252.07251773834227 157z"
                                  fill="rgba(240,242,248,0.85)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="round"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-bar-area"
                                  index="0"
                                  clipPath="url(#gridRectMaskqxx4sob5f)"
                                  pathto="M 252.07251773834227 157L 252.07251773834227 44.66666666666666Q 252.07251773834227 36.66666666666666 260.0725177383423 36.66666666666666L 256.9993135197957 36.66666666666666Q 264.9993135197957 36.66666666666666 264.9993135197957 44.66666666666666L 264.9993135197957 44.66666666666666L 264.9993135197957 157Q 264.9993135197957 165 256.9993135197957 165L 260.0725177383423 165Q 252.07251773834227 165 252.07251773834227 157z"
                                  pathfrom="M 252.07251773834227 157L 252.07251773834227 157L 264.9993135197957 157L 264.9993135197957 157L 264.9993135197957 157L 264.9993135197957 157L 264.9993135197957 157L 252.07251773834227 157"
                                  cy="36.66666666666666"
                                  cx="264.9993135197957"
                                  j="6"
                                  val="70"
                                  barheight="128.33333333333334"
                                  barwidth="12.92679578145345"
                                ></path>
                                <g
                                  id="SvgjsG2048"
                                  className="apexcharts-bar-goals-markers"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <g
                                    id="SvgjsG2049"
                                    className="apexcharts-bar-goals-groups"
                                  ></g>
                                  <g
                                    id="SvgjsG2051"
                                    className="apexcharts-bar-goals-groups"
                                  ></g>
                                  <g
                                    id="SvgjsG2053"
                                    className="apexcharts-bar-goals-groups"
                                  ></g>
                                  <g
                                    id="SvgjsG2055"
                                    className="apexcharts-bar-goals-groups"
                                  ></g>
                                  <g
                                    id="SvgjsG2057"
                                    className="apexcharts-bar-goals-groups"
                                  ></g>
                                  <g
                                    id="SvgjsG2059"
                                    className="apexcharts-bar-goals-groups"
                                  ></g>
                                  <g
                                    id="SvgjsG2061"
                                    className="apexcharts-bar-goals-groups"
                                  ></g>
                                </g>
                              </g>
                              <g
                                id="SvgjsG2047"
                                className="apexcharts-datalabels"
                                datarealindex="0"
                              ></g>
                            </g>
                            <line
                              id="SvgjsLine2091"
                              x1="-14.590568415323892"
                              y1="0"
                              x2="273.1264840443929"
                              y2="0"
                              stroke="#b6b6b6"
                              strokeDasharray="0"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            ></line>
                            <line
                              id="SvgjsLine2092"
                              x1="-14.590568415323892"
                              y1="0"
                              x2="273.1264840443929"
                              y2="0"
                              strokeDasharray="0"
                              strokeWidth="0"
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            ></line>
                            <g
                              id="SvgjsG2093"
                              className="apexcharts-yaxis-annotations"
                            ></g>
                            <g
                              id="SvgjsG2094"
                              className="apexcharts-xaxis-annotations"
                            ></g>
                            <g
                              id="SvgjsG2095"
                              className="apexcharts-point-annotations"
                            ></g>
                            <rect
                              id="SvgjsRect2096"
                              width="0"
                              height="0"
                              x="0"
                              y="0"
                              rx="0"
                              ry="0"
                              opacity="1"
                              strokeWidth="0"
                              stroke="none"
                              strokeDasharray="0"
                              fill="#fefefe"
                              className="apexcharts-zoom-rect"
                            ></rect>
                            <rect
                              id="SvgjsRect2097"
                              width="0"
                              height="0"
                              x="0"
                              y="0"
                              rx="0"
                              ry="0"
                              opacity="1"
                              strokeWidth="0"
                              stroke="none"
                              strokeDasharray="0"
                              fill="#fefefe"
                              className="apexcharts-selection-rect"
                            ></rect>
                          </g>
                          <g
                            id="SvgjsG2072"
                            className="apexcharts-yaxis"
                            rel="0"
                            transform="translate(20.282947540283203, 0)"
                          >
                            <g
                              id="SvgjsG2073"
                              className="apexcharts-yaxis-texts-g"
                            >
                              <text
                                id="SvgjsText2074"
                                fontFamily="Inter"
                                x="20"
                                y="31.3"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="0.75rem"
                                fontWeight="400"
                                fill="#b4b2b7"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "Inter" }}
                              >
                                <tspan id="SvgjsTspan2075">90K</tspan>
                                <title>90K</title>
                              </text>
                              <text
                                id="SvgjsText2076"
                                fontFamily="Inter"
                                x="20"
                                y="86.3"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="0.75rem"
                                fontWeight="400"
                                fill="#b4b2b7"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "Inter" }}
                              >
                                <tspan id="SvgjsTspan2077">60K</tspan>
                                <title>60K</title>
                              </text>
                              <text
                                id="SvgjsText2078"
                                fontFamily="Inter"
                                x="20"
                                y="141.3"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="0.75rem"
                                fontWeight="400"
                                fill="#b4b2b7"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "Inter" }}
                              >
                                <tspan id="SvgjsTspan2079">30K</tspan>
                                <title>30K</title>
                              </text>
                              <text
                                id="SvgjsText2080"
                                fontFamily="Inter"
                                x="20"
                                y="196.3"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="0.75rem"
                                fontWeight="400"
                                fill="#b4b2b7"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "Inter" }}
                              >
                                <tspan id="SvgjsTspan2081">0K</tspan>
                                <title>0K</title>
                              </text>
                            </g>
                          </g>
                          <g
                            id="SvgjsG2035"
                            className="apexcharts-annotations"
                          ></g>
                        </svg>
                        <div
                          className="apexcharts-legend"
                          style={{ maxHeight: "100px" }}
                        ></div>
                        <div className="apexcharts-tooltip apexcharts-theme-light">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: "12px",
                            }}
                          ></div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: "1" }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{
                                backgroundColor: "rgb(240, 242, 248)",
                              }}
                            ></span>
                            <div
                              className="apexcharts-tooltip-text"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: "12px",
                              }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label"></span>
                                <span className="apexcharts-tooltip-text-y-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                <span className="apexcharts-tooltip-text-goals-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label"></span>
                                <span className="apexcharts-tooltip-text-z-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                          <div className="apexcharts-yaxistooltip-text"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 mt-md-3">
                      <div className="d-flex align-items-center gap-3">
                        <h3 className="mb-0">45%</h3>
                        <p className="mb-0">
                          Your sales performance is 45% 😎 better compared to
                          last month
                        </p>
                      </div>
                      <div className="d-grid mt-3 mt-md-4">
                        <button
                          className="btn btn-primary waves-effect waves-light"
                          type="button"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                    <div className="resize-triggers">
                      <div className="expand-trigger">
                        <div style={{ width: "389px", height: "351px" }}></div>
                      </div>
                      <div className="contract-trigger"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h5 className="card-title m-0 me-2">Total Earning</h5>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="totalEarnings"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical mdi-24px"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="totalEarnings"
                      >
                        <a className="dropdown-item waves-effect" href="#">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item waves-effect" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item waves-effect" href="#">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-3 mt-md-3 mb-md-5">
                      <div className="d-flex align-items-center">
                        <h2 className="mb-0">$24,895</h2>
                        <span className="text-success ms-2 fw-medium">
                          <i className="mdi mdi-menu-up mdi-24px"></i>
                          <small>10%</small>
                        </span>
                      </div>
                      <small className="mt-1">
                        Compared to $84,325 last year
                      </small>
                    </div>
                    <ul className="p-0 m-0">
                      <li className="d-flex mb-4 pb-md-2">
                        <div className="avatar flex-shrink-0 me-3">
                          <img
                            src="../../assets/img/icons/misc/zipcar.png"
                            alt="zipcar"
                            className="rounded"
                          />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Zipcar</h6>
                            <small>Vuejs, React &amp; HTML</small>
                          </div>
                          <div>
                            <h6 className="mb-2">$24,895.65</h6>
                            <div
                              className="progress bg-label-primary"
                              style={{ height: "4px" }}
                            >
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "75%" }}
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-4 pb-md-2">
                        <div className="avatar flex-shrink-0 me-3">
                          <img
                            src="../../assets/img/icons/misc/bitbank.png"
                            alt="bitbank"
                            className="rounded"
                          />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Bitbank</h6>
                            <small>Sketch, Figma &amp; XD</small>
                          </div>
                          <div>
                            <h6 className="mb-2">$8,6500.20</h6>
                            <div
                              className="progress bg-label-info"
                              style={{ height: "4px" }}
                            >
                              <div
                                className="progress-bar bg-info"
                                style={{ width: "75%" }}
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex mb-md-3">
                        <div className="avatar flex-shrink-0 me-3">
                          <img
                            src="../../assets/img/icons/misc/aviato.png"
                            alt="aviato"
                            className="rounded"
                          />
                        </div>
                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div className="me-2">
                            <h6 className="mb-0">Aviato</h6>
                            <small>HTML &amp; Angular</small>
                          </div>
                          <div>
                            <h6 className="mb-2">$1,2450.80</h6>
                            <div
                              className="progress bg-label-secondary"
                              style={{ height: "4px" }}
                            >
                              <div
                                className="progress-bar bg-secondary"
                                style={{ width: "75%" }}
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <div className="card h-100">
                      <div className="card-header pb-0">
                        <h4 className="mb-0">$86.4k</h4>
                      </div>
                      <div
                        className="card-body"
                        style={{ position: "relative" }}
                      >
                        <div
                          id="totalProfitLineChart"
                          className="mb-3"
                          style={{ minHeight: "90px" }}
                        >
                          <div
                            id="apexchartslvmu4b0m"
                            className="apexcharts-canvas apexchartslvmu4b0m apexcharts-theme-light"
                            style={{ width: "142px", height: "90px" }}
                          >
                            <svg
                              id="SvgjsSvg2098"
                              width="142"
                              height="90"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlnssvgjs="http://svgjs.dev"
                              className="apexcharts-svg apexcharts-zoomable"
                              xmlnsdata="ApexChartsNS"
                              transform="translate(0, 0)"
                              style={{ background: "transparent" }}
                            >
                              <g
                                id="SvgjsG2100"
                                className="apexcharts-inner apexcharts-graphical"
                                transform="translate(3, 15)"
                              >
                                <defs id="SvgjsDefs2099">
                                  <clipPath id="gridRectMasklvmu4b0m">
                                    <rect
                                      id="SvgjsRect2105"
                                      width="137"
                                      height="78"
                                      x="-3.5"
                                      y="-1.5"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      strokeWidth="0"
                                      stroke="none"
                                      strokeDasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                  <clipPath id="forecastMasklvmu4b0m"></clipPath>
                                  <clipPath id="nonForecastMasklvmu4b0m"></clipPath>
                                  <clipPath id="gridRectMarkerMasklvmu4b0m">
                                    <rect
                                      id="SvgjsRect2106"
                                      width="158"
                                      height="103"
                                      x="-14"
                                      y="-14"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      strokeWidth="0"
                                      stroke="none"
                                      strokeDasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <line
                                  id="SvgjsLine2104"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="75"
                                  stroke="#b6b6b6"
                                  strokeDasharray="3"
                                  strokeLinecap="butt"
                                  className="apexcharts-xcrosshairs"
                                  x="0"
                                  y="0"
                                  width="1"
                                  height="75"
                                  fill="#b1b9c4"
                                  filter="none"
                                  fillOpacity="0.9"
                                  strokeWidth="1"
                                ></line>
                                <g
                                  id="SvgjsG2123"
                                  className="apexcharts-xaxis"
                                  transform="translate(0, 0)"
                                >
                                  <g
                                    id="SvgjsG2124"
                                    className="apexcharts-xaxis-texts-g"
                                    transform="translate(0, -4)"
                                  ></g>
                                </g>
                                <g id="SvgjsG2133" className="apexcharts-grid">
                                  <g
                                    id="SvgjsG2134"
                                    className="apexcharts-gridlines-horizontal"
                                  ></g>
                                  <g
                                    id="SvgjsG2135"
                                    className="apexcharts-gridlines-vertical"
                                  >
                                    <line
                                      id="SvgjsLine2136"
                                      x1="0"
                                      y1="0"
                                      x2="0"
                                      y2="75"
                                      stroke="#b4b2b7"
                                      strokeDasharray="6"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2137"
                                      x1="26"
                                      y1="0"
                                      x2="26"
                                      y2="75"
                                      stroke="#b4b2b7"
                                      strokeDasharray="6"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2138"
                                      x1="52"
                                      y1="0"
                                      x2="52"
                                      y2="75"
                                      stroke="#b4b2b7"
                                      strokeDasharray="6"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2139"
                                      x1="78"
                                      y1="0"
                                      x2="78"
                                      y2="75"
                                      stroke="#b4b2b7"
                                      strokeDasharray="6"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2140"
                                      x1="104"
                                      y1="0"
                                      x2="104"
                                      y2="75"
                                      stroke="#b4b2b7"
                                      strokeDasharray="6"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2141"
                                      x1="130"
                                      y1="0"
                                      x2="130"
                                      y2="75"
                                      stroke="#b4b2b7"
                                      strokeDasharray="6"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                  </g>
                                  <line
                                    id="SvgjsLine2143"
                                    x1="0"
                                    y1="75"
                                    x2="130"
                                    y2="75"
                                    stroke="transparent"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2142"
                                    x1="0"
                                    y1="1"
                                    x2="0"
                                    y2="75"
                                    stroke="transparent"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                  ></line>
                                </g>
                                <g
                                  id="SvgjsG2107"
                                  className="apexcharts-line-series apexcharts-plot-series"
                                >
                                  <g
                                    id="SvgjsG2108"
                                    className="apexcharts-series"
                                    seriesname="seriesx1"
                                    datalongestseries="true"
                                    rel="1"
                                    datarealindex="0"
                                  >
                                    <path
                                      id="SvgjsPath2122"
                                      d="M 0 75L 26 45L 52 67.5L 78 30L 104 52.5L 130 7.5"
                                      fill="none"
                                      fillOpacity="1"
                                      stroke="rgba(144,85,253,0.85)"
                                      strokeOpacity="1"
                                      strokeLinecap="butt"
                                      strokeWidth="3"
                                      strokeDasharray="0"
                                      className="apexcharts-line"
                                      index="0"
                                      clipPath="url(#gridRectMasklvmu4b0m)"
                                      pathto="M 0 75L 26 45L 52 67.5L 78 30L 104 52.5L 130 7.5"
                                      pathfrom="M -1 75L -1 75L 26 75L 52 75L 78 75L 104 75L 130 75"
                                    ></path>
                                    <g
                                      id="SvgjsG2109"
                                      className="apexcharts-series-markers-wrap"
                                      datarealindex="0"
                                    >
                                      <g
                                        id="SvgjsG2111"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMasklvmu4b0m)"
                                      >
                                        <circle
                                          id="SvgjsCircle2112"
                                          r="6"
                                          cx="0"
                                          cy="75"
                                          className="apexcharts-marker no-pointer-events wm8vdu2in"
                                          stroke="transparent"
                                          fill="transparent"
                                          fillOpacity="1"
                                          strokeWidth="3"
                                          strokeOpacity="0.9"
                                          rel="0"
                                          j="0"
                                          index="0"
                                          default-marker-size="6"
                                        ></circle>
                                        <circle
                                          id="SvgjsCircle2113"
                                          r="6"
                                          cx="26"
                                          cy="45"
                                          className="apexcharts-marker no-pointer-events wcs1kbie3"
                                          stroke="transparent"
                                          fill="transparent"
                                          fillOpacity="1"
                                          strokeWidth="3"
                                          strokeOpacity="0.9"
                                          rel="1"
                                          j="1"
                                          index="0"
                                          default-marker-size="6"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2114"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMasklvmu4b0m)"
                                      >
                                        <circle
                                          id="SvgjsCircle2115"
                                          r="6"
                                          cx="52"
                                          cy="67.5"
                                          className="apexcharts-marker no-pointer-events w1tb37p7rh"
                                          stroke="transparent"
                                          fill="transparent"
                                          fillOpacity="1"
                                          strokeWidth="3"
                                          strokeOpacity="0.9"
                                          rel="2"
                                          j="2"
                                          index="0"
                                          default-marker-size="6"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2116"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMasklvmu4b0m)"
                                      >
                                        <circle
                                          id="SvgjsCircle2117"
                                          r="6"
                                          cx="78"
                                          cy="30"
                                          className="apexcharts-marker no-pointer-events wm9pyd2sz"
                                          stroke="transparent"
                                          fill="transparent"
                                          fillOpacity="1"
                                          strokeWidth="3"
                                          strokeOpacity="0.9"
                                          rel="3"
                                          j="3"
                                          index="0"
                                          default-marker-size="6"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2118"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMasklvmu4b0m)"
                                      >
                                        <circle
                                          id="SvgjsCircle2119"
                                          r="6"
                                          cx="104"
                                          cy="52.5"
                                          className="apexcharts-marker no-pointer-events waw2z4d0k"
                                          stroke="transparent"
                                          fill="transparent"
                                          fillOpacity="1"
                                          strokeWidth="3"
                                          strokeOpacity="0.9"
                                          rel="4"
                                          j="4"
                                          index="0"
                                          default-marker-size="6"
                                        ></circle>
                                      </g>
                                      <g
                                        id="SvgjsG2120"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMasklvmu4b0m)"
                                      >
                                        <circle
                                          id="SvgjsCircle2121"
                                          r="6"
                                          cx="130"
                                          cy="7.5"
                                          className="apexcharts-marker no-pointer-events wkxy07sici"
                                          stroke="#9055fd"
                                          fill="#ffffff"
                                          fillOpacity="1"
                                          strokeWidth="3"
                                          strokeOpacity="0.9"
                                          rel="5"
                                          j="5"
                                          index="0"
                                          default-marker-size="6"
                                        ></circle>
                                      </g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG2110"
                                    className="apexcharts-datalabels"
                                    datarealindex="0"
                                  ></g>
                                </g>
                                <line
                                  id="SvgjsLine2144"
                                  x1="0"
                                  y1="0"
                                  x2="130"
                                  y2="0"
                                  stroke="#b6b6b6"
                                  strokeDasharray="0"
                                  strokeWidth="1"
                                  strokeLinecap="butt"
                                  className="apexcharts-ycrosshairs"
                                ></line>
                                <line
                                  id="SvgjsLine2145"
                                  x1="0"
                                  y1="0"
                                  x2="130"
                                  y2="0"
                                  strokeDasharray="0"
                                  strokeWidth="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-ycrosshairs-hidden"
                                ></line>
                                <g
                                  id="SvgjsG2146"
                                  className="apexcharts-yaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2147"
                                  className="apexcharts-xaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2148"
                                  className="apexcharts-point-annotations"
                                ></g>
                                <rect
                                  id="SvgjsRect2149"
                                  width="0"
                                  height="0"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fefefe"
                                  className="apexcharts-zoom-rect"
                                ></rect>
                                <rect
                                  id="SvgjsRect2150"
                                  width="0"
                                  height="0"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fefefe"
                                  className="apexcharts-selection-rect"
                                ></rect>
                              </g>
                              <rect
                                id="SvgjsRect2103"
                                width="0"
                                height="0"
                                x="0"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                strokeWidth="0"
                                stroke="none"
                                strokeDasharray="0"
                                fill="#fefefe"
                              ></rect>
                              <g
                                id="SvgjsG2131"
                                className="apexcharts-yaxis"
                                rel="0"
                                transform="translate(-8, 0)"
                              >
                                <g
                                  id="SvgjsG2132"
                                  className="apexcharts-yaxis-texts-g"
                                ></g>
                              </g>
                              <g
                                id="SvgjsG2101"
                                className="apexcharts-annotations"
                              ></g>
                            </svg>
                            <div
                              className="apexcharts-legend"
                              style={{ maxHeight: "45px" }}
                            ></div>
                          </div>
                        </div>
                        <h6 className="text-center mb-0">Total Profit</h6>
                        <div className="resize-triggers">
                          <div className="expand-trigger">
                            <div
                              style={{ width: "183px", height: "152px" }}
                            ></div>
                          </div>
                          <div className="contract-trigger"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <div className="avatar">
                          <div className="avatar-initial bg-secondary rounded-circle shadow">
                            <i className="mdi mdi-poll mdi-24px"></i>
                          </div>
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="totalProfitID"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="mdi mdi-dots-vertical mdi-24px"></i>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="totalProfitID"
                          >
                            <a className="dropdown-item waves-effect" href="#">
                              Refresh
                            </a>
                            <a className="dropdown-item waves-effect" href="#">
                              Share
                            </a>
                            <a className="dropdown-item waves-effect" href="#">
                              Update
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body mt-mg-1">
                        <h6 className="mb-2">Total Profit</h6>
                        <div className="d-flex flex-wrap align-items-center mb-2 pb-1">
                          <h4 className="mb-0 me-2">$25.6k</h4>
                          <small className="text-success mt-1">+42%</small>
                        </div>
                        <small>Weekly Project</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <div className="avatar">
                          <div className="avatar-initial bg-primary rounded-circle shadow-sm">
                            <i className="mdi mdi-wallet-travel mdi-24px"></i>
                          </div>
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="newProjectID"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="mdi mdi-dots-vertical mdi-24px"></i>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="newProjectID"
                          >
                            <a className="dropdown-item waves-effect" href="#">
                              Refresh
                            </a>
                            <a className="dropdown-item waves-effect" href="#">
                              Share
                            </a>
                            <a className="dropdown-item waves-effect" href="#">
                              Update
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body mt-mg-1">
                        <h6 className="mb-2">New Project</h6>
                        <div className="d-flex flex-wrap align-items-center mb-2 pb-1">
                          <h4 className="mb-0 me-2">862</h4>
                          <small className="text-danger mt-1">-18%</small>
                        </div>
                        <small>Yearly Project</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card h-100">
                      <div className="card-header pb-0">
                        <h4 className="mb-0">2,856</h4>
                      </div>
                      <div
                        className="card-body"
                        style={{ position: "relative" }}
                      >
                        <div
                          id="sessionsColumnChart"
                          className="mb-3"
                          style={{ minHeight: "90px" }}
                        >
                          <div
                            id="apexchartsqh8yptw6"
                            className="apexcharts-canvas apexchartsqh8yptw6 apexcharts-theme-light"
                            style={{ width: "142px", height: "90px" }}
                          >
                            <svg
                              id="SvgjsSvg2151"
                              width="142"
                              height="90"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlnssvgjs="http://svgjs.dev"
                              className="apexcharts-svg apexcharts-zoomable"
                              xmlnsdata="ApexChartsNS"
                              transform="translate(0, 0)"
                              style={{ background: "transparent" }}
                            >
                              <g
                                id="SvgjsG2153"
                                className="apexcharts-inner apexcharts-graphical"
                                transform="translate(13.399999999999999, 20)"
                              >
                                <defs id="SvgjsDefs2152">
                                  <linearGradient
                                    id="SvgjsLinearGradient2156"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      id="SvgjsStop2157"
                                      stopOpacity="0.4"
                                      stopColor="rgba(216,227,240,0.4)"
                                      offset="0"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2158"
                                      stopOpacity="0.5"
                                      stopColor="rgba(190,209,230,0.5)"
                                      offset="1"
                                    ></stop>
                                    <stop
                                      id="SvgjsStop2159"
                                      stopOpacity="0.5"
                                      stopColor="rgba(190,209,230,0.5)"
                                      offset="1"
                                    ></stop>
                                  </linearGradient>
                                  <clipPath id="gridRectMaskqh8yptw6">
                                    <rect
                                      id="SvgjsRect2161"
                                      width="136"
                                      height="70"
                                      x="-11.399999999999999"
                                      y="0"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      strokeWidth="0"
                                      stroke="none"
                                      strokeDasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                  <clipPath id="forecastMaskqh8yptw6"></clipPath>
                                  <clipPath id="nonForecastMaskqh8yptw6"></clipPath>
                                  <clipPath id="gridRectMarkerMaskqh8yptw6">
                                    <rect
                                      id="SvgjsRect2162"
                                      width="117.2"
                                      height="74"
                                      x="-2"
                                      y="-2"
                                      rx="0"
                                      ry="0"
                                      opacity="1"
                                      strokeWidth="0"
                                      stroke="none"
                                      strokeDasharray="0"
                                      fill="#fff"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <rect
                                  id="SvgjsRect2160"
                                  width="0"
                                  height="70"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  strokeDasharray="3"
                                  fill="url(#SvgjsLinearGradient2156)"
                                  className="apexcharts-xcrosshairs"
                                  y2="70"
                                  filter="none"
                                  fillOpacity="0.9"
                                ></rect>
                                <g
                                  id="SvgjsG2182"
                                  className="apexcharts-xaxis"
                                  transform="translate(0, 0)"
                                >
                                  <g
                                    id="SvgjsG2183"
                                    className="apexcharts-xaxis-texts-g"
                                    transform="translate(0, -4)"
                                  ></g>
                                </g>
                                <g id="SvgjsG2192" className="apexcharts-grid">
                                  <g
                                    id="SvgjsG2193"
                                    className="apexcharts-gridlines-horizontal"
                                    style={{ display: "none" }}
                                  >
                                    <line
                                      id="SvgjsLine2195"
                                      x1="-9.399999999999999"
                                      y1="0"
                                      x2="122.6"
                                      y2="0"
                                      stroke="#e0e0e0"
                                      strokeDasharray="0"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2196"
                                      x1="-9.399999999999999"
                                      y1="17.5"
                                      x2="122.6"
                                      y2="17.5"
                                      stroke="#e0e0e0"
                                      strokeDasharray="0"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2197"
                                      x1="-9.399999999999999"
                                      y1="35"
                                      x2="122.6"
                                      y2="35"
                                      stroke="#e0e0e0"
                                      strokeDasharray="0"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2198"
                                      x1="-9.399999999999999"
                                      y1="52.5"
                                      x2="122.6"
                                      y2="52.5"
                                      stroke="#e0e0e0"
                                      strokeDasharray="0"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                    <line
                                      id="SvgjsLine2199"
                                      x1="-9.399999999999999"
                                      y1="70"
                                      x2="122.6"
                                      y2="70"
                                      stroke="#e0e0e0"
                                      strokeDasharray="0"
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    ></line>
                                  </g>
                                  <g
                                    id="SvgjsG2194"
                                    className="apexcharts-gridlines-vertical"
                                    style={{ display: "none" }}
                                  ></g>
                                  <line
                                    id="SvgjsLine2201"
                                    x1="0"
                                    y1="70"
                                    x2="113.2"
                                    y2="70"
                                    stroke="transparent"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                  ></line>
                                  <line
                                    id="SvgjsLine2200"
                                    x1="0"
                                    y1="1"
                                    x2="0"
                                    y2="70"
                                    stroke="transparent"
                                    strokeDasharray="0"
                                    strokeLinecap="butt"
                                  ></line>
                                </g>
                                <g
                                  id="SvgjsG2163"
                                  className="apexcharts-bar-series apexcharts-plot-series"
                                >
                                  <g
                                    id="SvgjsG2164"
                                    className="apexcharts-series"
                                    rel="1"
                                    seriesname="seriesx1"
                                    datarealindex="0"
                                  >
                                    <rect
                                      id="SvgjsRect2167"
                                      width="5.66"
                                      height="70"
                                      x="-2.83"
                                      y="0"
                                      rx="4"
                                      ry="4"
                                      opacity="1"
                                      strokeWidth="0"
                                      stroke="none"
                                      strokeDasharray="0"
                                      fill="#F0F2F8"
                                      className="apexcharts-backgroundBar"
                                    ></rect>
                                    <path
                                      id="SvgjsPath2169"
                                      d="M -2.83 66L -2.83 47.75Q -2.83 43.75 1.17 43.75L -1.17 43.75Q 2.83 43.75 2.83 47.75L 2.83 47.75L 2.83 66Q 2.83 70 -1.17 70L 1.17 70Q -2.83 70 -2.83 66z"
                                      fill="rgba(255,76,81,0.85)"
                                      fillOpacity="1"
                                      strokeOpacity="1"
                                      strokeLinecap="round"
                                      strokeWidth="0"
                                      strokeDasharray="0"
                                      className="apexcharts-bar-area"
                                      index="0"
                                      clipPath="url(#gridRectMaskqh8yptw6)"
                                      pathto="M -2.83 66L -2.83 47.75Q -2.83 43.75 1.17 43.75L -1.17 43.75Q 2.83 43.75 2.83 47.75L 2.83 47.75L 2.83 66Q 2.83 70 -1.17 70L 1.17 70Q -2.83 70 -2.83 66z"
                                      pathfrom="M -2.83 66L -2.83 66L 2.83 66L 2.83 66L 2.83 66L 2.83 66L 2.83 66L -2.83 66"
                                      cy="43.75"
                                      cx="2.83"
                                      j="0"
                                      val="30"
                                      barheight="26.25"
                                      barwidth="5.66"
                                    ></path>
                                    <rect
                                      id="SvgjsRect2170"
                                      width="5.66"
                                      height="70"
                                      x="25.47"
                                      y="0"
                                      rx="4"
                                      ry="4"
                                      opacity="1"
                                      strokeWidth="0"
                                      stroke="none"
                                      strokeDasharray="0"
                                      fill="#F0F2F8"
                                      className="apexcharts-backgroundBar"
                                    ></rect>
                                    <path
                                      id="SvgjsPath2172"
                                      d="M 25.47 66L 25.47 12.75Q 25.47 8.75 29.47 8.75L 27.13 8.75Q 31.13 8.75 31.13 12.75L 31.13 12.75L 31.13 66Q 31.13 70 27.13 70L 29.47 70Q 25.47 70 25.47 66z"
                                      fill="rgba(144,85,253,0.85)"
                                      fillOpacity="1"
                                      strokeOpacity="1"
                                      strokeLinecap="round"
                                      strokeWidth="0"
                                      strokeDasharray="0"
                                      className="apexcharts-bar-area"
                                      index="0"
                                      clipPath="url(#gridRectMaskqh8yptw6)"
                                      pathto="M 25.47 66L 25.47 12.75Q 25.47 8.75 29.47 8.75L 27.13 8.75Q 31.13 8.75 31.13 12.75L 31.13 12.75L 31.13 66Q 31.13 70 27.13 70L 29.47 70Q 25.47 70 25.47 66z"
                                      pathfrom="M 25.47 66L 25.47 66L 31.13 66L 31.13 66L 31.13 66L 31.13 66L 31.13 66L 25.47 66"
                                      cy="8.75"
                                      cx="31.13"
                                      j="1"
                                      val="70"
                                      barheight="61.25"
                                      barwidth="5.66"
                                    ></path>
                                    <rect
                                      id="SvgjsRect2173"
                                      width="5.66"
                                      height="70"
                                      x="53.77"
                                      y="0"
                                      rx="4"
                                      ry="4"
                                      opacity="1"
                                      strokeWidth="0"
                                      stroke="none"
                                      strokeDasharray="0"
                                      fill="#F0F2F8"
                                      className="apexcharts-backgroundBar"
                                    ></rect>
                                    <path
                                      id="SvgjsPath2175"
                                      d="M 53.77 66L 53.77 30.25Q 53.77 26.25 57.77 26.25L 55.43000000000001 26.25Q 59.43000000000001 26.25 59.43000000000001 30.25L 59.43000000000001 30.25L 59.43000000000001 66Q 59.43000000000001 70 55.43000000000001 70L 57.77 70Q 53.77 70 53.77 66z"
                                      fill="rgba(255,76,81,0.85)"
                                      fillOpacity="1"
                                      strokeOpacity="1"
                                      strokeLinecap="round"
                                      strokeWidth="0"
                                      strokeDasharray="0"
                                      className="apexcharts-bar-area"
                                      index="0"
                                      clipPath="url(#gridRectMaskqh8yptw6)"
                                      pathto="M 53.77 66L 53.77 30.25Q 53.77 26.25 57.77 26.25L 55.43000000000001 26.25Q 59.43000000000001 26.25 59.43000000000001 30.25L 59.43000000000001 30.25L 59.43000000000001 66Q 59.43000000000001 70 55.43000000000001 70L 57.77 70Q 53.77 70 53.77 66z"
                                      pathfrom="M 53.77 66L 53.77 66L 59.43000000000001 66L 59.43000000000001 66L 59.43000000000001 66L 59.43000000000001 66L 59.43000000000001 66L 53.77 66"
                                      cy="26.25"
                                      cx="59.43000000000001"
                                      j="2"
                                      val="50"
                                      barheight="43.75"
                                      barwidth="5.66"
                                    ></path>
                                    <rect
                                      id="SvgjsRect2176"
                                      width="5.66"
                                      height="70"
                                      x="82.07"
                                      y="0"
                                      rx="4"
                                      ry="4"
                                      opacity="1"
                                      strokeWidth="0"
                                      stroke="none"
                                      strokeDasharray="0"
                                      fill="#F0F2F8"
                                      className="apexcharts-backgroundBar"
                                    ></rect>
                                    <path
                                      id="SvgjsPath2178"
                                      d="M 82.07 66L 82.07 39Q 82.07 35 86.07 35L 83.72999999999999 35Q 87.72999999999999 35 87.72999999999999 39L 87.72999999999999 39L 87.72999999999999 66Q 87.72999999999999 70 83.72999999999999 70L 86.07 70Q 82.07 70 82.07 66z"
                                      fill="rgba(144,85,253,0.85)"
                                      fillOpacity="1"
                                      strokeOpacity="1"
                                      strokeLinecap="round"
                                      strokeWidth="0"
                                      strokeDasharray="0"
                                      className="apexcharts-bar-area"
                                      index="0"
                                      clipPath="url(#gridRectMaskqh8yptw6)"
                                      pathto="M 82.07 66L 82.07 39Q 82.07 35 86.07 35L 83.72999999999999 35Q 87.72999999999999 35 87.72999999999999 39L 87.72999999999999 39L 87.72999999999999 66Q 87.72999999999999 70 83.72999999999999 70L 86.07 70Q 82.07 70 82.07 66z"
                                      pathfrom="M 82.07 66L 82.07 66L 87.72999999999999 66L 87.72999999999999 66L 87.72999999999999 66L 87.72999999999999 66L 87.72999999999999 66L 82.07 66"
                                      cy="35"
                                      cx="87.72999999999999"
                                      j="3"
                                      val="40"
                                      barheight="35"
                                      barwidth="5.66"
                                    ></path>
                                    <rect
                                      id="SvgjsRect2179"
                                      width="5.66"
                                      height="70"
                                      x="110.37"
                                      y="0"
                                      rx="4"
                                      ry="4"
                                      opacity="1"
                                      strokeWidth="0"
                                      stroke="none"
                                      strokeDasharray="0"
                                      fill="#F0F2F8"
                                      className="apexcharts-backgroundBar"
                                    ></rect>
                                    <path
                                      id="SvgjsPath2181"
                                      d="M 110.37 66L 110.37 21.5Q 110.37 17.5 114.37 17.5L 112.03 17.5Q 116.03 17.5 116.03 21.5L 116.03 21.5L 116.03 66Q 116.03 70 112.03 70L 114.37 70Q 110.37 70 110.37 66z"
                                      fill="rgba(144,85,253,0.85)"
                                      fillOpacity="1"
                                      strokeOpacity="1"
                                      strokeLinecap="round"
                                      strokeWidth="0"
                                      strokeDasharray="0"
                                      className="apexcharts-bar-area"
                                      index="0"
                                      clipPath="url(#gridRectMaskqh8yptw6)"
                                      pathto="M 110.37 66L 110.37 21.5Q 110.37 17.5 114.37 17.5L 112.03 17.5Q 116.03 17.5 116.03 21.5L 116.03 21.5L 116.03 66Q 116.03 70 112.03 70L 114.37 70Q 110.37 70 110.37 66z"
                                      pathfrom="M 110.37 66L 110.37 66L 116.03 66L 116.03 66L 116.03 66L 116.03 66L 116.03 66L 110.37 66"
                                      cy="17.5"
                                      cx="116.03"
                                      j="4"
                                      val="60"
                                      barheight="52.5"
                                      barwidth="5.66"
                                    ></path>
                                    <g
                                      id="SvgjsG2166"
                                      className="apexcharts-bar-goals-markers"
                                      style={{ pointerEvents: "none" }}
                                    >
                                      <g
                                        id="SvgjsG2168"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2171"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2174"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2177"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                      <g
                                        id="SvgjsG2180"
                                        className="apexcharts-bar-goals-groups"
                                      ></g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG2165"
                                    className="apexcharts-datalabels"
                                    datarealindex="0"
                                  ></g>
                                </g>
                                <line
                                  id="SvgjsLine2202"
                                  x1="-9.399999999999999"
                                  y1="0"
                                  x2="122.6"
                                  y2="0"
                                  stroke="#b6b6b6"
                                  strokeDasharray="0"
                                  strokeWidth="1"
                                  strokeLinecap="butt"
                                  className="apexcharts-ycrosshairs"
                                ></line>
                                <line
                                  id="SvgjsLine2203"
                                  x1="-9.399999999999999"
                                  y1="0"
                                  x2="122.6"
                                  y2="0"
                                  strokeDasharray="0"
                                  strokeWidth="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-ycrosshairs-hidden"
                                ></line>
                                <g
                                  id="SvgjsG2204"
                                  className="apexcharts-yaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2205"
                                  className="apexcharts-xaxis-annotations"
                                ></g>
                                <g
                                  id="SvgjsG2206"
                                  className="apexcharts-point-annotations"
                                ></g>
                                <rect
                                  id="SvgjsRect2207"
                                  width="0"
                                  height="0"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fefefe"
                                  className="apexcharts-zoom-rect"
                                ></rect>
                                <rect
                                  id="SvgjsRect2208"
                                  width="0"
                                  height="0"
                                  x="0"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fefefe"
                                  className="apexcharts-selection-rect"
                                ></rect>
                              </g>
                              <g
                                id="SvgjsG2190"
                                className="apexcharts-yaxis"
                                rel="0"
                                transform="translate(-8, 0)"
                              >
                                <g
                                  id="SvgjsG2191"
                                  className="apexcharts-yaxis-texts-g"
                                ></g>
                              </g>
                              <g
                                id="SvgjsG2154"
                                className="apexcharts-annotations"
                              ></g>
                            </svg>
                            <div
                              className="apexcharts-legend"
                              style={{ maxHeight: "45px" }}
                            ></div>
                          </div>
                        </div>
                        <h6 className="text-center mb-0">Sessions</h6>
                        <div className="resize-triggers">
                          <div className="expand-trigger">
                            <div
                              style={{ width: "183px", height: "152px" }}
                            ></div>
                          </div>
                          <div className="contract-trigger"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="card h-100">
                  <div className="card-header pb-1">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-1">Performance</h5>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="performanceDropdown"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-dots-vertical mdi-24px"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="performanceDropdown"
                        >
                          <a className="dropdown-item waves-effect" href="#">
                            Last 28 Days
                          </a>
                          <a className="dropdown-item waves-effect" href="#">
                            Last Month
                          </a>
                          <a className="dropdown-item waves-effect" href="#">
                            Last Year
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body" style={{ position: "relative" }}>
                    <div id="performanceChart" style={{ minHeight: "325px" }}>
                      <div
                        id="apexcharts5t93jf1q"
                        className="apexcharts-canvas apexcharts5t93jf1q apexcharts-theme-light"
                        style={{ width: "348px", height: "310px" }}
                      >
                        <svg
                          id="SvgjsSvg2211"
                          width="348"
                          height="310"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xmlnssvgjs="http://svgjs.dev"
                          className="apexcharts-svg"
                          xmlnsdata="ApexChartsNS"
                          transform="translate(0, 10)"
                          style={{ background: "transparent" }}
                        >
                          <foreignObject x="0" y="0" width="348" height="310">
                            <div
                              className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                              xmlns="http://www.w3.org/1999/xhtml"
                              style={{
                                inset: "auto 0px -5px",
                                position: "absolute",
                                maxHeight: "155px",
                              }}
                            >
                              <div
                                className="apexcharts-legend-series"
                                rel="1"
                                seriesname="Income"
                                datacollapsed="false"
                                style={{ margin: "8px 10px" }}
                              >
                                <span
                                  className="apexcharts-legend-marker"
                                  rel="1"
                                  datacollapsed="false"
                                  style={{
                                    background: "rgb(144, 85, 253) !important",
                                    color: "rgb(144, 85, 253)",
                                    height: "10px",
                                    width: "10px",
                                    left: "-2px",
                                    top: "0px",
                                    borderWidth: "0px",
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: "12px",
                                  }}
                                ></span>
                                <span
                                  className="apexcharts-legend-text"
                                  rel="1"
                                  i="0"
                                  datadefaulttext="Income"
                                  datacollapsed="false"
                                  style={{
                                    color: "rgb(137, 134, 141)",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                    fontFamily: "Inter",
                                  }}
                                >
                                  Income
                                </span>
                              </div>
                              <div
                                className="apexcharts-legend-series"
                                rel="2"
                                seriesname="NetxWorth"
                                datacollapsed="false"
                                style={{ margin: "8px 10px" }}
                              >
                                <span
                                  className="apexcharts-legend-marker"
                                  rel="2"
                                  datacollapsed="false"
                                  style={{
                                    background: "rgb(22, 177, 255) !important",
                                    color: "rgb(22, 177, 255)",
                                    height: "10px",
                                    width: "10px",
                                    left: "-2px",
                                    top: "0px",
                                    borderWidth: "0px",
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: "12px",
                                  }}
                                ></span>
                                <span
                                  className="apexcharts-legend-text"
                                  rel="2"
                                  i="1"
                                  datadefaulttext="Net%20Worth"
                                  datacollapsed="false"
                                  style={{
                                    color: "rgb(137, 134, 141)",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                    fontFamily: "Inter",
                                  }}
                                >
                                  Net Worth
                                </span>
                              </div>
                            </div>
                          </foreignObject>
                          <g
                            id="SvgjsG2213"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(12, 30)"
                          >
                            <defs id="SvgjsDefs2212">
                              <clipPath id="gridRectMask5t93jf1q">
                                <rect
                                  id="SvgjsRect2216"
                                  width="317.4569330215454"
                                  height="219"
                                  x="-2"
                                  y="0"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fff"
                                ></rect>
                              </clipPath>
                              <clipPath id="forecastMask5t93jf1q"></clipPath>
                              <clipPath id="nonForecastMask5t93jf1q"></clipPath>
                              <clipPath id="gridRectMarkerMask5t93jf1q">
                                <rect
                                  id="SvgjsRect2217"
                                  width="317.4569330215454"
                                  height="223"
                                  x="-2"
                                  y="-2"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fff"
                                ></rect>
                              </clipPath>
                            </defs>
                            <g id="SvgjsG2272" className="apexcharts-grid">
                              <g
                                id="SvgjsG2273"
                                className="apexcharts-gridlines-horizontal"
                                style={{ display: "none" }}
                              >
                                <line
                                  id="SvgjsLine2275"
                                  x1="0"
                                  y1="0"
                                  x2="313.4569330215454"
                                  y2="0"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2276"
                                  x1="0"
                                  y1="54.75"
                                  x2="313.4569330215454"
                                  y2="54.75"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2277"
                                  x1="0"
                                  y1="109.5"
                                  x2="313.4569330215454"
                                  y2="109.5"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2278"
                                  x1="0"
                                  y1="164.25"
                                  x2="313.4569330215454"
                                  y2="164.25"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2279"
                                  x1="0"
                                  y1="219"
                                  x2="313.4569330215454"
                                  y2="219"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                              </g>
                              <g
                                id="SvgjsG2274"
                                className="apexcharts-gridlines-vertical"
                                style={{
                                  display: "none",
                                }}
                              ></g>
                              <line
                                id="SvgjsLine2281"
                                x1="0"
                                y1="219"
                                x2="313.4569330215454"
                                y2="219"
                                stroke="transparent"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                              <line
                                id="SvgjsLine2280"
                                x1="0"
                                y1="1"
                                x2="0"
                                y2="219"
                                stroke="transparent"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                            </g>
                            <g
                              id="SvgjsG2218"
                              className="apexcharts-radar-series apexcharts-plot-series"
                              transform="translate(156.7284665107727, 109.5)"
                            >
                              <polygon
                                id="SvgjsPolygon2260"
                                points="0,-112.09363773890904 97.07593788450528,-56.04681886945453 97.0759378845053,56.04681886945449 1.3727511466173791e-14,112.09363773890904 -97.07593788450527,56.04681886945457 -97.07593788450534,-56.04681886945444 "
                                fill="none"
                                stroke="#e7e7e8"
                                strokeWidth="1"
                              ></polygon>
                              <polygon
                                id="SvgjsPolygon2261"
                                points="0,-84.07022830418178 72.80695341337896,-42.0351141520909 72.80695341337898,42.03511415209087 1.0295633599630344e-14,84.07022830418178 -72.80695341337895,42.03511415209093 -72.806953413379,-42.035114152090834 "
                                fill="none"
                                stroke="#e7e7e8"
                                strokeWidth="1"
                              ></polygon>
                              <polygon
                                id="SvgjsPolygon2262"
                                points="0,-56.04681886945452 48.53796894225264,-28.023409434727267 48.53796894225265,28.023409434727245 6.863755733086896e-15,56.04681886945452 -48.53796894225263,28.023409434727284 -48.53796894225267,-28.02340943472722 "
                                fill="none"
                                stroke="#e7e7e8"
                                strokeWidth="1"
                              ></polygon>
                              <polygon
                                id="SvgjsPolygon2263"
                                points="0,-28.02340943472726 24.26898447112632,-14.011704717363633 24.268984471126323,14.011704717363623 3.431877866543448e-15,28.02340943472726 -24.268984471126316,14.011704717363642 -24.268984471126334,-14.01170471736361 "
                                fill="none"
                                stroke="#e7e7e8"
                                strokeWidth="1"
                              ></polygon>
                              <polygon
                                id="SvgjsPolygon2264"
                                points="0,0 0,0 0,0 0,0 0,0 0,0 "
                                fill="none"
                                stroke="#e7e7e8"
                                strokeWidth="1"
                              ></polygon>
                              <line
                                id="SvgjsLine2254"
                                x1="0"
                                y1="-112.09363773890904"
                                x2="0"
                                y2="0"
                                stroke="#e7e7e8"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                              <line
                                id="SvgjsLine2255"
                                x1="97.07593788450528"
                                y1="-56.04681886945453"
                                x2="0"
                                y2="0"
                                stroke="#e7e7e8"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                              <line
                                id="SvgjsLine2256"
                                x1="97.0759378845053"
                                y1="56.04681886945449"
                                x2="0"
                                y2="0"
                                stroke="#e7e7e8"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                              <line
                                id="SvgjsLine2257"
                                x1="1.3727511466173791e-14"
                                y1="112.09363773890904"
                                x2="0"
                                y2="0"
                                stroke="#e7e7e8"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                              <line
                                id="SvgjsLine2258"
                                x1="-97.07593788450527"
                                y1="56.04681886945457"
                                x2="0"
                                y2="0"
                                stroke="#e7e7e8"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                              <line
                                id="SvgjsLine2259"
                                x1="-97.07593788450534"
                                y1="-56.04681886945444"
                                x2="0"
                                y2="0"
                                stroke="#e7e7e8"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                              <g id="SvgjsG2265" className="apexcharts-xaxis">
                                <text
                                  id="SvgjsText2266"
                                  fontFamily="Inter"
                                  x="0"
                                  y="-122.09363773890904"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="14px"
                                  fontWeight="400"
                                  fill="#b4b2b7"
                                  className="apexcharts-datalabel"
                                  cx="0"
                                  cy="-122.09363773890904"
                                  style={{ fontFamily: "Inter" }}
                                >
                                  Jan
                                </text>
                                <text
                                  id="SvgjsText2267"
                                  fontFamily="Inter"
                                  x="107.07593788450528"
                                  y="-56.04681886945453"
                                  textAnchor="start"
                                  dominantBaseline="auto"
                                  fontSize="14px"
                                  fontWeight="400"
                                  fill="#b4b2b7"
                                  className="apexcharts-datalabel"
                                  cx="107.07593788450528"
                                  cy="-56.04681886945453"
                                  style={{ fontFamily: "Inter" }}
                                >
                                  Feb
                                </text>
                                <text
                                  id="SvgjsText2268"
                                  fontFamily="Inter"
                                  x="107.0759378845053"
                                  y="56.04681886945449"
                                  textAnchor="start"
                                  dominantBaseline="auto"
                                  fontSize="14px"
                                  fontWeight="400"
                                  fill="#b4b2b7"
                                  className="apexcharts-datalabel"
                                  cx="107.0759378845053"
                                  cy="56.04681886945449"
                                  style={{ fontFamily: "Inter" }}
                                >
                                  Mar
                                </text>
                                <text
                                  id="SvgjsText2269"
                                  fontFamily="Inter"
                                  x="1.3727511466173791e-14"
                                  y="122.09363773890904"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="14px"
                                  fontWeight="400"
                                  fill="#b4b2b7"
                                  className="apexcharts-datalabel"
                                  cx="1.3727511466173791e-14"
                                  cy="122.09363773890904"
                                  style={{ fontFamily: "Inter" }}
                                >
                                  Apr
                                </text>
                                <text
                                  id="SvgjsText2270"
                                  fontFamily="Inter"
                                  x="-107.07593788450527"
                                  y="56.04681886945457"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="14px"
                                  fontWeight="400"
                                  fill="#b4b2b7"
                                  className="apexcharts-datalabel"
                                  cx="-107.07593788450527"
                                  cy="56.04681886945457"
                                  style={{ fontFamily: "Inter" }}
                                >
                                  May
                                </text>
                                <text
                                  id="SvgjsText2271"
                                  fontFamily="Inter"
                                  x="-107.07593788450534"
                                  y="-56.04681886945444"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="14px"
                                  fontWeight="400"
                                  fill="#b4b2b7"
                                  className="apexcharts-datalabel"
                                  cx="-107.07593788450534"
                                  cy="-56.04681886945444"
                                  style={{ fontFamily: "Inter" }}
                                >
                                  Jun
                                </text>
                              </g>
                              <g
                                id="SvgjsG2220"
                                className="apexcharts-series"
                                datalongestseries="true"
                                seriesname="Income"
                                rel="1"
                                datarealindex="0"
                              >
                                <path
                                  id="SvgjsPath2223"
                                  d="M 0 -65.38795534769694L 0 -65.38795534769694L 72.80695341337896 -42.0351141520909L 64.71729192300353 37.36454591296966L 1.0867613244054249e-14 88.74079654330298L -60.67246117781579 35.029261793409106L -72.806953413379 -42.035114152090834Z"
                                  fill="none"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="butt"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-radar"
                                  index="0"
                                  pathto="M 0 -65.38795534769694L 0 -65.38795534769694L 72.80695341337896 -42.0351141520909L 64.71729192300353 37.36454591296966L 1.0867613244054249e-14 88.74079654330298L -60.67246117781579 35.029261793409106L -72.806953413379 -42.035114152090834Z"
                                  pathfrom="M 0 0"
                                ></path>
                                <path
                                  id="SvgjsPath2224"
                                  d="M 0 -65.38795534769694L 0 -65.38795534769694L 72.80695341337896 -42.0351141520909L 64.71729192300353 37.36454591296966L 1.0867613244054249e-14 88.74079654330298L -60.67246117781579 35.029261793409106L -72.806953413379 -42.035114152090834Z"
                                  fill="rgba(144,85,253,1)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="butt"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-radar"
                                  index="0"
                                  pathto="M 0 -65.38795534769694L 0 -65.38795534769694L 72.80695341337896 -42.0351141520909L 64.71729192300353 37.36454591296966L 1.0867613244054249e-14 88.74079654330298L -60.67246117781579 35.029261793409106L -72.806953413379 -42.035114152090834Z"
                                  pathfrom="M 0 0"
                                ></path>
                                <g
                                  id="SvgjsG2221"
                                  className="apexcharts-series-markers-wrap"
                                >
                                  <g
                                    id="SvgjsG2226"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2225"
                                      r="0"
                                      cx="0"
                                      cy="-65.38795534769694"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#9055fd"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="0"
                                      j="0"
                                      index="0"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g
                                    id="SvgjsG2228"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2227"
                                      r="0"
                                      cx="72.80695341337896"
                                      cy="-42.0351141520909"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#9055fd"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="1"
                                      j="1"
                                      index="0"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g
                                    id="SvgjsG2230"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2229"
                                      r="0"
                                      cx="64.71729192300353"
                                      cy="37.36454591296966"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#9055fd"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="2"
                                      j="2"
                                      index="0"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g
                                    id="SvgjsG2232"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2231"
                                      r="0"
                                      cx="1.0867613244054249e-14"
                                      cy="88.74079654330298"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#9055fd"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="3"
                                      j="3"
                                      index="0"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g
                                    id="SvgjsG2234"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2233"
                                      r="0"
                                      cx="-60.67246117781579"
                                      cy="35.029261793409106"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#9055fd"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="4"
                                      j="4"
                                      index="0"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g
                                    id="SvgjsG2236"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2235"
                                      r="0"
                                      cx="-72.806953413379"
                                      cy="-42.035114152090834"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#9055fd"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="5"
                                      j="5"
                                      index="0"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g className="apexcharts-series-markers">
                                    <circle
                                      id="SvgjsCircle2287"
                                      r="0"
                                      cx="0"
                                      cy="0"
                                      className="apexcharts-marker wgv55cc3y"
                                      stroke="#ffffff"
                                      fill="#9055fd"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                </g>
                              </g>
                              <g
                                id="SvgjsG2237"
                                className="apexcharts-series"
                                datalongestseries="true"
                                seriesname="NetxWorth"
                                rel="2"
                                datarealindex="1"
                              >
                                <path
                                  id="SvgjsPath2240"
                                  d="M 0 -102.75250126066662L 0 -102.75250126066662L 63.09935962492844 -36.43043226514545L 76.85178415856669 44.37039827165147L 9.723653955206436e-15 79.39966006506057L -76.85178415856666 44.37039827165153L -63.099359624928475 -36.43043226514539Z"
                                  fill="none"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="butt"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-radar"
                                  index="1"
                                  pathto="M 0 -102.75250126066662L 0 -102.75250126066662L 63.09935962492844 -36.43043226514545L 76.85178415856669 44.37039827165147L 9.723653955206436e-15 79.39966006506057L -76.85178415856666 44.37039827165153L -63.099359624928475 -36.43043226514539Z"
                                  pathfrom="M 0 0"
                                ></path>
                                <path
                                  id="SvgjsPath2241"
                                  d="M 0 -102.75250126066662L 0 -102.75250126066662L 63.09935962492844 -36.43043226514545L 76.85178415856669 44.37039827165147L 9.723653955206436e-15 79.39966006506057L -76.85178415856666 44.37039827165153L -63.099359624928475 -36.43043226514539Z"
                                  fill="rgba(22,177,255,0.9)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="butt"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-radar"
                                  index="1"
                                  pathto="M 0 -102.75250126066662L 0 -102.75250126066662L 63.09935962492844 -36.43043226514545L 76.85178415856669 44.37039827165147L 9.723653955206436e-15 79.39966006506057L -76.85178415856666 44.37039827165153L -63.099359624928475 -36.43043226514539Z"
                                  pathfrom="M 0 0"
                                ></path>
                                <g
                                  id="SvgjsG2238"
                                  className="apexcharts-series-markers-wrap"
                                >
                                  <g
                                    id="SvgjsG2243"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2242"
                                      r="0"
                                      cx="0"
                                      cy="-102.75250126066662"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#16b1ff"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="0"
                                      j="0"
                                      index="1"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g
                                    id="SvgjsG2245"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2244"
                                      r="0"
                                      cx="63.09935962492844"
                                      cy="-36.43043226514545"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#16b1ff"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="1"
                                      j="1"
                                      index="1"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g
                                    id="SvgjsG2247"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2246"
                                      r="0"
                                      cx="76.85178415856669"
                                      cy="44.37039827165147"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#16b1ff"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="2"
                                      j="2"
                                      index="1"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g
                                    id="SvgjsG2249"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2248"
                                      r="0"
                                      cx="9.723653955206436e-15"
                                      cy="79.39966006506057"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#16b1ff"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="3"
                                      j="3"
                                      index="1"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g
                                    id="SvgjsG2251"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2250"
                                      r="0"
                                      cx="-76.85178415856666"
                                      cy="44.37039827165153"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#16b1ff"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="4"
                                      j="4"
                                      index="1"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g
                                    id="SvgjsG2253"
                                    className="apexcharts-series-markers"
                                  >
                                    <circle
                                      id="SvgjsCircle2252"
                                      r="0"
                                      cx="-63.099359624928475"
                                      cy="-36.43043226514539"
                                      className="apexcharts-marker"
                                      stroke="#ffffff"
                                      fill="#16b1ff"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      rel="5"
                                      j="5"
                                      index="1"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                  <g className="apexcharts-series-markers">
                                    <circle
                                      id="SvgjsCircle2288"
                                      r="0"
                                      cx="0"
                                      cy="0"
                                      className="apexcharts-marker wq0l6fwu6"
                                      stroke="#ffffff"
                                      fill="#16b1ff"
                                      fillOpacity="1"
                                      strokeWidth="1"
                                      strokeOpacity="1"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                </g>
                              </g>
                              <g
                                id="SvgjsG2219"
                                className="apexcharts-yaxis"
                              ></g>
                              <g
                                id="SvgjsG2222"
                                className="apexcharts-datalabels"
                                datarealindex="0"
                              ></g>
                              <g
                                id="SvgjsG2239"
                                className="apexcharts-datalabels"
                                datarealindex="1"
                              ></g>
                            </g>
                            <line
                              id="SvgjsLine2282"
                              x1="0"
                              y1="0"
                              x2="313.4569330215454"
                              y2="0"
                              stroke="#b6b6b6"
                              strokeDasharray="0"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            ></line>
                            <line
                              id="SvgjsLine2283"
                              x1="0"
                              y1="0"
                              x2="313.4569330215454"
                              y2="0"
                              strokeDasharray="0"
                              strokeWidth="0"
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            ></line>
                            <g
                              id="SvgjsG2284"
                              className="apexcharts-yaxis-annotations"
                            ></g>
                            <g
                              id="SvgjsG2285"
                              className="apexcharts-xaxis-annotations"
                            ></g>
                            <g
                              id="SvgjsG2286"
                              className="apexcharts-point-annotations"
                            ></g>
                          </g>
                          <g
                            id="SvgjsG2214"
                            className="apexcharts-annotations"
                          ></g>
                        </svg>
                        <div className="apexcharts-tooltip apexcharts-theme-light">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: "12px",
                            }}
                          ></div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: "1" }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{
                                backgroundColor: "rgb(144, 85, 253)",
                              }}
                            ></span>
                            <div
                              className="apexcharts-tooltip-text"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: "12px",
                              }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label"></span>
                                <span className="apexcharts-tooltip-text-y-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                <span className="apexcharts-tooltip-text-goals-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label"></span>
                                <span className="apexcharts-tooltip-text-z-value"></span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: "2" }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{
                                backgroundColor: "rgb(22, 177, 255)",
                              }}
                            ></span>
                            <div
                              className="apexcharts-tooltip-text"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: "12px",
                              }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label"></span>
                                <span className="apexcharts-tooltip-text-y-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                <span className="apexcharts-tooltip-text-goals-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label"></span>
                                <span className="apexcharts-tooltip-text-z-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                          <div className="apexcharts-yaxistooltip-text"></div>
                        </div>
                      </div>
                    </div>
                    <div className="resize-triggers">
                      <div className="expand-trigger">
                        <div style={{ width: "389px", height: "365px" }}></div>
                      </div>
                      <div className="contract-trigger"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card">
                  <div className="card-body row g-2">
                    <div className="col-12 col-md-6 card-separator pe-0 pe-md-3">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                        <h5 className="m-0 me-2">Deposit</h5>
                        <a className="fw-medium" href="#">
                          View all
                        </a>
                      </div>
                      <div className="pt-2">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/payments/gumroad.png"
                                className="img-fluid"
                                alt="gumroad"
                                height="30"
                                width="30"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Gumroad Account</h6>
                                <small>Sell UI Kit</small>
                              </div>
                              <h6 className="text-success mb-0">+$4,650</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/payments/mastercard-2.png"
                                className="img-fluid"
                                alt="mastercard"
                                height="30"
                                width="30"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Mastercard</h6>
                                <small>Wallet deposit</small>
                              </div>
                              <h6 className="text-success mb-0">+$92,705</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/payments/stripes.png"
                                className="img-fluid"
                                alt="stripes"
                                height="30"
                                width="30"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Stripe Account</h6>
                                <small>iOS Application</small>
                              </div>
                              <h6 className="text-success mb-0">+$957</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/payments/american-bank.png"
                                className="img-fluid"
                                alt="american"
                                height="30"
                                width="30"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">American Bank</h6>
                                <small>Bank Transfer</small>
                              </div>
                              <h6 className="text-success mb-0">+$6,837</h6>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/payments/citi.png"
                                className="img-fluid"
                                alt="citi"
                                height="30"
                                width="30"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Bank Account</h6>
                                <small>Wallet deposit</small>
                              </div>
                              <h6 className="text-success mb-0">+$446</h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 ps-0 ps-md-3 mt-3 mt-md-2">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                        <h5 className="m-0 me-2">Withdraw</h5>
                        <a className="fw-medium" href="#">
                          View all
                        </a>
                      </div>
                      <div className="pt-2">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/brands/google.png"
                                className="img-fluid"
                                alt="google"
                                height="30"
                                width="30"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Google Adsense</h6>
                                <small>Paypal deposit</small>
                              </div>
                              <h6 className="text-danger mb-0">-$145</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/brands/github.png"
                                className="img-fluid"
                                alt="github"
                                height="30"
                                width="30"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Github Enterprise</h6>
                                <small>Security &amp; compliance</small>
                              </div>
                              <h6 className="text-danger mb-0">-$1870</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/brands/slack.png"
                                className="img-fluid"
                                alt="slack"
                                height="30"
                                width="30"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Upgrade Slack Plan</h6>
                                <small>Debit card deposit</small>
                              </div>
                              <h6 className="text-danger mb-0">$450</h6>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center pb-2">
                            <div className="flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/payments/digital-ocean.png"
                                className="img-fluid"
                                alt="digital"
                                height="30"
                                width="30"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Digital Ocean</h6>
                                <small>Cloud Hosting</small>
                              </div>
                              <h6 className="text-danger mb-0">-$540</h6>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-3">
                              <img
                                src="../../assets/img/icons/brands/aws.png"
                                className="img-fluid"
                                alt="aws"
                                height="30"
                                width="30"
                              />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">AWS Account</h6>
                                <small>Choosing a Cloud Platform</small>
                              </div>
                              <h6 className="text-danger mb-0">-$21</h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="card h-100">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h5 className="card-title m-0 me-2">Sales by Countries</h5>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="saleStatus"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical mdi-24px"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="saleStatus"
                      >
                        <a className="dropdown-item waves-effect" href="#">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item waves-effect" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item waves-effect" href="#">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <div className="avatar-initial bg-label-success rounded-circle">
                            US
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1">
                            <h6 className="mb-0">$8,656k</h6>
                            <i className="mdi mdi-chevron-up mdi-24px text-success"></i>
                            <small className="text-success">25.8%</small>
                          </div>
                          <small>United states of america</small>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-0">894k</h6>
                        <small>Sales</small>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <span className="avatar-initial bg-label-danger rounded-circle">
                            UK
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1">
                            <h6 className="mb-0">$2,415k</h6>
                            <i className="mdi mdi-chevron-down mdi-24px text-danger"></i>
                            <small className="text-danger">6.2%</small>
                          </div>
                          <small>United Kingdom</small>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-0">645k</h6>
                        <small>Sales</small>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <span className="avatar-initial bg-label-warning rounded-circle">
                            IN
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1">
                            <h6 className="mb-0">865k</h6>
                            <i className="mdi mdi-chevron-up mdi-24px text-success"></i>
                            <small className="text-success"> 12.4%</small>
                          </div>
                          <small>India</small>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-0">148k</h6>
                        <small>Sales</small>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <span className="avatar-initial bg-label-secondary rounded-circle">
                            JA
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1">
                            <h6 className="mb-0">$745k</h6>
                            <i className="mdi mdi-chevron-down mdi-24px text-danger"></i>
                            <small className="text-danger">11.9%</small>
                          </div>
                          <small>Japan</small>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-0">86k</h6>
                        <small>Sales</small>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <span className="avatar-initial bg-label-danger rounded-circle">
                            KO
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1">
                            <h6 className="mb-0">$45k</h6>
                            <i className="mdi mdi-chevron-up mdi-24px text-success"></i>
                            <small className="text-success">16.2%</small>
                          </div>
                          <small>Korea</small>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-0">42k</h6>
                        <small>Sales</small>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <span className="avatar-initial bg-label-primary rounded-circle">
                            CH
                          </span>
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-1">
                            <h6 className="mb-0">$12k</h6>
                            <i className="mdi mdi-chevron-up mdi-24px text-success"></i>
                            <small className="text-success">14.8%</small>
                          </div>
                          <small>China</small>
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="mb-0">8k</h6>
                        <small>Sales</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-md-6">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="table-light">
                        <tr>
                          <th className="text-truncate">User</th>
                          <th className="text-truncate">Email</th>
                          <th className="text-truncate">Role</th>
                          <th className="text-truncate">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-3">
                                <img
                                  src="../../assets/img/avatars/1.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Jordan Stevenson
                                </h6>
                                <small className="text-truncate">
                                  @amiccoo
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            susanna.Lind57@gmail.com
                          </td>
                          <td className="text-truncate">
                            <i className="mdi mdi-laptop mdi-24px text-danger me-1"></i>{" "}
                            Admin
                          </td>
                          <td>
                            <span className="badge bg-label-warning rounded-pill">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-3">
                                <img
                                  src="../../assets/img/avatars/3.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Benedetto Rossiter
                                </h6>
                                <small className="text-truncate">
                                  @brossiter15
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            estelle.Bailey10@gmail.com
                          </td>
                          <td className="text-truncate">
                            <i className="mdi mdi-pencil-outline text-info mdi-24px me-1"></i>{" "}
                            Editor
                          </td>
                          <td>
                            <span className="badge bg-label-success rounded-pill">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-3">
                                <img
                                  src="../../assets/img/avatars/2.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Bentlee Emblin
                                </h6>
                                <small className="text-truncate">
                                  @bemblinf
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">milo86@hotmail.com</td>
                          <td className="text-truncate">
                            <i className="mdi mdi-cog-outline text-warning mdi-24px me-1"></i>{" "}
                            Author
                          </td>
                          <td>
                            <span className="badge bg-label-success rounded-pill">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-3">
                                <img
                                  src="../../assets/img/avatars/5.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Bertha Biner
                                </h6>
                                <small className="text-truncate">
                                  @bbinerh
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            lonnie35@hotmail.com
                          </td>
                          <td className="text-truncate">
                            <i className="mdi mdi-pencil-outline text-info mdi-24px me-1"></i>{" "}
                            Editor
                          </td>
                          <td>
                            <span className="badge bg-label-warning rounded-pill">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-3">
                                <img
                                  src="../../assets/img/avatars/4.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Beverlie Krabbe
                                </h6>
                                <small className="text-truncate">
                                  @bkrabbe1d
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            ahmad_Collins@yahoo.com
                          </td>
                          <td className="text-truncate">
                            <i className="mdi mdi-chart-donut mdi-24px text-success me-1"></i>{" "}
                            Maintainer
                          </td>
                          <td>
                            <span className="badge bg-label-success rounded-pill">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-3">
                                <img
                                  src="../../assets/img/avatars/7.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Bradan Rosebotham
                                </h6>
                                <small className="text-truncate">
                                  @brosebothamz
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            tillman.Gleason68@hotmail.com
                          </td>
                          <td className="text-truncate">
                            <i className="mdi mdi-pencil-outline text-info mdi-24px me-1"></i>{" "}
                            Editor
                          </td>
                          <td>
                            <span className="badge bg-label-warning rounded-pill">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-3">
                                <img
                                  src="../../assets/img/avatars/6.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Bree Kilday
                                </h6>
                                <small className="text-truncate">
                                  @bkildayr
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">otho21@gmail.com</td>
                          <td className="text-truncate">
                            <i className="mdi mdi-account-outline mdi-24px text-primary me-1"></i>{" "}
                            Subscriber
                          </td>
                          <td>
                            <span className="badge bg-label-success rounded-pill">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr className="border-transparent">
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-3">
                                <img
                                  src="../../assets/img/avatars/1.png"
                                  alt="Avatar"
                                  className="rounded-circle"
                                />
                              </div>
                              <div>
                                <h6 className="mb-0 text-truncate">
                                  Breena Gallemore
                                </h6>
                                <small className="text-truncate">
                                  @bgallemore6
                                </small>
                              </div>
                            </div>
                          </td>
                          <td className="text-truncate">
                            florencio.Little@hotmail.com
                          </td>
                          <td className="text-truncate">
                            <i className="mdi mdi-account-outline mdi-24px text-primary me-1"></i>{" "}
                            Subscriber
                          </td>
                          <td>
                            <span className="badge bg-label-secondary rounded-pill">
                              Inactive
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />

          <div className="content-backdrop fade"></div>
        </div>
      </Wrapper>
    </>
  );
}

export default List;
