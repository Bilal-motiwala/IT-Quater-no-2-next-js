import Image from "next/image";

export default function Freedelvry() {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="w-full sm:w-[100%] lg:w-[80%] flex flex-col sm:flex-col md:flex-row lg:flex-row justify-evenly items-center gap-6">
        {/* Box 1 */}
        <div className="w-full sm:w-[260px] md:w-[260px] lg:w-[260px] h-[160px] flex justify-center items-center flex-col gap-y-3">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center">
            {/* Icon (can add FontAwesome icon here) */}
          </div>
          <div className="text-center">
            <Image src="/Fastdelivery.png" alt="Free And Fast Delivery" width={50} height={50} className="mx-auto" />
            <h1 className="font-bold mt-2 text-lg">FREE AND FAST DELIVERY</h1>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full sm:w-[260px] md:w-[260px] lg:w-[260px] h-[160px] flex justify-center items-center flex-col gap-y-3">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center">
            {/* Icon (can add FontAwesome icon here) */}
          </div>
          <div className="text-center">
            <Image src="/Service.png" alt="24/7 Customer Service" width={50} height={50} className="mx-auto" />
            <h1 className="font-bold mt-2 text-lg">24/7 CUSTOMER SERVICE</h1>
            <p className="text-sm">Friendly 24/7 customer support</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full sm:w-[260px] md:w-[260px] lg:w-[260px] h-[160px] flex justify-center items-center flex-col gap-y-3">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center">
            {/* Icon (can add FontAwesome icon here) */}
          </div>
          <div className="text-center">
            <Image src="/Moneyback.png" alt="Money Back Guarantee" width={50} height={50} className="mx-auto" />
            <h1 className="font-bold mt-2 text-lg">MONEY BACK GUARANTEE</h1>
            <p className="text-sm">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
