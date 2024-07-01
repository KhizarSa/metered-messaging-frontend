import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './ui/Login';
import Signup from './ui/Signup';
import Home from './ui/Home';
import CredentialsState from './context/credentialsState';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default function App() {
  return (
    <div className="text-base">
      <CredentialsState>
        <RouterProvider router={router} />
      </CredentialsState>
    </div>
  );
}
