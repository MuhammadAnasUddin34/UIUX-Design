import Image from 'next/image'
import React from 'react'

const Essentials = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">

      <div className="mt-28 mb-12 text-center">
        <span className="text-xl font-semibold">The Essentials</span>
      </div>
        
      <div className="flex justify-center items-center mb-16 md:mb-28 flex-wrap">

        {/* Image 1 */}
        <div className="w-full sm:w-80 md:w-96 h-[400px] overflow-hidden mb-6 md:mb-0">
          <Image
            className="hover:scale-105 duration-300"
            src={'/exclusive.png'}
            alt=''
            width={350}
            height={550}
          />
        </div>

        {/* Image 2 */}
        <div className="w-full sm:w-80 md:w-96 h-[400px] overflow-hidden mb-6 md:mb-0">
          <Image
            className="hover:scale-105 duration-300"
            src={'/fr2.png'}
            alt=''
            width={350}
            height={550}
          />
        </div>

        {/* Image 3 */}
        <div className="w-full sm:w-80 md:w-96 h-[400px] overflow-hidden mb-6 md:mb-0">
          <Image
            className="hover:scale-105 duration-300"
            src={'/Frame2.png'}
            alt=''
            width={350}
            height={550}
          />
        </div>
      </div>

      <div className="flex justify-center flex-wrap px-4 sm:px-8 lg:px-36 pb-20 items-center">

        {/* Icons Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
          <span className="font-semibold pl-3">Icons</span>
          <ul className="list-disc pl-5">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        {/* Shoes Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
          <span className="font-semibold pl-3">Shoes</span>
          <ul className="list-disc pl-5">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        {/* Clothing Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
          <span className="font-semibold pl-3">Clothing</span>
          <ul className="list-disc pl-5">
            <li>All Clothing</li>
            <li>Modest Clothing</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        {/* Kids Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
          <span className="font-semibold pl-3">Kids'</span>
          <ul className="list-disc pl-5">
            <li>Infant & Toddler Shoes</li>
            <li>Kids' Shoes</li>
            <li>Kids' Jordan Shoes</li>
            <li>Kids' Basketball Shoes</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Essentials
