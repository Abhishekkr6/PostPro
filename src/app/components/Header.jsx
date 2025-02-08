"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Github, Menu } from "lucide-react";

export function Navbar() {
  const [theme, setTheme] = React.useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav className="border-b bg-background">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            PostPro
          </Link>
          <div className="hidden md:flex space-x-2">
            <button className="bg-transparent px-4 py-2">
              <Link href="/features">Features</Link>
            </button>
            <button className="bg-transparent px-4 py-2">
              <Link href="/docs">Docs</Link>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex space-x-2">
            <button className="bg-transparent px-4 py-2">
              <Link href="/login">Login</Link>
            </button>
            <button className="bg-white text-black px-4 py-2 rounded">
              <Link href="/register">Register</Link>
            </button>
          </div>
          <button
            className="bg-transparent px-4 py-2"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <a
            href="https://github.com/Abhishekkr6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent px-4 py-2"
          >
            <Github className="h-5 w-5" />
          </a>
          <button className="md:hidden bg-transparent px-4 py-2">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
