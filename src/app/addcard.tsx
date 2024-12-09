import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16">
      {/* Title and Navigation */}
      <div className='flex justify-between mt-28'>
        <div>
          <span className='text-lg font-semibold'>Best of Air Max</span>
        </div>

        <div className='flex items-center'>
          <span className='hidden md:inline-block mr-4'>Shop</span>
          <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
            <ChevronLeft />
          </div>
          <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 ml-3'>
            <ChevronRight />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className='flex flex-wrap justify-center gap-6 mt-10'>
        {/* Card 1 */}
        <div className='w-full sm:w-72 md:w-80'>
          <div className='w-full h-72 mb-6 overflow-hidden'>
            <Image
              className='hover:scale-105 duration-300'
              src={'/shoes1.png'}
              alt='Nike Air Max'
              width={300}
              height={300} />
          </div>
          <div className='flex justify-between items-center px-2 pt-2'>
            <div className='text-base'>Nike Air Max Pulse</div>
            <div className='text'>₹ 13,995</div>
          </div>
          <div>
            <span className='text-sm text-gray-700 px-2'>{`Women's`} Shoes</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className='w-full sm:w-72 md:w-80'>
          <div className='w-full h-72 mb-6 overflow-hidden'>
            <Image
              className='hover:scale-105 duration-300'
              src={'/shoes1.png'}
              alt='Nike Air Max'
              width={300}
              height={300} />
          </div>
          <div className='flex justify-between items-center px-2 pt-2'>
            <div className='text-base'>Nike Air Max Pulse</div>
            <div className='text'>₹ 13,995</div>
          </div>
          <div>
            <span className='text-sm text-gray-700 px-2'>{`Men's`} Shoes</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className='w-full sm:w-72 md:w-80'>
          <div className='w-full h-72 mb-6 overflow-hidden'>
            <Image
              className='hover:scale-105 duration-300'
              src={'/Image2.png'}
              alt='Nike Air Max'
              width={300}
              height={300} />
          </div>
          <div className='flex justify-between items-center px-2 pt-2'>
            <div className='text-base'>Nike Air Max Pulse</div>
            <div className='text'>₹ 16,996</div>
          </div>
          <div>
            <span className='text-sm text-gray-700 px-2'>{`Women's`} Shoes</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className='w-full sm:w-72 md:w-80'>
          <div className='w-full h-72 mb-6 overflow-hidden'>
            <Image
              className='hover:scale-105 duration-300'
              src={'/Image2.png'}
              alt='Nike Air Max'
              width={300}
              height={300} />
          </div>
          <div className='flex justify-between items-center px-2 pt-2'>
            <div className='text-base'>Nike Air Max Pulse</div>
            <div className='text'>₹ 16,996</div>
          </div>
          <div>
            <span className='text-sm text-gray-700 px-2'>{`Men's`} Shoes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
