import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import RestaurantCart from "./companents/RestaurantCart";

function App() {
  return (
    <div > 
      <header className="w-full h-fit bg-gradient-to-r from-red-900 via-yellow-600 to-blue-900  px-[20px] py-[10px]">
        <div className="flex font-bold text-[26px] ">
          <p className="text-white text-shadow-blue-700 text-shadow-2xs">Shah</p>
          <p className="text-amber-300">Food</p>
        </div>
      </header>
      <main className="p-7 flex flex-wrap">
        <RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/><RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/>
        <RestaurantCart/>
      </main>
    </div>
  );
}

export default App;
