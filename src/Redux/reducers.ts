import { combineReducers } from "@reduxjs/toolkit";
import { currentUserReducer } from "./Slices/currentUserSlice";
import { tweetsReducer } from "./Slices/tweetsSlice";
import { usersReducer } from "./Slices/usersSlice";

const reducers = combineReducers({
   tweets: tweetsReducer,
   users: usersReducer,
   currentUserHandle: currentUserReducer,
});

export default reducers;

export type StateType = ReturnType<typeof reducers>;
