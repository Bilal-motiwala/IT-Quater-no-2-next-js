import Image from "next/image";

function Explore() {
  const products = [
    { img: "/Dogfood.png", title: "Breed Dry Dog Food", price: "$100", rating: 35, star: "/Threestar.png" },
    { img: "/DSLRcamera.png", title: "CANON EOS DSLR CAMERA", price: "$360", rating: 95, star: "/Fourstar.png" },
    { img: "/Gaminglaptop.png", title: "ASUS FHD GAMING LAPTOP", price: "$700", rating: 325, star: "/Fivestar.png" },
    { img: "/Productset.png", title: "Curology Product Set", price: "$500", rating: 145, star: "/Fivestar.png" },
    { img: "/Electriccar.png", title: "Kids Electric Car", price: "$960", rating: 65, star: "/Fivestar.png" },
    { img: "/Zoomsoccer.png", title: "JR. Zoom Soccer Cleats", price: "$1160", rating: 35, star: "/Fivestar.png" },
    { img: "/GP11USB.png", title: "GP11 Shooter USB Gamepad", price: "$660", rating: 55, star: "/Fourhalfstar.png" },
    { img: "/Satinjacket.png", title: "Quilted Satin Jacket", price: "$660", rating: 55, star: "/Fourhalfstar.png" }
  ];

  return (
    <main>
      <div className="w-full flex justify-center items-center mt-10 mb-1">
        <div className="w-full sm:w-[95%] md:w-[80%] lg:w-[80%]">
          <div className="text-center sm:text-left mb-6">
            <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">Our Products</h3>
            <h1 className="text-gray-800 font-bold text-2xl sm:text-3xl pt-4">Explore Our Products</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative shadow-lg bg-neutral-100 p-4 rounded-lg flex flex-col items-center hover:shadow-xl transition-shadow"
              >
                <Image src={product.img} width={150} height={100} alt={product.title} />
                <span className="absolute top-2 right-2 text-red rounded-full">
                  <Image className="cursor-pointer" src="/Heart.png" alt="favorite" height={24} width={24} />
                  <Image className="cursor-pointer mt-3" src="/Eye.png" alt="view" height={24} width={24} />
                </span>

                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>

                <h1 className="font-bold text-lg mt-2">{product.title}</h1>
                <div className="flex items-center space-x-2 text-yellow-400 text-sm pt-1">
                  <span className="text-red-500 font-bold">{product.price}</span>
                  <Image src={product.star} alt="stars" width={80} height={80} className="w-16 h-4" />
                  <span className="text-gray-400">({product.rating})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Explore;
