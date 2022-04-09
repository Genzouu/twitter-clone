import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import LeftPanel from "./Components/LeftPanel";
import MainPanel from "./Components/MainPanel";
import RightPanel from "./Components/RightPanel";
import Overlay from "./Components/Overlay";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import { StateType } from "./Redux/reducers";
import { useEffect } from "react";

function App() {
   const route = useLocation();
   const currentUserHandle = useSelector((state: StateType) => state.currentUserHandle);
   const navigate = useNavigate();

   useEffect(() => {
      if (!currentUserHandle) navigate("/login");
   }, []);

   return (
      <div className="App">
         <Overlay />
         {route.pathname !== "/login" ? (
            <>
               <LeftPanel />
               <MainPanel />
               <RightPanel />
            </>
         ) : (
            <Routes>
               <Route path="/login" element={<Login />} />
            </Routes>
         )}
      </div>
   );
}

export default App;
