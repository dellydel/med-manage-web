import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Patients from "./pages/Patients";
import Admin from "./pages/Admin";
import Layout from "./pages/Layout";

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        tall: {
          height: 100,
          minHeight: 100,
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/patients",
        element: <Patients />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
