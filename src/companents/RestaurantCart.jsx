
function RestaurantCart() {
    // {imageUrl,name,cuisine,rating}
  return (
    <div className="w-64  m-3 bg-gray-800  rounded-lg overflow-hidden shadow-amber-50 transform transition duration-300 hover:scale-105 px-4 py-2 hover:shadow-lg">
    <img src='' alt='name' className="w-full h-40 object-cover" />
    <div className="p-4 text-center bg-gray-800 rounded-2xl">
      <h2 className="text-lg font-semibold">name</h2>
      <p className="text-gray-600">cuisine</p>
      <p className="text-yellow-500 font-bold mt-2">⭐ rating</p>
    </div>
  </div>


  )
}

export default RestaurantCart