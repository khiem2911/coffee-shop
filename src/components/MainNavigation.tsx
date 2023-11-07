import { Link } from "react-router-dom";
import header from "../model/header";
import React from "react";
import { useAppSelector } from "../slice/store";
const MainNavigation: React.FC<header> = (props) => {


  const quantity = useAppSelector(state=>state.cart.totalQuantity)

  

  const onHandlerLogOut = () =>{
    props.logOut()
  }

  return (
    <div className=" relative top-0 pb-8 px-8">
      <div className="flex justify-between items-center px-12 py-1">
        <Link to="/" className="flex gap-2">
          <p className="text-2xl">TONY</p>
          <p className="text-2xl text-title">Coffee.</p>
        </Link>
        <nav>
          <ul className="flex list-none items-center pr-8 m-0">
            <Link to={"/"} className="p-2 cursor-pointer">
              Home
            </Link>
            <li className="p-2  cursor-pointer">Story</li>
            <Link className="p-2 cursor-pointer" to={"menu"}>
              Menu
            </Link>
            <li className="p-2  cursor-pointer">Space</li>
            <li className="p-2  cursor-pointer">Community</li>
            <li className="p-2  cursor-pointer">New</li>
            <li className="p-2  cursor-pointer">
              <Link
                to="cart"
                className="text-white bg-title py-2 px-4 hover:bg-hover-bg"
              >
                Cart ({quantity})
              </Link>
            </li>
            {props.user === null && (
              <li className="p-2  cursor-pointer">
                <Link
                  to="/auth/login"
                  className="py-2 px-4 border border-solid border-title text-title hover:bg-title  hover:text-white"
                >
                  Sign in
                </Link>
              </li>
            )}
            {props.user !== null && (
              <li className="p-2  cursor-pointer">
                <button
                  onClick={onHandlerLogOut}
                  className="py-2 px-4 border border-solid border-title text-title hover:bg-title  hover:text-white"
                >
                 log out
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default MainNavigation;
