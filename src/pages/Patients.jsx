import { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
const Patients = () => {
  const [rowData] = useState([
    {
      patientID: "CHCP1045",
      patientName: "GERALD ARNORLD",
      patientEmail: "GERALD_ARNORLD_082224153136@calvary.chc",
      clinicianAssignedId: "Christian Ogala",
      status: "IN PROGRESS"
    },
    {
      patientID: "CHCP1044",
      patientName: "PARTRI TLE",
      patientEmail: "PARTRITLE@YAHOO.COM",
      clinicianAssignedId: "Christian Ogala",
      status: "IN PROGRESS"
    },
    {
      patientID: "CHCP1042",
      patientName: "DALTON MOORE",
      patientEmail: "DALTON_MOORE_082124220156@calvary.chc",
      clinicianAssignedId: "Christian Ogala",
      status: "IN PROGRESS"
    },
    {
      patientID: "CHCP1041",
      patientName: "RICARDO MARTINEZ",
      patientEmail: "RICARDO_MARTINEZ_081924221724@calvary.chc",
      clinicianAssignedId: "Christian Ogala",
      status: "IN PROGRESS"
    },
    {
      patientID: "CHCP1040",
      patientName: "ERA JOHNSON",
      patientEmail: "ERA_JOHNSON_081924145558@.calvary.chc",
      clinicianAssignedId: "Vivian Onanaragorom",
      status: "IN PROGRESS"
    },
    {
      patientID: "CHCP1039",
      patientName: "ELIDIO RAMIREZ CARRILLO",
      patientEmail: "ELIDIO_RAMIREZCARRILLO_081624215808@gcalvary.chc",
      clinicianAssignedId: "Christian Ogala",
      status: "IN PROGRESS"
    }
  ]);
  const ActionButton = () => {
    return <button>Re Assign</button>;
  };
  const columnDefs = useMemo(() => {
    return [
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
      {
        field: "assignedTo",
        headerName: "Assigned To",
        cellRenderer: ActionButton
      },
      { field: "status", headerName: "Status" }
    ];
  });
  const patientGridOptions = {
    defaultColDef: {
      resizable: true
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
