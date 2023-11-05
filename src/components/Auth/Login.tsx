import { AiOutlineArrowDown } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [visiblePass, setVisible] = useState(false);

  const onVisible = () => {
    setVisible(!visiblePass);
  };

  return (
    <div className="bg-white w-3/5 h-screen px-24 pt-8">
      <div className="flex justify-end">
        <Link
          to="/"
          className="text-title border flex gap-4 items-center hover:text-white border-title py-2 px-4 hover:bg-hover-bg"
        >
          <AiOutlineArrowDown size={20} />
          <p>Back to Shop</p>
        </Link>
      </div>
      <div className="pt-20  w-3/5">
        <h1 className="font-bold text-4xl">Welcome Back</h1>
        <p className="mt-4">Enter your credentials to access your account</p>
        <div className="flex flex-col items-center gap-7">
          <div className="border flex mt-12 items-center w-full justify-center cursor-pointer p-3 gap-2 border-border-auth">
            <FcGoogle size={20} />
            <p>Sign in with Google</p>
          </div>
          <p className="text-text-auth">Or used email</p>
        </div>
        <div className="mt-12">
          <label htmlFor="email" className="block mb-4">
            Email
          </label>
          <input
            className="border p-2 border-border-auth w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Enter mail"
          />
          <label htmlFor="password" className="block mt-7 mb-4">
            Password
          </label>
          <div className=" relative">
            <input
              className="border relative p-2  border-border-auth w-full"
              type={visiblePass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter password"
            />
            {visiblePass && (
              <BsEye
                onClick={onVisible}
                size={20}
                className="absolute right-4 cursor-pointer top-2/4 -translate-y-1/2"
              />
            )}
            {!visiblePass && (
              <BsEyeSlash
                onClick={onVisible}
                size={20}
                className="absolute right-4 top-2/4 cursor-pointer -translate-y-1/2"
              />
            )}
          </div>
          <div className="flex mt-6 justify-between items-center">
            <span className="flex gap-2">
              <input className="w-5" type="checkbox" />
              <p>Remember Me</p>
            </span>
            <a className=" font-bold underline text-blue-500" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="flex flex-col items-center gap-8">
            <button className="text-white mt-7 w-full text-center p-3 bg-title hover:bg-hover-bg">
              Sign in
            </button>
            <span className="flex gap-2">
              <p>Don't have an account?</p>
              <a className=" font-bold underline" href="#">
                Create a acccount
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
