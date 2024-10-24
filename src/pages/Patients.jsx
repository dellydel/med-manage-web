import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ReAssignButton from "../components/ReAssignButton";
import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../services/patients";
import { Button } from "@mui/material";
import { useState } from "react";
import AddPatient from "./AddPatient";
import PatientsButtonsRenderer from "../components/action_buttons/PatientsButtonsRenderer";
import AssignClinician from "./AssignClinician";
const Patients = () => {
  const [open, setOpen] = useState(false);
  const [openAssignTo, setOpenAssignTo] = useState(false);
  const { isPending, data: patients } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });
  const columnDefs = [
    { field: "patientId", hide: true },
    {
      valueGetter: (params) => {
        return params.data.firstName + " " + params.data.lastName;
      },
      headerName: "Patient Name",
      flex: 1,
      filter: true,
    },
    {
      field: "email",
      headerName: "Patient Email",
      flex: 1,
      filter: true,
    },
    {
      field: "",
      headerName: "Clinician Assigned",
      flex: 1,
      filter: true,
    },
    {
      headerName: "Assign To",
      width: "118vw",
      cellRenderer: ReAssignButton,
      cellRendererParams: {
        onClick: () => setOpenAssignTo(true),
      },
    },
    { field: "status", headerName: "Status", flex: 1, filter: true },
    {
      field: "actions",
      headerName: "Actions",
      width: "310px",
      cellRenderer: PatientsButtonsRenderer,
    },
  ];
  return (
    <div>
      <h2>Patient Management</h2>
      <Button variant="outlined" sx={{ mb: 1 }} onClick={() => setOpen(true)}>
        Add Patient
      </Button>
      {isPending && <div>loading...</div>}
      {open && <AddPatient open={open} onClose={() => setOpen(false)} />}
      {openAssignTo && (
        <AssignClinician
          open={openAssignTo}
          onClose={() => setOpenAssignTo(false)}
        />
      )}
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
