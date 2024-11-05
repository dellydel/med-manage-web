import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getEmployees } from "../services/employees";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import EmployeeButtonsRenderer from "../components/action_buttons/EmployeeButtonsRenderer";
import { Button } from "@mui/material";
import { useState } from "react";
import AddEmployee from "./AddEmployee";
import { useDeleteEmployeeMutation } from "../mutations/useDeleteEmployeeMutation";
import Toast from "../components/Toast";
const Employees = () => {
  const [open, setOpen] = useState(false);
  const { isPending, data: employees } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees
  });
  const [toastData, setToastData] = useState({
    openToast: false,
    toastMessage: "",
    toastSeverity: ""
  });
  const queryClient = useQueryClient();
  const employeeRow = useDeleteEmployeeMutation();
  const columnDefs = [
    {
      field: "employeeId",
      hide: true
    },
    {
      field: "fullName",
      headerName: "Employee Name",
      flex: 1,
      filter: true
    },
    {
      field: "email",
      headerName: "Employee Email",
      flex: 1,
      filter: true
    },
    {
      field: "employeeType",
      headerName: "Employee Type",
      flex: 1,
      filter: true
    },
    { field: "assigned", headerName: "Assigned", flex: 1, filter: true },
    { field: "onGoing", headerName: "On going", flex: 1, filter: true },
    { field: "completed", headerName: "Completed", flex: 1, filter: true },
    { field: "reOpen", headerName: "Re Open", flex: 1, filter: true },
    { field: "total", headerName: "Total", flex: 1, filter: true },
    {
      field: "lastLogin",
      headerName: "Last Login",
      flex: 1,
      filter: true
    },
    {
      field: "actions",
      headerName: "Actions",
      width: "310px",
      cellRenderer: (params) => (
        <EmployeeButtonsRenderer
          data={params.data}
          onDelete={() => {
            handleDeleteEmployee(params.data.employeeId);
          }}
        />
      )
    }
  ];
  const handleClose = () => {
    setToastData({
      ...toastData,
      openToast: false
    });
  };
  const handleDeleteEmployee = (id) => {
    employeeRow.mutate(id, {
      onSuccess: (data) => {
        setToastData({
          openToast: true,
          toastMessage: data,
          toastSeverity: "success"
        });
      },
      onSettled: async (_, err) => {
        if (err) {
          setToastData({
            openToast: true,
            toastMessage: `Employee could not be deleted:  ${err.message}`,
            toastSeverity: "error"
          });
        } else {
          await queryClient.invalidateQueries({ queryKey: ["employees"] });
        }
      }
    });
  };
  return (
    <>
      <h2>Employee Management</h2>
      <Button variant="outlined" sx={{ mb: 1 }} onClick={() => setOpen(true)}>
        Add Employee
      </Button>
      <AddEmployee open={open} onClose={() => setOpen(false)} />
      {isPending && <div>loading...</div>}
      <div className="ag-theme-alpine" style={{ height: "70vh" }}>
        <AgGridReact
          rowData={employees}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50, 100]}
        />
      </div>
      <Toast
        open={toastData.openToast}
        onClose={handleClose}
        message={toastData.toastMessage}
        severity={toastData.toastSeverity}
      />
    </>
  );
};
export default Employees;
