import { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ReAssignButton from "../components/ReAssignButton";
const Patients = () => {
  const [rowData] = useState([
    {
      patientID: "CHCP1045",
      patientName: "GERALD ARNORLD",
      patientEmail: "epipat.pe@gmail.com",
      clinicianAssignedId: "CHCC0008",
      status: "IN PROGRESS"
    }
  ]);
  const columnDefs = useMemo(() => {
    return [
      { field: "patientID", headerName: "Patient ID", flex: 1 },
      {
        field: "patientName",
        valueFormatter: (params) =>
          params.value.replace(/\w\S*/g, (t) => {
            return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
          }),
        headerName: "Patient Name",
        flex: 1
      },
      { field: "patientEmail", headerName: "Patient Email", flex: 1 },
      {
        field: "clinicianAssignedId",
        headerName: "Clinician Assigned",
        flex: 1
      },
      {
        field: "assignTo",
        headerName: "Assign To",
        width: "118vw",
        cellRenderer: ReAssignButton
      },
      { field: "status", headerName: "Status", flex: 1 }
    ];
  });

  const patientGridOptions = {
    defaultColDef: {
      resizable: true,
    },
    pagination: true,
    paginationPageSize: 10,
    paginationPageSizeSelector: [10],
    onGridReady: (params) => {
      params.api.sizeColumnsToFit();
      window.setTimeout(() => {
        const colIds = params.columnApi.getAllColumns().map((c) => c.colId);
        params.columnApi.autoSizeColumns(colIds);
      }, 5);
    },
  };

  return (
    <div>
      <h2>Patient Management</h2>
      <div className="ag-theme-alpine" style={{ height: "70vh" }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </div>
  );
};
export default Patients;
