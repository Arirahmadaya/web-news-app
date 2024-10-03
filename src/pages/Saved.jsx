import React, { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";

export default function Saved() {
  // Data dummy untuk berita yang disimpan
  const [savedNews, setSavedNews] = useState([
    {
      id: 1,
      title: "Breaking News: Technology Advancements in 2024",
      description:
        "The tech world is evolving rapidly with the latest AI and Blockchain innovations...",
      url: "#",
      image:
        "https://qph.cf2.quoracdn.net/main-qimg-cece5641b42ce7180f40862da8759093-lq",
    },
    {
      id: 2,
      title: "Climate Change: How It Affects Global Economy",
      description:
        "The economic impact of climate change is becoming more prominent across nations...",
      url: "#",
      image:
        "https://images.unsplash.com/photo-1726682577615-728e4272a60c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Top Programming Languages to Learn in 2024",
      description:
        "Developers are keeping an eye on new programming languages emerging in the industry...",
      url: "#",
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Exploring Space: New Discoveries in Our Galaxy",
      description:
        "Scientists have made groundbreaking discoveries that could change our understanding of space...",
      url: "#",
      image:
        "https://images.unsplash.com/photo-1727799777485-4939c90326ad?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  // Fungsi untuk unsave berita
  const unsaveNews = (id) => {
    const filteredNews = savedNews.filter((news) => news.id !== id);
    setSavedNews(filteredNews);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Saved News</h1>
        {savedNews.length > 0 ? (
          <div className="space-y-6">
            {" "}
            {/* Gunakan space-y untuk memberikan jarak antar item */}
            {savedNews.map((news) => (
              <div
                key={news.id}
                className="relative bg-white shadow-md rounded-lg overflow-hidden flex h-48"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-44 h-48 object-cover"
                />
                <div className="p-5 flex-1">
                  <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                  <p className="text-gray-700 mb-4">{news.description}</p>
                  <a href={news.url} className="text-blue-500 hover:underline">
                    Read more
                  </a>
                </div>
                {/* Bookmark Icon for Unsave */}
                <button
                  onClick={() => unsaveNews(news.id)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
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
    </div>
  );
}
