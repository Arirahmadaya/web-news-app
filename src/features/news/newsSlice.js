// src/features/news/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// createAsyncThunk untuk fetch API secara asinkron
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (query = 'Indonesia') => {
    const response = await axios({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      params: {
        'api-key': import.meta.env.VITE_APP_NYT_API_KEY, // Menggunakan variabel dari .env
        q: query,
      },
    });
    return response.data.response.docs;
  }
);

// Buat slice untuk news
const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {}, // Tempat untuk action manual jika diperlukan
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
