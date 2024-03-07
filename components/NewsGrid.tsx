import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { getSearchQuery } from "@/context/SearchContext";
import NewsComp from "./NewsComp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-bootstrap/Carousel";

const NewsGrid = ({ articles }: any) => {
  const { searchQuery } = getSearchQuery();
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [isGrid, setIsGrid] = useState(true);
  const sliderRef = useRef<any>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { push } = useRouter();

  useEffect(() => {
    const filtered = articles.filter((article: any) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    setFilteredArticles(filtered);
  }, [searchQuery, articles]);

  const toggleLayout = () => {
    setIsGrid((prevState) => !prevState);
  };

  const scrollPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const scrollNext = () => {
    sliderRef.current?.slickNext();
  };

  if (filteredArticles.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p onClick={() => push("/")}>
          <p className="text-center text-3xl font-waterfall font-bold bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded border-black border-2">
            <div className="flex flex-col">
              <h1 className="text-xl">Page Not Found</h1>
              <h3 className="text-sm">Back to Home page</h3>
            </div>
          </p>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-20 md:mt-15 py-5">
      <div className="flex justify-end mb-3">
        <button
          onClick={toggleLayout}
          className="m-auto b-10 bg-red-200 p-4 mt-2"
        >
          Toggle Layout
        </button>
      </div>
      {isGrid ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredArticles?.map((article: any, index: number) => (
            <div className="cols-span-1" key={index}>
              <NewsComp article={article} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[95vw] relative flex overflow-x-scroll  gap-8">
          {filteredArticles?.map((article: any, index: number) => (
            <div className="bg-white min-w-[400px] text-black" key={index}>
              <NewsComp article={article} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
