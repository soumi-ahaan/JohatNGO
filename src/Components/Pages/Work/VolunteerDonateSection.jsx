import React, { useState } from "react";
import volunteerImg from "../../../assets/volunteer.png";
import donateImg from "../../../assets/donate.png";
import { Link } from "react-router-dom";
import DonationPopupForm from "./DonationPopupForm";

const VolunteerDonateSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {/* 🔥 CARD 1 */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Image */}
            <img
              src={volunteerImg}
              alt="Become a Volunteer"
              className="w-full h-[320px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1f6f64]/80"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
                Become a Volunteer
              </h2>

              <p className="text-sm md:text-base mb-5 max-w-md">
                Join us as a volunteer to support food drives, education,
                healthcare, and community programs, bringing hope to those in
                need.
              </p>

              <Link to="/contact" className="inline-block relative">
                <span className="absolute inset-0 bg-[#f59e0b] skew-x-[-20deg]"></span>

                <span className="relative px-10 py-2 text-white font-semibold text-sm md:text-base block">
                  JOIN NOW
                </span>
              </Link>
            </div>
          </div>

          {/* 🔥 CARD 2 */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Image */}
            <img
              src={donateImg}
              alt="Donate Now"
              className="w-full h-[320px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
                Donate Now
              </h2>

              <p className="text-sm md:text-base mb-5 max-w-md">
                Your donation helps provide food, education, healthcare, and
                essential support to those in need, creating hope and a brighter
                future.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="relative inline-block"
              >
                <span className="absolute inset-0 bg-[#f59e0b] skew-x-[-20deg]"></span>

                <span className="relative block px-10 py-2 text-white font-semibold text-sm md:text-base cursor-pointer">
                  DONATE NOW
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 🔥 POPUP FORM */}
      <DonationPopupForm
        isOpen={open}
        onClose={() => setOpen(false)}
        service="General Donation"
      />
    </>
  );
};

export default VolunteerDonateSection;
