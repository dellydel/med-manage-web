import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../services/apiPatients";
const Patients = () => {
  const {
    isPending,
    data: patients,
    error,
  } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });
  const [rowData] = [patients];
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
        headerName: "Patient Name",
      },
      { field: "patientEmail", headerName: "Patient Email" },
      { field: "clinicianAssignedId", headerName: "Clinician Assigned" },
      {
        field: "assignedTo",
        headerName: "Assigned To",
        cellRenderer: ActionButton,
      },
      { field: "status", headerName: "Status" },
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
  if (isPending) return "loading...";
  if (!patients) return "No patient records";
  return (
    <div>
      <h2>Patient Management</h2>
      <div
        className="ag-theme-alpine"
        style={{ height: "70vh", width: "80vw" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={patientGridOptions}
        />
      </div>
    </div>
  );
};
export default Patients;
