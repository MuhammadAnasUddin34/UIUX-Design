import Image from 'next/image'
import React from 'react'

const Stan = () => {
  return (
    <div>

        {/* Header Section */}
        <div className='mt-16 mb-7'>
          <span className='text-xl font-semibold px-6 sm:px-10 lg:px-16'>{`Don't`} Miss</span>
        </div>

        {/* Image Section */}
        <div className='flex justify-center px-6 sm:px-10 lg:px-20'>
            <Image
                className=''
                src={'/stan.png'}
                alt='shoes banner'
                width={1200}
                height={600}
                layout="intrinsic"
            />
        </div>

        {/* Text Section */}
        <div className='text-center text-black mt-12 sm:mt-16 lg:mt-20 px-6 sm:px-10 lg:px-16'>

            {/* Title */}
            <span className='text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase'>flight essentials</span><br /><br />

            {/* Description */}
            <span className='text-sm sm:text-base lg:text-lg'>
                Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
            </span><br />

            {/* Button */}
            <button className='btn mt-4'>Shop</button>
        </div>

    </div>
  )
}

export default Stan
