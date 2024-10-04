// src/Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/news/newsSlice";
import ItemCard from "../components/ItemCard";
import SideNews from "../components/SideNews";
import NewsCover from "../components/NewsCover";
import { Divider } from "@nextui-org/react";
import Share from "../components/Share";

function Home() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto pb-16">
        <div className="max-w-4xl mx-auto pt-5 rounded-lg">
          <h1 className="text-3xl font-bold text-center font-nunito">
            Trending News
          </h1>
        </div>
        <div className="flex mx-16 my-5 gap-2">
          <div className="w-full">
            <NewsCover />
          </div>

          <div className="border-l border-gray-300 h-full mx-4"></div>
          <div className="w-2/5">
            <SideNews />
          </div>
        </div>
        
        {/* <div className="max-w-6xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading && <h1 className="text-center text-2xl">Loading...</h1>}
            {error && (
              <h1 className="text-center text-2xl text-red-500">{error}</h1>
            )}
            {articles.map((item) => (
              <ItemCard key={item._id} news={item} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
