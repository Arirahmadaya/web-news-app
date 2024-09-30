// src/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../features/news/newsSlice';
import ItemCard from '../components/ItemCard';

function Home() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?t=st=1727122786~exp=1727126386~hmac=f8dbfad31deae1390af8918db8a80f706efdcb5d9d285a12f3034fe8e0ff80ef&w=740')] bg-cover bg-center min-h-screen">
      <div className="container mx-auto pb-16">
        <div className="max-w-4xl mx-auto p-5  rounded-lg">
          <h1 className="text-3xl font-bold text-center">New York Times</h1>
        </div>
        <div className="max-w-6xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading && <h1 className="text-center text-2xl">Loading...</h1>}
            {error && <h1 className="text-center text-2xl text-red-500">{error}</h1>}
            {articles.map((item) => (
              <ItemCard key={item._id} news={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
