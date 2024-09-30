import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Import Link

export default function ItemCard({ news }) {
  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex justify-center lg:mb-5 mb-2">
      <div className="max-w-sm w-full flex flex-col rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white">
        <img
          src={
            news.multimedia && news.multimedia.length > 0
              ? `http://www.nytimes.com/${news.multimedia[0].url}`
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlTTXqU0kuV6fgv5ncaBf_gnY39vGJa1F3A&s"
          }
          className="w-full h-40 object-cover"
          alt={news.headline.main}
        />
        <div className="p-3 flex flex-col flex-grow mb-2">
          <h5 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
            {truncateText(news.headline.main, 8)}
          </h5>
          <p className="text-gray-600 text-base mt-2">
            {truncateText(news.snippet, 17)}
          </p>
          <div className="mt-auto justify-between items-center flex text-gray-500 ">
            <p className="text-sm mt-2">{formatDate(news.pub_date)}</p>
            {/* Ganti a dengan Link */}
            <Link
              to={`/news/${encodeURIComponent(news._id)}`}
              className="inline-flex items-center bg-blue-500 text-white rounded hover:bg-blue-500 transition-colors p-2"
            >
              Details
              <ChevronRightIcon className="w-5 h-auto" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
