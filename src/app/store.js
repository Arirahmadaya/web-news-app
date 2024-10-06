import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";
import savedReducer from "../features/saved/savedSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    saved: savedReducer,
  },
});
