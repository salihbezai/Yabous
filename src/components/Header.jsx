import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { useState } from "react";

import {
  ArrowLeftStartOnRectangleIcon,
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StarIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        className="py-5 store-container flex items-center justify-between 
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
                <Link to="/contact">Contact</Link>
              </li>
              <li className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">
                <Link to="/about">About</Link>
              </li>
              {!user && (
                <li className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">
                  <Link to="/Sign-up">Signup</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-full md:w-auto">
          <div className="flex items-center relative px-1 py-1 bg-[#F5F5F5] rounded w-full sm:w-full md:w-auto ">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-black sm:text-sm md:text-base lg:text-base xl:text-lg
               border-none outline-none bg-[#F5F5F5] px-1 py-1 rounded text-sm mr-4 "
            />

            <MagnifyingGlassIcon className="icon-style text-black absolute right-0 w-8 h-8  sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
          </div>
          {user && (
            <div className="flex items-center gap-2">
              <div>
                <Link to="/wishlist" className="relative">
                  <span
                    className="secondaryColorBg absolute w-5 h-5 rounded-full 
                   flex items-center justify-center text-white right-0 top-[-8px]"
                  >
                    4
                  </span>
                  <HeartIcon
                    className="icon-style text-black w-8 h-8  
                   sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8 "
                  />
                </Link>
              </div>
              <div>
                <Link to="/cart" className="relative">
                  <span
                    className="secondaryColorBg absolute w-5 h-5 rounded-full 
                   flex items-center justify-center text-white right-0 top-[-8px]"
                  >
                    4
                  </span>
                  <ShoppingCartIcon className="icon-style text-black w-8 h-8  sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8" />
                </Link>
              </div>
              <div>
                <UserIcon
                  onClick={handleClick}
                  className="icon-style text-black w-8 h-8  sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-8 xl:h-8"
                />
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  sx={{
                    "& .MuiPaper-root": {
                      background:
                        "linear-gradient(to bottom right, #111827, #374151, #6D28D9)",
                      color: "white", // Text color
                      minWidth: "200px", // Adjust width
                      borderRadius: "3px", // Rounded corners
                    },
                  }}
                >
                  <MenuItem onClick={handleClose} className="group w-full">
                    <Link
                      className="flex items-center gap-5 group-hover:bg-[#6079A6] w-full"
                      to="/myaccount/edit-profile"
                    >
                      <UserIcon className="icon-style w-7 h-7 text-white" />
                      <span className=" border-b-blue-300 py-1 px-1 w-full">
                        Manage My Account
                      </span>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="group w-full">
                    <Link
                      className="flex items-center gap-5 group-hover:bg-[#6079A6] w-full"
                      to="/"
                    >
                      <ShoppingBagIcon className="icon-style w-7 h-7 text-white" />
                      <span className=" border-b-blue-300 py-1 px-1 w-full">
                        My order
                      </span>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="group w-full">
                    <Link
                      className="flex items-center gap-5 group-hover:bg-[#6079A6] w-full"
                      to="/"
                    >
                      <XCircleIcon className="icon-style w-7 h-7 text-white" />
                      <span className=" border-b-blue-300 py-1 px-1 w-full">
                        My Cancellations
                      </span>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="group w-full">
                    <Link
                      className="flex items-center gap-5 group-hover:bg-[#6079A6] w-full"
                      to="/"
                    >
                      <StarIcon className="icon-style w-7 h-7 text-white" />
                      <span className=" border-b-blue-300 py-1 px-1 w-full">
                        My Reviews
                      </span>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className="group w-full">
                    <Link
                      className="flex items-center gap-5 group-hover:bg-[#6079A6] w-full"
                      to="/"
                    >
                      <ArrowLeftStartOnRectangleIcon className="icon-style w-7 h-7 text-white" />
                      <span className=" border-b-blue-300 py-1 px-1 w-full">
                        Logout
                      </span>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
