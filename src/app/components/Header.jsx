"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo & App Name */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="App Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">API Tester</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        {session ? (
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="bg-blue-500 px-4 py-2 rounded">
              Dashboard
            </Link>
            <button
              onClick={handleSignOut}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link href="/register" className="bg-green-500 px-4 py-2 rounded">
              Register
            </Link>
            <Link href="/login" className="bg-blue-500 px-4 py-2 rounded">
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
