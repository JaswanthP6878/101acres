import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignupPage';

export default function App() {
    return (
        <React.Fragment>
            {/* <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/signup' element={<SignUpPage/>} />
            </Routes> */}
            <LandingPage />
        </React.Fragment>
    )
}