import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getEmployees } from "../services/employees";
import { useQuery } from "@tanstack/react-query";
import EmployeeButtonsRenderer from "../components/action_buttons/EmployeeButtonsRenderer";
import { Button } from "@mui/material";
import { useState } from "react";
import AddEmployee from "./AddEmployee";
const Employees = () => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("");
  const [employee, setEmployee] = useState(null);
  const { isPending, data: employees } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });
  const columnDefs = [
    {
      field: "employeeId",
      hide: true,
    },
    {
      field: "fullName",
      headerName: "Employee Name",
      flex: 1,
      filter: true,
    },
    {
      field: "email",
      headerName: "Employee Email",
      flex: 1,
      filter: true,
    },
    {
      field: "employeeType",
      headerName: "Employee Type",
      flex: 1,
      filter: true,
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
      filter: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: "310px",
      cellRenderer: EmployeeButtonsRenderer,
      cellRendererParams: { setAction, setOpen, setEmployee },
    },
  ];
  return (
    <div>
      <h2>Employee Management</h2>
      <Button
        variant="outlined"
        sx={{ mb: 1 }}
        onClick={() => {
          setAction("Add");
          setOpen(true);
        }}
      >
        Add Employee
      </Button>
      {open && (
        <AddEmployee
          open={open}
          onClose={() => {
            setOpen(false);
            setAction("");
            setEmployee(null);
          }}
          action={action}
          employee={employee}
        />
      )}
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
    </div>
  );
};
export default Employees;
