import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-black w-full pt-12">
      <div className="w-full mx-auto flex flex-col sm:gap-8 lg:flex-row lg:justify-between px-6 sm:px-8 lg:px-24">
        
        {/* Subscribe Section */}
        <div className="w-full sm:w-[100%] lg:w-[217px] flex flex-col gap-4">
          <p className="font-bold text-[24px] text-[#FAFAFA]">Exclusive</p>
          <p className="text-[20px] font-medium text-[#FAFAFA]">Subscribe</p>
          <p className="text-[16px] text-[#FAFAFA]">Get 10% off your order</p>
          <input 
            type="text" 
            placeholder="Enter your email" 
            className="bg-black w-full h-[48px] rounded border-[1.5px] text-white pl-[16px]"/>
        </div>

        {/* Support Section */}
        <div className="w-full sm:w-[100%] lg:w-[175px] flex flex-col gap-4">
          <p className="text-[20px] font-medium text-[#FAFAFA]">Support</p>
          <p className="text-[16px] text-[#FAFAFA]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-[16px] text-[#FAFAFA]">exclusive@gmail.com</p>
          <p className="text-[16px] text-[#FAFAFA]">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="w-full sm:w-[100%] lg:w-[123px] flex flex-col gap-4">
          <p className="text-[20px] font-medium text-[#FAFAFA]">Account</p>
          <p className="text-[16px] text-[#FAFAFA]">My Account</p>
          <p className="text-[16px] text-[#FAFAFA]">Login / Register</p>
          <p className="text-[16px] text-[#FAFAFA]">Cart</p>
          <p className="text-[16px] text-[#FAFAFA]">Wishlist</p>
          <p className="text-[16px] text-[#FAFAFA]">Shop</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full sm:w-[100%] lg:w-[109px] flex flex-col gap-4">
          <p className="text-[20px] font-medium text-[#FAFAFA]">Quick Link</p>
          <p className="text-[16px] text-[#FAFAFA]">Privacy Policy</p>
          <p className="text-[16px] text-[#FAFAFA]">Terms of Use</p>
          <p className="text-[16px] text-[#FAFAFA]">FAQ</p>
          <p className="text-[16px] text-[#FAFAFA]">Contact</p>
        </div>

        {/* Download App Section */}
        <div className="w-full sm:w-[100%] lg:w-[198px] flex flex-col gap-4">
          <p className="text-[20px] font-medium text-[#FAFAFA]">Download App</p>
          <p className="text-[12px] text-[#FAFAFA] opacity-[70%]">Save $3 with App New User Only</p>
          <div className="mt-3">
            <Image src="/Qrcode.png" alt="QR Code" height={84} width={140} className="mx-auto" />
          </div>
          <div className="mt-2">
            <Image src="/Fbicons.png" alt="Facebook Icon" height={24} width={168} className="mx-auto" />
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full bg-[#FAFAFA] opacity-[40%] h-[1px] mt-[40px]" />

      {/* Copyright Section */}
      <div className="w-full h-[40px] flex items-center justify-center mt-5 opacity-[60%]">
        <div className="flex items-center gap-2">
          <Image src="/Copyright.png" alt="Copyright Icon" width={16.67} height={16.67} />
          <p className="text-[16px] text-[#FAFAFA]">Copyright Rimel 2022. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
