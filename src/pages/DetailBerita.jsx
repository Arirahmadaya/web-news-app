// src/pages/DetailBerita.jsx
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { fetchNewsById } from "../features/news/newsSlice"; // Pastikan impor fetchNewsById
import Others from "../components/OthersArticles";
import Share from "../components/Share";
import { BookmarkIcon } from "@heroicons/react/24/outline";

export default function DetailBerita() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id); // Decode ID

  const dispatch = useDispatch();
  const {
    selectedArticle: article,
    loading,
    error,
  } = useSelector((state) => state.news);

  // Ambil berita berdasarkan ID ketika komponen dimuat
  useEffect(() => {
    dispatch(fetchNewsById(decodedId));
  }, [dispatch, decodedId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <div className=" p-4 flex gap-5">
        <div className="w-4/5">
          {/* Breadcrumbs */}
          <Breadcrumbs className="my-5">
            <BreadcrumbItem href="/">Beranda</BreadcrumbItem>
            <BreadcrumbItem href="/">Berita</BreadcrumbItem>
            <BreadcrumbItem>{article.headline.main}</BreadcrumbItem>
          </Breadcrumbs>

          {/* Article Title */}
          <h1 className="text-3xl font-bold font-nunito mb-4">
            {article.headline.main}
          </h1>
          <p className="text-gray-800 font-fira  mb-4">{article.snippet}</p>
          {/* Article Image */}
          <img
            src={
              article.multimedia && article.multimedia.length > 0
                ? `http://www.nytimes.com/${article.multimedia[0].url}`
                : "https://via.placeholder.com/400"
            }
            alt={article.headline.main}
            className="w-full max-h-[600px] rounded-lg mb-4 shadow-md"
          />
          <p className="font-nunito my-4">
            {article.byline.original} from {article.source}
          </p>

          <p className="text-gray-800 font-fira  mb-4">
            {article.lead_paragraph}
            {article.lead_paragraph}
            {article.lead_paragraph}
            {article.lead_paragraph}
            {article.lead_paragraph}
            {article.lead_paragraph}
            {article.lead_paragraph}
            {article.lead_paragraph}
            {article.lead_paragraph}
            {article.lead_paragraph}
            {article.lead_paragraph}
            {article.lead_paragraph}
          </p>
          <p className="font-nunito font-semibold text-lg">
            {new Date(article.pub_date).toLocaleDateString("id-ID")}
          </p>

          <div className="flex justify-between items-center">
            <p className="font-semibold">
              Source:{" "}
              <a
                className="text-blue-500"
                href={article.web_url}
                target="_blank"
                rel="noreferrer"
              >
                {article.source}
              </a>{" "}
            </p>
            {/* Icon Bookmark */}
            <button className="mr-2">
              <BookmarkIcon />
            </button>
          </div>
          <div>
            {/* <h1 className="text-3xl font-bold text-center mb-10">Other Articles</h1> */}
          </div>
        </div>
        <div className="w-auto my-10 fixed lg:right-28 right-5">
          <Share />
        </div>
      </div>
    </>
  );
}
