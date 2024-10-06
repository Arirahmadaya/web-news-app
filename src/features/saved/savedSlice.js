// src/features/saved/savedSlice.js
import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: JSON.parse(localStorage.getItem("savedArticles")) || [], // Ambil data dari localStorage
  reducers: {
    addSavedArticle: (state, action) => {
      const newState = [...state, action.payload]; // Tambahkan artikel baru
      localStorage.setItem("savedArticles", JSON.stringify(newState)); // Simpan ke localStorage
      return newState; // Kembalikan state baru
    },
    removeSavedArticle: (state, action) => {
      const newState = state.filter((article) => article._id !== action.payload); // Hapus artikel berdasarkan ID
      localStorage.setItem("savedArticles", JSON.stringify(newState)); // Simpan ke localStorage
      return newState; // Kembalikan state baru
    },
  },
});

// Ekspor action dan reducer
export const { addSavedArticle, removeSavedArticle } = savedSlice.actions;
export default savedSlice.reducer;
