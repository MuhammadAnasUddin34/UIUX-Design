import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Gear = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20">

      <div className='mt-20 mb-7'>
        <span className='text-xl font-semibold'>Gear Up</span>
      </div>

      <div className='flex flex-wrap justify-between gap-4'> {/* Main Container */}

        {/* Men's Gear Section */}
        <div className='flex flex-wrap justify-between gap-4 w-full md:w-1/2'>
          {/* Product 1 */}
          <div className='flex flex-col items-center w-full sm:w-80'>
            <div className='flex items-center mb-2 opacity-0'>
              <span>shop</span>
              <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3'>
                <ChevronLeft />
              </div>
              <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
                <ChevronRight />
              </div>
            </div>
            <Image
              src={'/gear-m-1.png'}
              alt='Nike Dri-FIT ADV TechKnit Ultra'
              width={280}
              height={250}
            />
            <div className='flex justify-between items-center px-2 pt-2'>
              <div className='text-xs font-bold pr-2'>Nike Dri-FIT ADV TechKnit Ultra</div>
              <div className='text-sm'>₹ 3 895</div>
            </div>
            <div>
              <span className='text-sm text-gray-700 px-2'>{`Men's`} Short-Sleeve <br />
              {`Running Top`}</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className='flex flex-col items-center w-full sm:w-80'>
            <div className='flex items-center justify-end pr-10 mb-2'>
              <span className='text-xs sm:text-sm w-20'>Shop {`Men's`}</span>
              <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-1'>
                <ChevronLeft />
              </div>
              <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
                <ChevronRight />
              </div>
            </div>
            <Image
              src={'/gear-man-2.png'}
              alt='Nike Dri-FIT Challenger'
              width={280}
              height={250}
            />
            <div className='flex justify-between items-center flex-wrap px-2 pt-2'>
              <div className='text-xs font-bold pr-2'>Nike Dri-FIT Challenger</div>
              <div className='text-sm'>₹ 3 895</div>
            </div>
            <div>
              <span className='text-sm text-gray-700 px-2'>{`Men's`} 18cm (approx.) 2<br />
              -in-1 Versatile Shorts</span>
            </div>
          </div>
        </div>

        {/* Women's Gear Section */}
        <div className='flex flex-wrap justify-between gap-4 w-full md:w-1/2'>
          {/* Product 3 */}
          <div className='flex flex-col items-center w-full sm:w-80'>
            <div className='flex items-center mb-2 opacity-0'>
              <span>shop</span>
              <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3'>
                <ChevronLeft />
              </div>
              <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
                <ChevronRight />
              </div>
            </div>
            <Image
              src={'/gear-w-1.png'}
              alt='Nike Dri-FIT ADV Run Division'
              width={280}
              height={250}
            />
            <div className='flex justify-between items-center flex-wrap px-2 pt-2'>
              <div className='text-xs font-bold pr-2'>Nike Dri-FIT ADV Run Division</div>
              <div className='text-sm'>₹ 2 495</div>
            </div>
            <div>
              <span className='text-sm text-gray-700 px-2'>{`Women's`} Long-Sleeve <br />
              Running Top</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className='flex flex-col items-center w-full sm:w-80'>
            <div className='flex items-center justify-end pr-10 mb-2'>
              <span className='text-xs sm:text-sm w-28'>Shop {`Women's`}</span>
              <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-1'>
                <ChevronLeft />
              </div>
              <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
                <ChevronRight />
              </div>
            </div>
            <Image
              src={'/gear-w-2.png'}
              alt='Nike Fast'
              width={280}
              height={250}
            />
            <div className='flex justify-between flex-wrap items-center px-2 pt-2'>
              <div className='text-sm font-bold pr-2'>Nike Fast</div>
              <div className='text-sm'>₹ 3 795</div>
            </div>
            <div>
              <span className='text-sm text-gray-700 px-2'>{`Women's`} Mid-Rise 7/8 Running <br />
              Leggings with Pockets</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Gear
