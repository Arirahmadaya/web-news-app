import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon as OutlineBookmarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingNews } from "../features/news/newsSlice";
import { addSavedArticle, removeSavedArticle } from "../features/saved/savedSlice"; // Import actions
import NewsCover from "./NewsCover";
import SideNews from "./SideNews";

const TrendingNews = () => {
  const dispatch = useDispatch();
  const trendingArticles = useSelector((state) => state.news.trendingArticles); 
  const savedArticles = useSelector((state) => state.saved); // Ambil artikel yang disimpan

  useEffect(() => {
    dispatch(fetchTrendingNews()); // Ambil trending news saat komponen di-mount
  }, [dispatch]);

  const handleBookmarkClick = (news) => {
    const isSaved = savedArticles.some((article) => article.id === news.id);

    if (isSaved) {
      dispatch(removeSavedArticle(news.id));
    } else {
      dispatch(addSavedArticle(news));
    }
  };

  return (
    <div className="my-5 lg:px-16">
      <h1 className="text-3xl font-bold text-center">Trending News</h1>
      <div className="mt-5 flex gap-6 lg:gap-16">
        <div className="w-2/3">
          {/* Menampilkan berita utama */}
          {trendingArticles.length > 0 && (
            <NewsCover
              imageUrl={
                trendingArticles[0].media && trendingArticles[0].media.length > 0
                  ? trendingArticles[0].media[0]["media-metadata"][2].url
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlTTXqU0kuV6fgv5ncaBf_gnY39vGJa1F3A&s"
              }
              category={trendingArticles[0].section}
              title={trendingArticles[0].title}
              description={trendingArticles[0].abstract}
              url={trendingArticles[0].url}
              byline={trendingArticles[0].byline}
              publishedDate={new Date(trendingArticles[0].published_date).toLocaleDateString()}
              source={trendingArticles[0].source}
              handleBookmarkClick={() => handleBookmarkClick(trendingArticles[0])}
              isSaved={savedArticles.some(
                (article) => article.id === trendingArticles[0].id
              )}
              bookmarkIcon={savedArticles.some(
                (article) => article.id === trendingArticles[0].id
              ) ? <SolidBookmarkIcon className="h-6 w-6 text-[#17CF97]" /> : <OutlineBookmarkIcon className="h-6 w-6" />}
            />
          )}
        </div>
        <div className="w-1/3">
          <SideNews articles={trendingArticles.slice(1)} />
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
