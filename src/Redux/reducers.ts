import { combineReducers } from "@reduxjs/toolkit";
import { tweetsReducer } from "./Slices/tweetsSlice";
import { usersReducer } from "./Slices/usersSlice";

const reducers = combineReducers({
   tweets: tweetsReducer,
   users: usersReducer,
});

export default reducers;

export type StateType = ReturnType<typeof reducers>;
