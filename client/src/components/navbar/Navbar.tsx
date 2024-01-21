import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white p-4 flex justify-between items-center h-[6rem] border-solid border-2 shadow-lg">
      {/* website name */}
      <div className="flex items-center">
        <h1 className="ml-[5%] w-[40%]">TaskTick</h1>
      </div>

      {/* Links */}
      <div className="flex space-x-2 items-center">
        <Link
          to="/register"
          className="px-4 py-2 bg-[#272727] text-white rounded hover:text-[#050505] hover:bg-[#e2e2e2] transition-colors delay-250 duration-3000 ease-in"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 border-solid border-2 border-[#272727] rounded text-[#050505] hover:bg-[#272727] hover:text-white transition-colors delay-250 duration-3000 ease-in"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
