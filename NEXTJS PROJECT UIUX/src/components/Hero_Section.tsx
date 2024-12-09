import React from "react";

const Hero_Section = () => {
  return (
    <section className="relative h-[400px] sm:h-[600px] lg:h-[716px] bg-[url('/hero.png')] bg-cover bg-center sm:bg-[top_center]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-transparent"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center lg:items-start lg:justify-start text-white text-center lg:text-left px-4 lg:px-16">
        <header>
          <p className="font-semibold tracking-wider text-[14px] sm:text-[16px] md:text-[18px] mb-2 sm:mb-4">
            SUMMER 2020
          </p>
          <h1 className="font-bold leading-tight text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] mb-4 sm:mb-6">
            NEW COLLECTION
          </h1>
        </header>
        <p className="leading-relaxed text-[14px] sm:text-[16px] md:text-[20px] mb-4 sm:mb-8">
          We know how large objects will act, <br />
          but things on a small scale.
        </p>
        <button
          className="bg-[#2DC071] hover:bg-green-700 text-white font-bold rounded px-4 py-2 sm:px-6 sm:py-3 transition duration-300"
          aria-label="Shop Now"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default Hero_Section;
