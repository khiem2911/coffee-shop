import { Link, NavLink } from "react-router-dom";
import header from "../model/header";
import React from "react";
import { useAppDispatch, useAppSelector } from "../slice/store";
import { clearMeal } from "../slice";
import classes from "./MainNavigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const MainNavigation: React.FC<header> = (props) => {
  const quantity = useAppSelector((state) => state.cart.totalQuantity);
  const dispatch = useAppDispatch();
  const [displayMenu, setDisplayMenu] = useState(false);

  const onHandlerLogOut = () => {
    dispatch(clearMeal());
    props.logOut();
  };

  const onDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  props.backDrop(displayMenu);

  return (
    <div className="pb-8">
      <div className="justify-between lg:px-12 px-4 w-full flex items-center py-1">
        <GiHamburgerMenu
          onClick={onDisplayMenu}
          size={30}
          color="black"
          className="absolute top-0 right-0 lg:hidden mt-2 mr-3 cursor-pointer"
        />
        <Link to="/" className="flex gap-2">
          <p className="text-2xl">TONY</p>
          <p className="text-2xl text-title">Coffee.</p>
        </Link>
        <div className='flex items-center'>
          <nav
          className={`lg:block  ${
            displayMenu
              ? ` ${classes.animation} fixed top-0 right-0 h-screen w-3/12 z-50 `
              : "hidden"
          } `}
        >
          {displayMenu && (
            <IoMdClose
              size={30}
              className="absolute cursor-pointer"
              onClick={() => setDisplayMenu(false)}
            />
          )}
          <ul
            className={` ${
              !displayMenu
                ? "flex list-none items-center"
                : "flex flex-col list-none items-center pt-8 gap-7 bg-white  h-full"
            }`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : "p-2 cursor-pointer"
              }
              to={"/"}
            >
              Home
            </NavLink>
            <li className="p-2  cursor-pointer">Story</li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : "p-2 cursor-pointer"
              }
              to={"menu"}
            >
              Menu
            </NavLink>
            <li className="p-2  cursor-pointer">Space</li>
            <li className="p-2  cursor-pointer">Community</li>
            <li className="p-2  cursor-pointer">New</li>
          </ul>
        </nav>
        <div className=' mr-7 lg:mr-0'>
           <Link
             to="cart"
             className="text-white bg-title p-2 hover:bg-hover-bg"
           >
             Cart({quantity})
           </Link>
       
         {props.user === null && (
           
             <Link
               to="/auth/login"
               className="  border border-solid border-title p-2 ml-2 text-title hover:bg-title  hover:text-white"
             >
               Sign in
             </Link>
         
         )}
         {props.user !== null && (
           <button
             onClick={onHandlerLogOut}
             className="p-2 ml-2 border border-solid border-title text-title hover:bg-title  hover:text-white"
           >
             Log out
           </button>
         )}
       </div>
        </div>
      
      </div>
    </div>
  );
};
export default MainNavigation;
