import Image from "next/image";

function Music() {
    return (
        <div className="w-full flex justify-center items-center mt-10 mb-1">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-gray-950 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
                {/* Left Box */}
                <div className="text-center md:text-left md:w-[50%] space-y-4">
                    <h3 className="text-green-500 font-bold text-lg">Categories</h3>
                    <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">Enhance Your Music Experience</h1>

                    <div className="flex justify-center md:justify-start space-x-4 mt-5">
                        {['23', '05', '59', '35'].map((value, index) => (
                            <div key={index} className="bg-gray-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center">
                                <span className="font-bold text-lg">{value}</span>
                                <span className="text-xs md:text-sm">{['Hours', 'Days', 'Minutes', 'Seconds'][index]}</span>
                            </div>
                        ))}
                    </div>

                    <button className="bg-green-500 hover:bg-green-600 px-7 py-2 text-white font-bold rounded-md mt-5 w-full md:w-auto">
                        Buy Now!
                    </button>
                </div>

                {/* Right Box */}
                <div className="mt-6 md:mt-0 md:w-[45%] flex justify-center">
                    <Image src="/JBLspeaker.png" width={500} height={500} alt="JBL Speaker" />
                </div>
            </div>
        </div>
    );
}

export default Music;
