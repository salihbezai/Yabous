import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="z-50">
      <div className="bg-color-bg-1 text-white">
        <div className="flex  justify-center items-center  relative px-1 py-3 store-container ">
          <div className="flex-1 text-center mr-2">
            <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a
                className="text-base underline ml-2 sm:text-base md:text-lg lg:text-lg xl:text-xl"
                href="/"
              >
                ShopNow
              </a>
            </p>
          </div>
          <div className="flex  cursor-pointer items-center ">
            <select className="cursor-pointer">
              <option
                value="en"
                className="text-color-1 cursor-pointer"
                selected
              >
                English
              </option>
              <option value="ar" className="text-color-1 cursor-pointer">
                العربية
              </option>
              <option value="fr" className="text-color-1 cursor-pointer">
                French
              </option>
            </select>
          </div>
        </div>
      </div>
      <div
        className="px-2 py-5 store-container flex items-center justify-between 
      flex-col sm:flex-col gap-2 md:flex-row"
      >
        <div className="flex items-center justify-between w-full">
          <div className="mr-3">
            <Link to={"/"}>
              <h1 className="font-extrabold text-xl xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Yabous
              </h1>
            </Link>
          </div>
          <nav className=" ml-2">
            <ul className="flex gap-3">
              <li className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl ">
                <Link to="/" className="underline">
                  Home
                </Link>
              </li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">
                <Link to="/">Contact</Link>
              </li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">
                <Link to="/">About</Link>
              </li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">
                <Link to="/Sign-up">Signup</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-full md:w-auto">
          <div className="flex items-center relative px-1 py-1 bg-[#F5F5F5] rounded w-full sm:w-full md:w-auto">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-black sm:text-sm md:text-base lg:text-base xl:text-lg
               border-none outline-none bg-[#F5F5F5] px-1 py-1 rounded text-sm mr-4"
            />
            <MagnifyingGlassIcon className="icon-style text-black absolute right-0 w-6 h-6  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
          </div>
          <div className="flex items-center gap-2">
            <div>
              <HeartIcon className="icon-style text-black w-6 h-6  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </div>
            <div>
              <ShoppingCartIcon className="icon-style text-black w-6 h-6  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </div>
            <div>
              <UserIcon className="icon-style text-black w-6 h-6  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
