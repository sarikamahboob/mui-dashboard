import React from "react";
import Routes from "../routes";
import Topbar from "../scenes/global/Topbar";
import MainSidebar from "./../scenes/global/Sidebar";

const MainLayout = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <MainSidebar />
      </div>
      <div className="content">
        <Topbar />
        <Routes />
      </div>
    </div>
  );
};

export default MainLayout;
