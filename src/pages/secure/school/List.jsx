import React, { useEffect, useState, useMemo } from "react";
import Wrapper from "../../../components/common/Wrapper";
import Footer from "../../../components/common/Footer";
import HttpHelper from "../../../services/HttpHelper";
import UserRolesEnum from "../../../Enums/UserRolesEnum";
import { useNavigate } from "react-router-dom";
import { MaterialReactTable } from "material-react-table";
import { Box, Button, ListItemIcon, MenuItem, Typography } from "@mui/material";
import { useAuth } from "../../../context/AuthContext";
import { Edit, Delete } from "@mui/icons-material";
import Swal from "sweetalert2";

function List(props) {
  const { showLoader, notify } = useAuth();
  const navigate = useNavigate();
  const [schools, setSchools] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const getSchools = async () => {
    showLoader(true);
    if (!schools.length) {
      setIsLoading(true);
    } else {
      setIsRefetching(true);
    }

    await HttpHelper.get("user/userByRole/" + UserRolesEnum.SCHOOL, {
      page: pagination.pageIndex == 1 ? 2 : pagination.pageIndex,
      filter: columnFilters ? JSON.stringify(columnFilters) : null,
    })
      .then((response) => {
        setSchools(response.data.data);
        setRowCount(response.data.total);
        showLoader(false);
      })
      .catch((error) => {
        showLoader(false);
        setIsError(true);
        console.log(error);
      });
    setIsError(false);
    setIsLoading(false);
    setIsRefetching(false);
  };
  useEffect(() => {
    getSchools();
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);
  useEffect(() => {
    getSchools();
  }, []);
  useEffect(() => {
    console.log(pagination);
  }, [pagination]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "first_name",
        header: "Name",
        size: 250,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              alt="avatar"
              width={30}
              height={30}
              src={row.original.profile?.profile_picture ?? "/user.png"}
              loading="lazy"
              style={{ borderRadius: "50%" }}
            />
            <span>{row.original?.first_name}</span>
          </Box>
        ),
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
        accessorFn: (row) =>
          row.is_active == 1 ? (
            <span class="badge bg-label-success me-1">Active</span>
          ) : (
            <span class="badge bg-label-warning me-1">Pending</span>
          ),
        header: "Status",
      },
    ],
    []
  );
  const deleteUser = async (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        HttpHelper.delete("user/delete/" + id)
          .then((response) => {
            notify("success", "Deleted successfully");
            getSchools();
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <>
      <Wrapper breakCrum="Dashboard/home">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y mt-5">
            <h4 class="mb-4 breadcrumWrapper">
              <span class="text-muted fw-light brreadCrumText">All /</span> Schools
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
                      getRowId={(row) => row.id}
                      initialState={{
                        showColumnFilters: true,
                        density: "compact",
                      }}
                      muiToolbarAlertBannerProps={
                        isError
                          ? {
                              color: "error",
                              children: "Error loading data",
                            }
                          : undefined
                      }
                      enableColumnFilterModes
                      manualFiltering
                      manualPagination
                      manualSorting
                      columns={columns}
                      data={schools}
                      //enableRowSelection //enable some features
                      enableColumnOrdering
                      enableGlobalFilter={false} //turn off a feature
                      onColumnFiltersChange={setColumnFilters}
                      onGlobalFilterChange={setGlobalFilter}
                      onPaginationChange={setPagination}
                      onSortingChange={setSorting}
                      enableRowActions
                      rowCount={rowCount}
                      state={{
                        columnFilters,
                        globalFilter,
                        isLoading,
                        pagination,
                        showAlertBanner: isError,
                        showProgressBars: isRefetching,
                        sorting,
                      }}
                      renderRowActionMenuItems={({ row, closeMenu }) => [
                        <MenuItem
                          key={0}
                          onClick={() => {
                            navigate("/school/edit/" + row.id);
                            closeMenu();
                          }}
                          sx={{ m: 0 }}
                        >
                          <ListItemIcon>
                            <Edit />
                          </ListItemIcon>
                          Edit
                        </MenuItem>,
                        <MenuItem
                          key={1}
                          onClick={() => {
                            deleteUser(row.id);
                            closeMenu();
                          }}
                          sx={{ m: 0 }}
                        >
                          <ListItemIcon>
                            <Delete />
                          </ListItemIcon>
                          Delete
                        </MenuItem>,
                      ]}
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
