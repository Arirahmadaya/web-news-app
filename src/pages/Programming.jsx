import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../features/news/newsSlice'; // Sesuaikan path jika perlu
import ItemCard from '../components/ItemCard'; // Impor ItemCard
import { Skeleton } from '@nextui-org/react'; // Pastikan impor dari NextUI

export default function Programming() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  // Mengambil berita tentang programming ketika komponen dimuat
  useEffect(() => {
    dispatch(fetchNews('programming')); // Ganti dengan query yang sesuai untuk berita programming
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto pb-16">
        <div className="max-w-4xl mx-auto p-5 rounded-lg">
          <h1 className="text-3xl font-bold text-center">All About Programming</h1>
        </div>
        <div>
        {error && <h1 className="text-center mb-5 text-red-500">{error}</h1>}
        </div>
        <div className="max-w-6xl mx-auto px-2">
          {/* Menampilkan skeleton loading saat data sedang diambil */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                  <Skeleton className="h-48 w-full animate-pulse" />
                  <div className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2 animate-pulse" />
                    <Skeleton className="h-4 w-full animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          )}
          
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.length > 0 ? (
              articles.map((item) => <ItemCard key={item._id} news={item} />)
            ) : (
              <h1 className="text-center text-xl">Tidak ada berita yang ditemukan.</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
