import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      {/* Upper Header */}
      <div className="bg-gray-100 flex justify-between items-center px-4 sm:px-6 lg:px-16 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.05 4.14V4.08C13.05 3.8 13.14 3.55..."
              fill="#111111"
            />
          </svg>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden lg:flex gap-x-6 text-sm">
          <Link href="/store" className="hover:underline text-black">
            Find a Store
          </Link>
          <Link href="/help" className="hover:underline text-black">
            Help
          </Link>
          <Link href="/join" className="hover:underline text-black">
            Join Us
          </Link>
          <Link href="/signUp" className="hover:underline text-black">
            Sign In
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="h-[500px] rounded-2xl mx-auto mt-8">
            <SheetHeader>
              <SheetDescription>
                <ul className="text-black text-lg py-7 space-y-4">
                  <Link href="/store">
                    <li className="hover:underline">Find a Store</li>
                  </Link>
                  <Link href="/help">
                    <li className="hover:underline">Help</li>
                  </Link>
                  <Link href="/join">
                    <li className="hover:underline">Join Us</li>
                  </Link>
                  <Link href="/signUp">
                    <li className="hover:underline">Sign In</li>
                  </Link>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-16 py-3">
        {/* Logo */}
        <div>
          <Link href="/">
            <svg
              width="79"
              height="69"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.9262 28.7725L25.8854..."
                fill="#111111"
              />
            </svg>
          </Link>
        </div>

        {/* Navigation Tabs for Larger Screens */}
        <nav className="flex space-x-6 items-center text-sm font-[Helvetica Neue] text-black ">
        <a href="#" className="hover:underline ">
          New & Featured
        </a>
        <a href="#" className="">
          Men
        </a>
        <a href="#" className="">
          Women
        </a>
        <a href="#" className="">
          Kids
        </a>
        <a href="#" className="">
          Sale
        </a>
        <a href="#" className="">
          SNKRS
        </a>
      </nav>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 pl-2 px-4 py-2 w-[180px] h-[40px] rounded-full shadow-sm">
      <FiSearch className="text-gray-400 mr-2 text-lg" />
      <span className="text-gray-400 text-base font-sans flex-grow">Search</span>
      </div >
      <div className="flex justify-end items-end text-black space-x- ">
        
      <FaRegHeart  />
      <RiShoppingBagLine  />
    
      </div>
      </div>
    </header>
  );
};

export default Header;
