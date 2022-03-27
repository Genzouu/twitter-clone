import { HiOutlineLocationMarker, HiOutlineSparkles } from "react-icons/hi";
import { BiPoll, BiSmile, BiWorld } from "react-icons/bi";

import "./Home.scss";
import { RiImage2Line } from "react-icons/ri";
import { AiOutlineFileGif } from "react-icons/ai";
import { MdOutlineEditCalendar } from "react-icons/md";
import Tweet, { TweetType } from "./Tweet";
import { useSelector } from "react-redux";
import { store } from "../Redux/store";
import { StateType } from "../Redux/reducers";

export default function Home() {
   const tweets = useSelector((state: StateType) => state.tweets);

   const growTextAreaHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
      let element = e.currentTarget as HTMLTextAreaElement;
      element.style.height = "2.8rem";
      element.style.height = element.scrollHeight + "px";
   };

   // add vertical lines between posts that are from the same user. seems like it adds line regardless if the posts are one different dates

   return (
      <div className="home">
         <div className="header">
            <p className="home-text">Home</p>
            <HiOutlineSparkles className="sparkle-icon" />
         </div>
         <div className="main-section">
            <div className="post-tweet-container">
               <img
                  src="http://getdrawings.com/free-icon-bw/anonymous-avatar-icon-19.png"
                  alt=""
                  className="profile-picture"
               />
               <div className="right-container">
                  <textarea
                     className="input-message"
                     placeholder="What are you doing now?"
                     onChange={(e) => growTextAreaHeight(e)}
                  />
                  <div className="visibility-options">
                     <BiWorld />
                     <p className="visibility-text">Anyone can reply</p>
                  </div>
                  <div className="post-section-line-break"></div>
                  <div className="icons-tweet-button-container">
                     <div className="utility-icons-container">
                        <RiImage2Line className="utility-icon" />
                        <AiOutlineFileGif className="utility-icon" />
                        <BiPoll className="utility-icon" />
                        <BiSmile className="utility-icon" />
                        <MdOutlineEditCalendar className="utility-icon" />
                        <HiOutlineLocationMarker className="utility-icon" />
                     </div>
                     <button className="tweet-button">Tweet</button>
                  </div>
               </div>
            </div>
            <div id="tweets-container" className="tweets-container">
               {tweets.map((tweet, index) => (
                  <Tweet index={index} key={index} />
               ))}
            </div>
         </div>
      </div>
   );
}
