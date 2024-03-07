import React from 'react'
import { FaDribbbleSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" raju lg:px-20 py-16 px-4 grid lg:grid-cols-3 gap-8 bg-slate-800">
        <div className="">
        <div className=" gap-4 flex justify-between md:w-[75%] my-6">
    <a href="facebook.com">
        <FaFacebookSquare size={30} />
    </a>
    <a href="instagram.com">
        <FaInstagram size={30} />
    </a>
    <a href="twitter.com">
        <FaTwitterSquare size={30} />
    </a>
    <a href="github.com">
        <FaGithubSquare size={30} />
    </a>
    <a href="dribbble.com">
        <FaDribbbleSquare size={30} />
    </a>
</div>

          
        </div>
        <div className=" raj sm:gap-2 g:col-span-3 flex justify-between mt-6">
        <div > 
    <h2 className="font-medium text-gray-400">Branch</h2>
    <ul>
        <li className="py-2 text-sm"><a href="/" target="_blank" rel="noopener noreferrer">Delhi</a></li>
        <li className="py-2 text-sm"><a href="/" target="_blank" rel="noopener noreferrer">Srinagar</a></li>
        <li className="py-2 text-sm"><a href="/" target="_blank" rel="noopener noreferrer">Patna</a></li>
        <li className="py-2 text-sm"><a href="/" target="_blank" rel="noopener noreferrer">Jammu</a></li>
    </ul>
</div>


            <div>
    <h2 className="font-medium text-gray-400">Partners</h2>
    <ul>
        <li className="py-2 text-sm"><a href="https://www.indiatoday.in/">India's Today</a></li>
        <li className="py-2 text-sm"><a href="https://www.ndtv.com/">NDTV</a></li>
        <li className="py-2 text-sm"><a href="https://www.zeetv.com/">ZEE TV</a></li>
        <li className="py-2 text-sm"><a href="https://www.abplive.in/">ABP NEWS</a></li>
    </ul>
</div>
<div>
    <h2 className="font-medium text-gray-400">Legal</h2>
    <ul>
        <li className="py-2 text-sm"><a href="https://example.com/claim" target="_blank" rel="noopener noreferrer">Claim</a></li>
        <li className="py-2 text-sm"><a href="https://example.com/policy" target="_blank" rel="noopener noreferrer">Policy</a></li>
        <li className="py-2 text-sm"><a href="https://example.com/terms" target="_blank" rel="noopener noreferrer">Terms</a></li>
    </ul>
</div>


            <div>
    <h2 className="font-medium text-gray-400">Contacts</h2>
    <ul>
        <li className="py-2 text-sm">
            <span className="font-semibold">Phone:</span> <span>+1234567890</span>
        </li>
        <li className="py-2 text-sm">
            <span className="font-semibold">Email:</span> <a href="mailto:info@example.com">info@example.com</a>
        </li>
    </ul>
</div>

           
        </div>
    </div>
  );
}

export default Footer;
