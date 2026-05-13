import React from "react";
import aboutImg from "../../../assets/about-img.png"; // replace later

const AboutSection = () => {
    return (
        <section className="w-full bg-white relative overflow-hidden">

            {/* Left 20% Background */}
            <div className="absolute left-0 top-0 h-full w-[30%] bg-[#F7F7F7] hidden lg:block"></div>

            {/* Container */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[72px] py-[60px] lg:py-[80px] relative z-10">

                {/* Heading */}
                <div className="mb-[50px]">
                    <div className="space-y-2">
                        <span className="relative inline-block text-[#FFAC00] italic text-xl md:text-[24px] font-caveat font-bold after:content-[''] after:absolute after:left-0 after:top-0 after:w-1/2 after:border-t-2 after:border-yellow-500">
                            About Us
                        </span>

                        <h2 className="font-display font-bold text-[32px] lg:text-[50px] leading-[45px] lg:leading-[60px] tracking-[-2px] text-[#313131]">
                            We're Non-profit Charity <br />Organization
                        </h2>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-[auto_1fr] gap-[57px] items-start">

                    {/* Left Image */}
                    <div className="relative w-full">
                        <img
                            src={aboutImg}
                            alt="about"
                            className="w-full max-w-[530px] object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div>

                        {/* Top Text with Line */}
                        <div className="flex items-start gap-[10px] mb-[30px]">

                            {/* Vertical Line */}
                            <svg
                                width="3"
                                height="75"
                                viewBox="0 0 3 75"
                                className="shrink-0 mt-[4px]"
                            >
                                <line
                                    x1="1.5"
                                    y1="0"
                                    x2="1.5"
                                    y2="75"
                                    stroke="#FFAC00"
                                    strokeWidth="3"
                                />
                            </svg>

                            <div>
                                <p className="font-display text-xl font-medium text-[#313131]">
                                    We are a charity organization dedicated to supporting
                                    underprivileged communities through food, education,
                                    healthcare, and community support, creating hope and
                                    positive change.
                                </p>

                                <p className="mt-4 text-sm text-[#6F6F6F]">
                                    With the help of our volunteers, donors, and partners, we
                                    strive to build stronger communities filled with compassion,
                                    dignity, and equal opportunities for everyone.
                                </p>
                            </div>

                        </div>

                        {/* Cards */}
                        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">

                            {/* Mission */}
                            <div className="w-full md:w-[366px] h-auto md:h-[430px] bg-[#1A685B] p-6 md:p-8 text-white relative overflow-hidden">

                                {/* Circle */}
                                <div className="absolute top-6 left-6 w-[80px] h-[80px] bg-white/10 rounded-full"></div>

                                <h3 className="font-display text-[30px] md:text-[41px] font-bold mb-4 relative z-10">
                                    Mission
                                </h3>

                                <p className="text-[16px] relative z-10">
                                    To support underprivileged communities by providing food, education, healthcare,
                                    and essential resources that improve daily lives and create lasting impact.
                                    We are committed to bringing positive change through compassion,
                                    dedicated service, and strong community support, helping individuals and families build a better future.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="w-full md:w-[366px] h-auto md:h-[430px] bg-[#FFAC00] p-6 md:p-8 text-white relative overflow-hidden">

                                {/* Circle */}
                                <div className="absolute top-6 left-6 w-[80px] h-[80px] bg-white/10 rounded-full"></div>

                                <h3 className="font-display text-[30px] md:text-[41px] font-bold mb-4 relative z-10">
                                    Vision
                                </h3>

                                <p className="text-[16px] relative z-10">
                                    To build a better future where everyone has access to basic needs,
                                    equal opportunities, and a safe, supportive environment to grow and succeed.
                                    We envision stronger communities filled with hope, dignity, compassion,
                                    and sustainable development for generations to come.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;