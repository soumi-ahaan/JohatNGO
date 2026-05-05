import {
  Users,
  HandHeart,
  Heartbeat,
  Gift,
} from "@phosphor-icons/react";

const CounterSection = () => {
  return (
    <div className="relative z-20 mt-25 ">

      {/* 🔥 FLOATING COUNTER */}
      <div className="absolute -top-[140px] md:-top-20 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-4 md:px-8 lg:px-12 xl:px-[72px]">
        
        <div className="bg-[#FFAC00] rounded-2xl shadow-xl p-4 sm:p-6 md:py-8 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-white text-center">

          <div className="flex flex-col items-center">
            <Users className="w-6 h-6 md:w-10 md:h-10" />
            <h3 className="text-sm md:text-2xl font-bold mt-2 font-display">500+</h3>
            <p className="text-sm">Families Supported</p>
          </div>

          <div className="flex flex-col items-center">
            <HandHeart className="w-6 h-6 md:w-10 md:h-10" />
            <h3 className="text-sm md:text-2xl font-bold mt-2 font-display">50+</h3>
            <p className="text-sm">Volunteers</p>
          </div>

          <div className="flex flex-col items-center">
            <Heartbeat className="w-6 h-6 md:w-10 md:h-10" />
            <h3 className="text-sm md:text-2xl font-bold mt-2 font-display">10,000+</h3>
            <p className="text-sm">Lives Impacted</p>
          </div>

          <div className="flex flex-col items-center">
            <Gift className="w-6 h-6 md:w-10 md:h-10" />
            <h3 className="text-sm md:text-2xl font-bold mt-2 font-display">100+</h3>
            <p className="text-sm">Donation Campaigns</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CounterSection;