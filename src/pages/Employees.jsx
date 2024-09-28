import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Employees = () => {
  const [rowData] = useState([
    {
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
    {
      employeeType: "Clinician",
      clinicianName: "YUDI PATEL, PT",
      clinicianEmailId: "rehabexpertsinc15@gmail.com (CHCC0007)",
      assigned: 0,
      onGoing: 1,
      completed: 0,
      reOpen: 0,
      total: 1,
      lastLogin: "28-Oct-2022 11:56:18",
    },
    {
      employeeType: "Clinician",
      clinicianName: "Fabian Ogala",
      clinicianEmailId: "ogalaf@yahoo.com (CHCC0006)",
      assigned: 0,
      onGoing: 2,
      completed: 2,
      reOpen: 0,
      total: 4,
      lastLogin: "3-Feb-2023 17:48:22",
    },
    {
      employeeType: "Clinician",
      clinicianName: "Dionne Staten",
      clinicianEmailId: "dionnestaten@yahoo.com (CHCC0005)",
      assigned: 2,
      onGoing: 2,
      completed: 41,
      reOpen: 1,
      total: 46,
      lastLogin: "25-Jul-2024 14:55:12",
    },
    {
      employeeType: "Clinician",
      clinicianName: "Demo Clinician",
      clinicianEmailId: "demo@yahoo.com(CHCC0004)",
      assigned: 0,
      onGoing: 0,
      completed: 0,
      reOpen: 0,
      total: 0,
      lastLogin: "25-Jul-2024 14:55:12",
    },
    {
      employeeType: "Clinician",
      clinicianName: "Praise Udjue",
      clinicianEmailId: "myworldofpraise.pu@gmail.com (CHCC0003)",
      assigned: 1,
      onGoing: 2,
      completed: 7,
      reOpen: 0,
      total: 10,
      lastLogin: "25-Jul-202414:48:24",
    },
  ]);

  const columnDefs = [
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

  const employeeGridOptions = {
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
      }, 50);
    },
  };
  return (
    <div>
      <h2>Employee Management</h2>
      <div
        className="ag-theme-alpine"
        style={{ height: "70vh", width: "80vw" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={employeeGridOptions}
        />
      </div>
    </div>
  );
};

export default Employees;
