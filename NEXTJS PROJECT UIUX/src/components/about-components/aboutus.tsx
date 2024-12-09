import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-5 py-9">
      {/* Text Section */}
      <div className="w-full text-center md:text-left md:w-1/2 md:ml-12">
        <h3 className="text-[#252B42] font-semibold text-[18px] mb-5">
          ABOUT THE COMPANY
        </h3>
        <h1 className="text-[#252B42] font-extrabold text-[30px] sm:text-[45px] md:text-[55px] mb-5">
          WHO WE ARE
        </h1>
        <p className="text-[#737373] text-[15px] sm:text-[17px] md:text-[19px] mt-4">
          We understand how large objects behave, <br />
          but we explore the impact on a smaller scale.
        </p>

        {/* Call to Action Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="px-5 py-3 bg-[#1E90FF] text-[#FAFAFA] rounded-lg hover:bg-blue-400 transition-all text-center text-[17px]">
            Request a Quote
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <Image
          src="/aboutus.png"
          alt="aboutus"
          height={280}
          width={420}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUs;
