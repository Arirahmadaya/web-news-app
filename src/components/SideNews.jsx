import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSavedArticle, removeSavedArticle } from "../features/saved/savedSlice";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon as OutlineBookmarkIcon } from "@heroicons/react/24/outline";

const SideNews = ({ articles }) => {
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.saved); // Get saved articles

  const handleBookmarkClick = (article) => {
    const isSaved = savedArticles.some((savedArticle) => savedArticle.id === article.id);
    if (isSaved) {
      dispatch(removeSavedArticle(article.id));
    } else {
      dispatch(addSavedArticle(article));
    }
  };

  return (
    <div>
      {articles.slice(0, 5).map((article) => {
        const { id, section, published_date, title, byline, url } = article; // Add 'url'
        const isSaved = savedArticles.some((savedArticle) => savedArticle.id === id);

        return (
          <div key={id} className="flex justify-between items-start mb-[30px] border-b border-[#e5e7eb] w-full">
            <a
              href={url} // Use external URL from article data
              className="flex-1 overflow-hidden cursor-pointer"
              title={title}
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security for external links
            >
              <div className="text-[11px] flex items-center tracking-[0.5px] min-w-[173px]">
                <div className="font-semibold uppercase">{section} |</div>
                <div className="font-gmtThin pl-1">
                  {new Date(published_date).toLocaleDateString()}
                </div>
              </div>
              <div className="font-bold text-base mt-[21px] line-clamp-3 tracking-[0.7px]">
                {title}
              </div>
              <div className="font-semibold text-xs capitalize mt-[20px] mb-3 line-clamp-1">
                <span className="item tracking-[0.5px]">{byline}</span>
              </div>
            </a>
            <button onClick={() => handleBookmarkClick(article)}>
              {isSaved ? (
                <SolidBookmarkIcon className="h-6 w-6 text-green-500" />
              ) : (
                <OutlineBookmarkIcon className="h-6 w-6 text-gray-500" />
              )}
            </button>
          </div>
        );
      })}
      {/* Button for Other News */}
      <div className="w-full text-center mt-5">
        <Link
          to="#" // Valid internal route
          className="inline-block border-shadow neu-active px-4 py-2 bg-[#17CF97] text-black hover:bg-emerald-600"
        >
          Other
        </Link>
      </div>
    </div>
  );
};

export default SideNews;
