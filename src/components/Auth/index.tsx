import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex">
      <div className=" w-2/5 h-screen bg-bg-suggest pl-3 lg:pl-20 pt-8">
        <span className="flex gap-2">
            <p className="text-2xl">TONY</p>
            <p className="text-2xl text-title">Coffee.</p>
        </span>
        <h1 className='font-bold pt-20 text-4xl max-w-xs'>We Also Have Coffee For You at Home.</h1>
        <p className='pt-7 text-xl max-w-sm'>Holidays, work, and parties are great opportunities to serve a delicious cup of coffee.</p>
        <button className='text-title border mt-4 hover:text-white border-title py-2 px-8 hover:bg-hover-bg'>Order Now</button>
      </div>
      <Outlet />
    </div>
  );
};
export default Auth;
