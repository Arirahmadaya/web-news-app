import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../features/news/newsSlice'; // Sesuaikan path jika perlu
import ItemCard from '../components/ItemCard'; // Impor ItemCard

export default function Indonesia() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  // Mengambil berita ketika komponen dimuat
  useEffect(() => {
    dispatch(fetchNews('indonesia'));
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto pb-16">
        <div className="max-w-4xl mx-auto p-5 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Indonesia News</h1>
        </div>
        <div className="max-w-6xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading && <h1 className="text-center text-2xl">Loading...</h1>}
            {error && <h1 className="text-center text-2xl text-red-500">{error}</h1>}
            {articles.length > 0 ? (
              articles.map((item) => (
                <ItemCard key={item._id} news={item} />
              ))
            ) : (
              <h1 className="text-center text-xl">Tidak ada berita yang ditemukan.</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
