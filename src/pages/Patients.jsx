import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
const Patients = () => {
  const [rowData] = useState([
    {
      serialNo: 1,
      patientID: "CHCP1045",
      patientName: "GERALD ARNORLD",
      patientEmail: "epipat.pe@gmail.com(CHCC0008)",
      clinitianAssignedId: "CHCC0008",
      assignedTo: "ButtonHere",
      status: "IN PROGRESS",
    },
  ]);

  const columnDefs = [
    { field: "serialNo", headerName: "S No" },
    { field: "patientID", headerName: "Patient ID" },
    {
      field: "patientName",
      valueFormatter: (params) =>
        params.value.replace(/\w\S*/g, (t) => {
          return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        }),
      headerName: "Patient Name",
    },
    { field: "patientEmail", headerName: "Patient Email" },
    { field: "clinitianAssignedId", headerName: "Clinitian Assigned (ID)" },
    { field: "assignedTo", headerName: "Assigned To" },
    { field: "status", headerName: "Status" },
  ];
  return (
    <div className="ag-theme-alpine" style={{ height: "70vh", width: "80vw" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default Patients;
