import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";
import HttpHelper from "../../../services/HttpHelper";
import UserRolesEnum from "../../../Enums/UserRolesEnum";

function List(props) {
  const [schools, setSchools] = useState([]);
  const getSchools = async () => {
    await HttpHelper.get("user/userByRole/" + UserRolesEnum.SCHOOL)
      .then((response) => {
        setSchools(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getSchools();
  }, []);
  return (
    <>
      <Wrapper breakCrum="Dashboard/home">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y mt-5">
            <h4 class="py-3 mb-4">
              <span class="text-muted fw-light">All /</span> Schools
            </h4>
            <div className="row gy-4">
              <div class="col-md mb-4 mb-md-0">
                <div class="card">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0"></h5>
                    <button
                      class="btn btn-secondary add-new btn-primary"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      type="button"
                    >
                      <span>
                        <i class="mdi mdi-plus me-0 me-sm-1"></i>
                        <span class="d-none d-sm-inline-block">Add School</span>
                      </span>
                    </button>
                  </div>
                  <div class="card-body">
                    <table className="table">
                      <thead className="table-light">
                        <tr>
                          <th className="text-truncate">Name</th>
                          <th className="text-truncate">Email</th>
                          <th className="text-truncate">Mobile</th>
                          <th className="text-truncate">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schools?.length > 0
                          ? schools.map((school, index) => {
                              return (
                                <>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar avatar-sm me-3">
                                          <img
                                            src={
                                              "/" +
                                              school?.profile?.profile_picture
                                            }
                                            alt="Avatar"
                                            className="rounded-circle"
                                          />
                                        </div>
                                        <div>
                                          <h6 className="mb-0 text-truncate">
                                            {school?.profile?.first_name}
                                          </h6>
                                          {/* <small className="text-truncate">
                                            {school?.email}
                                          </small> */}
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-truncate">
                                      {school?.email}
                                    </td>
                                    <td className="text-truncate">
                                      <i className="mdi mdi-phone mdi-24px text-danger me-1"></i>{" "}
                                      {school?.mobile}
                                    </td>
                                    <td>
                                      <span className="badge bg-label-warning rounded-pill">
                                        {school?.is_active == 1
                                          ? "Active"
                                          : "Pending"}
                                      </span>
                                    </td>
                                  </tr>
                                </>
                              );
                            })
                          : null}
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
