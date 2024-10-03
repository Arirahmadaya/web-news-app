// src/features/saved/savedSlice.js
import { createSlice } from '@reduxjs/toolkit';

const savedSlice = createSlice({
  name: 'saved',
  initialState: [],
  reducers: {
    addSavedArticle: (state, action) => {
      state.push(action.payload);
    },
    removeSavedArticle: (state, action) => {
      return state.filter(article => article._id !== action.payload);
    },
    loadSavedArticles: (state, action) => {
      return action.payload;
    },
  },
});

export const { addSavedArticle, removeSavedArticle, loadSavedArticles } = savedSlice.actions;
export default savedSlice.reducer;
