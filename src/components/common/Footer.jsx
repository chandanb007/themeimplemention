import React from "react";

function Footer(props) {
  return (
    <>
      <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl">
          <div className="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
            <div className="text-body mb-2 mb-md-0">
              ©<script>document.write(new Date().getFullYear());</script>, made
              with{" "}
              <span className="text-danger">
                <i className="tf-icons mdi mdi-heart"></i>
              </span>{" "}
              by
              <a
                href="https://themeselection.com"
                target="_blank"
                className="footer-link fw-medium"
              >
                ThemeSelection
              </a>
            </div>
            <div className="d-none d-lg-inline-block">
              <a
                href="https://themeselection.com/license/"
                className="footer-link me-3"
                target="_blank"
              >
                License
              </a>
              <a
                href="https://themeselection.com/"
                target="_blank"
                className="footer-link me-3"
              >
                More Themes
              </a>

              <a
                href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/"
                target="_blank"
                className="footer-link me-3"
              >
                Documentation
              </a>

              <a
                href="https://themeselection.com/support/"
                target="_blank"
                className="footer-link d-none d-sm-inline-block"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
