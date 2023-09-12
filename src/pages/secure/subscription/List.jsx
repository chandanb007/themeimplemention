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

function List(props) {
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
        accessorFn: (row) =>
          row.status == 1 ? (
            <span class="badge bg-label-success me-1">Active</span>
          ) : (
            <span class="badge bg-label-warning me-1">Inactive</span>
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
            <h4 class="py-3 mb-4">
              <span class="text-muted fw-light">All /</span> Subscription Plans
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
                      enableRowSelection
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
                      renderRowActionMenuItems={({ closeMenu }) => [
                        <MenuItem
                          key={0}
                          onClick={() => {
                            // View profile logic...
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
                          onClick={(row) => {
                            debugger;
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
