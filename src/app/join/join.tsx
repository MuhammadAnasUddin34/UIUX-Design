import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Join = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4">
            <div className="flex justify-center mb-4">
                <Image
                    className=""
                    src={'/join.png'}
                    alt="shoes banner"
                    width={450}
                    height={200}
                />
            </div>

            <div className="flex justify-center">
                <div className="form w-full sm:w-[480px]">
                    <input 
                        className="w-full px-5 py-2 my-2 border rounded-md" 
                        type="text" 
                        placeholder="Email Address" 
                    />
                    <input 
                        className="w-full px-5 py-2 my-2 border rounded-md" 
                        type="text" 
                        placeholder="Password" 
                    />
                    <input 
                        className="w-full px-5 py-2 my-2 border rounded-md" 
                        type="text" 
                        placeholder="First Name" 
                    />
                    <input 
                        className="w-full px-5 py-2 my-2 border rounded-md" 
                        type="text" 
                        placeholder="Last Name" 
                    />
                    <input 
                        className="w-full px-5 py-2 my-2 border rounded-md" 
                        type="text" 
                        placeholder="Date of Birth" 
                    />

                    <span className="text-sm text-gray-500 pl-2 block">
                        Get a Nike Member Reward every year on your Birthday.
                    </span>

                    <div className="relative">
                        <input 
                            className="w-full px-5 py-2 my-2 border rounded-md" 
                            type="text" 
                            placeholder="India" 
                        />
                        <div className="absolute top-4 right-2 text-gray-500">
                            <ChevronDown />
                        </div>
                    </div>

                    <div className="flex justify-between gap-4">
                        <input 
                            className="w-1/2 px-5 py-2 my-2 border rounded-md" 
                            type="text" 
                            placeholder="Male" 
                        />
                        <input 
                            className="w-1/2 px-5 py-2 my-2 border rounded-md" 
                            type="text" 
                            placeholder="Female" 
                        />
                    </div>

                    <div>
                        <div className="items-start flex py-4">
                            <input 
                                className="relative top-[6px]" 
                                type="checkbox" 
                            />
                            <span className="text-gray-500 px-2">
                                Sign up for emails to get updates from Nike on 
                                products, offers, and your Member benefits.
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <p className="text-gray-600 text-center text-[13px] pl-1">
                            By Creating an Account, you agree to {`Nike's`} 
                            <span className="text-gray-500 underline">
                                Privacy Policy and Terms of Use.
                            </span>
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <button className="w-full bg-black text-white py-3 text-xl rounded-lg mt-6 mb-3">
                            Join Us
                        </button>
                    </div>

                    <div className="flex justify-center items-center pb-5">
                        <span className="text-gray-500">
                            Already a member?
                            <Link href={'/signUp'}>
                                <span className="text-black underline pl-1"> Sign In.</span>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;
