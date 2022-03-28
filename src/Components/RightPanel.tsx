import { IoSearchOutline } from "react-icons/io5";

import "./RightPanel.scss";

export default function RightPanel() {
   return (
      <div className="right-panel">
         <div className="search-bar-container">
            <IoSearchOutline className="search-icon" />
            <input type="text" className="search-bar" placeholder="Search a keyword" />
         </div>
         <div className="section-container">
            <p className="title">What's happening now?</p>
         </div>
         <div className="section-container">
            <p className="title">Recommended users</p>
         </div>
         <div className="legal-notes"></div>
      </div>
   );
}
