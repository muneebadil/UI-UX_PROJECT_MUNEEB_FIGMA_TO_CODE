import React from 'react'
import Image from 'next/image'

const Company = () => {
  return (
    <div>
      {/* Company Image Section */}
      <div className="flex justify-center items-center mt-6">
        <Image
          src={"/companies.png"}
          alt="List of company logos"  // Updated alt for better description
          width={1054}
          height={175}
          className="w-full max-w-[90%] sm:max-w-[1054px] h-auto"
          priority // Added priority for above-the-fold optimization
        />
      </div>
    </div>
  )
}

export default Company
