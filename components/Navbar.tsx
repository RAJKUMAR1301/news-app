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
    <div>
     <nav className={`w-full fixed top-0 left-0 right-0 z-10 ${navbar ? 'bg-black  bg-opacity-50' : 'bg-slate-800'} md:bg-slate-800`}>
  <div className=" px-4 mx-auto lg:max-w-7xl md:items-center md:flex md: justify-evenly md:px-8">
    {/* left part */}
    <div>
      <div className="flex items-center justify-between py-3 md:py-5 md:block">
        {/* LOGO */}
        <Link href="/">
          <h2 className={`text-2xl font-bold text-white hover:text-orange-800  ${navbar && 'border-b-2 border-white'}`}>NEWS APP</h2>
        </Link>
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="md:hidden text-black">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <ImCross width={50} height={50} />
            ) : (
              <RxDropdownMenu className="w-8 h-8 text-slate-300 focus:border-none active:border-none" />


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
        <ul className={`h-screen/2 z-index:20 md:h-auto items-center justify-center md:flex ${navbar ? 'block' : 'hidden'} md:bg-slate-800`}>
        <li className="pb-6 flex items-center justify-center text-xl text-white py-2 mr-4 ml-16 mx-auto border-b-2 md:border-b-0 hover:bg-slate-800 border-slate-300 md:hover:text-purple-600 md:hover:bg-transparent">
        <input
  className="placeholder text-center text-black border border-solid border-black rounded-lg mr-2 px-2 py-1"
  placeholder="Search..."
  type="text"
  value={searchQuery}
  onChange={handleInputChange}
/>

  <button className="icon text-black" onClick={handleSearch}>
    <FaSearch className="fasearch" />
  </button>
</li>



          {categories.map((category, index) => (
            <li key={index} className="pb-6 text-l text-gray-300 py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-slate-800 border-slate-300 md:hover:text-orange-800 md:hover:bg-transparent">
              <Link href={`/categories/${category.categories}`} onClick={() => setNavbar(!navbar)}>
                {category.categories.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</nav>


    </div>
  );
}

export default Navbar;
