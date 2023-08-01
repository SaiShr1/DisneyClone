import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "../features/user/userSlice.js"
import movieReducer from "../features/movie/movieSlice.js"

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  // The logger middleware logs actions and state changes to the console, providing helpful debugging information during development.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
