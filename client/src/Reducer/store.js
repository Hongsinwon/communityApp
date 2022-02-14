import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
  // 직력오류 해결
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
