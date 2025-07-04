
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            {/* Logo using uploaded image */}
            <div className="w-10 h-10 relative">
              <img 
                src="/lovable-uploads/932512c3-e3d8-4f48-be64-4006df679881.png" 
                alt="herMind space logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
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
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">About Us</button>
            <button onClick={() => scrollToSection('why-it-matters')} className="text-gray-700 hover:text-purple-600 transition-colors">Why It Matters</button>
            <button onClick={() => scrollToSection('resources')} className="text-gray-700 hover:text-purple-600 transition-colors">Resources</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">Contact Us</button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">About Us</button>
              <button onClick={() => scrollToSection('why-it-matters')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">Why It Matters</button>
              <button onClick={() => scrollToSection('resources')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">Resources</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">Contact Us</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
