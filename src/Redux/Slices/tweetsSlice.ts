import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TweetType } from "../../Components/Tweet";

const tweetsSliceInitState: TweetType[] = [
   { userHandle: "user1", date: "24 Mar 22", message: "hello world!", id: 0 },
   {
      userHandle: "user1",
      date: "24 Mar 22",
      imageURLs: [
         "https://d3idt3y1vhsqn9.cloudfront.net/wp-content/uploads/2016/01/21173056/Ioan-Dumitrescu-104.jpg",
         "http://conceptartworld.com/wp-content/uploads/2016/01/Samurai_Concept_Art_Illustration_01_Jonas_De_Ro.jpg",
         "http://wallup.net/wp-content/uploads/2017/05/29/362360-digital_art-fantasy_art-futuristic-nature-temple-waterfall-rock-cave-trees-lights-sun_rays-Asian_architecture-lake-artwork.jpg",
         "https://www.creativeswall.com/wp-content/uploads/2013/02/Landscape.jpg",
      ],
      id: 1,
   },
   { userHandle: "user1", date: "24 Mar 22", message: "I made some spaghetti a few days ago, it was terrible!", id: 2 },
   {
      userHandle: "user2",
      date: "24 Mar 22",
      message: "here is some cool sci fi concept art",
      imageURLs: [
         "https://www.this-is-cool.co.uk/wp-content/gallery/geoffroy-thoorens/geoffroy-thoorens-scifi-artist.jpg",
         "https://i.pinimg.com/originals/cd/76/8e/cd768ed1a2d0f99d3e7ae2fbe0526b2e.jpg",
      ],
      id: 3,
   },
   {
      userHandle: "user3",
      date: "25 Mar 22",
      message: "I love apocalyptic things!",
      imageURLs: [
         "https://hdwallpaperim.com/wp-content/uploads/2017/08/22/254115-artwork-concept_art-apocalyptic-space_shuttle-abandoned.jpg",
         "https://get.wallhere.com/photo/artwork-warrior-girls-fantasy-art-digital-art-ArtStation-forest-long-hair-concept-art-standing-in-water-dark-hair-fan-art-1937427.jpg",
      ],
      id: 4,
   },
   { userHandle: "user3", date: "25 Mar 22", message: "how is everyone doing today?", id: 4 },
   {
      userHandle: "user3",
      date: "26 Mar 22",
      message: "I love portrait pictures!",
      imageURLs: [
         "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcoolvibe.com%2Fwp-content%2Fuploads%2F2012%2F09%2FSci-fi-Art-Nicolas-Bouvier-Halo-4-Concept-Art.jpg&f=1&nofb=1",
      ],
      id: 5,
   },
   {
      userHandle: "user3",
      date: "27 Mar 22",
      message: "I also love landscape pictures!",
      imageURLs: ["http://www.this-is-cool.co.uk/wp-content/uploads/2017/01/the-digital-art-of-kino-scialabba-01.jpeg"],
      id: 6,
   },
];

const tweetsSlice = createSlice({
   name: "tweets",
   initialState: tweetsSliceInitState,
   reducers: {
      postTweet: (state, action: PayloadAction<TweetType>) => {
         state.push(action.payload);
      },
      deleteTweet: (state, action: PayloadAction<number>) => {
         let removeIndex = state.findIndex((t) => t.id === action.payload);
         if (removeIndex >= 0) {
            state.splice(removeIndex, 1);
         } else {
            console.error("The specified index " + action.payload + " does not exist");
         }
      },
   },
});

export const { postTweet, deleteTweet } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
