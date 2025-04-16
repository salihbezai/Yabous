import { checkEmailAvailability } from "../features/user/userActions";
import { login } from "../features/auth/authActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    dispatch(login(userData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center py-10 store-container">
      <Toaster />

      <div className="bg-[#CDE5E9] flex flex-[5]">
        <img
          src="/images/loginimage.png"
          alt="image/loginpage"
          className="w-full h-auto md:w-118 md:h-118"
        />
      </div>
      <div className="flex flex-[5] flex-col items-center justify-center py-4 px-5 w-full">
        <div className="mt-5 mb-5 w-full">
          <h1 className="text-2xl font-bold mb-3">Log in to Exclusive</h1>
          <p className="text-base mb-3">Enter your details below</p>
        </div>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={(e) => handleLogin(e)}
        >
          <input
            type="text"
            placeholder="Email or Phone Number"
            name=""
            id=""
            className="mt-5 mb-5 bg-white border-b-2 border-b-gray-500 
            outline-none  px-1 py-1  text-sm w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name=""
            id=""
            className="mt-5 mb-5 bg-white border-b-2 border-b-gray-500 
            outline-none  px-1 py-1  text-sm w-full"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex  items-center justify-between w-full">
            <input
              type="submit"
              value={loading ? "Logging in..." : "Login"}
              className={`button-theme bg-color-bg-2 text-white ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />
            <Link className="secondaryColorText font-bold" to="/">
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
