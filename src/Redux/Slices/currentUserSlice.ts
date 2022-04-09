import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
   name: "currentUser",
   initialState: null as string | null,
   reducers: {
      setUser: (state, action: PayloadAction<string>) => {
         return (state = action.payload);
      },
   },
});

export const { setUser } = currentUserSlice.actions;
export const currentUserReducer = currentUserSlice.reducer;
