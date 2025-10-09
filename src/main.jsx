import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Apps from './pages/Apps.jsx'
import Installation from './pages/Installation.jsx'
import Error from './component/Error.jsx'
import AppDetails from './component/AppDetails.jsx'
import Loading from './component/Loading.jsx'
import AppError from './component/AppError.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,

    hydrateFallbackElement: <Loading></Loading>,
    children: [
      { index: true, Component: Home },
      { path: "apps", Component: Apps },
      { path: "installation", Component: Installation },
      { path: "/details/:id",
        errorElement: <AppError></AppError>,
        Component: AppDetails },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>
);
