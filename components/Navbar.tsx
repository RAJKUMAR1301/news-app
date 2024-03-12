// import Head from 'next/head';
// import { getSearchQuery } from "@/context/SearchContext";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaSearch } from "react-icons/fa";
// import { RxDropdownMenu } from "react-icons/rx";
// import { ImCross } from "react-icons/im";

// const Navbar = (props: any) => {
//   const categories = [
//     { categories: "business" },
//     { categories: "entertainment" },
//     { categories: "general" },
//     { categories: "health" },
//     { categories: "science" },
//     { categories: "sports" },
//     { categories: "technology" },
//   ];

//   const { searchQuery, setSearchQuery } = getSearchQuery();

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearch = () => {
//     console.log('Searching for:', searchQuery);
//   };

//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (


//     <nav className={`items${showDropdown?'shows':''}`}>
//       <ul>
//         <li>
//           <Link href={'/'} className="logo">
//             NEWS APP
//           </Link>
//         </li>
//         {/* dynamically icons */}
//         <li className="btn" onClick={toggleDropdown}>
//           {showDropdown ? (
//             <ImCross className="Cross" onClick={toggleDropdown} />
//           ) : (
//             <RxDropdownMenu className="Dropdown" onClick={toggleDropdown} />
//           )}
//         </li>

//         {/* links showDown used for taking show class additonal */  }
//          <div className={`items${showDropdown?'shows':''}`}>
//           {categories.map((category, index) => (
//             <Link href={`/categories/${category.categories}`} key={index} className='capitalize'>
//              <p> {category.categories}</p>
//             </Link>
//           ))}
//         </div> 
       

        
//         <li className="search-icon">
//           <input
//             className="placeholder"
//             placeholder="Search..."
//             type='text'
//             value={searchQuery}
//             onChange={handleInputChange}
//           />
//           <button className="icon" onClick={handleSearch}>
//             <FaSearch className="fasearch" />
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import Head from 'next/head';
import { getSearchQuery } from "@/context/SearchContext";
import React, { useState,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";

const Navbar = (props:any) => {
  const categories = [
    { categories: "business" },
    { categories: "entertainment" },
    { categories: "general" },
    { categories: "health" },
    { categories: "science" },
    { categories: "sports" },
    { categories: "technology" },
  ];

  const { searchQuery, setSearchQuery } = getSearchQuery();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Implement your search logic here
  };

  const [navbar, setNavbar] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full  max-h-[110px] mx-auto">
    <nav className={`  fixed top-0 left-0 right-0 z-10 ${navbar ? 'bg-black bg-opacity-50' : 'bg-slate-800'} md:bg-slate-800`}>
      <div className="px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:justify-evenly md:px-8">
        {/* left part */}
        <div>
          <div className="flex  relative  items -center justify-between py-3 md:py-0 md:block">
            {/* LOGO */}
            
            <Link href="/">
  <div className=" flex items-center md:flex-col">
  <img src="/download.svg" alt="logo" className="w-20 h-30 filter grayscale brightness-60 sepia hue-rotate-180 rotate-animation red-img"/>



    <h2 className={`text-2xl font-bold py-0 mb-4 mt-0 text-white transition duration-300 hover:text-red-700 ${navbar && 'border-b-2 border-white'}`}>
      Newssy
    </h2>
  </div>
</Link>


  
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden text-black">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
                style={{ transition: "background-color 0.2s, color 0.2s" }} // Add transition here
              >
                {navbar ? (
                  <div className="flex justify-items-center gap-4 items-center" style={{ transition: "opacity 0.3s" }}>
                    <span className="text-xl font-semibold text-orange-800">
                      <span className="border-b border-black underline-offset-2">CLOSE</span>
                    </span>
                    <ImCross width={50} height={50} className="text-black" />
                  </div>
                ) : (
                  <div className="flex justify-items-center gap-4 items-center" style={{ transition: "opacity 0.3s" }}>
                    <span className="text-xl font-semibold text-white">
                      <span className="border-b border-black underline-offset-2">Menu</span>
                    </span>
                    <RxDropdownMenu className="w-8 h-8 text-slate-300 focus:border-none active:border-none" />
                  </div>
                )}
              </button> 
            </div>
  
          </div>
        </div>
        {/* right part */}
        <div  >
          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
              navbar ? 'p-12 md:p-0 block' : 'hidden' 
            }`}
          >
            <ul className={`h-screen z-index:20 md:h-auto items-center justify-center md:flex ${navbar ? 'block' : 'hidden'} md:bg-slate-800`}>
              <li className="relative pb-6 pt-[-10px] flex items-center justify-center text-xl text-white py-4 mr-4 ml-16 mx-auto md:border-b-0 md:hover:bg-transparent">
                <input
                  className="placeholder text-center text-black border border-solid border-black rounded-full mr-2 px-2 py-1"
                  placeholder="Search..."
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
  
                <button className="icon text-black w-8 h-8 flex justify-center items-center bg-slate-400 rounded-full p-1" onClick={handleSearch}>
                  <FaSearch className="fasearch" />
                </button>
  
              </li>
  
              {navbar && (
                <li className=" md:hidden pb-6 pt-[-10px] flex items-center justify-center text-2xl font-extrabold ">
                  Categories
                </li>
              )}
  
              {categories.map((category, index) => (
                <li key={index} className="pb-4 text-l text-gray-100 py-2 md:px-6 text-center font-semibold">
                  <Link href={`/categories/${category.categories}`} onClick={() => setNavbar(!navbar)} className="hover:text-orange-500 md:hover:text-black transition duration-300">
                    <span className="hover:underline underline cursor-pointer">
                      {category.categories.toUpperCase()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* {right part} */}
      </div>
    </nav>
  </div>
  
  );
}

export default Navbar;
