"use client"

import React, { useState } from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import 'remixicon/fonts/remixicon.css';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="bg-transparent backdrop-blur-sm shadow-sm border-b top-0 absolute w-full border-white/20"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/favicon.png"
                alt="Logo"
                width={30}
                height={30}
                className="mr-2 cursor-pointer"
              />
              <span className="text-base cuursor-pointer sm:text-lg font-bold text-white font-delius">
                PostPro
              </span>
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
            <Link
              href="/"
              className="text-white/60 cursor-pointer font-abel hover:text-white/100 text-base sm:text-lg ease-in-out duration-200"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-white/60 font-abel cursor-pointer hover:text-white/100 text-base sm:text-lg ease-in-out duration-200"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-white/60 cursor-pointer font-abel hover:text-white/100 text-base sm:text-lg ease-in-out duration-200"
            >
              About
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link href="https://github.com/Abhishekkr6/PostPro" target="_blank">
              <i className="ri-github-line text-xl sm:text-2xl cursor-pointer text-white"></i>
            </Link>
            <SignedOut>
              <SignInButton>
                <button className="text-black font-medium cursor-pointer font-outfit bg-white px-3 py-2 rounded-md text-xs sm:text-sm ease-in-out duration-200 hover:bg-gray-200">
                  Sign In <i className="ri-user-line"></i>
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <div className="sm:hidden">
              <button onClick={toggleMobileMenu}>
                <i className="ri-menu-line text-2xl text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-dark backdrop-blur-lg shadow-md border-t border-white/20">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/60 font-abel hover:text-white/100 text-base ease-in-out duration-200"
            >
              Home
            </Link>
            <Link
              href="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/60 font-abel hover:text-white/100 text-base ease-in-out duration-200"
            >
              Features
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/60 font-abel hover:text-white/100 text-base ease-in-out duration-200"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;