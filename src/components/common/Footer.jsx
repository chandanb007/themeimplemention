import React from "react";

function Footer(props) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl">
          <div className="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
            <div className="text-body mb-2 mb-md-0">© {currentYear},</div>
            <div className="d-none d-lg-inline-block"></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
