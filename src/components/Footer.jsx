import {
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-color-bg-1">
      <footer className="store-container  ">
        <div className="flex-col sm:flex-col md:flex-row lg:flex-row flex gap-8 py-16 flex-wrap">
          <div className="flex-col text-white">
            <h1 className="text-xl font-bold text-white mb-2">Exclusive</h1>
            <ul className="">
              <li className="py-2">
                <Link to="/">Subscribe</Link>
              </li>
              <li className="py-2">
                <Link to="/">Get 10% off your first order</Link>
              </li>
            </ul>
            <div className="flex items-center relative  px-1 py-1 bg-[#F5F5F5] rounded my-2 w-[250px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="text-black sm:text-sm md:text-base lg:text-base xl:text-lg
               border-none outline-none bg-[#F5F5F5] px-1 py-1 rounded text-sm mr-4 w-[250px]"
              />
              <PaperAirplaneIcon className="icon-style text-black absolute right-0 w-6 h-6  sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </div>
          </div>
          <div className="flex-col text-white">
            <h1 className="text-xl font-bold text-white mb-2">Support</h1>
            <ul className="">
              <li className="py-2">
                <Link to="/">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </Link>
              </li>
              <li className="py-2">
                <Link to="/">exclusive@gmail.com.</Link>
              </li>
              <li className="py-2">
                <Link to="/">+88015-88888-9999</Link>
              </li>
            </ul>
          </div>
          <div className="flex-col text-white">
            <h1 className="text-xl font-bold text-white mb-2">Account</h1>
            <ul className="">
              <li className="py-2">
                <Link to="/">My Account</Link>
              </li>
              <li className="py-2">
                <Link to="/">Login / Register</Link>
              </li>
              <li className="py-2">
                <Link to="/">Cart</Link>
              </li>
              <li className="py-2">
                <Link to="/">Wishlist</Link>
              </li>
              <li className="py-2">
                <Link to="/">Shop</Link>
              </li>
            </ul>
          </div>
          <div className="flex-col text-white">
            <h1 className="text-xl font-bold text-white mb-2">Quick Link</h1>
            <ul className="">
              <li className="py-2">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="py-2">
                <Link to="/">Terms Of Use</Link>
              </li>
              <li className="py-2">
                <Link to="/">FAQ</Link>
              </li>
              <li className="py-2">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex-col text-white">
            <h1 className="text-xl font-bold text-white mb-2">Download App</h1>
            <ul className="">
              <li className="py-2">
                <Link to="/">Save $3 with App New User Only</Link>
              </li>
              <li className="py-2">
                <div to="/" className="flex items-center gap-5">
                  <Link to="/" className="">
                    <img
                      src="/images/Qrcode.png"
                      alt="QR Code"
                      className="w-full"
                    />
                  </Link>
                  <div className="flex flex-col gap-2 items-center">
                    <Link to="/" className="">
                      <img src="/images/google play.png" alt="" />
                    </Link>
                    <Link to="/" className="">
                      <img src="/images/appstore.png" alt="" />
                    </Link>
                  </div>
                </div>
              </li>
              <li className="py-2 flex gap-5">
                <div>
                  <img
                    src="/images/Icon-Facebook.svg"
                    alt=""
                    className="icon-style"
                  />
                </div>
                <div>
                  <img
                    src="/images/Icon-Twitter.svg"
                    alt=""
                    className="icon-style"
                  />
                </div>
                <div>
                  <img
                    src="/images/icon-instagram.svg"
                    alt=""
                    className="icon-style"
                  />
                </div>
                <div>
                  <img
                    src="/images/Icon-Linkedin.svg"
                    alt=""
                    className="icon-style"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white flex items-center gap-1 justify-center py-2">
          <img src="/images/icon-copyright.svg" alt="" />
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
