import { BsPerson, BsPersonFill, BsTwitter } from "react-icons/bs";
import { BiDotsHorizontalRounded, BiHash } from "react-icons/bi";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { FaEnvelope, FaRegEnvelope } from "react-icons/fa";
import { MdMessage, MdOutlineBookmark, MdOutlineBookmarkBorder, MdOutlineMessage } from "react-icons/md";
import { RiNotification2Fill, RiNotification2Line } from "react-icons/ri";

import "./LeftPanel.scss";
import { useState } from "react";

export default function LeftPanel() {
   const [selectedPage, setSelectedPage] = useState<
      "home" | "topics" | "notifications" | "messages" | "bookmarks" | "lists" | "profile"
   >("home");

   return (
      <div className="left-panel">
         <BsTwitter className="twitter-logo icon" />
         <div className="list-item" onClick={() => setSelectedPage("home")}>
            {selectedPage === "home" ? <AiFillHome className="icon" /> : <AiOutlineHome className="icon" />}
            <p className="text">Home</p>
         </div>
         <div className="list-item" onClick={() => setSelectedPage("topics")}>
            <BiHash className={`icon ${selectedPage === "topics" ? "topics-icon-selected" : ""}`} />
            <p className="text">Find Topics</p>
         </div>
         <div className="list-item" onClick={() => setSelectedPage("notifications")}>
            {selectedPage === "notifications" ? (
               <RiNotification2Fill className="icon" />
            ) : (
               <RiNotification2Line className="icon" />
            )}
            <p className="text">Notifications</p>
         </div>
         <div className="list-item" onClick={() => setSelectedPage("messages")}>
            {selectedPage === "messages" ? (
               <FaEnvelope className="icon messages-icon" />
            ) : (
               <FaRegEnvelope className="icon messages-icon" />
            )}
            <p className="text">Messages</p>
         </div>
         <div className="list-item" onClick={() => setSelectedPage("bookmarks")}>
            {selectedPage === "bookmarks" ? (
               <MdOutlineBookmark className="icon" />
            ) : (
               <MdOutlineBookmarkBorder className="icon" />
            )}
            <p className="text">Bookmarks</p>
         </div>
         <div className="list-item" onClick={() => setSelectedPage("lists")}>
            {selectedPage === "lists" ? (
               <MdMessage className="icon lists-icon" />
            ) : (
               <MdOutlineMessage className="icon lists-icon" />
            )}
            <p className="text">Lists</p>
         </div>
         <div className="list-item" onClick={() => setSelectedPage("profile")}>
            {selectedPage === "profile" ? <BsPersonFill className="icon" /> : <BsPerson className="icon" />}
            <p className="text">Profile</p>
         </div>
         <div className="list-item">
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
