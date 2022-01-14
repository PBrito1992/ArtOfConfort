import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import companyLogo from "../../assets/company_logo.png";
import facebookLogo from "../../assets/facebook_icon.svg";
import instagramLogo from "../../assets/instagram_icon.svg";
import Navbar from "../navbar";

const Header = () => {
  const [displayNavbar, setDisplayNavbar] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-20">
      <div className="h-8 px-5 bg-black flex items-center justify-end">
        <svg
          className="w-5 fill-white cursor-pointer hover:scale-110"
          enableBackground="new 0 0 56.693 56.693"
          height="56.693px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 56.693 56.693"
          width="56.693px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
        </svg>
        <svg
          className="w-5 fill-white ml-2 cursor-pointer hover:scale-110"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 56.7 56.7"
          enableBackground="new 0 0 56.7 56.7"
        >
          <g>
            <path
              d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
            />
            <circle cx="41.5" cy="16.4" r="2.9" />
            <path
              d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
            />
          </g>
        </svg>
      </div>
      <div className="flex justify-between items-center p-5 shadow-lg bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 xl:h-10 xl:w-10 mr-auto cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setDisplayNavbar(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div className="mr-auto">
          <Link href="/">
            <a className="block w-24 xl:w-auto">
              <Image
                src={companyLogo}
                alt="company logo"
                className="cursor-pointer"
                width={150}
                height={75}
              />
            </a>
          </Link>
        </div>
      </div>
      {displayNavbar && <Navbar onClose={() => setDisplayNavbar(false)} />}
    </header>
  );
};

export default Header;
