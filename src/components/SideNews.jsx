import React from "react";
import { Link } from "react-router-dom";

const SideNews = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <Link
          key={article._id}
          to={`/headline/${article.section.toLowerCase()}/${article._id}`}
          className="overflow-hidden mb-[30px] cursor-pointer border-b border-[#e5e7eb] w-full flex gap-x-2 lg:py-0"
          title={article.title}
        >
          <div className="md:mb-[18px] px-4 md:p-0 w-full">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
              <div className="text-[11px] flex items-center tracking-[0.5px] min-w-[173px]">
                <div className="font-gtmBold uppercase">{article.section} |</div>
                <div className="font-gmtThin pl-1">
                  {new Date(article.published_date).toLocaleDateString()}
                </div>
              </div>
              <div className="font-gtmRoundBold text-x9 tracking-[0.5px] uppercase text-[#9E9E9E] w-full mt-1 lg:mt-0">
                <div className="line-clamp-1 lg:text-right"></div>
              </div>
            </div>
            <div className="font-bold text-base mt-[21px] line-clamp-3 tracking-[0.7px]">
              {article.title}
            </div>
            <div className="font-gtmBold text-xs capitalize mt-[20px] line-clamp-1">
              <span className="item tracking-[0.5px]">{article.byline}</span>
            </div>
          </div>
        </Link>
      ))}
      {/* Tombol Other News */}
      <div className="mt-5">
        <Link
          to="/other-news"
          className="inline-block px-4 py-2 bg-black text-white hover:bg-gray-400"
        >
          Other
        </Link>
      </div>
    </div>
  );
};

export default SideNews;
