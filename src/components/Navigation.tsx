import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            {/* Logo using uploaded image */}
            <div className="w-10 h-10 relative">
              <img alt="herMind space logo" className="w-10 h-10 rounded-full object-cover" src="/lovable-uploads/c74384cc-9194-4214-b091-f79971029284.png" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                herMind space
              </h1>
              <p className="text-xs text-gray-500 -mt-1">the girls' school of mind</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors ${isActive('/') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}>
              Home
            </Link>
            <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}>
              Why It Matters
            </Link>
            <Link to="/features" className={`transition-colors ${isActive('/features') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}>
              Features
            </Link>
            <Link to="/resources" className={`transition-colors ${isActive('/resources') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}>
              Resources
            </Link>
            <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 transition-colors ${isActive('/') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 transition-colors ${isActive('/about') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Why It Matters
              </Link>
              <Link 
                to="/features" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 transition-colors ${isActive('/features') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Features
              </Link>
              <Link 
                to="/resources" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 transition-colors ${isActive('/resources') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-2 transition-colors ${isActive('/contact') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Contact Us
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;