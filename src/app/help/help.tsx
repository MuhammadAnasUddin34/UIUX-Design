import Image from 'next/image'
import React from 'react'

const Help = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="form text-center my-6">
                <span className="text-xl sm:text-2xl font-semibold my-6 uppercase text-center">
                    Get Help
                </span>

                <div className="flex justify-center mt-4">
                    <input 
                        className="w-full sm:w-96 text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="What can we help you with?"
                    />
                    <button className="relative -ml-10 sm:-ml-12 p-2">
                        <svg
                            className="text-gray-400"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1_20)">
                                <path
                                    d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
                                    stroke="#111111"
                                    strokeWidth="1.5"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_20">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="lg:flex">
                <div className="faqs px-4 sm:px-6 lg:px-11">
                    <div>
                        <span className="text-lg sm:text-2xl font-semibold my-6 uppercase text-center block">
                            What Payment Options Can I Use on Nike Orders?
                        </span>
                        <span className="block mt-4">
                            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
                        </span>
                    </div>
                    <div className="mt-4 px-2 sm:px-7 lg:px-14">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                            <li>If you enter your PAN information at checkout, you’ll be able to pay for your order with PayTM or a local credit or debit card.</li>
                            <li>Apple Pay</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <p>
                            <span className="underline font-semibold">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member, <span className="underline font-semibold">join us</span> today.
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <button className="btn">Join Us</button>
                        <button className="btn">Shop Nike</button>
                    </div>
                    {/* FAQs */}
                    <div className="my-8">
                        <h2 className="font-semibold text-lg sm:text-xl">FAQs</h2>
                        <div className="mt-4 space-y-6">
                            <div>
                                <h3 className="font-semibold">Does my card need international purchases enabled?</h3>
                                <p>
                                    Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                                </p>
                                <p>Note: Some banks may charge a small transaction fee for international orders.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Can I pay for my order with multiple methods?</h3>
                                <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">What payment method is accepted for SNKRS orders?</h3>
                                <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Why don’t I see Apple Pay as an option?</h3>
                                <p>
                                    To see Apple Pay as an option, you’ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Image
                        src="/faqs.png"
                        alt="FAQs Banner"
                        width={250}
                        height={1000}
                        className="rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default Help
