import React from "react";
import bannerImg from "../../../assets/ngo_about.png"; // replace with your image

const AboutBanner = () => {
  return (
    <section
      className="w-full h-[220px] md:h-[300px] lg:h-[350px] xl:h-[550px] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Center Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white font-display font-[900] text-3xl sm:text-4xl xl:text-[60px] 2xl:text-[80px]">
          About Us
        </h1>
      </div>
    </section>
  );
};

export default AboutBanner;