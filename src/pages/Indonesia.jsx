// src/pages/Indonesia.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../features/news/newsSlice"; // Sesuaikan path jika perlu
import ItemCard from "../components/ItemCard"; // Impor ItemCard
import { Skeleton } from "@nextui-org/react"; // Pastikan impor dari NextUI

export default function Indonesia() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  // Mengambil berita ketika komponen dimuat
  useEffect(() => {
    dispatch(fetchNews("indonesia"));
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto pb-16">
        <div className="max-w-4xl mx-auto p-5 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Indonesia News</h1>
        </div>
        {/* <div>
          {error && <h1 className="text-center text-red-500 mb-5">{error}</h1>}
        </div> */}

        <div className="max-w-6xl mx-auto px-2">
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-md"
                >
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.length > 0 ? (
              articles.map((item) => <ItemCard key={item._id} news={item} />)
            ) : (
              <h1 className="text-center text-xl">
                Tidak ada berita yang ditemukan.
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
