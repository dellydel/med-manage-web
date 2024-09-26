import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
const Patients = () => {
  const [rowData] = useState([
    {
      patientID: "CHCP1045",
      patientName: "GERALD ARNORLD",
      patientEmail: "epipat.pe@gmail.com",
      clinicianAssignedId: "CHCC0008",
      assignedTo: "ButtonHere",
      status: "IN PROGRESS"
    }
  ]);
  const columnDefs = [
    { field: "patientID", headerName: "Patient ID" },
    {
      field: "patientName",
      valueFormatter: (params) =>
        params.value.replace(/\w\S*/g, (t) => {
          return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        }),
      headerName: "Patient Name"
    },
    { field: "patientEmail", headerName: "Patient Email" },
    { field: "clinicianAssignedId", headerName: "Clinician Assigned" },
    { field: "assignedTo", headerName: "Assigned To" },
    { field: "status", headerName: "Status" }
  ];
  const patientGridOptions = {
    defaultColDef: {
      resizable: true
    },
    pagination: true,
    paginationPageSize: 10,
    paginationPageSizeSelector: [10],
    onGridReady: (params) => {
      params.api.sizeColumnsToFit();
    }
  };
  return (
    <div className="ag-theme-alpine" style={{ height: "70vh", width: "80vw" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        gridOptions={patientGridOptions}
      />
    </div>
  );
};

export default Patients;
