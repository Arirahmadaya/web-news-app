import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrendingNews } from "../features/news/newsSlice"; // Pastikan mengimpor action
import NewsCover from "./NewsCover";
import SideNews from "./SideNews";

const TrendingNews = () => {
  const dispatch = useDispatch();
  const trendingArticles = useSelector((state) => state.news.trendingArticles); // Ambil trending articles
  const savedArticles = useSelector((state) => state.saved); // Ambil artikel yang disimpan

  useEffect(() => {
    dispatch(fetchTrendingNews()); // Ambil trending news saat komponen di-mount
  }, [dispatch]);

  const handleBookmarkClick = (news) => {
    const isSaved = savedArticles.some((article) => article._id === news._id);

    if (isSaved) {
      dispatch(removeSavedArticle(news._id));
    } else {
      dispatch(addSavedArticle(news));
    }
  };

  return (
    <div className="mx-16 my-5">
      <h1 className="text-3xl font-bold text-center">Trending News</h1>
      <div className="mt-5 flex gap-5">
        <div className="w-2/3">
          {/* Menampilkan berita utama */}
          {trendingArticles.length > 0 && (
            <NewsCover
              imageUrl={
                trendingArticles[0].media &&
                trendingArticles[0].media.length > 0
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
              handleBookmarkClick={() =>
                handleBookmarkClick(trendingArticles[0])
              }
              isSaved={savedArticles.some(
                (article) => article._id === trendingArticles[0]._id
              )}
              bookmarkIcon={<BookmarkIcon />}
              loading={trendingArticles[0].loading}
              error={trendingArticles[0].error}
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
