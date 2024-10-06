// src/components/OthersArticles.jsx
import React from 'react';

const OthersArticles = ({ articles }) => {
  return (
    <div>
      {articles.map(article => (
        <a
          key={article._id}
          href={`/news/${encodeURIComponent(article._id)}`}
          rel="noopener noreferrer"
          className="flex flex-col-reverse md:flex-row md:justify-between w-full mb-8 border-2 border-black overflow-hidden cursor-pointer"
        >
          <div className="flex flex-col justify-start w-full md:w-[58%] xl:px-6 xl:py-6 p-4">
            <div className="text-xs tracking-[0.5px]">
              <span className="font-light">{new Date(article.published_date).toLocaleDateString()}</span>
            </div>
            <h2 className="mt-3 text-sm lg:text-lg xl:text-2xl xl:leading-[1.85rem] tracking-[0.48px] line-clamp-3 md:h-[60px] xl:h-[88px] font-bold">
              {article.title}
            </h2>
            <div className="mt-3 text-xs md:text-[13px] tracking-[0.5px]">
              <span>{article.abstract}</span>
            </div>
          </div>
          <div className="w-full h-auto md:w-[50%] xl:w-[43%] overflow-hidden border-b md:border-b-0 border-l-0 md:border-l border-black">
            <div className="h-full max-h-[230px] w-full">
              <div className="aspect-w-16 aspect-h-9 h-full">
                <img
                  src={article.multimedia && article.multimedia.length > 0
                    ? `http://www.nytimes.com/${article.multimedia[0].url}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlTTXqU0kuV6fgv5ncaBf_gnY39vGJa1F3A&s"}
                  alt={article.title}
                  loading="lazy"
                  className="object-cover object-center w-full h-full"
                  title={article.title}
                />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default OthersArticles;
