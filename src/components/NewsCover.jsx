// src/components/NewsCover.js
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
}) {
  return (
    <>
      <img
        src={imageUrl}
        alt="News Cover"
        className="w-full h-[400px] object-cover"
      />

      <div className="flex flex-col justify-end py-4 gap-2">
        <p className="uppercase text-xs font-semibold">
          {category} | {publishedDate}
        </p>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-base">
          {description} {description} {description} {description} {description}
        </p>
        <p className="mt-5">{byline}</p>

        <p className="font-semibold">
          Source:{" "}
          <a className="text-blue-500" href={url} target="_blank" rel="noreferrer" >
            {source}
          </a>{" "}
        </p>
      </div>
    </>
  );
}
