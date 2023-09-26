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
import ErrorPage from './components/ErrorPage/ErrorPage';
import DonationDetails from './components/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/donation.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
        loader:()=>fetch('/donation.json')
      },
      {
        path:'/donation/:id',
        element:<DonationDetails></DonationDetails>,
        loader:()=>fetch('/donation.json')
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
