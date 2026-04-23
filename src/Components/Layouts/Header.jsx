import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="w-full relative">
      {/* Background split */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-[#FFAC00]" />
        <div className="w-1/2 bg-gray-100" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-[84px] py-3 flex items-center justify-between">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] text-white">
          
          <div className="flex items-center gap-2">
            <div className="bg-[#1F6B5A] p-2 rounded-full">
              <Mail size={16} />
            </div>
            <span className="text-sm font-medium">
              johat1011953@outlook.com
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-[#1F6B5A] p-2 rounded-full">
              <Phone size={16} />
            </div>
            <span className="text-sm font-medium">
              +1-231-427-2289
            </span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-[13.8px]">
          
          <div className="bg-[#1F6B5A] p-2 rounded-full text-white">
            <Facebook size={16} />
          </div>

          <div className="bg-[#1F6B5A] p-2 rounded-full text-white">
            <FaXTwitter size={14} />
          </div>

          <div className="bg-[#1F6B5A] p-2 rounded-full text-white">
            <Instagram size={16} />
          </div>

        </div>
      </div>
    </div>
  );
}