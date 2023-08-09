import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

function Wrapper(props) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleScroll = (e) => {
    var layoutPage = document.querySelector(".layout-page");
    if (window.pageYOffset > 0 && layoutPage !== null) {
      layoutPage.classList.add("window-scrolled");
    } else if (layoutPage !== null) {
      layoutPage.classList.remove("window-scrolled");
    }
};
  return (
    <div className="light-style layout-navbar-fixed layout-menu-fixed">
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SideBar />
          <div className="layout-page">
            <Header {...props} />
            {props.children}
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
        <div
          className="drag-target"
          style={{
            touchAction: "pan-y",
            userSelect: "none",
            WebkitSserDrag: "none",
            WebkitTapHighlighColor: "rgba(0, 0, 0, 0)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Wrapper;
