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
  const { notify } = useAuth();
  const navigate = useNavigate();
  const { showLoader } = useAuth();
  const [subscriptions, setSubscriptions] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });

  const getSubscriptionList = async () => {
    showLoader(true);
    if (subscriptions == undefined || !subscriptions.length) {
      setIsLoading(true);
    } else {
      setIsRefetching(true);
    }
    await HttpHelper.get("subscription", {
      page: pagination.pageIndex,
      filter: columnFilters ? JSON.stringify(columnFilters) : null,
    })
      .then((response) => {
        setSubscriptions(response.data.data.data);
        setRowCount(response.data.total);
        showLoader(false);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
        showLoader(false);
      });
    setIsError(false);
    setIsLoading(false);
    setIsRefetching(false);
  };
  const deleteSubscription = async (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        HttpHelper.delete("subscription/" + id)
          .then((response) => {
            notify("success", "Deleted successfully");
            getSubscriptionList();
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const changeStatus = async (id, status) => {
    await HttpHelper.put("subscription/updateStatus/" + id)
      .then((reseponse) => {
        notify("success", "Updated successfully");
        getSubscriptionList();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getSubscriptionList();
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);
  useEffect(() => {
    getSubscriptionList();
  }, []);
  useEffect(() => {
    console.log(pagination);
  }, [pagination]);

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.school?.first_name ?? "-",
        header: "School Name",
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 250,
      },
      {
        accessorKey: "termly_fee",
        header: "Termly Fee",
      },
      {
        accessorKey: "yearly_fee",
        header: "Yearly Fee",
      },
      {
        accessorFn: (row) => (
          <div class="mb-3">
            <label class="switch switch-primary">
              <input
                onChange={(e) => {
                  changeStatus(row.id, e.currentTarget.checked);
                }}
                type="checkbox"
                checked={row.status == 0 ? false : true}
                class="switch-input"
                required=""
              />
              <span class="switch-toggle-slider">
                <span class="switch-on"></span>
                <span class="switch-off"></span>
              </span>
            </label>
          </div>
        ),
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
            <h4 class="mb-4 breadcrumWrapper">
              <span class="text-muted fw-light brreadCrumText">All /</span> Subscription Plans
            </h4>
            <div className="row gy-4">
              <div class="col-md mb-4 mb-md-0">
                <div class="card">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0"></h5>
                    <button
                      onClick={() => navigate("/subscription/add")}
                      class="btn btn-secondary add-new btn-primary"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      type="button"
                    >
                      <span>
                        <i class="mdi mdi-plus me-0 me-sm-1"></i>
                        <span class="d-none d-sm-inline-block">Add</span>
                      </span>
                    </button>
                  </div>
                  <div class="card-body">
                    <MaterialReactTable
                      columns={columns}
                      data={subscriptions}
                      getRowId={(row) => row.id}
                      initialState={{
                        showColumnFilters: false,
                        density: "compact",
                      }}
                      manualFiltering
                      manualPagination
                      manualSorting
                      enableRowActions
                      muiToolbarAlertBannerProps={
                        isError
                          ? {
                              color: "error",
                              children: "Error loading data",
                            }
                          : undefined
                      }
                      onColumnFiltersChange={setColumnFilters}
                      onGlobalFilterChange={setGlobalFilter}
                      onPaginationChange={setPagination}
                      onSortingChange={setSorting}
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
                            navigate("/subscription/edit/" + row.id);
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
                            deleteSubscription(row.id);
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
