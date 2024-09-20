import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Employees = () => {
  const [rowData] = useState([
    {
      serialNo: 1,
      employeeType: "Clinician",
      clinicianName: "PATRICIA EPIE",
      clinicianEmailId: "epipat.pe@gmail.com(CHCC0008)",
      assigned: 6,
      onGoing: 1,
      completed: 0,
      reOpen: 0,
      total: 7,
      lastLogin: "17-May-2023 17:36:36",
    },
  ]);

  const columnDefs = [
    { field: "serialNo", headerName: "S No" },
    { field: "employeeType", headerName: "Employee Type" },
    {
      field: "clinicianName",
      valueFormatter: (params) =>
        params.value.replace(/\w\S*/g, (t) => {
          return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        }),
      headerName: "Clinician Name",
    },
    { field: "clinicianEmailId", headerName: "Clinician Email (ID)" },
    { field: "assigned", headerName: "Assigned" },
    { field: "onGoing", headerName: "On going" },
    { field: "completed", headerName: "Completed" },
    { field: "reOpen", headerName: "Re Open" },
    { field: "total", headerName: "Total" },
    { field: "lastLogin", headerName: "Last Login" },
  ];
  return (
    <div className="ag-theme-alpine" style={{ height: "70vh", width: "80vw" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default Employees;
