import Link from 'next/link'; // Importing Link component from Next.js for navigation
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'; // Importing social media icons from React Icons
import { IoLocationOutline } from "react-icons/io5"; // Importing location icon from React Icons

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 px-4 sm:px-6 md:px-10">
            {/* Top Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
                
                {/* Column 1: Find a Store */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
                    <ul className="space-y-2 text-sm">
                        {/* Navigation Links */}
                        <li><Link href="#" className="hover:underline">Become Link Member</Link></li>
                        <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
                        <li><Link href="#" className="hover:underline">Send Us Feedback</Link></li>
                        <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
                    </ul>
                </div>

                {/* Column 2: Get Help */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
                    <ul className="space-y-2 text-sm">
                        {/* Help and Support Links */}
                        <li><Link href="#" className="hover:underline">Order Status</Link></li>
                        <li><Link href="#" className="hover:underline">Delivery</Link></li>
                        <li><Link href="#" className="hover:underline">Returns</Link></li>
                        <li><Link href="#" className="hover:underline">Payment Options</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
                    </ul>
                </div>

                {/* Column 3: About Nike */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
                    <ul className="space-y-2 text-sm">
                        {/* About Links */}
                        <li><Link href="#" className="hover:underline">News</Link></li>
                        <li><Link href="#" className="hover:underline">Careers</Link></li>
                        <li><Link href="#" className="hover:underline">Investors</Link></li>
                        <li><Link href="#" className="hover:underline">Sustainability</Link></li>
                    </ul>
                </div>

                {/* Column 4: Social Media Icons */}
                <div className="flex justify-start sm:justify-center lg:justify-end items-start gap-4">
                    {/* Social Media Links */}
                    <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400 space-y-4 md:space-y-0">
                {/* Country and Copyright */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <div className="flex items-center gap-2">
                        <IoLocationOutline className="text-lg" /> {/* Location Icon */}
                        <p>India</p>
                    </div>
                    <p>© 2023 Nike, Inc. All Rights Reserved</p>
                </div>

                {/* Additional Links */}
                <div className="flex flex-wrap justify-start md:justify-end gap-4">
                    <Link href="#" className="hover:underline">Guides</Link>
                    <Link href="#" className="hover:underline">Terms of Sale</Link>
                    <Link href="#" className="hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
