import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getEployees } from "../services/apiEmployees";
import { useQuery } from "@tanstack/react-query";

const Employees = () => {
  const {
    isPending,
    data: employees,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEployees,
  });

  const [rowData] = [employees];

  const columnDefs = [
    { field: "employeeType", headerName: "Employee Type", flex: 1 },
    {
      field: "clinicianName",
      valueFormatter: (params) =>
        params.value.replace(/\w\S*/g, (t) => {
          return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        }),
      headerName: "Clinician Name",
      flex: 1,
    },
    { field: "clinicianEmailId", headerName: "Clinician Email", flex: 1 },
    { field: "assigned", headerName: "Assigned", flex: 1 },
    { field: "onGoing", headerName: "On going", flex: 1 },
    { field: "completed", headerName: "Completed", flex: 1 },
    { field: "reOpen", headerName: "Re Open", flex: 1 },
    { field: "total", headerName: "Total", flex: 1 },
    { field: "lastLogin", headerName: "Last Login", flex: 1 },
  ];

  if (isPending) return "loading...";
  if (!employees) return "No Employee records";

  return (
    <div>
      <h2>Employee Management</h2>
      <div className="ag-theme-alpine" style={{ height: "70vh" }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </div>
  );
};

export default Employees;
