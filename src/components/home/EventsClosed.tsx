import ben from "../../img/ben-garratt-uhMi-ym4-to-unsplash-610x610.jpg";
import cupping from "../../img/battlecreek-coffee-roasters-i22gbC3gFm4-unsplash.jpg";
import sensoryCupping from '../../img/NIK_7883-1024x683.jpg'
import coffee from "../../img/81237432_2482896068503442_1187133878351953920_n.jpg";
import teachCoffee from "../../img/Phuong-phap-loc-–-Pour-over.jpg";
const EventsClosed = () => {
  return (
    <div className='md:mb-7'>
      <span>
        <h1 className="font-bold text-5xl">Events Closed</h1>
      </span>
      <div className="wrap-events">
        <div className="flex w-full items-center md:items-start lg:items-center justify-around md:pt-8">
          <div className="w-3/6  relative mr-2   ">
            <img src={ben} alt={ben} className="w-full h-auto max-h-96 " />
            <div className="bg-white  p-3 absolute bottom-0 left-0">
              <h1 className="font-bold text-lg ">
                BEZZERA LATTE ART COMPETITION
              </h1>
              <p className="text-date font-bold">20 Mar 2023</p>
            </div>
          </div>
          <div className="w-3/6  relative ">
            <img src={sensoryCupping} alt={sensoryCupping} className="w-full h-auto max-h-80 " />
            <div className="bg-white  p-3 absolute bottom-0 left-0">
              <h1 className="font-bold text-lg ">
               SENSORY AND CUPPING CLASS
              </h1>
              <p className="text-date font-bold">20 Mar 2023</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between xl:m-4 xl:gap-4  items-center">
          <div className=" relative w-6/12   m-4">
            <img
              src={cupping}
              className="w-full h-auto max-h-80"
              alt={cupping}
            />
            <div className="bg-white  p-3 absolute bottom-0 left-0">
              <h1 className="font-bold text-lg ">
              PUBLIC CUPPING
              </h1>
              <p className="text-date font-bold">20 Mar 2023</p>
            </div>
          </div>
          <div className=" relative  w-5/12   m-4">
            <img
              src={coffee}
              className="w-full h-auto max-h-80 "
              alt={coffee}
            />
            <div className="bg-white w-full  p-3 pl-5 absolute bottom-0 left-0">
              <h1 className="font-bold text-lg overflow-hidden ">
               COMPETITIONS AND SHOWCASES
              </h1>
              <p className="text-date font-bold">20 Mar 2023</p>
            </div>
          </div>
          <div className=" relative  w-5/12  m-4">
            <img
              src={teachCoffee}
              className="w-full h-auto max-h-80"
              alt={teachCoffee}
            />
            <div className="bg-white  p-3 absolute bottom-0 left-0">
              <h1 className="font-bold text-lg overflow-hidden ">
                ART AND COFFEE FESTIVAL
              </h1>
              <p className="text-date font-bold">20 Mar 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsClosed;
