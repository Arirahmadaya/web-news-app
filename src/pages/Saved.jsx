import React, { useState, useEffect } from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";

export default function Saved() {
  const [savedNews, setSavedNews] = useState([]);

  // Ambil data dari localStorage ketika komponen dimuat
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("savedArticles")) || [];
    console.log("Saved items:", savedItems); // Debugging
    setSavedNews(savedItems);
  }, []);

  // Fungsi untuk menghapus berita yang disave
  const unsaveNews = (id) => {
    const updatedNews = savedNews.filter((news) => news.headline?.main !== id);
    setSavedNews(updatedNews);
    localStorage.setItem("savedArticles", JSON.stringify(updatedNews));
  };

  return (
    <>
      <div className="py-6 px-3">
        <h1 className="text-3xl font-bold text-center mb-10">Saved News</h1>
        {savedNews.length > 0 ? (
          <div className="space-y-6">
            {savedNews.map((news) => (
              <div
                key={news.headline?.main || news.id} // Fallback to web_url if headline is undefined
                className="relative bg-white shadow-md rounded-lg overflow-hidden flex h-48 neu neu-active mb-5"
              >
                {/* Cek jika multimedia ada, ambil gambar pertama */}
                <img
                  src={
                    news.multimedia && news.multimedia.length > 0
                      ? `https://www.nytimes.com/${news.multimedia[0].url}`
                      : news.media &&
                        news.media[0]["media-metadata"] &&
                        news.media[0]["media-metadata"].length > 2
                      ? news.media[0]["media-metadata"][2].url
                      : "default-placeholder.png"
                  }
                  alt={news.headline?.main || "News Image"}
                  className="lg:w-44 lg:h-48 w-32 h-full object-cover"
                />

                <div className="lg:p-4 p-2 flex-1 h-full flex flex-col justify-center ">
                  <h2 className="lg:text-xl font-bold mb-2">
                    {news.headline?.main || news.title}
                  </h2>
                  <p className="text-gray-700 text-sm lg:text-base mb-4 hidden sm:block">
                    {news.abstract || "No description available."}
                  </p>

                  <a
                    href={news.web_url || news.url}
                    className="text-blue-500 hover:underline w-[90px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
                <button
                  onClick={() => unsaveNews(news.headline?.main)}
                  className="absolute top-3 right-3 text-[#17CF97] hover:text-gray-500"
                >
                  <BookmarkIcon className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-700">
            You have no saved news yet.
          </p>
        )}
      </div>
    </>
  );
}
