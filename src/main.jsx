import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import Employees from './pages/Employees'
import Patients from './pages/Patients'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/employees",
    element: <Employees/>,
  },
  {
    path: "/patients",
    element: <Patients/>,
  },
	 {
			path: "/admin",
			element: <Admin/>,
		},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
