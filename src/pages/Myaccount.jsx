import EditProfile from "../components/EditProfile";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Myaccount = () => {
  return (
    <div className="store-container py-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-gray-600">Home</div>
          <div>/</div>
          <div className="text-gray-600 font-bold">My Account</div>
        </div>
        <div>
          <p>
            Welcome!
            <span className="secondaryColorText font-bold">Md Rimel</span>
          </p>
        </div>
      </div>
      <div className="flex  mt-15 gap-5 flex-col lg:flex-row ">
        <div className="flex flex-col pr-8 py-5 w-full lg:w-[30%]">
          <div className="mt-2">
            <h2 className="font-bold">Manage My Account</h2>
            <ul className="pl-5 space-y-1 mt-3">
              <li>
                <Link className="greyColorText" to="/myaccount/edit-profile">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="greyColorText" to="/">
                  Address Book
                </Link>
              </li>
              <li>
                <Link className="greyColorText" to="/myaccount/payment-options">
                  My Payment Options
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-2">
            <h2 className="font-bold">My Orders</h2>
            <ul className="pl-5 space-y-1 mt-3">
              <li>
                <Link className="greyColorText" to="/">
                  My Returns
                </Link>
              </li>
              <li>
                <Link className="greyColorText" to="/">
                  My Cancellations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center w-full  lg:w-[70%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Myaccount;
