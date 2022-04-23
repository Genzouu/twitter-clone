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
               <p className="tweet-count">10 Tweets</p>
            </div>
         </div>
         <div className="top-section">
            <div className="banner"></div>
            {/* <img
               src="http://getdrawings.com/free-icon-bw/anonymous-avatar-icon-19.png"
               alt=""
               className="profile-picture"
            /> */}
            <button className="edit-profile">Edit Profile</button>
            <p className="username">Username</p>
            <p className="handle">@username</p>
            <p className="bio">This is a bio.</p>
            <p className="birthday">Birthday: 1/1/2000</p>
            <p className="account-created-date">Using Twitter from 1/2000</p>
            <p className="following">10 Following</p>
            <p className="followers">10 Followers</p>
            <div className="sections">
               <button className="tweets">Tweets</button>
               <button className="tweets-replies">Tweets and Replies</button>
               <button className="media">Media</button>
               <button className="likes">Likes</button>
            </div>
         </div>
         <div className="tweet-list"></div>
      </div>
   );
}
