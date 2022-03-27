import { Route, Routes } from "react-router-dom";
import Home from "./Home";

import "./MainPanel.scss";

export default function MainPanel() {
   return (
      <div className="main-panel">
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </div>
   );
}
