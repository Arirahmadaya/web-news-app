// src/pages/DetailBerita.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"; // Tambahkan useState
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { fetchNewsById } from "../features/news/newsSlice";
import Share from "../components/Share";
import { BookmarkIcon } from "@heroicons/react/24/outline";

export default function DetailBerita() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const dispatch = useDispatch();
  const {
    selectedArticle: article,
    loading,
    error,
  } = useSelector((state) => state.news);

  // State untuk menyimpan lebar jendela
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Ambil berita berdasarkan ID ketika komponen dimuat
  useEffect(() => {
    dispatch(fetchNewsById(decodedId));
  }, [dispatch, decodedId]);

  // Event listener untuk resize jendela
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("Window width updated: ", window.innerWidth); // Debugging
    };

    window.addEventListener("resize", handleResize);
    
    // Bersihkan listener saat komponen di-unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  const truncateHeadline = (headline, wordLimit) => {
    const words = headline.split(" ");
    const truncated = words.length > wordLimit && windowWidth < 648
      ? words.slice(0, wordLimit).join(" ") + "..."
      : headline;

    console.log("Truncating headline:", { original: headline, truncated }); // Debugging
    return truncated;
  };

  // Buat URL untuk detail artikel
  const articleUrl = `https://web-news-app.vercel.app/news/${decodedId}`; // Ganti dengan URL dasar aplikasi Anda

  return (
    <>
      <div className="lg:p-16 flex gap-5 my-3">
        <div className="w-4/5">
          {/* Breadcrumbs */}
          <Breadcrumbs className="mb-4">
            <BreadcrumbItem href="/" className="whitespace-normal break-words">
              Beranda
            </BreadcrumbItem>
            <BreadcrumbItem href="/" className="whitespace-normal break-words">
              Berita
            </BreadcrumbItem>
            <BreadcrumbItem className="whitespace-normal break-words">
              {truncateHeadline(article.headline.main, 5)}
            </BreadcrumbItem>
          </Breadcrumbs>

          {/* Article Title */}
          <h1 className="lg:text-3xl text-lg font-bold font-nunito mb-4">
            {article.headline.main}
          </h1>
          <p className="text-gray-800 font-fira mb-4">{article.snippet}</p>
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

          <p className="text-gray-800 font-fira mb-4">
            {article.lead_paragraph.repeat(6)}
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
        </div>
        <div className="w-auto my-10 fixed lg:right-28 right-5">
          <Share url={articleUrl} /> {/* Kirim URL ke komponen Share */}
        </div>
      </div>
    </>
  );
}
