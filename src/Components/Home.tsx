import { HiOutlineSparkles } from "react-icons/hi";

import "./Home.scss";

export default function Home() {
   return (
      <div className="home">
         <div className="header">
            <p className="home-text">Home</p>
            <HiOutlineSparkles className="sparkle-icon" />
         </div>
         <div className="tweet-container">
            <img src="" alt="" className="profile-picture" />
            <input type="text" className="message" />
            <div className="utility-icons"></div>
            <button className="tweet"></button>
         </div>
      </div>
   );
}
