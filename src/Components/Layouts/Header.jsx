import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  EnvelopeSimpleIcon,
  PhoneIcon,
  FacebookLogoIcon,
  XLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon
} from "@phosphor-icons/react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white">

      {/* CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[72px] py-1">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-3 gap-8">

          {/* LEFT LOGO */}
          <div className="flex items-center">
            <a href="/" className="text-decoration-none">
              <img
                src={logo}
                alt="logo"
                className="w-[134px] lg:w-[154px] h-[64px] lg:h-[84px] object-contain"
              />
            </a>
          </div>

          {/* CENTER NAV */}
          <nav className="hidden md:flex justify-center items-center gap-3 md:gap-6 xl:gap-[35px] text-xs lg:text-base whitespace-nowrap">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "lg:px-6 py-2.5 text-sm lg:text-base font-[550] text-[#FFAC00]"
                  : "lg:px-6 py-2.5 text-sm lg:text-base font-[550] text-[#313131] hover:text-[#FFAC00] hover:scale-110 transition-all duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "lg:px-4 py-2.5 text-sm lg:text-base font-[550] text-[#FFAC00]"
                  : "lg:px-4 py-2.5 text-sm lg:text-base font-[550] text-[#313131] hover:text-[#FFAC00] hover:scale-110 transition-all duration-300"
              }
            >About Us
            </NavLink>
            <NavLink
              to="/our-work"
              className={({ isActive }) =>
                isActive
                  ? "lg:px-4 py-2.5 text-sm lg:text-base font-[550] text-[#FFAC00]"
                  : "lg:px-4 py-2.5 text-sm lg:text-base font-[550] text-[#313131] hover:text-[#FFAC00] hover:scale-110 transition-all duration-300"
              }
            >Our Works
            </NavLink>
            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive
                  ? "lg:px-6 py-2.5 text-sm lg:text-base font-[550] text-[#FFAC00]"
                  : "lg:px-6 py-2.5 text-sm lg:text-base font-[550] text-[#313131] hover:text-[#FFAC00] hover:scale-110 transition-all duration-300"
              }
            >Events
            </NavLink>
          </nav>

          {/* RIGHT BUTTON */}
          <div className="flex justify-end items-center py-[22px]">
            <Link to="/contact" className="hidden md:inline-block bg-[#FFAC00] -skew-x-[12deg] px-7 py-2 text-sm md:text-base lg:px-9 lg:py-4 hover:bg-[#1F6B5A] hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
                Give Support
              </span>
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden mt-4 ml-auto flex items-center rounded-lg  bg-transparent  justify-center h-16 w-16 text-[#1F6B5A]"
            onClick={() => setOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1F6B5A" stroke="#1F6B5A"
              strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* OFF-CANVAS MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      ><button onClick={() => setOpen(false)} className="ml-6 my-6 py-1 px-2.5 text-xl left-0 bg-[#1F6B5A] text-white rounded-full">✕</button>
        <div className=" flex flex-col gap-6">

          <NavLink
            to="/"
             onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "px-6 py-4 text-base font-[550] bg-[#FFAC00] text-white"
                : "px-6 py-4 text-base font-[550] bg-transparent text-[#313131]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
             onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "px-6 py-4 text-base font-[550] bg-[#FFAC00] text-white"
                : "px-6 py-4 text-base font-[550] bg-transparent text-[#313131]"
            }
          >About Us
          </NavLink>
          <NavLink
            to="/our-work"
             onClick={() => setOpen(false)} 
            className={({ isActive }) =>
              isActive
                ? "px-6 py-4 text-base font-[550] bg-[#FFAC00] text-white"
                : "px-6 py-4 text-base font-[550] bg-transparent text-[#313131]"
            }
          >Our Works
          </NavLink>
          <NavLink
            to="/event"
             onClick={() => setOpen(false)}               
            className={({ isActive }) =>
              isActive
                ? "px-6 py-4 text-base font-[550] bg-[#FFAC00] text-white"
                : "px-6 py-4 text-base font-[550] bg-transparent text-[#313131]"
            }
          >Events
          </NavLink>


          <Link to="/contact" onClick={() => setOpen(false)}  className="md:hidden bg-[#FFAC00] -skew-x-[12deg] w-fit py-2 px-7 text-sm md:text-base ml-6 mr-12 cursor-pointer">
            <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
              Give Support
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-[13.8px] mt-6 ml-6">
          <a href="https://www.facebook.com/johat1953" target="_blank" className="bg-[#1F6B5A] p-2 rounded-full text-white hover:bg-[#FFAC00] hover:scale-110 transition-all duration-300 cursor-pointer">
            <FacebookLogoIcon className="w-6 h-6" />
          </a>
          <a href="https://x.com/JohatEnter3002" target="_blank" className="bg-[#1F6B5A] p-2 rounded-full text-white hover:bg-[#FFAC00] hover:scale-110 transition-all duration-300 cursor-pointer">
            <XLogoIcon className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/accounts/login/?next=%2Fjohatenterprises%2F&source=omni_redirect" target="_blank" className="bg-[#1F6B5A] p-2 rounded-full text-white hover:bg-[#FFAC00] hover:scale-110 transition-all duration-300 cursor-pointer">
            <InstagramLogoIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/james-taylor-69b20544/" target="_blank" className="bg-[#1F6B5A] p-2 rounded-full text-white hover:bg-[#FFAC00] hover:scale-110 transition-all duration-300 cursor-pointer">
            <LinkedinLogoIcon className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}