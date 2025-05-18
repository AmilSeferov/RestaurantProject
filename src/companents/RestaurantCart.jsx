
function RestaurantCart({data}) {
  return (
    <div className="w-60 sm:w-60 lg:w-64  m-3 bg-gray-800  rounded-lg overflow-hidden shadow-amber-50 transform transition duration-300  hover:scale-105 px-4 py-2 hover:shadow-lg ">
    <img src={data.imageUrl} alt={data.name} className="w-full h-45 object-cover rounded-lg" />
    <div className="p-4 text-center bg-gray-800 rounded-2xl cursor-pointer">
      <h2 className="flex text-lg font-semibold h-[56px] items-center justify-center hover:text-yellow-400">{data.name}</h2>
      <p className="text-gray-500 hover:text-red-800">{data.cuisine}</p>
    <p className="text-yellow-500 font-bold mt-2">⭐ {data.rating}</p>
     
    </div>
   
  </div>


  )
}

export default RestaurantCart