import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import LeftPanel from "./Components/LeftPanel";
import MainPanel from "./Components/MainPanel";
import RightPanel from "./Components/RightPanel";
import Overlay from "./Components/Overlay";
import Login from "./Components/Login";

function App() {
   const route = useLocation();

   return (
      <div className="App">
         <Overlay />
         <Routes>
            <Route path="/login" element={<Login />} />
         </Routes>
         {route.pathname !== "/login" ? (
            <>
               <LeftPanel />
               <MainPanel />
               <RightPanel />
            </>
         ) : null}
      </div>
   );
}

export default App;
