import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
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
    <div className="flex flex-col mx-auto mt-20 py-5 gap-3 lg:gap-1">
   <div className="flex mx-auto justify-center  md:mb-[-60px] ">
  <button
    onClick={toggleLayout}
    className="flex bg-slate-400 text-slate-700 items-center justify-center h-10 p-2 mt-2 border border-slate-800 border-solid rounded font-bold py-6 px-4 lg:mt-10  sm:mb-20  "
    style={{ fontSize: '20px', borderWidth: '3px' }}
  >
    <span style={{ marginRight: '5px' }}>Home</span>
    <FaArrowRightArrowLeft className="text-black" />
    <span style={{ marginLeft: '5px' }}>Blog</span>
  </button>
</div>



      {isGrid ? (
       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-[-100] sm:mt-30">
       {filteredArticles?.map((article: any, index: number) => (
         <div className="cols-span-1" key={index}>
           <NewsComp article={article} />
         </div>
       ))}
     </div>
     
      ) : (
        <div className="w-3/4  m-auto mt-[-40]">
  <div className="relative">
    <Slider ref={sliderRef} {...settings}>
      {filteredArticles?.map((article: any, index: number) => (
        <div className="bg-white mt-[-40] h-[400px] text-black" key={index}>
          <NewsComp article={article} />
        </div>
      ))}
    </Slider>

    <button className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full" onClick={scrollPrev}>
      &lt;
    </button>
    <button className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full" onClick={scrollNext}>
      &gt;
    </button>
  </div>
</div>

        
      )}
    </div>
  );
};

export default NewsGrid;
