// import { useContext, useEffect, useState, useRef } from "react";
// import { getSearchQuery } from "@/context/SearchContext";
// import NewsComp from "./NewsComp";
// import Link from 'next/link';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const BlogGrid = ({ articles }: any) => {
//     const { searchQuery, setSearchQuery } = getSearchQuery();
//     const [filteredArticles, setFilteredArticles] = useState(articles);
//     const sliderRef = useRef<any>(null);
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };

//     useEffect(() => {
//         const filtered = articles.filter(
//             (article: any) =>
//                 article.title
//                     .toLowerCase()
//                     .includes(searchQuery.toLowerCase().trim())
//         );
//         setFilteredArticles(filtered);
//     }, [searchQuery, articles]);

//     const scrollPrev = () => {
//         sliderRef.current.slickPrev();
//     };

//     const scrollNext = () => {
//         sliderRef.current.slickNext();
//     };

//     return (
//         <div className="w-3/4 m-auto">
//             <div className="relative">
//                 {/* <Slider ref={sliderRef} {...settings}>
//                     {filteredArticles?.map((article: any, index: number) => (
//                         <div className="bg-white mt-40 h-[400px] text-black" key={index}>
//                             <NewsComp article={article} />
//                         </div>
//                     ))}
//                 </Slider> */}
//                 <button className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full" onClick={scrollPrev}>
//                     &lt;
//                 </button>
//                 <button className="absolute top-1/2  -right-8 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full" onClick={scrollNext}>
//                     &gt;
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default BlogGrid;
