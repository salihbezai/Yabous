import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <div className="bg-color-bg-1 text-white">
        <div className="flex justify-center relative px-1 py-3 store-container ">
          <div className="flex">
            <p className="text-base">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a className="text-base underline ml-2" href="/">
                ShopNow
              </a>
            </p>
          </div>
          <div className="absolute right-4 flex justify-center cursor-pointer ">
            <select>
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
      <div className="px-2 py-5 store-container flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <h1 className="font-extrabold text-lg">Yabous</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Signup</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center relative px-1 py-1 bg-[#F5F5F5] rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-black border-none outline-none bg-[#F5F5F5] px-1 py-1 rounded text-sm mr-4"
            />
            <MagnifyingGlassIcon className="icon-style text-black absolute right-0" />
          </div>
          <div className="flex items-center gap-2">
            <div>
              <HeartIcon className="icon-style text-black" />
            </div>
            <div>
              <ShoppingCartIcon className="icon-style text-black" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
