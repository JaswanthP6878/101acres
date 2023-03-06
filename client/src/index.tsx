import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import SignUpPage from './routes/SignupPage';

const router = createBrowserRouter([
  {
    path: '/',
    element : <LandingPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  }
]
)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);
