import Image from 'next/image'
import React from 'react'

const Running = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      
      {/* Title Section */}
      <div className='mt-28 mb-12'>
        <span className='text-xl font-semibold px-10 lg:px-16'>Featured</span>
      </div>
      
      {/* Image Section */}
      <div className='flex justify-center'>
        <Image
          src={'/running.png'}
          alt=''
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>
      
      {/* Text and Button Section */}
      <div className='text-center text-black mt-16'>
        <span className='text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase'>
          step into what feels good
        </span>
        <br /><br />
        
        <span className='text-sm sm:text-base lg:text-lg'>
          Cause everyone should know the feeling of running in that perfect pair.
        </span>
        <br />

        <button className='btn mt-6 py-2 px-8 text-sm sm:text-base lg:text-lg'>
          Find Your Shoe
        </button>
        
      </div>

    </div>
  )
}

export default Running
