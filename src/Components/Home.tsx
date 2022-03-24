import { HiOutlineLocationMarker, HiOutlineSparkles } from "react-icons/hi";
import { BiPoll, BiSmile, BiWorld } from "react-icons/bi";

import "./Home.scss";
import { RiImage2Line } from "react-icons/ri";
import { AiOutlineFileGif } from "react-icons/ai";
import { MdOutlineEditCalendar } from "react-icons/md";
import Tweet, { TweetProps } from "./Tweet";

export default function Home() {
   const growTextAreaHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
      let element = e.currentTarget as HTMLTextAreaElement;
      element.style.height = "2.8rem";
      element.style.height = element.scrollHeight + "px";
   };

   const testTweets: TweetProps[] = [
      { handle: "user1", date: "24 Mar 22", message: "hello world!" },
      {
         handle: "user1",
         date: "24 Mar 22",
         imageURLs: [
            "https://d3idt3y1vhsqn9.cloudfront.net/wp-content/uploads/2016/01/21173056/Ioan-Dumitrescu-104.jpg",
            "http://conceptartworld.com/wp-content/uploads/2016/01/Samurai_Concept_Art_Illustration_01_Jonas_De_Ro.jpg",
            "http://wallup.net/wp-content/uploads/2017/05/29/362360-digital_art-fantasy_art-futuristic-nature-temple-waterfall-rock-cave-trees-lights-sun_rays-Asian_architecture-lake-artwork.jpg",
            "https://www.creativeswall.com/wp-content/uploads/2013/02/Landscape.jpg",
         ],
      },
      { handle: "user1", date: "23 Mar 22", message: "I made some spaghetti a few days ago, it was terrible!" },
      {
         handle: "user2",
         date: "23 Mar 22",
         message: "here is some cool sci fi concept art",
         imageURLs: [
            "https://www.this-is-cool.co.uk/wp-content/gallery/geoffroy-thoorens/geoffroy-thoorens-scifi-artist.jpg",
            "https://i.pinimg.com/originals/cd/76/8e/cd768ed1a2d0f99d3e7ae2fbe0526b2e.jpg",
         ],
      },
      {
         handle: "user3",
         date: "24 Mar 22",
         message: "I love apocalyptic things!",
         imageURLs: [
            "https://hdwallpaperim.com/wp-content/uploads/2017/08/22/254115-artwork-concept_art-apocalyptic-space_shuttle-abandoned.jpg",
         ],
      },
      { handle: "user3", date: "25 Mar 22", message: "how is everyone doing today?" },
   ];

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
                  <div className="line-break"></div>
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
            <div className="tweets">
               {testTweets.map((tweet, index) => (
                  <Tweet handle={tweet.handle} date={tweet.date} message={tweet.message} imageURLs={tweet.imageURLs} />
               ))}
            </div>
         </div>
      </div>
   );
}
