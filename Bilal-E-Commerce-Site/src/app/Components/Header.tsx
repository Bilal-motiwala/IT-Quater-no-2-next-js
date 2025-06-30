import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b border-black pb-4">
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="truncate">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href="/" className="underline font-semibold ml-4">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Image
          src="/Logo.png"
          alt="Logo"
          height={24}
          width={118}
          className="h-auto"
        />

        {/* Navigation */}
        <nav className="hidden lg:flex gap-6 text-base">
          {['Home', 'Contact', 'About', 'Sign Up'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:border-b border-black pb-1"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          {/* Search */}
          <div className="flex items-center bg-gray-100 px-2 py-1 rounded-md flex-grow lg:flex-grow-0">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-sm placeholder-gray-500 w-full outline-none"
            />
            <Image
              src="/Search.png"
              alt="Search Icon"
              height={24}
              width={24}
              className="cursor-pointer"
            />
          </div>

          {/* Icons */}
          {["/Heart.png", "/Shop.png"].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={index === 0 ? "Favorite" : "Cart"}
              height={24}
              width={24}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="lg:hidden flex justify-between mt-2">
        {['Home', 'Contact', 'About', 'Sign Up'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-sm text-center flex-1 border-t pt-2 border-gray-300"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;