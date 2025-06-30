import Image from "next/image";

function Freshsale() {
  return (
    <main className="mt-10 mb-5">
      {/* Header Section */}
      <div className="flex justify-center items-center">
        <div className="w-[90%] lg:w-[80%]">
          <div className="flex flex-col">
            <h3 className="text-red-500 font-bold border-l-4 border-red-400 pl-3">Today&apos;s</h3>
            <div className="flex items-center justify-between">
              <h1 className="text-gray-800 font-bold text-2xl lg:text-3xl">Fresh Sales</h1>
              <Image
                src="/Freshsale.png"
                width={150}
                height={150}
                className="hidden md:block"
                alt="Fresh sales banner"
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {products.map((product, index) => (
              <div key={index} className="bg-neutral-100 shadow-md rounded-md overflow-hidden group relative">
                <div className="flex justify-center items-center h-[180px]">
                  <Image src={product.image} width={150} height={100} alt={product.name} />
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded absolute top-2 left-2">
                    {product.discount}
                  </span>
                  <div className="absolute top-2 right-2 flex flex-col space-y-2">
                    <Image
                      className="cursor-pointer"
                      src="/Heart.png"
                      alt="Favorite icon"
                      height={20}
                      width={20}
                    />
                    <Image
                      className="cursor-pointer"
                      src="/Eye.png"
                      alt="View icon"
                      height={20}
                      width={20}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-sm mb-2">{product.name}</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500 font-bold">{product.price}</span>
                    <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400 text-xs mt-2">
                    <Image src="/Fivestar.png" alt="Rating" width={100} height={20} />
                    <span className="text-gray-400">({product.rating})</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-10">
            <button className="bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    image: "/Gamepad.png",
    rating: 88,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: "$920",
    oldPrice: "$1160",
    discount: "-25%",
    image: "/Keyboard.png",
    rating: 90,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: "$1500",
    oldPrice: "$2240",
    discount: "-32%",
    image: "/Gamingmonitor.png",
    rating: 95,
  },
  {
    name: "S-Series Comfort Chair",
    price: "$320",
    oldPrice: "$630",
    discount: "-40%",
    image: "/Chair.png",
    rating: 99,
  },
];

export default Freshsale;