import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../sidebar/UserSidebar";

const UserLayout = () => {
  return (
    <div>
      <UserSidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
