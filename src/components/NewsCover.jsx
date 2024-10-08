import React from "react";

export default function NewsCover({
  imageUrl,
  category,
  title,
  description,
  url,
  publishedDate,
  byline,
  source,
  handleBookmarkClick,
  bookmarkIcon, // Tambahkan prop bookmarkIcon
}) {
  return (
    <>
      <div className="w-full justify-center flex">
        <img
          src={imageUrl}
          alt="News Cover"
          className="w-full h-max-[400px] object-cover neu-img neu-active"
        />
      </div>

      <div className="flex flex-col justify-end py-4 gap-2">
        <p className="uppercase text-xs font-semibold">
          {category} | {publishedDate}
        </p>
        <h1 className="lg:text-2xl text-lg font-bold mb-2">{title}</h1>
        <p className="text-base">{description}</p>
        <p className="mt-5">{byline}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">
            Source:{" "}
            <a
              className="text-blue-500"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {source}
            </a>{" "}
          </p>
          {/* Icon Bookmark */}
          <button onClick={handleBookmarkClick} className="mr-2">
            {bookmarkIcon}
          </button>
        </div>
      </div>
    </>
  );
}
