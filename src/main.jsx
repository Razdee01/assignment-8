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

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "apps", Component: Apps },
      { path: "installation", Component: Installation },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
