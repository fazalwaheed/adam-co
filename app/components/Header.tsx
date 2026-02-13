// app/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" className="flex items-center space-x-2">
          <div className="w-15 h-15 bg-gradient from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
            <img
              src="/logo.PNG"
              alt="Logo"
              className="w-15 h-15 object-contain filter drop-shadow-sm"
            />
          </div>
          <span className="text-xl font-bold">
            ADAM & COMPANY
            <p className="text-sm text-gray-600">
              <span className="italic">Advocates & Legal Consultants</span>
            </p>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="font-medium hover:text-amber-500">
            Home
          </Link>
          <Link href="#about" className="font-medium hover:text-amber-500">
            About
          </Link>
          <Link
            href="#practice-areas"
            className="font-medium hover:text-amber-500"
          >
            Practice Areas
          </Link>
          <Link href="#attorneys" className="font-medium hover:text-amber-500">
            Attorneys
          </Link>
          {/* <Link href="#blog" className="font-medium hover:text-amber-500">Blog</Link> */}
          <Link href="#contact" className="font-medium hover:text-amber-500">
            Contact
          </Link>
          <Link href="#contact" className="btn-primary">
            Free Consultation
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 space-y-4">
          <Link
            href="#home"
            className="block font-medium hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block font-medium hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#practice-areas"
            className="block font-medium hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Practice Areas
          </Link>
          <Link
            href="#attorneys"
            className="block font-medium hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Attorneys
          </Link>
          <Link
            href="#blog"
            className="block font-medium hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="block font-medium hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="btn-primary w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
