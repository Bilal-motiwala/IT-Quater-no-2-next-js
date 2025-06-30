import Image from "next/image";
import Link from "next/link";

function Products() {
  return (
    <main className="px-4 py-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-red-500 font-bold border-l-4 border-red-400 pl-2">
          This Month
        </h3>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-gray-800 font-bold text-xl sm:text-2xl md:text-3xl">
            Best Selling Products
          </h1>
          <Link
            href="#products"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            View All
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      <div
        className="max-w-6xl mx-auto mt-8 grid gap-6 
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {/* Product Card */}
        {[{
          image: "/Northcoat.png",
          title: "The North Coat",
          price: "$260",
          oldPrice: "$360",
          rating: 65,
        },
        {
          image: "/Guccibag.png",
          title: "Gucci Duffle Bag",
          price: "$960",
          oldPrice: "$1160",
          rating: 75,
        },
        {
          image: "/Cpucooler.png",
          title: "RGB Liquid CPU Cooler",
          price: "$160",
          oldPrice: "$170",
          rating: 80,
        },
        {
          image: "/Bookself.png",
          title: "Small BookShelf",
          price: "$320",
          oldPrice: "",
          rating: 70,
        }].map((product, index) => (
          <div
            key={index}
            className="bg-neutral-100 shadow-md rounded-lg group flex flex-col items-center p-4"
          >
            <div className="relative w-full h-[200px] flex justify-center items-center overflow-hidden rounded">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
              {/* Hover Icons */}
              <div className="absolute top-2 right-2 flex flex-col items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Image src="/Heart.png" alt="Heart Icon" width={24} height={24} />
                <Image src="/Eye.png" alt="Eye Icon" width={24} height={24} />
              </div>
            </div>
            <h2 className="text-gray-800 font-bold text-center mt-4">{product.title}</h2>
            <div className="mt-2 flex items-center">
              <span className="text-red-500 font-bold">{product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through ml-2">
                  {product.oldPrice}
                </span>
              )}
            </div>
            <div className="flex items-center mt-2 text-yellow-400">
              <Image src="/Fivestar.png" alt="Rating" width={80} height={80} className="h-4" />
              <span className="text-gray-500 ml-2">({product.rating})</span>
            </div>
            {/* Add to Cart */}
            <button
              className="mt-4 w-full bg-black text-white py-2 rounded 
              opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
