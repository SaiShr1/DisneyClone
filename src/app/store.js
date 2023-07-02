import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "../features/user/userSlice"

export default configureStore({
  reducer: {
    user: userReducer
  },
  // The logger middleware logs actions and state changes to the console, providing helpful debugging information during development.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
