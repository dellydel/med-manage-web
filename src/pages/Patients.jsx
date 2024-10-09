import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ReAssignButton from "../components/ReAssignButton";
import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../services/patients";

const Patients = () => {
  const { isPending, data: patients } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });
  const columnDefs = [
    { field: "patientID", headerName: "Patient ID", flex: 1 },
    {
      field: "patientName",
      valueFormatter: (params) =>
        params.value.replace(/\w\S*/g, (t) => {
          return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        }),
      headerName: "Patient Name",
      flex: 1,
    },
    { field: "patientEmail", headerName: "Patient Email", flex: 1 },
    {
      field: "clinicianAssignedId",
      headerName: "Clinician Assigned",
      flex: 1,
    },
    {
      field: "assignTo",
      headerName: "Assign To",
      width: "118vw",
      cellRenderer: ReAssignButton,
    },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  return (
    <div>
      <h2>Patient Management</h2>
      {isPending && <div>loading...</div>}
      <div className="ag-theme-alpine" style={{ height: "70vh" }}>
        <AgGridReact rowData={patients} columnDefs={columnDefs} />
      </div>
    </div>
  );
};
export default Patients;
