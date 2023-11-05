import barista from "../../img/barista.jpg";
import machine from "../../img/machine.jpg";
import factory from "../../img/factory.jpg";

const UpCommingEvents = () =>{
    return (
        <>
        <div className="flex justify-around items-center mt-7">
        <span>
          <h1 className="font-bold text-5xl">Our Upcoming Events</h1>
        </span>
        <span>
          <p className=" max-w-md text-lg">
            We belive that we are big not because of us but because of them.
            they are the ones who motivate us to continue to invovate to provide
            a quality coffee taste and comfotable space that is getting better
            every day.
          </p>
        </span>
      </div>
      <div className="flex gap-4 justify-around items-center p-8">
        <div className=" relative w-1/5 h-80 m-4">
          <img
            src={barista}
            className="w-full h-full object-cover"
            alt={barista}
          />
          <div className="bg-white p-3 absolute bottom-0 left-0">
            <h2 className="font-bold text-base">LATTE ART WORKSHOP</h2>
            <p className="text-date font-bold">20 Feb 2023</p>
          </div>
        </div>
        <div className=" relative w-1/5 h-80 m-4">
          <img
            src={machine}
            className="w-full h-full object-cover"
            alt={machine}
          />
          <div className="bg-white  p-2 absolute bottom-0 left-0">
            <h2 className="font-bold text-sm">EXHIBITION COFFEE HARDWARE</h2>
            <p className="text-date font-bold">20 Mar 2023</p>
          </div>
        </div>
        <div className=" relative w-1/5 h-80 m-4">
          <img
            src={factory}
            className="w-full h-full object-cover"
            alt={factory}
          />
          <div className="bg-white p-3   absolute bottom-0 left-0">
            <h2 className="font-bold">FACTORY VISIT</h2>
            <p className="text-date font-bold">20 Apr 2023</p>
          </div>
        </div>
      </div>
      </>
    )
}
export default UpCommingEvents