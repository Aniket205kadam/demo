import { Outlet } from "react-router-dom";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import "./style.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={`theme-${theme}`}>
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default App;
