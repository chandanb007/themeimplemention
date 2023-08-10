import React, { useEffect, useState, useMemo } from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";
import HttpHelper from "../../../services/HttpHelper";
import UserRolesEnum from "../../../Enums/UserRolesEnum";
import { useNavigate } from "react-router-dom";
import { MaterialReactTable } from "material-react-table";
import { Box, Button, ListItemIcon, MenuItem, Typography } from "@mui/material";

function List(props) {
  const navigate = useNavigate();
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
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        //muiTableHeadCellProps: { sx: { color: "green" } },
        Cell: ({ renderedCellValue, row }) => {
          console.log(row.original, renderedCellValue);
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              alt="avatar"
              height={30}
              src={
                row.original.profile?.profile_picture
                  ? row.original.profile.profile_picture
                  : "/user.png"
              }
              loading="lazy"
              style={{ borderRadius: "50%" }}
            />
            {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
            <span>{renderedCellValue}</span>
          </Box>;
        },
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "mobile",
        header: "Mobile",
      },
      {
        accessorKey: "is_active",
        header: "Status",
      },
    ],
    []
  );
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
                      onClick={() => navigate("/school/add")}
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
                    <MaterialReactTable
                      initialState={{ density: "compact" }}
                      columns={columns}
                      data={schools}
                      enableRowSelection //enable some features
                      enableColumnOrdering
                      enableGlobalFilter={false} //turn off a feature
                    />
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
