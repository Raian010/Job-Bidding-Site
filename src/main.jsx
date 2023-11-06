import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Authprovider from './Provider/Authprovider';
import Login from './Components/Login/Login';
import Main from './Pages/Main/Main';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Home from './Pages/Home/Home';
import Register from './Components/Register/Register';
import Addjobs from './Pages/AddJobs/Addjobs';
import MypostedJobs from './Pages/Myposted/MypostedJobs';
import Update from './Pages/Update/Update';
import PrivateRoute from './Private/PrivateRoute';
import Details from './Pages/Home/Details';
import { element } from 'prop-types';
import BidForm from './Pages/BidForm/BidForm';
import MyBidPage from './Pages/MyBid/MyBidPage';
import BidRequest from './Pages/BidRequest/BidRequest';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/add",
        element: <Addjobs></Addjobs>
      },
      {
        path: "/posted",
        element: <PrivateRoute><MypostedJobs></MypostedJobs></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/bidform/:id",
      element:<BidForm></BidForm>,
      loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/mybid",
        element: <MyBidPage></MyBidPage>,
        loader:({params}) => fetch(`http://localhost:5000/bids/${params.email}`)
      },
      {
        path: "/request",
        element: <BidRequest></BidRequest>,
        loader: () => fetch('http://localhost:5000/bids')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
