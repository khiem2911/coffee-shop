import React from "react";
import auth from "../../model/auth"
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Auththen:React.FC<auth> = (props) =>{
    return (
        <div className="bg-white w-3/5 h-screen pl-3 lg:px-24 pt-4">
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
        <h1 className="font-bold text-4xl">{props.title}</h1>
        <p className="mt-4">{props.secondTitle}</p>
        <div className="flex flex-col items-center gap-7">
          <div className="border flex mt-12 items-center w-full justify-center cursor-pointer p-3 gap-2 border-border-auth">
            <FcGoogle size={20} />
            <p>Sign in with Google</p>
          </div>
          <p className="text-text-auth">Or used email</p>
        </div>
  {props.children}
      </div>
    </div>
    )
}
export default Auththen