import { BsPerson, BsTwitter } from "react-icons/bs";
import { BiDotsHorizontalRounded, BiHash } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineBookmarkBorder, MdOutlineMessage } from "react-icons/md";
import { RiHome7Line } from "react-icons/ri";

import "./LeftPanel.scss";

export default function LeftPanel() {
   return (
      <div className="left-panel">
         <BsTwitter className="twitter-logo icon" />
         <div className="home list-item">
            <RiHome7Line className="icon" />
            {/* <RiHome7Fill /> */}
            <p className="text">Home</p>
         </div>
         <div className="find-topics list-item">
            <BiHash className="icon" />
            <p className="text">Find Topics</p>
         </div>
         <div className="notifications list-item">
            <HiOutlineBell className="icon" />
            {/* <HiBell /> */}
            {/* <IoNotificationsOutline /> // maybe this one instead. has fill too */}
            <p className="text">Notifications</p>
         </div>
         <div className="messages list-item">
            <FaRegEnvelope className="icon messages-icon" />
            {/* <FaEnvelope /> */}
            <p className="text">Messages</p>
         </div>
         <div className="bookmarks list-item">
            <MdOutlineBookmarkBorder className="icon" />
            {/* <MdOutlineBookmark /> */}
            <p className="text">Bookmarks</p>
         </div>
         <div className="list list-item">
            <MdOutlineMessage className="icon" />
            {/* <MdMessage /> */}
            <p className="text">Lists</p>
         </div>
         <div className="profile list-item">
            <BsPerson className="icon" />
            {/* <BsPersonFill /> */}
            <p className="text">Profile</p>
         </div>
         <div className="see-more list-item">
            <IoEllipsisHorizontalCircle className="icon" />
            <p className="text">See More</p>
         </div>
         <button className="tweet-button">Tweet</button>
         <div className="user-panel">
            <img
               src="http://getdrawings.com/free-icon-bw/anonymous-avatar-icon-19.png"
               alt=""
               className="profile-picture"
            />
            <div className="username-container">
               <p className="username">Username</p>
               <p className="handle">@username</p>
            </div>
            <BiDotsHorizontalRounded className="ellipsis-icon" />
         </div>
      </div>
   );
}
