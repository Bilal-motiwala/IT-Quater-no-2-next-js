import Image from "next/image";

export default function Featured() {
  return (
    <div className="w-full flex justify-center items-center pt-7">
      <div className="w-full sm:w-[95%] md:w-[80%] lg:w-[80%]">
        {/* Heading */}
        <div className="w-full mb-6">
          <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">Featured</h3>
          <h1 className="text-gray-800 font-bold sm:text-xl md:text-3xl lg:text-3xl pt-4">New Arrival</h1>
        </div>

        {/* Container */}
        <div className="flex flex-col sm:flex-col md:flex-row gap-6 sm:gap-4 md:gap-8 pt-4">
          {/* Left Side */}
          <div className="relative sm:w-full md:w-[60%] bg-gray-950">
            <div className="absolute left-3 bottom-3 text-white">
              <h1 className="text-lg font-bold sm:text-xl">PlayStation 5</h1>
              <p className="text-xs py-1">Black and White version of the PS5 coming out on sale.</p>
              <button className="text-md font-sans underline hover:font-bold">Shop Now</button>
            </div>
            <Image
              src="/Playstation.png"
              width={500}
              height={500}
              alt="Playstation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            {/* Top Section */}
            <div className="relative bg-gray-950">
              <div className="absolute left-2 bottom-3 text-white">
                <h1 className="text-lg font-bold sm:text-xl">Womens Collections</h1>
                <p className="text-xs py-1">Featured woman collections that give you another vibe.</p>
                <button className="text-md font-sans underline hover:font-bold">Shop Now</button>
              </div>
              <Image
                src="/Womanwearing.png"
                width={500}
                height={500}
                alt="Woman Wearing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row md:flex-row gap-6 sm:gap-4">
              {/* Left Bottom */}
              <div className="relative bg-gray-950 sm:w-full md:w-[50%] flex justify-center items-center">
                <div className="absolute left-2 bottom-3 text-white">
                  <h1 className="text-sm font-bold sm:text-lg">Speakers</h1>
                  <p className="text-xs sm:py-0 md:py-1">Amazon wireless speakers.</p>
                  <button className="text-sm sm:text-md font-sans underline hover:font-bold">Shop Now</button>
                </div>
                <Image src="/Speaker.png" width={200} height={200} alt="Speakers" className="w-full object-cover" />
              </div>

              {/* Right Bottom */}
              <div className="relative bg-gray-950 sm:w-full md:w-[50%] flex justify-center items-center">
                <div className="absolute left-2 bottom-3 text-white">
                  <h1 className="text-sm font-bold sm:text-lg">Perfume</h1>
                  <p className="text-xs sm:py-0 md:py-1">GUCCI INTENSE OUD EDP.</p>
                  <button className="text-sm sm:text-md font-sans underline hover:font-bold">Shop Now</button>
                </div>
                <Image src="/Perfume.png" width={200} height={200} alt="Perfume" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
