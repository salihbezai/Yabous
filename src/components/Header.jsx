import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Select } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <div className="bg-color-bg-1 text-white">
        <div className="flex justify-center relative px-1 py-3">
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
    </header>
  );
};

export default Header;
