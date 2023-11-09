import { AiOutlineCheck } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../slice/store";
import { useEffect, useState } from "react";
import { clearMeal } from "../../slice";
import SuggestCoffee from "../menu/SuggestCoffe";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const date = new Date();
  const data = useAppSelector((state) => state.cart.meals);
  const subTotal = useAppSelector((state) => state.cart.totalBill);
  const tax = (10 * subTotal) / 100;
  const [temptData, setData] = useState(data ?? []);
  const [temptSub, setSub] = useState(subTotal ?? 0);
  const [temptTax, setTax] = useState(tax ?? 0);

  const dispatch = useAppDispatch();
  const convertDate = date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    dispatch(clearMeal());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col px-24">
        <div className="flex flex-col items-center">
          <span className="border border-solid border-border-checkout p-1">
            <AiOutlineCheck color="#22d7a6" size={30} />
          </span>
          <h1 className="font-bold mt-4 text-3xl">Thanks for you order!</h1>
        </div>
        <div className="mt-4 pb-6">
          <div className="border-b border-solid border-border-gray">
            <span className="flex gap-8 items-center">
              <p className="font-bold">Transaction Date</p>
              <p>{convertDate}</p>
            </span>
            <span className="flex gap-8 items-center">
              <p className="font-bold">Payment Method</p>
              <p>Credit or Debit Card</p>
            </span>
            <span className="flex gap-8 mb-8 items-center">
              <p className="font-bold">Transaction Date</p>
              <p>Free Shipping - (7-10 days) </p>
              <span className="p-2 border cursor-pointer border-solid border-title text-title">
                <p className="text-sm">Tracking</p>
              </span>
            </span>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <h1 className="font-bold text-2xl">Your order</h1>
          <div>
            {temptData.map((item) => (
              <div className="flex justify-between items-center border-b border-solid mt-2 pb-4 border-border-gray">
                <div className="flex items-center gap-4 ">
                  <div className=" w-1/12 h-full">
                    <img
                      src={item.img}
                      alt={item.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="flex flex-col gap-4">
                    <h1 className="font-bold text-xl">{item.name}</h1>
                    <p>IMAJI Coffee At Home</p>
                    <span className="flex gap-1">
                      <p>{item.quantity}</p>
                      <p>x</p>
                      <p className="font-bold">${item.money}</p>
                    </span>
                  </span>
                </div>
                <p>${item.quantity * item.money}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-solid pb-4 border-border-gray mb-4">
          <span className="flex justify-between items-center">
            <p className="font-bold">Subtotal</p>
            <p className="font-bold">${temptSub}</p>
          </span>
          <span className="flex mt-4 justify-between items-center">
            <p>tax</p>
            <p>${temptTax}</p>
          </span>
        </div>
        <div className="mb-4">
          <span className="flex justify-between items-center">
            <h1 className="font-bold text-xl">Grand Total</h1>
            <p>${temptSub + temptTax}</p>
          </span>
        </div>
        <span className='m-auto mb-16 mt-16'>
          <Link
            to="/menu"
            className="text-white bg-title py-2 px-4 hover:bg-hover-bg"
          >
            Continute Shopping
          </Link>
        </span>
      </div>
      <SuggestCoffee />
    </>
  );
};
export default CheckOut;
