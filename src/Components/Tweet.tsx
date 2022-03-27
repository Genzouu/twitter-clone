import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FiMessageCircle, FiShare } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { StateType } from "../Redux/reducers";
import "./Tweet.scss";

export interface TweetType {
   id: number;
   userHandle: string;
   date: string;
   message?: string;
   imageURLs?: string[];
}

interface TweetProps {
   index: number;
}

export default function Tweet(props: TweetProps) {
   const tweets = useSelector((state: StateType) => state.tweets);
   const tweet = tweets[props.index];

   useEffect(() => {
      let imagesContainer = document
         .getElementById("tweets-container")!
         .children[props.index].getElementsByClassName("images-container")[0] as HTMLElement;
      if (tweet.imageURLs && tweet.imageURLs.length > 1) {
         imagesContainer.style.display = "grid";
         imagesContainer.style.gridTemplateColumns = "1fr 1fr";
      }
   }, []);

   const addLineBreak = (): boolean => {
      if (props.index - 1 < 0) return false;
      return tweet.userHandle !== tweets[props.index - 1].userHandle || tweet.date !== tweets[props.index - 1].date;
   };

   return (
      <div className={`tweet ${addLineBreak() ? "line-break" : ""}`}>
         <img
            src="http://getdrawings.com/free-icon-bw/anonymous-avatar-icon-19.png"
            alt=""
            className="profile-picture"
         />
         {!addLineBreak() && props.index != 0 ? <div className="vertical-connection-line"></div> : null}
         <div className="right-container">
            <div className="username-handle-date-container">
               <p className="username">{tweet.userHandle.toUpperCase() /* just to distinguish it better for now */}</p>
               <p className="userHandle">@{tweet.userHandle}</p>
               <p className="spacer">·</p>
               <p className="date">{tweet.date}</p>
               <BiDotsHorizontalRounded className="options-icon" />
            </div>
            {tweet.message ? <p className="message">{tweet.message}</p> : null}
            {tweet.imageURLs ? (
               <div className="images-container">
                  {tweet.imageURLs.map((url, index) => (
                     <img src={url} alt="" className="image" key={index} />
                  ))}
               </div>
            ) : null}
            <div className="icons-container">
               <div className="icon-amount-container blue-icon">
                  <div className="icon-container">
                     <FiMessageCircle className="icon" />
                  </div>
                  <p className="amount">{Math.round(Math.random() * 10)}</p>
               </div>
               <div className="icon-amount-container green-icon">
                  <div className="icon-container">
                     <AiOutlineRetweet className="icon" />
                  </div>
                  <p className="amount">{Math.round(Math.random() * 100)}</p>
               </div>
               <div className="icon-amount-container red-icon">
                  <div className="icon-container">
                     <AiOutlineHeart className="icon" />
                  </div>
                  <p className="amount">{Math.round(Math.random() * 1000)}</p>
               </div>
               <div className="icon-container share-icon-container blue-icon">
                  <FiShare className="icon" />
               </div>
            </div>
         </div>
      </div>
   );
}
