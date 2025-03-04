import { useQuery } from "@tanstack/react-query";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getPatients } from "../services/patients";

const PatientsListPage = () => {
  const {
    data: patients,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });
  const columnDefs = [
    {
      headerName: "Patient ID",
      field: "patientId",
      sortable: true,
      filter: true,
    },
    {
      valueGetter: (params) => {
        return params.data.firstName + " " + params.data.lastName;
      },
      headerName: "Patient Name",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Patient Email",
      field: "email",
      sortable: true,
      filter: true,
    },
    { headerName: "Status", field: "status", sortable: true, filter: true },
  ];

  return (
    <div>
      <h2>Patients List</h2>
      {isLoading && <p>Loading patients...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && (
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
          {patients.length > 0 ? (
            <AgGridReact
              rowData={patients}
              columnDefs={columnDefs}
              pagination={true}
              aginationPageSize={10}
              paginationPageSizeSelector={[10, 20, 50, 100]}
            />
          ) : (
            <p>Patients Not Found.</p>
            // <p>Error: {error.message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PatientsListPage;
