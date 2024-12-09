import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>

      {/* Header Section */}
      <div className='text-center bg-gray-100 py-4 sm:py-6'>
        <p className='text-lg sm:text-xl'>Hello Nike App</p>
        <p className='text-gray-600 text-sm sm:text-base'>
          Download the app to access everything Nike. <span className='text-black underline'>Get Your Great</span>
        </p>
      </div>

      {/* Hero Image Section */}
      <div className='flex justify-center px-4 sm:px-10'>
        <Image
          className=''
          src={'/hero-shoes-image.png'}
          alt='shoes banner'
          width={1200}
          height={600}
        />
      </div>

      {/* Hero Text Section */}
      <div className='text-center text-black mt-12 sm:mt-16 px-4 sm:px-10'>
        <span className='font-semibold text-base sm:text-lg lg:text-xl'>First Look</span><br />
        
        <span className='text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase'>
          nike air max pulse
        </span><br /><br />

        <span className='text-sm sm:text-base'>
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
          —designed to push you past your limits and help you go to the max.
        </span><br />

        {/* Buttons Section */}
        <div className='mt-6 space-x-4'>
          <button className='btn py-2 px-4 sm:py-3 sm:px-6 bg-black text-white rounded-md'>Notify Me</button>
          <button className='btn py-2 px-4 sm:py-3 sm:px-6 bg-black text-white rounded-md'>Shop Air Max</button>
        </div>
      </div>

    </div>
  )
}

export default Hero
