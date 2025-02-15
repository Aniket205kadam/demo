import React from 'react'
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LeftBar from "./components/leftBar/LeftBar";
function Layout() {
    const theme = useSelector((state) => state.theme.theme);
    return (
      <div className={`theme-${theme}`}>
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 9.3, 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black"
           }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
}

export default Layout;