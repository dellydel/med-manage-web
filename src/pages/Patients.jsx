import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ReAssignButton from "../components/ReAssignButton";
import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../services/patients";
import { Button } from "@mui/material";
import { useState } from "react";
import AddPatient from "./AddPatient";
const Patients = () => {
  const [open, setOpen] = useState(false);
  const { isPending, data: patients } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });
  const columnDefs = [
    { field: "patientID", headerName: "Patient ID", flex: 1, filter: true },
    {
      field: "patientName",
      valueFormatter: (params) =>
        params.value.replace(/\w\S*/g, (t) => {
          return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        }),
      headerName: "Patient Name",
      flex: 1,
      filter: true,
    },
    {
      field: "patientEmail",
      headerName: "Patient Email",
      flex: 1,
      filter: true,
    },
    {
      field: "clinicianAssignedId",
      headerName: "Clinician Assigned",
      flex: 1,
      filter: true,
    },
    {
      field: "assignTo",
      headerName: "Assign To",
      width: "118vw",
      cellRenderer: ReAssignButton,
    },
    { field: "status", headerName: "Status", flex: 1, filter: true },
  ];
  return (
    <div>
      <h2>Patient Management</h2>
      <Button variant="outlined" sx={{ mb: 1 }} onClick={() => setOpen(true)}>
        Add Patient
      </Button>
      {isPending && <div>loading...</div>}
      <AddPatient open={open} onClose={() => setOpen(false)} />
      <div className="ag-theme-alpine" style={{ height: "70vh" }}>
        <AgGridReact
          rowData={patients}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10]}
        />
      </div>
    </div>
  );
};
export default Patients;
