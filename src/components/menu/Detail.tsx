import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import menu from "../../model/menu";
import { Link } from "react-router-dom";
import {useEffect,useState} from 'react'
import meal from "../../model/meal";
import { useAppDispatch } from "../../slice/store";
import { addMeal } from "../../slice";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import SuggestCoffee from "./SuggestCoffe";

const Detail = () => {
  const data = useRouteLoaderData("getMenu") as menu[];
  const [quantity,setQuantity] = useState(1)
  const { name } = useParams();
  const coffee = data.find((item) => item.title === name);
  const dispatch = useAppDispatch()
  const user = firebase.auth().currentUser
  const navigate = useNavigate()
  const temptMoney = Math.round(Math.random() *20)
  const discountTemptMoney = temptMoney/0.8

  const onIncreaseQuantity = () =>{
      setQuantity((quantity)=>quantity+1)
  }

  const onAddToCart = () =>{
      if(!user){
       return navigate('/auth/login')
      }

      const value:meal = {
          name:coffee!.title,
          quantity:quantity,
          img:coffee!.image,
          money:Math.round(Math.random()*20)
      }
     dispatch(addMeal(value))
  }

  const onDecreaseQuantity = () =>{
      if(quantity<=1){
        return
      }
      setQuantity((quantity)=>quantity-1)

  }

  useEffect(()=>{
    window.scroll(0,0)
    setQuantity(1)
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
            <Link to='/' className='cursor-pointer'>Home</Link>
            <p>&gt;</p>
            <Link to='/menu'>Menu</Link>
            <p>&gt;</p>
            <p className="font-bold">Detail</p>
          </div>
          <h1 className="font-bold text-3xl pt-7">{coffee?.title}</h1>
          <div className="flex items-center gap-2 pt-4">
            <p className="text-2xl font-bold">${temptMoney.toFixed(2)}</p>
            <span className="flex gap-3">
              <p className="font-bold line-through">${discountTemptMoney.toFixed(2)}</p>
              <p className="text-title">Get 20% Off in App</p>
            </span>
          </div>
          <span className="flex flex-col gap-4 pt-12 pb-20">
            <h1 className="font-bold">Description</h1>
            <p className="max-w-2xl">{coffee?.description}</p>
          </span>
          <div className="flex flex-col gap-3 w-3/4">
            <div className="flex justify-between gap-4">
              <button onClick={onAddToCart} className=" border border-title w-4/6 hover:bg-title  hover:text-white p-3 text-title font-bold">
                Add to Cart
              </button>
              <div className="flex justify-around items-center w-2/6 border border-title">
                <button onClick={onDecreaseQuantity}  className="text-xl">-</button>
                <p className="text-xl">{quantity}</p>
                <button onClick={onIncreaseQuantity} className="text-xl">+</button>
              </div>
            </div>
            <button onClick={onAddToCart}  className="bg-title hover:bg-hover-bg text-white text-center p-3">
              Buy it Now
            </button>
          </div>
        </div>
      </div>

        <SuggestCoffee/>
     
    </>
  );
};
export default Detail;
