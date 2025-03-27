import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center py-10 store-container">
      <div className="bg-[#CDE5E9] flex flex-[5]">
        <img
          src="/images/loginimage.png"
          alt="image/loginpage"
          className="w-full h-auto md:w-118 md:h-118"
        />
      </div>
      <div className="flex flex-[5] flex-col items-center justify-center py-4 px-5 w-full">
        <div className="mt-5 mb-5 w-full">
          <h1 className="text-2xl font-bold mb-3">Create an account</h1>
          <p className="text-base mb-3">Enter your details below</p>
        </div>
        <form className="flex flex-col items-center w-full  ">
          <input
            type="text"
            placeholder="Name"
            name=""
            id=""
            className="mt-5 mb-5 bg-white border-b-2 border-b-gray-500 
            outline-none  px-1 py-1  text-sm w-full"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            name=""
            id=""
            className="mt-5 mb-5 bg-white border-b-2 border-b-gray-500 
            outline-none  px-1 py-1  text-sm w-full"
          />
          <input
            type="password"
            placeholder="Password"
            name=""
            id=""
            className="mt-5 mb-5 bg-white border-b-2 border-b-gray-500 
            outline-none  px-1 py-1  text-sm w-full"
          />

          <div className="flex flex-col gap-4">
            <input
              type="submit"
              value="Create Account"
              className="button-theme bg-color-bg-2 text-white"
            />
            <button className="button-theme flex items-center gap-3">
              <FcGoogle />
              Sign up with Google
            </button>
            <p>
              Already have account ?
              <Link to="/Login" className="ml-2 underline">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
