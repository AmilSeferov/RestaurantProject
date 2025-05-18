import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
function RestaurantCart({ data }) {
  const fullStars = Math.floor(Number(data.rating));
  const halfStar = Math.round((Number(data.rating) % fullStars) * 10) / 10;
  return (
    <div className="w-60 sm:w-60 lg:w-64  m-3 bg-gray-800  rounded-lg overflow-hidden shadow-amber-50 transform transition duration-300  hover:scale-105 px-4 py-2 hover:shadow-lg ">
      <img
        src={data.imageUrl}
        alt={data.name}
        className="w-full h-45 object-cover rounded-lg"
      />
      <div className="p-4 text-center bg-gray-800 rounded-2xl cursor-pointer">
        <h2 className="flex text-lg font-semibold  h-[56px] items-center justify-center hover:text-yellow-400">
          {data.name}
        </h2>
        <p className="text-gray-400 hover:text-red-800">{data.cuisine}</p>
        <p className="text-yellow-500 font-bold mt-2 flex  justify-center items-center">
          {[...Array(5)].map((_, index) => {
            if (index < fullStars) {
              return <IoStar key={index} className="text-yellow-500" />;
            } else if (index === fullStars && halfStar) {
              return (
                <IoStarHalf
                  key={index}
                  className="bg-gradient-to-r from-yellow-500 to-gray-500  bg-clip-text mr-1.5"
                />
              );
            }
          })}{" "}
          {data.rating}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCart;
