import Image from "next/image";

function Category() {
  // Array of categories for easy updates
  const categories = [
    { img: "/Phones.png", label: "Phones" },
    { img: "/Computers.png", label: "Computers" },
    { img: "/Smartwatch.png", label: "SmartWatch" },
    { img: "/Camera.png", label: "Camera" },
    { img: "/Headphones.png", label: "Headphones" },
    { img: "/Gaming.png", label: "Gaming" },
  ];

  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      {/* Outer Container */}
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] border-b-2 border-neutral-100 pb-10">
        {/* Header Section */}
        <div className="flex flex-col sm:pl-[6%] md:pl-0">
          <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">
            Categories
          </h3>
          <h1 className="text-gray-800 font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl pt-4">
            Browse By Category
          </h1>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group shadow-lg border-2 rounded-md hover:bg-red-500 w-full h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300"
            >
              <Image
                src={category.img}
                alt={category.label}
                width={64}
                height={64}
                className="object-contain"
              />
              <p className="text-center font-medium text-gray-700 group-hover:text-white">
                {category.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
