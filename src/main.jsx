import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthProdiver, { AuthContex } from './providers/AuthProdiver';
import Orders from './components/Orders';
import Profile from './components/Profile';
import PrivateRoutes from './routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'orders',
        element: <PrivateRoutes><Orders /></PrivateRoutes>
      },
      {
        path: 'profile',
        element: <PrivateRoutes><Profile /></PrivateRoutes>
      },
      {
        path: 'orders',
        element: <Orders />
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProdiver>
      <RouterProvider router={router} />
    </AuthProdiver>
  </React.StrictMode>,
)
