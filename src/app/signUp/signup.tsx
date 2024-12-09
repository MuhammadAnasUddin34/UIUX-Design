import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">

            {/* Image Section */}
            <div className='img flex justify-center mt-10 mb-4'>
                <Image
                    className=''
                    src={'/signIn.png'}
                    alt='shoes banner'
                    width={450}
                    height={200}
                />
            </div>

            {/* Form Section */}
            <div className='flex justify-center'>
                <div className='form w-full sm:w-80'>
                    <input 
                        className='w-full px-4 py-2 my-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300' 
                        type="text" 
                        placeholder='Email Address' 
                    /> 
                    <input 
                        className='w-full px-4 py-2 my-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300' 
                        type="password" 
                        placeholder='Password' 
                    />
                </div>
            </div>

            {/* Options Section */}
            <div className='flex justify-center items-center mt-4'>
                <div className='flex justify-between items-center text-sm w-full sm:w-80'>
                    <div className='flex items-center'>
                        <input type="checkbox" className='mr-2' />
                        <span className='text-gray-500'>Keep me signed in</span>
                    </div>
                    <div>
                        <span className='text-gray-400'>Forgotten password?</span>
                    </div>
                </div>
            </div>

            {/* Agreement Section */}
            <div className='flex justify-center mt-4'>
                <p className='text-gray-600 text-center text-xs sm:text-sm'>
                    By logging in, you agree to {`Nike's`} 
                    <span className='text-gray-500 underline'> Privacy Policy <br /> and Terms of Use.</span>
                </p>
            </div>

            {/* Button Section */}
            <div className='flex justify-center mt-6'>
                <button className='w-full sm:w-80 bg-black text-white py-3 rounded-lg'>Sign In</button>
            </div>

            {/* Join Us Section */}
            <div className='flex justify-center items-center mt-4 pb-5'>
                <span className='text-gray-500 text-sm'>Not a member?
                    <Link href={'/join'}>
                        <span className='text-black underline pl-1'>Join Us.</span>
                    </Link>
                </span>
            </div>

        </div>
    )
}

export default SignIn
