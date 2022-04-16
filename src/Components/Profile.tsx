import { BsArrowLeftShort } from "react-icons/bs";
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
               <p className="tweet-count">11 Tweets</p>
            </div>
         </div>
         <div className="top-section">
            <div className="banner"></div>
            <img src="" alt="" className="profile-picture" />
            <button className="edit-profile"></button>
            <p className="username"></p>
            <p className="handle"></p>
            <p className="bio"></p>
            <p className="birthday"></p>
            <p className="account-created-date"></p>
            <p className="following"></p>
            <p className="followers"></p>
            <div className="sections">
               <button className="tweets"></button>
               <button className="tweets-replies"></button>
               <button className="media"></button>
               <button className="likes"></button>
            </div>
         </div>
         <div className="tweet-list"></div>
      </div>
   );
}
