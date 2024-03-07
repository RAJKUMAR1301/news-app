// import React from 'react'
// import Head from 'next/head';
// import {useState} from 'react'
// import Link from 'next/link';
// const Toggle = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleOption1 = () => {
    
//     setIsActive(true);
//   };

//   const handleOption2 = () => {
   
//     setIsActive(false);
//   };

//   return (
    
    

//     <div className="flex flex-col  items-center" style={{ marginBottom: -160 }}>
//      <div className="w-full h-4 mt-40 flex justify-center items-center">
//   <Link href="/" onClick={handleOption1} className={`block text-blue ${isActive ? 'pointer-events-none bg-slate-500' : 'pointer-events-auto bg-gray-300'} text-2xl text-slate-800 mx-4 px-4 py-2 rounded border-black border-solid border-2`}>
//     Home Section
//   </Link>
//   <Link href="/categories/blog" onClick={handleOption2} className={`block text-blue ${isActive ? 'pointer-events-auto bg-gray-300' : 'pointer-events-none bg-slate-500'} mx-4 text-2xl text-slate-800 px-4 py-2 rounded border-black border-solid border-2`}>
//     Blog Section
//   </Link>
// </div>

//       <div className="mt-10 mb-12 flex justify-center items-center h-100 text-3xl italic relative">
//     <span className="text-red-400 font-bold">
//         Enjoy Your Reading
//     </span>
//     <span className="absolute h-1 w-full bg-slate-300 bottom-0 top-10  left-0"></span>
// </div>



//     </div>
    
  
   

    
    

//   );
// }

// export default Toggle
