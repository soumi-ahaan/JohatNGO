import React from "react";
import {
  EnvelopeSimpleIcon,
  PhoneIcon,
  FacebookLogoIcon,
  XLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon 
} from "@phosphor-icons/react";

export default function TopHeader() {
  return (
    <div className="w-full relative overflow-hidden">
      
      {/* RIGHT BACKGROUND */}
      <div className="absolute inset-0 bg-[#F2F0EC]" />

      {/* LEFT SLANTED BACKGROUND (PIXEL PERFECT) */}
      <div  className="absolute top-0 left-0 h-full bg-[#FFAC00] w-[100%] sm:w-[78%] lg:w-[58%] xl:w-[48%]" style={{
    clipPath: "polygon(0% 0%, 100% 0%, 98% 100%, 0% 100%)",
  }}
/>

      {/* CONTENT */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[72px] py-4 flex items-center justify-between">
        
        {/* LEFT CONTENT (LOCKED INSIDE SHAPE) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 lg:gap-9 text-white">
          
          <div className="flex items-center gap-2">
            <div className="bg-[#1F6B5A] p-1 md:p-2 rounded-full">
              <EnvelopeSimpleIcon  weight="fill" className="w-4 h-4 lg:w-6 lg:h-6"/>
            </div>
            <a href="mailto:Johat1o153@gmail.com" className="cursor-pointer text-sm sm:text-xs font-bold">
               Johat1o153@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-[#1F6B5A] p-1 md:p-2 rounded-full ">
              <PhoneIcon  weight="fill" className="w-4 h-4 lg:w-6 lg:h-6"/>
            </div>
            <div className="text-sm sm:text-xs font-bold flex gap-2">
  <a href="tel:+12314272289">+1-231-427-2289</a>
  <span>/</span>
  <a href="tel:+12314596853">+1-231-459-6853</a>
</div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hidden md:flex items-center gap-[13.8px]">
          <a href="https://www.facebook.com/johat1953" target="_blank" className="bg-[#1F6B5A] p-1 md:p-2 rounded-full text-white hover:bg-[#FFAC00] hover:scale-110 transition-all duration-300 cursor-pointer">
            <FacebookLogoIcon className="w-4 h-4 lg:w-6 lg:h-6" />
          </a>
          <a href="https://x.com/JohatEnter3002" target="_blank" className="bg-[#1F6B5A] p-1 md:p-2 rounded-full text-white hover:bg-[#FFAC00] hover:scale-110 transition-all duration-300 cursor-pointer">
            <XLogoIcon className="w-4 h-4 lg:w-6 lg:h-6" />
          </a>
          <a href="https://www.instagram.com/accounts/login/?next=%2Fjohatenterprises%2F&source=omni_redirect" target="_blank" className="bg-[#1F6B5A] p-1 md:p-2 rounded-full text-white hover:bg-[#FFAC00] hover:scale-110 transition-all duration-300 cursor-pointer">
            <InstagramLogoIcon className="w-4 h-4 lg:w-6 lg:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/james-taylor-69b20544/" target="_blank" className="bg-[#1F6B5A] p-1 md:p-2 rounded-full text-white hover:bg-[#FFAC00] hover:scale-110 transition-all duration-300 cursor-pointer">
            <LinkedinLogoIcon className="w-4 h-4 lg:w-6 lg:h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}