'use client';

import { useState } from 'react';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-navy-900/80 backdrop-blur-md border-b border-navy-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Link */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white hover:text-primary-400 transition-colors">
              Trinity Launcher
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
              Inicio
            </Link>
            <Link href="/wiki" className="text-gray-300 hover:text-primary-400 transition-colors">
              Wiki
            </Link>
            <Link href="/contributors" className="text-gray-300 hover:text-primary-400 transition-colors">
              Colaboradores
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary-400"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-left text-gray-300 hover:text-primary-400 py-2" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
              <Link href="/wiki" className="text-left text-gray-300 hover:text-primary-400 py-2" onClick={() => setIsMenuOpen(false)}>
                Wiki
              </Link>
              <Link href="/contributors" className="text-left text-gray-300 hover:text-primary-400 py-2" onClick={() => setIsMenuOpen(false)}>
                Colaboradores
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}