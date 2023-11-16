import { useRouteLoaderData } from "react-router-dom";
import { getMenu } from "../../http";
import menu from "../../model/menu";
import {  useRef, useState } from "react";
import classes from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const data = useRouteLoaderData('getMenu') as menu[];
  const coffeesMenu = data;
  const [coffees, setCoffees] = useState(coffeesMenu.slice(0, 9));
  const [filterCoffees, setFilterCoffees] = useState<Array<menu>>([]);
  const [typeCoffe, setType] = useState("COFFEE AND BAVERAGE");
  const [onClear, setClear] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const onSearchClear = () => {
    setClear(true);
  };

  const loadmore = () => {
    if (coffees.length > coffeesMenu.length) {
      return;
    }
    const newMenuCoffees = coffeesMenu.slice(0, coffees.length + 9);
    setCoffees(newMenuCoffees);
  };

 

  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const searchValue = searchRef.current!.value;
    if (e.key === "Enter") {
      const filterCoffes = coffeesMenu.filter((item) =>
        item.title.toLowerCase().match(searchValue.toLowerCase())
      );
      setFilterCoffees(filterCoffes);
    }
  };

  const filterType = (value: string) => {
    setType(value);
  };

  let value = searchRef.current?.value ? filterCoffees : coffees;

  if (onClear) {
    searchRef.current!.value = "";
  }

  const content = value.map((item) => (
    <div key={item.id} className="w-2/4 mb-7">
      <div className="w-full  cursor-pointer">
        <Link to={`detail/${item.title}`}>
          <img
            src={item.image}
            className="w-full h-auto  "
            alt={item.image}
          />
        </Link>
      </div>
      <div className="pt-1 md:pt-0">
       <Link to={`detail/${item.title}`}> <h1 className="font-bold text-2xl cursor-pointer">{item.title}</h1> </Link> 
        <p>Available Only at Cafe and Delivery</p>
        <h1 className="font-bold text-2xl">
          ${(Math.random() * 20).toFixed(2)}
        </h1>
        <p className="text-title font-bold">Get 20% Off in App</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex pl-5 lg:pl-32 flex-col ">
        <h1 className="font-bold sm:text-4xl lg:text-5xl ">Our Menu</h1>
        <span className="py-8">
          <p className="text-lg max-w-xl">
            IMAJI Coffee provides a variety of high quality coffee and drinks
            and flavors that are suitable for you to support and cheer up your
            day. We also provide coffee to accompany you at home along with the
            equipment.
          </p>
        </span>
        <div className="flex gap-6 items-center pb-8">
          <div className="w-2/4">
            <div className="flex justify-between pb-2">
              <p>Search</p>
              <p onClick={onSearchClear} className="hover:cursor-pointer">
                Clear
              </p>
            </div>
            <input
              className="border w-full  p-1 border-black"
              type="text"
              placeholder="Keyword"
              defaultValue={searchRef.current?.value}
              ref={searchRef}
              onKeyDown={onSearch}
            />
          </div>
        
        </div>
      </div>
      <div className=" mb-8 ">
        <div className="flex pb-8  items-center ">
          <span
            onClick={() => filterType("COFFEE AND BAVERAGE")}
            className={` ${
              typeCoffe === "COFFEE AND BAVERAGE" ? classes.active : {}
            } ${classes.non_active} text-center cursor-pointer py-7 w-2/4`}
          >
            <h1 className="font-bold lg:text-xl ">COFFEE AND BAVERAGE</h1>
          </span>
          <span
            onClick={() => filterType("FOOD AND SNACK")}
            className={` ${
              typeCoffe === "FOOD AND SNACK" ? classes.active : {}
            } ${classes.non_active} text-center cursor-pointer py-7 w-2/4`}
          >
            <h1 className="font-bold lg:text-xl ">FOOD AND SNACK</h1>
          </span>
          <span
            onClick={() => filterType("IMAJI COFFEE AT HOME")}
            className={` ${
              typeCoffe === "IMAJI COFFEE AT HOME" ? classes.active : {}
            } ${classes.non_active} text-center cursor-pointer py-7 w-2/4`}
          >
            <h1 className="font-bold lg:text-xl ">IMAJI COFFEE AT HOME</h1>
          </span>
        </div>
        <div className="grid grid-cols-3 justify-items-center ">{content}</div>
        {value.length < coffeesMenu.length && value.length >= 9 && (
          <span className="grid grid-cols-1 justify-items-center pt-11 ">
            <button
              onClick={loadmore}
              className="font-bold py-2 px-5 border hover:bg-title hover:text-white text-title border-title"
            >
              Load More
            </button>
          </span>
        )}
        {value.length === 0 && <h1 className="text-2xl text-center">No results</h1>}
      </div>
    </>
  );
};
export default Menu;
export const loader = async () => {
  const data = await getMenu();
  return data;
};
