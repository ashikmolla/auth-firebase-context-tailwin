import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './assets/component/Home';
import Register from './assets/component/Register';
import Login from './assets/component/Login';
import AuthProvider from './provider/AuthProvider';
import Orders from './assets/component/Orders';
import PrivateRouter from './assets/router/PrivateRouter';
import UserProfile from './assets/component/UserProfile';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      }, {
        path: 'register',
        element:<Register/>
      },{
        path:'login',
        element:<Login/>
      },{
        path:'orders',
        element:<PrivateRouter><Orders/></PrivateRouter>
      },{
        path:'userprofile',
        element:<PrivateRouter><UserProfile/></PrivateRouter>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
