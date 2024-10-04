import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/news/newsSlice';
import savedReducer from '../features/saved/savedSlice';
import userReducer from '../features/user/userSlice'; 

export const store = configureStore({
  reducer: {
    news: newsReducer,
    saved: savedReducer,
    user: userReducer
  },
});

