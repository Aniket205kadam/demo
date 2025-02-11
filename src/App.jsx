import { Outlet } from 'react-router-dom';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import { useEffect, useState } from 'react';
import TopBar from './components/topBar/TopBar';
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      {isMobile && <TopBar />}

      <div className={`main-content ${isMobile ? "mobile" : ""}`}>
        {!isMobile && <LeftBar />}
        
        <div className="page-content">
          <Outlet />
        </div>
        
        {isMobile && <LeftBar />}
        {!isMobile && <RightBar />}
      </div>

      {isMobile && <LeftBar />}
    </div>
  );
}

export default App
