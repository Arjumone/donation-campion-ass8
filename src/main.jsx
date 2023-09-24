import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistic from './components/Statistic/Statistic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/donation",
    element: <Donation></Donation>,
  },
  {
    path: "/statistic",
    element: <Statistic></Statistic>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
