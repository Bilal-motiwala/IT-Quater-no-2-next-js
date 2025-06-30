import Image from "next/image";
import Link from 'next/link';

function Hero() {
    return (
        <div className="w-full flex justify-center items-center py-6">
            <div className="container mx-auto flex flex-wrap gap-6">
                {/* Left Sidebar */}
                <div className="hidden md:block w-full lg:w-1/4 border-r-2 border-gray-200 p-4">
                    <ul className="space-y-4">
                        {[
                            "Woman's Fashion",
                            "Men's Fashion",
                            "Electronics",
                            "Home & Lifestyle",
                            "Medicine",
                            "Sports & Outdoor",
                            "Baby's & Toys",
                            "Groceries & Pets",
                            "Health & Beauty"
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="hover:underline cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hero Section */}
                <div className="flex-1 bg-black text-white p-6 rounded-lg flex flex-col md:flex-row items-center md:justify-between gap-6">
                    {/* Text Content */}
                    <div className="text-center md:text-left md:w-1/2">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">New</span>
                            <span className="text-sm">iPhone 14 Series</span>
                        </div>
                        <h1 className="text-xl md:text-4xl font-bold mb-4">Up to 10% off Voucher</h1>
                        <Link href="#products" className="underline hover:font-bold">
                            Shop Now -&gt;
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src="/Hero.png"
                            width={350}
                            height={200}
                            alt="Hero image"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;