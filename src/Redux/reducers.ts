import { combineReducers } from "@reduxjs/toolkit";
import { tweetsReducer } from "./Slices/tweetsSlice";

const reducers = combineReducers({
   tweets: tweetsReducer,
});

export default reducers;

export type StateType = ReturnType<typeof reducers>;
