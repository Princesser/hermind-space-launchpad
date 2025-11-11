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
  return <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-pastel-purple/40 via-pastel-blue/40 to-pastel-pink/40 backdrop-blur-xl z-50 border-b border-white/20 shadow-lg shadow-glow-purple/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          <div className="flex items-center space-x-3">
            {/* Logo using uploaded image */}
            <div className="w-10 h-10 md:w-12 md:h-12 relative rounded-full shadow-md shadow-glow-purple/30 ring-2 ring-white/30">
              <img alt="herMind space logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" src="/lovable-uploads/c74384cc-9194-4214-b091-f79971029284.png" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                herMind space
              </h1>
              <p className="text-xs text-purple-600/70 -mt-1 font-medium">the girls' school of mind</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-all duration-300 px-3 py-2 rounded-full ${isActive('/') ? 'text-purple-600 font-semibold bg-white/40 shadow-md shadow-glow-purple/20' : 'text-purple-700/80 hover:text-purple-600 hover:bg-white/20 hover:shadow-sm hover:shadow-glow-purple/10'}`}>
              Home
            </Link>
            <Link to="/about" className={`transition-all duration-300 px-3 py-2 rounded-full ${isActive('/about') ? 'text-purple-600 font-semibold bg-white/40 shadow-md shadow-glow-purple/20' : 'text-purple-700/80 hover:text-purple-600 hover:bg-white/20 hover:shadow-sm hover:shadow-glow-purple/10'}`}>
              Why It Matters
            </Link>
            <Link to="/features" className={`transition-all duration-300 px-3 py-2 rounded-full ${isActive('/features') ? 'text-purple-600 font-semibold bg-white/40 shadow-md shadow-glow-purple/20' : 'text-purple-700/80 hover:text-purple-600 hover:bg-white/20 hover:shadow-sm hover:shadow-glow-purple/10'}`}>
              Features
            </Link>
            <Link to="/resources" className={`transition-all duration-300 px-3 py-2 rounded-full ${isActive('/resources') ? 'text-purple-600 font-semibold bg-white/40 shadow-md shadow-glow-purple/20' : 'text-purple-700/80 hover:text-purple-600 hover:bg-white/20 hover:shadow-sm hover:shadow-glow-purple/10'}`}>
              Resources
            </Link>
            <Link to="/contact" className={`transition-all duration-300 px-3 py-2 rounded-full ${isActive('/contact') ? 'text-purple-600 font-semibold bg-white/40 shadow-md shadow-glow-purple/20' : 'text-purple-700/80 hover:text-purple-600 hover:bg-white/20 hover:shadow-sm hover:shadow-glow-purple/10'}`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full hover:bg-white/30 hover:shadow-md hover:shadow-glow-pink/20 transition-all duration-300 text-purple-600" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-white/20 bg-white/20 backdrop-blur-md rounded-b-3xl animate-in slide-in-from-top-5 duration-500">
            <div className="flex flex-col space-y-2 px-2">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-3 px-4 transition-all duration-300 rounded-full ${isActive('/') ? 'text-purple-600 font-semibold bg-white/50 shadow-md shadow-glow-purple/20' : 'text-purple-700/80 hover:text-purple-600 hover:bg-white/30 hover:shadow-sm hover:shadow-glow-purple/10'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-3 px-4 transition-all duration-300 rounded-full ${isActive('/about') ? 'text-purple-600 font-semibold bg-white/50 shadow-md shadow-glow-purple/20' : 'text-purple-700/80 hover:text-purple-600 hover:bg-white/30 hover:shadow-sm hover:shadow-glow-purple/10'}`}
              >
                Why It Matters
              </Link>
              <Link 
                to="/features" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-3 px-4 transition-all duration-300 rounded-full ${isActive('/features') ? 'text-purple-600 font-semibold bg-white/50 shadow-md shadow-glow-purple/20' : 'text-purple-700/80 hover:text-purple-600 hover:bg-white/30 hover:shadow-sm hover:shadow-glow-purple/10'}`}
              >
                Features
              </Link>
              <Link 
                to="/resources" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-3 px-4 transition-all duration-300 rounded-full ${isActive('/resources') ? 'text-purple-600 font-semibold bg-white/50 shadow-md shadow-glow-purple/20' : 'text-purple-700/80 hover:text-purple-600 hover:bg-white/30 hover:shadow-sm hover:shadow-glow-purple/10'}`}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-left py-3 px-4 transition-all duration-300 rounded-full ${isActive('/contact') ? 'text-purple-600 font-semibold bg-white/50 shadow-md shadow-glow-purple/20' : 'text-purple-700/80 hover:text-purple-600 hover:bg-white/30 hover:shadow-sm hover:shadow-glow-purple/10'}`}
              >
                Contact Us
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;