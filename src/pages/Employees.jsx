import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getEmployees } from "../services/employees";
import { useQuery } from "@tanstack/react-query";

const Employees = () => {
  const { isPending, data: employees } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

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

  return (
    <div>
      <h2>Employee Management</h2>
      {isPending && <div>loading...</div>}
      <div className="ag-theme-alpine" style={{ height: "70vh" }}>
        <AgGridReact
          rowData={employees}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10]}
        />
      </div>
    </div>
  );
};
export default Employees;
