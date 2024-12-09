import Image from 'next/image'
import React from 'react'

const BigCompannies = () => {
  return (
    <div className='bg-[#FAFAFA] py-12 mt-14'>
      {/* Section Heading */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#252B42] font-extrabold text-[42px] sm:text-[48px] mb-4">
          Leading Big Companies on Board
        </h1>
        <p className="text-[#737373] text-[16px] sm:text-[18px] mt-2">
          Solving the ongoing conflict between
        </p>
        <p className="text-[#737373] text-[16px] sm:text-[18px] mt-2">
          two major areas of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Companies' Image */}
      <div className='mt-14 flex justify-center items-center'>
        <Image
          src={"/companies.png"}
          alt='companies'
          width={1054}
          height={185}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default BigCompannies
