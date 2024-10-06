// src/features/news/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk untuk fetch API berdasarkan query
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (query = 'Indonesia') => {
    const response = await axios({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      params: {
        'api-key': import.meta.env.VITE_APP_NYT_API_KEY,
        q: query,
      },
    });
    return response.data.response.docs;
  }
);

// Thunk untuk fetch API berdasarkan ID
export const fetchNewsById = createAsyncThunk(
  'news/fetchNewsById',
  async (id) => {
    const response = await axios({
      method: 'GET',
      url: `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
      params: {
        'api-key': import.meta.env.VITE_APP_NYT_API_KEY,
        fq: `_id:"${id}"`,
      },
    });
    return response.data.response.docs[0]; // Ambil berita berdasarkan ID
  }
);

// Thunk untuk fetch trending articles
export const fetchTrendingNews = createAsyncThunk(
  'news/fetchTrendingNews',
  async () => {
    const response = await axios({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json',
      params: {
        'api-key': import.meta.env.VITE_APP_NYT_API_KEY,
      },
    });
    return response.data.results; // Kembalikan hasil
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    selectedArticle: null, // Simpan detail berita
    trendingArticles: [], // State untuk trending articles
    loading: false,
    error: null,
  },
  reducers: {}, 
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
      })
      // Tambahkan kasus untuk fetchNewsById
      .addCase(fetchNewsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewsById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedArticle = action.payload;
      })
      .addCase(fetchNewsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Tambahkan kasus untuk fetchTrendingNews
      .addCase(fetchTrendingNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTrendingNews.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingArticles = action.payload; // Simpan trending articles
      })
      .addCase(fetchTrendingNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
export const newsActions = { fetchNews, fetchNewsById, fetchTrendingNews };
