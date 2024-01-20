import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/user/landing/LandingPage";
import LoginPage from "./pages/user/login/LoginPage";
import RegisterPage from "./pages/user/register/RegisterPage";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Logged in User Pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App