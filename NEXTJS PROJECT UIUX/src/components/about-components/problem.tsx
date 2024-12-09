import Image from "next/image";
import React from "react";

const Problem: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-12 px-6">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row w-full items-start gap-8 py-10 mx-4 sm:mx-24">
        <div>
          <h3 className="text-[#E74040] text-[16px] mb-6">Facing Challenges</h3>
          <h2 className="font-bold text-[28px] text-[#252B42] sm:mt-2">
            Addressing the Critical Issues in Our Approach
            <br />
            That Need Immediate Attention
          </h2>
        </div>
        <p className="text-[#737373] text-[14px] sm:mt-20 mt-10 sm:mx-24 mx-4">
          We are working to resolve critical conflicts within the realms of classical
          physics: primarily focusing on the paradox between Newtonian mechanics
        </p>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-24 mt-16 mx-6 sm:mx-32">
        <div className="text-center">
          <h3 className="font-semibold text-[#252B42] text-[52px] sm:text-[64px]">15K</h3>
          <h2 className="font-medium text-[#737373] text-[16px] sm:text-[18px]">
            Satisfied Clients
          </h2>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-[#252B42] text-[52px] sm:text-[64px]">150K</h3>
          <h2 className="font-medium text-[#737373] text-[16px] sm:text-[18px]">
            Monthly Traffic
          </h2>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-[#252B42] text-[52px] sm:text-[64px]">15</h3>
          <h2 className="font-medium text-[#737373] text-[16px] sm:text-[18px]">
            Countries We Serve
          </h2>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-[#252B42] text-[52px] sm:text-[64px]">100+</h3>
          <h2 className="font-medium text-[#737373] text-[16px] sm:text-[18px]">
            Leading Partners
          </h2>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-16 sm:mt-24 flex justify-center items-center mx-6 sm:mx-40">
        <Image src={"/problem.png"} alt="problem" width={1050} height={600} />
      </div>
    </div>
  );
};

export default Problem;
