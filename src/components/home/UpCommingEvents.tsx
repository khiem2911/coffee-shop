import barista from "../../img/barista.jpg";
import machine from "../../img/machine.jpg";
import factory from "../../img/factory.jpg";

const UpCommingEvents = () => {
  return (
    <>
      <div className="flex  justify-around items-center ">
        <span>
          <h1 className="font-bold text-5xl">Our Upcoming Events</h1>
        </span>
        <span>
          <p className=" max-w-xs sm:max-w-md  xl:max-w-2xl text-lg">
            We belive that we are big not because of us but because of them.
            they are the ones who motivate us to continue to invovate to provide
            a quality coffee taste and comfotable space that is getting better
            every day.
          </p>
        </span>
      </div>
      <div className="flex 2xl:gap-4 2xl:justify-around 2xl:p-8 justify-between items-center">
        <div className="relative  w-4/12 h-80  m-4">
          <img
            src={barista}
            className="h-full w-full object-cover  "
            alt={barista}
          />

          <div className="bg-white p-3 absolute bottom-0 right-0 left-0 overflow-hidden  ">
            <h2 className="font-bold text-base">LATTE ART WORKSHOP</h2>
            <p className="text-date font-bold">20 Feb 2023</p>
          </div>
        </div>
        <div className="relative w-4/12 h-80  ">
         
            <img
              src={machine}
              className="h-full w-full object-cover"
              alt={machine}
            />
            <div className="bg-white  p-2 absolute bottom-0 right-0 left-0 overflow-hidden ">
              <h2 className="font-bold text-sm">EXHIBITION COFFEE HARDWARE</h2>
              <p className="text-date font-bold">20 Mar 2023</p>
            </div>
        
        </div>
        <div className="relative w-4/12 h-80 m-4 ">
        
            <img
              src={factory}
              className="h-full w-full object-cover "
              alt={factory}
            />
            <div className="bg-white p-3 absolute bottom-0 left-0">
              <h2 className="font-bold">FACTORY VISIT</h2>
              <p className="text-date font-bold">20 Apr 2023</p>
            </div>
          
        </div>
      </div>
    </>
  );
};
export default UpCommingEvents;
