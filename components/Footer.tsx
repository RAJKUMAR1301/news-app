import React from 'react'
import { FaDribbbleSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className=" raju lg:px-20 py-16 px-4 grid lg:grid-cols-2 gap-8 bg-slate-800">
        <div className="">
  <div className="flex justify-between w-full  md:w-4/5 my-6 gap-x-4">
  <Link href="/"><img src="/i.jpeg" alt="logo" className="h-8 w-8" /></Link>

  <Link href="/"><img src="/f.png" alt="logo" className="h-8 w-8" /></Link>
<Link href="/"><img src="/l.png" alt="logo" className="h-8 w-8" /></Link>
<Link href="/" ><img src="/t.png" alt="logo" className="h-8 w-8" /></Link>
  </div>
</div>

<div className="raj sm:gap-2 g:col-span-3 flex justify-between mt-6">
    <div> 
        <h2 className="font-extrabold  hover:text-red-900 text-xl text-white">Branch</h2>
        <ul>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800"><a href="/" target="_blank" rel="noopener noreferrer">Delhi</a></li>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800"><a href="/" target="_blank" rel="noopener noreferrer">Srinagar</a></li>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800"><a href="/" target="_blank" rel="noopener noreferrer">Patna</a></li>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800"><a href="/" target="_blank" rel="noopener noreferrer">Jammu</a></li>
        </ul>
    </div>

    <div>
        <h2 className="font-extrabold hover:text-red-900 text-xl text-white">Partners</h2>
        <ul>
            <li className="py-2 text-gray-500 text-sm hover:text-orange-800"><a href="https://www.indiatoday.in/">India's Today</a></li>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800"><a href="https://www.ndtv.com/">NDTV</a></li>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800"><a href="https://www.zeetv.com/">ZEE TV</a></li>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800"><a href="https://www.abplive.in/">ABP NEWS</a></li>
        </ul>
    </div>

    <div>
        <h2 className="font-extrabold hover:text-red-900 text-xl text-white">Legal</h2>
        <ul>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800"><a href="https://example.com/claim" target="_blank" rel="noopener noreferrer">Claim</a></li>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800"><a href="https://example.com/policy" target="_blank" rel="noopener noreferrer">Policy</a></li>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800"><a href="https://example.com/terms" target="_blank" rel="noopener noreferrer">Terms</a></li>
        </ul>
    </div>

    <div>
        <h2 className="font-extrabold  hover:text-red-900 text-xl text-white">Contacts</h2>
        <ul>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800">
                <span className="font-semibold  text-gray-200">Phone:</span> <span>+1234567890</span>
            </li>
            <li className="py-2 text-sm text-gray-500 hover:text-orange-800">
                <span className="font-semibold  text-gray-200">Email:</span> <a href="mailto:info@example.com">info@example.com</a>
            </li>
        </ul>
    </div>
</div>

    </div>
  );
}

export default Footer;
