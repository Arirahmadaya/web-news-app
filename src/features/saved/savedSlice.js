// src/features/saved/savedSlice.js
import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: JSON.parse(localStorage.getItem("savedArticles")) || [],
  reducers: {
    addSavedArticle: (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem("savedArticles", JSON.stringify(newState));
      return newState;
    },
    removeSavedArticle: (state, action) => {
      const newState = state.filter((article) => article._id !== action.payload);
      localStorage.setItem("savedArticles", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addSavedArticle, removeSavedArticle } = savedSlice.actions;
export default savedSlice.reducer;
