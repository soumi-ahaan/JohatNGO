import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Phone, EnvelopeSimpleOpenIcon, MapTrifoldIcon} from "@phosphor-icons/react";
import { submitDonation } from "../../../Api/Api";
import { Link } from "react-router-dom";
const Donation = () => {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await submitDonation(form);

  //     if (res.success) {
  //       alert("✅ Submitted!");
  //       setForm({
  //         name: "",
  //         email: "",
  //         subject: "",
  //         message: "",
  //       });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("❌ Error");
  //   }
  // };


const [submitting, setSubmitting] = useState(false);
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
    },
  });

  const onSubmitForm = async (data) => {
    try {
      console.log("Sending Data:", data); // 👈 CHECK THIS FIRST
  
      const res = await submitDonation(data);
  
      console.log("API Response:", res); // 👈 CHECK RESPONSE
  
      if (res?.success || res?.status === 200) {
  alert("✅ Submitted!");
  reset();
} else {
        console.log("Unexpected response:", res);
        alert("❌ Submission failed");
      }
  
    } catch (err) {
      console.error("API ERROR:", err);
      alert("❌ Error submitting form");
    }
  };
const required = { required: "This field is required" };

  return (
    <section className=" bg-[#f8f8f8]  overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="relative   p-4 md:p-6 lg:p-12 xl:p-[75px]  shadow-sm overflow-hidden">
        {/* Background image with opacity */}
        <div
          className="absolute w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] bg-no-repeat pointer-events-none "
          style={{
            backgroundImage: "url('/vut.svg')",
            backgroundPosition: "right bottom",
            backgroundSize: "contain", // or "200px", "50%", etc.

            right: "-35px",
            bottom: "-30px",
            opacity: 1,
          }}
        />
        <div className="relative z-10">
          <div className=" mb-8">
            <span className="relative inline-block text-[#FFAC00]  italic text-xl md:text-[24px] font-caveat font-bold after:content-[''] after:absolute after:left-0 after:top-0 after:w-1/2 after:border-t-2 after:border-yellow-500 pt-2">
              Help us Donate
            </span>
            <h2 className="font-display text-2xl md:text-[32px] lg:text-[50px] leading-[45px] lg:leading-[60px] tracking-[-2px] font-bold text-slate-900  mt-2">
              Start Donating
            </h2>
          </div>

          <form className="space-y-4 " onSubmit={handleSubmit(onSubmitForm)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
              <input
                type="text"
                {...register("name", {
                      required: "Name is required",
                      pattern: {
                        value:
                          /^[A-Za-z\s]+$/,
                        message: "Only letters are allowed",
                      },
                    })}
                placeholder="Name"
                className="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-amber-500 shadow-sm outline-none"
              />
              {errors.name && (
                    <p className="text-red-500 ">{errors.name.message}</p>
                  )}
                  </div>
              <div className="flex flex-col gap-1">
              <input
                type="email"
                {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in)$/,
                message: "Invalid email",
              },
            })}
                placeholder="Email"
                className="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-amber-500 shadow-sm outline-none"
              />
              {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          </div>
      </div>

            <input
              type="text"
              {...register("subject", {
                      required: "Subject is required",
                    })}
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-amber-500 shadow-sm outline-none"
            />
            {errors.subject && (
            <p className="text-red-500">{errors.subject.message}</p>
          )}

            <textarea
              name="message"
              {...register("message")}
              rows={4}
              placeholder="Message"
              className="w-full p-4 rounded-lg bg-white border-none focus:ring-2 focus:ring-amber-500 shadow-sm outline-none"
            ></textarea>


            <div className="pt-4">
              <button
            type="submit"
            disabled={submitting}
            className={`cursor-pointer bg-[#FFAC00] -skew-x-[12deg] px-7 py-2 md:px-8 md:py-3 transition-all duration-300
    ${submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#1F6B5A] hover:scale-110"}
  `}
          >
            <span className="block skew-x-[12deg] text-white text-sm font-semibold uppercase">
              {submitting ? "Sending..." : "Sent a message"}
            </span>
          </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section: Image and Info */}
      <div className="flex flex-col shadow-2xl  overflow-hidden">
        <div className="h-full md:h-2/3">
          <img
            src="donation.jpg"
            alt="Children"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full md:h-1/3 bg-[#F3B42C] p-3 lg:p-4 grid grid-cols-1 lg:grid-cols-2 justify-around items-center text-white gap-2 md:gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-white p-3 rounded-full text-[#313131] shrink-0">
              <EnvelopeSimpleOpenIcon weight="fill" className=" w-6 h-6 "/>
            </div>
            <div className="text-sm">
               <a href="mailto:Johat1o153@gmail.com" className="text-xs sm:text-sm xl:text-base">Johat1o153@gmail.com</a><br/>
              {/* <a href="tel:+12314272289" className="text-xs sm:text-sm xl:text-base">+1-231-427-2289</a> */}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white p-3 rounded-full text-[#313131] shrink-0">
              <MapTrifoldIcon weight="fill" className="w-6 h-6"/>
            </div>
            <div className="text-sm leading-tight">
              <a
                  href="https://maps.app.goo.gl/Gx527db4EptJa5FK9"
                  target="_blank"
                  rel="noopener noreferrer" className="text-xs sm:text-sm xl:text-base">
                                 3975 Pulverwoods Rd,<br/>
                 Williamsburg, MI 49690, USA
                            </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Donation;
