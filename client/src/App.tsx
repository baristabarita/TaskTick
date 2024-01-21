import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserLayout from './components/layouts/UserLayout';

import LandingPage from "./pages/user/landing/LandingPage";
import LoginPage from "./pages/user/login/LoginPage";
import RegisterPage from "./pages/user/register/RegisterPage";

import UserDashboard from './pages/user/dashboard/UserDashboard';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Logged in User Pages */}
        <Route element={<UserLayout />} >
          <Route path="/userdash" element={<UserDashboard/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App