import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    displayName: "",
    uid: "",
    accessToken: "",
    photoURL: "",
    isLoding: false,
  },
  reducers: {
    IoginUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
      state.photoURL = action.payload.photoURL;
      state.isLoding = true;
    },
    ClearUser: (state) => {
      state.displayName = "";
      state.uid = "";
      state.accessToken = "";
      state.isLoding = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { IoginUser, ClearUser } = userSlice.actions;

export default userSlice.reducer;
