import { Route, Routes } from "react-router-dom";
import Home from "./Home";

import "./MainPanel.scss";
import Profile from "./Profile";

export default function MainPanel() {
   return (
      <div className="main-panel">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
         </Routes>
      </div>
   );
}
