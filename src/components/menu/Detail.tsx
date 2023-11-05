import { useParams, useRouteLoaderData } from "react-router-dom";
import menu from "../../model/menu";
import { Link } from "react-router-dom";
import {useEffect} from 'react'
const Detail = () => {
  const data = useRouteLoaderData("getMenu") as menu[];
  const { name } = useParams();
  const coffee = data.find((item) => item.title === name);
  const suggestCoffees = data.slice(0, 3);

  useEffect(()=>{
    window.scroll(0,0)
  },[name])

  return (
    <>
      <div className="flex pl-32 gap-64 mb-8">
        <div className=" w-96 h-3/6">
          <img
            src={coffee?.image}
            className="w-full h-full object-fit"
            alt={coffee?.image}
          />
        </div>
        <div>
          <div className="flex gap-2">
            <p>Home</p>
            <p>&gt;</p>
            <p>Menu</p>
            <p>&gt;</p>
            <p className="font-bold">Detail</p>
          </div>
          <h1 className="font-bold text-3xl pt-7">{coffee?.title}</h1>
          <div className="flex items-center gap-2 pt-4">
            <p className="text-2xl font-bold">$4,00</p>
            <span className="flex gap-3">
              <p className="font-bold line-through">$5,00</p>
              <p className="text-title">Get 20% Off in App</p>
            </span>
          </div>
          <span className="flex flex-col gap-4 pt-12 pb-20">
            <h1 className="font-bold">Description</h1>
            <p className="max-w-2xl">{coffee?.description}</p>
          </span>
          <div className="flex flex-col gap-3 w-3/4">
            <div className="flex justify-between gap-4">
              <button className=" border border-title w-4/6 hover:bg-title  hover:text-white p-3 text-title font-bold">
                Add to Cart
              </button>
              <div className="flex justify-around items-center w-2/6 border border-title">
                <button className="text-xl">-</button>
                <p className="text-xl">1</p>
                <button className="text-xl">+</button>
              </div>
            </div>
            <button className="bg-title hover:bg-hover-bg text-white text-center p-3">
              Buy it Now
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-bg-suggest flex flex-col p-8">
        <h1 className="text-3xl font-bold mb-7">You May Also Like</h1>
        <div className="grid justify-items-center grid-cols-3 gap-5">
          {suggestCoffees.map((item) => (
            <div key={item.id} className="w-2/4 mb-7">
              <div className="w-full h-72 cursor-pointer">
                <Link to={`/menu/detail/${item.title}`}>
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.image}
                  />
                </Link>
              </div>
              <div className="pt-1">
                <Link to={`/menu/detail/${item.title}`}>
                 
                  <h1 className="font-bold text-2xl cursor-pointer">
                    {item.title}
                  </h1>
                </Link>
                <p>Available Only at Cafe and Delivery</p>
                <h1 className="font-bold text-2xl">
                  ${(Math.random() * 20).toFixed(2)}
                </h1>
                <p className="text-title font-bold">Get 20% Off in App</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Detail;
