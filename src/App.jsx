
import RestaurantCart from "./companents/RestaurantCart";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.foodReducer.data);
  return (
    <div>
      <header className="w-full h-fit bg-gradient-to-r from-red-900 via-yellow-600 to-blue-900  px-[20px] py-[10px]">
        <div className="flex font-bold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] ">
          <p className="text-white text-shadow-blue-700 text-shadow-2xs">
            Shah
          </p>
          <p className="text-amber-300">Restaurants</p>
        </div>
      </header>
      <main className="p-7 flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center">
          {data.map((item, index) => (
            <RestaurantCart key={index} data={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
