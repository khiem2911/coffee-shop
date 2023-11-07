import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../slice/store";
import { increaseMeal,decreaseMeal } from "../../slice";
import meal from "../../model/meal";

const Cart = () => {
  const data = useAppSelector((state) => state.cart.meals);
  const subTotal = useAppSelector((state) => state.cart.totalBill);
  const tax = (10*subTotal)/100
  const dispatch = useAppDispatch()

  const onHandlerIncrease = (value:meal) =>{
        dispatch(increaseMeal(value))
  }

  const onHandlerDecrease = (value:meal) => {
    dispatch(decreaseMeal(value))
  }

  return (
    <div className="flex">
      <div className="flex flex-col w-9/12 h-screen pl-16 pr-12 pt-16 pb-8">
        <span className="mb-7">
          <h1 className=" text-5xl font-bold">My cart</h1>
        </span>
        <div className=' h-3/4 overflow-auto'>
          <div className="flex justify-between items-center ">
            <p className="w-2/5 font-bold text-2xl ">Product</p>
            <p className="font-bold text-2xl ">Quantity</p>
            <p className="font-bold text-2xl">Price</p>
            <p className="font-bold text-2xl">Subtotal</p>
          </div>
          <div >
            {data.map((item) => (
              <div key={item.name} className="border-t border-red-200 border-solid mt-4">
                <div className="flex items-center justify-between  mt-4">
                  <div className="w-2/5 flex items-center gap-7">
                    <div className="w-3/12 h-full">
                      <img
                        src={item.img}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="flex flex-col gap-4">
                      <h1 className="font-bold text-2xl">{item.name}</h1>
                      <p>IMAJI Coffee At Home</p>
                    </span>
                  </div>
                  <div className="w-28">
                    <div className=" flex justify-between w-full  items-center px-4 py-2  border  border-black">
                      <button onClick={()=>onHandlerDecrease(item)} className="text-xl">-</button>
                      <p className="text-xl">{item.quantity}</p>
                      <button onClick={()=>onHandlerIncrease(item)} className="text-xl">+</button>
                    </div>
                  </div>
                  <span>
                    <p className="font-bold text-2xl">${item.money}</p>
                  </span>
                  <span>
                    <p className="font-bold text-2xl">${item.quantity * item.money}</p>
                  </span>
                </div>
              </div>
            ))}

           
           
          </div>
        </div>
        <div className="mt-auto self-start">
          <Link
            to="/menu"
            className="text-title border flex gap-4 items-center hover:text-white p-2 border-title  hover:bg-hover-bg"
          >
            <AiOutlineArrowLeft size={20} />
            <p className="font-bold">Back to Shop</p>
          </Link>
        </div>
      </div>
      <div className="w-3/12 bg-bg-suggest flex flex-col h-screen pl-16 pr-12 pt-16 pb-8">
        <h2 className="text-4xl font-bold">Summary</h2>
        <div className="mt-4">
          <span className="flex justify-between">
            <p>Subtotal</p>
            <p className="font-bold">${subTotal}</p>
          </span>
          <span className="flex justify-between mt-4">
            <p>Tax (10%)</p>
            <p className="font-bold">${tax}</p>
          </span>
        </div>
        <div className="mt-auto">
          <span className="flex justify-between">
            <p className="text-2xl font-bold">Total</p>
            <p className="text-2xl font-bold">${subTotal+tax}</p>
          </span>
          <button className="text-white mt-7 w-full text-center p-3 bg-title hover:bg-hover-bg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
