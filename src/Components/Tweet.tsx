import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FiMessageCircle, FiShare } from "react-icons/fi";
import "./Tweet.scss";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useEffect } from "react";

export interface TweetType {
   handle: string; // get the username and profile picture from a database using the handle
   date: string;
   message?: string;
   imageURLs?: string[];
}

interface TweetProps extends TweetType {
   index: number;
}

export default function Tweet(props: TweetProps) {
   useEffect(() => {
      let imagesContainer = document
         .getElementById("tweets-container")!
         .children[props.index].getElementsByClassName("images-container")[0] as HTMLElement;
      if (props.imageURLs && props.imageURLs.length > 1) {
         imagesContainer.style.display = "grid";
         imagesContainer.style.gridTemplateColumns = "1fr 1fr";
      }
   }, []);

   // const addLineBreak = (): boolean => {

   // };

   return (
      <div className="tweet">
         <img
            src="http://getdrawings.com/free-icon-bw/anonymous-avatar-icon-19.png"
            alt=""
            className="profile-picture"
         />
         <div className="right-container">
            <div className="username-handle-date-container">
               <p className="username">{props.handle.toUpperCase() /* just to distinguish it better for now */}</p>
               <p className="handle">@{props.handle}</p>
               <p className="spacer">·</p>
               <p className="date">{props.date}</p>
               <BiDotsHorizontalRounded className="options-icon" />
            </div>
            {props.message ? <p className="message">{props.message}</p> : null}
            {props.imageURLs ? (
               <div className="images-container">
                  {props.imageURLs.map((url, index) => (
                     <img src={url} alt="" className="image" key={index} />
                  ))}
               </div>
            ) : null}
            <div className="icons-container">
               <div className="icon-amount-container blue-icon">
                  <div className="icon-container">
                     <FiMessageCircle className="icon" />
                  </div>
                  <p className="amount">{Math.round(Math.random() * 100)}</p>
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
                  <p className="amount">{Math.round(Math.random() * 100)}</p>
               </div>
               <div className="icon-container share-icon-container blue-icon">
                  <FiShare className="icon" />
               </div>
            </div>
         </div>
         {/* <div className="tweet-line-break"></div> */}
      </div>
   );
}
