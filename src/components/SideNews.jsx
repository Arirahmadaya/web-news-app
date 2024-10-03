import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ title, date, author, category, link }) => {
  return (
    <Link
      to={link}
      className="overflow-hidden mb-[30px] cursor-pointer border-b border-[#e5e7eb] w-full flex gap-x-2 lg:py-0"
      title={title}
    >
      <div className="md:mb-[18px] px-4 md:p-0 w-full">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <div className="text-[11px] flex items-center tracking-[0.5px] min-w-[173px]">
            <div className="font-gtmBold uppercase">{category} |</div>
            <div className="font-gmtThin pl-1">{date}</div>
          </div>
          <div className="font-gtmRoundBold text-x9 tracking-[0.5px] uppercase text-[#9E9E9E] w-full mt-1 lg:mt-0">
            <div className="line-clamp-1 lg:text-right"></div>
          </div>
        </div>
        <div className="font-bold text-base mt-[21px] line-clamp-3 tracking-[0.7px]">
          {title}
        </div>
        <div className="font-gtmBold text-xs capitalize mt-[20px] line-clamp-1">
          <span className="item tracking-[0.5px]">{author}</span>
        </div>
      </div>
    </Link>
  );
};

export default function SideNews() {
  // Data dummy untuk item berita luar negeri
  const newsItems = [
    {
      title: "The Impact of Climate Change on Global Economies",
      date: "21/08/2024",
      author: "John Smith",
      category: "World News",
      link: "/headline/world/101",
    },
    {
      title: "Tech Giants Face Scrutiny Over Data Privacy",
      date: "20/08/2024",
      author: "Alice Johnson",
      category: "Technology",
      link: "/headline/technology/102",
    },
    {
      title: "Global Health Crisis: What We Learned from the Pandemic",
      date: "19/08/2024",
      author: "Michael Brown",
      category: "Health",
      link: "/headline/health/103",
    },
    {
      title: "The Rise of Renewable Energy: A Global Perspective",
      date: "18/08/2024",
      author: "Sara Wilson",
      category: "Environment",
      link: "/headline/environment/104",
    },
    // Tambahkan lebih banyak item berita di sini jika diperlukan
  ];

  return (
    <div>
      {newsItems.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
      {/* Tombol Other News */}
      <div className="mt-5">
        <Link
          to="/other-news"
          className="inline-block px-4 py-2 bg-black   text-white  hover:bg-gray-400"
        >
          Other
        </Link>
      </div>
    </div>
  );
}
