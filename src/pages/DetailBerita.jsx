import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Textarea } from "@nextui-org/react";
import { XMarkIcon, AcademicCapIcon, ArchiveBoxIcon  } from '@heroicons/react/24/outline';

export default function DetailBerita() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id); // Decode ID

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
          params: {
            "api-key": "fyP2QCyYiq1S9jIonWZuNXt0JqOZfxm9",
            fq: `_id:("${decodedId}")`, // Gunakan decodedId untuk query
          },
        });

        setArticle(data.response.docs[0]);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [decodedId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        {/* Breadcrumbs */}
        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/">Berita</BreadcrumbItem>
          <BreadcrumbItem>{article.headline.main}</BreadcrumbItem>
        </Breadcrumbs>
        
        {/* Article Title */}
        <h1 className="text-3xl font-bold mb-4">{article.headline.main}</h1>
        
        {/* Article Image */}
        <img
          src={
            article.multimedia && article.multimedia.length > 0
              ? `http://www.nytimes.com/${article.multimedia[0].url}`
              : "https://via.placeholder.com/400"
          }
          alt={article.headline.main}
          className="w-full h-auto rounded-lg mb-4 shadow-md"
        />

        {/* Article Snippet and Date */}
        <p className="text-gray-700 mb-4">{article.snippet}</p>
        <p className="text-gray-500">{new Date(article.pub_date).toLocaleDateString("id-ID")}</p>
        
        {/* Share Section */}
        <div className="flex space-x-4 mb-8 mt-4">
          <p>Bagikan ke:</p>
          <div className="flex justify-center xl:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-6 w-8 items-center justify-center rounded-full border border-slate-300 hover:border-blue-500 hover:bg-blue-100 transition duration-300"
            >
              <AcademicCapIcon className="text-black w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-6 w-8 items-center justify-center rounded-full border border-slate-300 hover:border-blue-500 hover:bg-blue-100 transition duration-300"
            >
              <AcademicCapIcon className="text-black w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-6 w-8 items-center justify-center rounded-full border border-slate-300 hover:border-blue-500 hover:bg-blue-100 transition duration-300"
            >
              <AcademicCapIcon className="text-black w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-6 w-8 items-center justify-center rounded-full border border-slate-300 hover:border-blue-500 hover:bg-blue-100 transition duration-300"
            >
              <AcademicCapIcon className="text-black w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">Komentar</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-gray-800">
                <strong>Iwan RX</strong> - 2 jam yang lalu
              </p>
              <p>Terima kasih atas informasinya.</p>
            </div>
          </div>
          <div className="mt-6">
            <form>
              <Textarea
                label="Komentar"
                variant="bordered"
                placeholder="Tulis komentar/masukan mu disini"
                disableAnimation
                disableAutosize
                classNames={{
                  base: "w-full",
                  input: "resize-y min-h-[100px]",
                }}
              />
              <button
                type="submit"
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
