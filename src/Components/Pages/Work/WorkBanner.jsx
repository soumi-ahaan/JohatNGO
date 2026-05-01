import React from 'react'
import bannerImg from "../../../assets/work-banner.jpg";

const WorkBanner = () => {
  return (
    <section className="relative w-full h-[550px] md:h-[550px] overflow-hidden">

      {/* Background Image */}
      <img
        src={bannerImg}
        alt="Our Work"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-[90px] font-bold font-display">
          Our Work
        </h1>
      </div>

      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f59e0b]"></div>

    </section>
  );
};


export default WorkBanner