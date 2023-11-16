import { Link } from "react-router-dom";
import menu from "../../model/menu";
import { getMenu } from "../../http";
import {useEffect,useState} from 'react'

const SuggestCoffee = () => {

    

  const getRandomElements = (array:menu[], n:number) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5); 
    return shuffledArray.slice(0, n); 
  };

    const [data,setData ] = useState<Array<menu>>([])
    const suggestCoffees = getRandomElements(data,3);


    useEffect (()=>{
        const fetchData = async () =>{
            const data = await getMenu()
            setData(data)
        }
        fetchData()
    },[])

  return (
    <div className=" bg-bg-suggest flex flex-col p-8">
      <h1 className="text-3xl font-bold mb-7">You May Also Like</h1>
      <div className="grid justify-items-center grid-cols-3 gap-5">
        {suggestCoffees.map((item) => (
          <div key={item.id} className="w-2/4 mb-7">
            <div className="w-full cursor-pointer">
              <Link to={`/menu/detail/${item.title}`}>
                <img
                  src={item.image}
                  className="w-full h-auto "
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
  );
};
export default SuggestCoffee;
