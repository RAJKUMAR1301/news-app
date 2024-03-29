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
import NewsCompy from "./NewsCompy";
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
  const [visible,setVisible]=useState(6);

  const showMoreItems=()=>{
    setVisible((prevValue)=>prevValue+3);
  }
  const showLessItems = () => {
    if (visible >= 6) {
      setVisible((prevValue) => prevValue - 3);
    }
  };
  
  const scrollPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const scrollNext = () => {
    sliderRef.current?.slickNext();
  };

  if (filteredArticles.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center overflow-y-hidden bg-gray-600 text-gray-100 py-2 px-3 rounded-lg border border-gray-900">
      <p onClick={() => push("/")}>
        <p  className="bg-gray-800 font-semibold text-gray-100 py-2 px-3 rounded-lg border border-gray-900">
          Page Not Found
        </p>
        <p className="text-sm text-center font-serif">
  <span className="font-bold">Back to</span>
  <span className="underline cursor-pointer" onClick={() => push("/")}> Home page</span>
</p>

      </p>
    </div>
    
    
    );
  }

  return (
    <div className="flex flex-col  bg-slate-200 mx-auto mt-20 py-5 gap-3 lg:gap-1">
       <div className="bg-slate-200 mt-4 md:mt-10">
   <div className='flex  mx-auto shadow-sm bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
      <button 
        className={`${isGrid ? "bg-gray-400 text-gray-900" : "bg-transparent text-gray-50"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setIsGrid(true)}>
        Home 
      </button>
      <button 
        className={`${!isGrid ? "bg-gray-400 text-gray-900" : "bg-transparent text-gray-50"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setIsGrid(false)}>
        Blog
      </button>
    </div>
   </div>


   <div className="hidden sm:block md:flex bg-gray-300 mt-0 mb-4 mx-auto justify-content items-center gap-4 p-4 rounded-lg max-w-[960px] shadow-lg">
  <div className="mt-2 font-serif text-brown-100">
    For the best experience, use<Link href="/"> <span className="text-orange-800 font-2xl font-bold hover:text-orange-400">Newssy</span> </Link> app on your smartphone
  </div>
  <div className="flex justify-center mt-4">
    <Link href="https://example.com/appstore">
      <img src="/appstore.svg" className="w-24 h-auto mr-2" />
    </Link>
    <Link href="https://example.com/playstore">
      <img src="/playstore.svg" className="w-24 h-auto ml-2" />
    </Link>
  </div>
</div>


      {isGrid ? (
    <div className="grid grid-cols-1  gap-6 justify-content items-center mt-[-100]  sm:mt-30">
    {filteredArticles?.slice(0, visible).map((article: any, index: number) => (
      // Slice to extract first 6 articles
      <div className="cols-span-1" key={index}>
  <div className="md:hidden  hover:scale-105 transition duration-400 ease-in"> {/* Render NewsComp on small screens (hidden on medium screens and up) */}
    <NewsComp article={article} />
  </div>
  <div className="hidden md:block  hover:scale-105 transition duration-400 ease-in"> {/* Render NewsCompy on medium screens and up (hidden on small screens) */}
    <NewsCompy article={article} />
  </div>
</div>


    
    ))}
    <div className="col-span-full flex justify-center mt-6 gap-2"> {/* Add flexbox properties to center the buttons */}
    <button className="bg-gray-800 hover:bg-slate-300 hover:text-gray-900 text-gray-100 py-2 px-3 rounded-lg border border-gray-900" onClick={showMoreItems}>
  Show More
</button>
<button className="bg-gray-800 hover:bg-slate-300 hover:text-slate-900 text-gray-100 py-2 px-3 rounded-lg border border-gray-700" onClick={showLessItems }>
  Show Less
</button>

    </div>
  </div>
  
 ) : (
        <div className=" w-3/4 md:w-1/2  m-auto mt-[-40]">
  <div className="relative ">
       <div className="bg-slate-300"> 
       <Slider className="bg-slate-500 py-8 rounded-xl" ref={sliderRef} {...settings}>
  {filteredArticles?.map((article: any, index: number) => (
    <div className="mt-[-40] h-[400px] z-20 text-black" key={index}>
      <NewsComp isGrid={isGrid} article={article} />
    </div>
  ))}
</Slider>



    <button className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full" onClick={scrollPrev}>
      &lt;
    </button>
    <button className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full" onClick={scrollNext}>
      &gt;
    </button>
         </div>
   
  </div>
</div>

        
      )}
    </div>
  );
};

export default NewsGrid;
