import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Employees = () => {
  const [rowData] = useState([
    {
      employeeType: "Clinician",
      clinicianName: "PATRICIA EPIE",
      clinicianEmailId: "epipat.pe@gmail.com",
      assigned: 6,
      onGoing: 1,
      completed: 0,
      reOpen: 0,
      total: 7,
      lastLogin: "17-May-2023 17:36:36",
    },
    {
      employeeType: "Clinician",
      clinicianName: "YUDI PATEL, PT",
      clinicianEmailId: "rehabexpertsinc15@gmail.com",
      assigned: 0,
      onGoing: 1,
      completed: 0,
      reOpen: 0,
      total: 1,
      lastLogin: "28-Oct-2022 11:56:18",
    },
    {
      employeeType: "Clinician",
      clinicianName: "Fabian Ogala",
      clinicianEmailId: "ogalaf@yahoo.com",
      assigned: 0,
      onGoing: 2,
      completed: 2,
      reOpen: 0,
      total: 4,
      lastLogin: "3-Feb-2023 17:48:22",
    },
    {
      employeeType: "Clinician",
      clinicianName: "Dionne Staten",
      clinicianEmailId: "dionnestaten@yahoo.com",
      assigned: 2,
      onGoing: 2,
      completed: 41,
      reOpen: 1,
      total: 46,
      lastLogin: "25-Jul-2024 14:55:12",
    },
    {
      employeeType: "Clinician",
      clinicianName: "Demo Clinician",
      clinicianEmailId: "demo@yahoo.com",
      assigned: 0,
      onGoing: 0,
      completed: 0,
      reOpen: 0,
      total: 0,
      lastLogin: "25-Jul-2024 14:55:12",
    },
    {
      employeeType: "Clinician",
      clinicianName: "Praise Udjue",
      clinicianEmailId: "myworldofpraise.pu@gmail.com",
      assigned: 1,
      onGoing: 2,
      completed: 7,
      reOpen: 0,
      total: 10,
      lastLogin: "25-Jul-202414:48:24",
    },
  ]);

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
      <div className="ag-theme-alpine" style={{ height: "70vh" }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </div>
  );
};

export default Employees;
