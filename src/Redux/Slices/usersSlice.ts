import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
   handle: string;
   // username: string;
   password: string;
}

const usersInitState: UserType[] = [];

const usersSlice = createSlice({
   name: "users",
   initialState: usersInitState,
   reducers: {
      addUser: (state, action: PayloadAction<UserType>) => {
         if (state.findIndex(u => u.handle === action.payload.handle) < 0) state.push(action.payload);
      },
   },
});

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
