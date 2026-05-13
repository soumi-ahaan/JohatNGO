import { useEffect, useRef, useState } from "react";
import { Quotes, StarIcon } from "@phosphor-icons/react";
import { getTestimonials } from "../../../Api/Api";
import halftone from "../../../assets/halftone.png";

const Testimonials = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [index, setIndex] = useState(1);
  const timeoutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ dynamic width (based on breakpoint EXACTLY like your design)
  const getSlideWidth = () => {
    if (typeof window === "undefined") return 100;
    if (window.innerWidth < 768) return 100;
    if (window.innerWidth < 1024) return 85;
    if (window.innerWidth < 1280) return 90;
    return 85;
  };

  const [slideWidth, setSlideWidth] = useState(getSlideWidth());

  // ✅ responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setSlideWidth(getSlideWidth());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ fetch data
  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await getTestimonials();
        setData(res);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  // ✅ extended array
  const extended =
    data.length > 0
      ? [data[data.length - 1], ...data, data[0]]
      : [];

  // ✅ reset index safely after load
  useEffect(() => {
    if (data.length > 0) {
      setIndex(1);
    }
  }, [data]);

  // ✅ autoplay (fixed)
  useEffect(() => {
    if (extended.length <= 1 || loading) return;

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 3200);

    return () => clearTimeout(timeoutRef.current);
  }, [index, extended.length, loading]);

  // ✅ smooth transition reset (IMPORTANT)
  useEffect(() => {
    if (!isTransitioning) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  // ✅ loop fix (NO GLITCH)
  const handleTransitionEnd = () => {
    if (!extended.length) return;

    if (index === extended.length - 1) {
      setIsTransitioning(false);
      setIndex(1);
    } else if (index === 0) {
      setIsTransitioning(false);
      setIndex(extended.length - 2);
    }
  };

  // ✅ prevent invalid index (IMPORTANT SAFETY)
  useEffect(() => {
    if (!extended.length) return;

    if (index >= extended.length) {
      setIndex(extended.length - 1);
    }
    if (index < 0) {
      setIndex(0);
    }
  }, [index, extended.length]);

  if (loading) {
    return <p className="text-center py-20">Loading testimonials...</p>;
  }

  return (
    <section className="relative pt-10 md:pt-32 pb-10 lg:py-16 overflow-hidden bg-[#f2f2f2]/50">

      {/* BACKGROUND */}
      <img
        className="absolute inset-0  object-contain object-left object-no-repeat max-w-xl"
        src="https://johatngo.ahaanmedia.com/wp-content/uploads/2026/04/Image-3.png"
      />

      {/* RIGHT HALFTONE BG */}
  <img
    src={halftone}
    alt=""
    className="absolute -top-4 right-0 lg:right-40 h-full w-auto max-w-2xl object-contain  pointer-events-none"
  />

      {/* <div className="absolute inset-0 bg-[#F2F2F2]/10"></div> */}

      <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 xl:gap-20 items-center px-4 md:px-8 lg:px-12 xl:px-[72px]">

        {/* LEFT */}
        <div>
          <p className="relative inline-block text-[#FFAC00] font-caveat text-[24px] font-bold italic mb-4
          after:content-[''] after:absolute after:left-0 after:-top-1 after:w-1/2 after:border-t-2 after:border-yellow-500">
            Our Testimonials
          </p>

          <h2 className="font-display text-[32px] lg:text-[50px] leading-[45px] lg:leading-[60px] tracking-[-2px] font-bold mb-6 text-black">
            What They’re <br /> Talking About us
          </h2>

          <p className="text-gray-500 text-base max-w-md">
            Our supporters, volunteers, and donors share their experiences and the positive impact our organization has made.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative overflow-hidden">
          

          <div
            className="flex "
            style={{
              transform: `translateX(-${index * slideWidth}%)`,
              transition: isTransitioning
                ? "transform 700ms ease-in-out"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((item, i) => (
              <div
                key={i}
                className="z-0 pt-20 w-full md:w-[85%] lg:w-[90%] xl:w-[85%] md:pr-6 flex-shrink-0"
              >
                <div className="bg-white rounded-2xl pt-16 px-4 pb-4 md:px-6 md:pb-6 xl:px-10 xl:pb-10 relative">

                  <div className="absolute -top-10 left-10">
                    <div className="w-[96px] h-[96px] bg-[#1A685B] rounded-full flex items-center justify-center">
                      <img
                        src={item?.featured_image || "https://via.placeholder.com/80"}
                        alt=""
                        className="mr-2 mt-2 w-[92px] h-[92px] rounded-full object-cover border-4 border-white"
                      />
                    </div>
                  </div>

                  <div className="absolute right-6 top-6 bg-[#1A685B] text-white w-10 h-10 rounded-full flex items-center justify-center">
                    <Quotes size={24} weight="fill" className="-rotate-180" />
                  </div>

                  <div className="mt-4">
                    <h3
                      className="text-2xl font-bold font-display text-[#313131]"
                      dangerouslySetInnerHTML={{
                        __html: item?.title?.rendered || "",
                      }}
                    />

                    <p className="text-[#6F6F6F] text-sm mb-2 ">
                      {item?.acf?.designation}
                    </p>

                    <div className="flex gap-1 text-lg mb-3">
                      {Array.from({ length: item?.acf?.rating || 0 }).map((_, i) => (
                        <StarIcon key={i} size={20} color="#f3b42c" weight="fill" />
                      ))}
                    </div>

                    <p
                      className="text-[#6F6F6F] text-xs md:text-base leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item?.content?.rendered || "",
                      }}
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex gap-2 mt-6 pb-2 justify-center">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i + 1)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === i + 1 ? "bg-green-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;