import { BiCalendar } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdOutlineCake } from "react-icons/md";
import { useSelector } from "react-redux";
import { StateType } from "../Redux/reducers";

import "./Profile.scss";

export default function Profile() {
   const users = useSelector((state: StateType) => state.users);
   const currentUserHandle = useSelector((state: StateType) => state.currentUserHandle);
   const currentUser = users.find((u) => u.handle === currentUserHandle);

   return (
      <div className="profile">
         <div className="header">
            <BsArrowLeftShort className="return-arrow-icon" />
            <div className="username-tweet-count-container">
               <p className="header-username">Username</p>
               <p className="tweet-count">10 Tweets</p>
            </div>
         </div>
         <div className="banner"></div>
         <div className="top-section">
            <img
               src="http://getdrawings.com/free-icon-bw/anonymous-avatar-icon-19.png"
               alt=""
               className="profile-picture"
            />
            <div className="edit-profile-container">
               <button className="edit-profile-button">Edit Profile</button>
            </div>
            <p className="username">Username</p>
            <p className="handle">@username</p>
            <p className="bio">This is a bio.</p>
            <div className="birthday-account-created-container">
               <MdOutlineCake className="icon" />
               <p className="birthday">Birthday: 1/1/2000</p>
               <BiCalendar className="icon" />
               <p className="account-created-date">Using Twitter since January 2000</p>
            </div>
            <div className="following-followers-container">
               <p className="following">
                  <span className="main-text-colour">10</span> Following
               </p>
               <p className="followers">
                  <span className="main-text-colour">10</span> Followers
               </p>
            </div>
         </div>
         <div className="sections">
            <button className="section-button">Tweets</button>
            <button className="section-button">Tweets and Replies</button>
            <button className="section-button">Media</button>
            <button className="section-button">Likes</button>
         </div>
         <div className="tweet-list"></div>
      </div>
   );
}
