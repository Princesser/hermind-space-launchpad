import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MoreVertical } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Detect if on single-page layout
  const isSinglePage = location.pathname === '/';

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Navigation items for single-page scroll
  const singlePageNavItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Why It Matters', href: '#why-it-matters' },
    { label: 'Features', href: '#features' },
    { label: 'Resources', href: '#resources' },
    { label: 'Community', href: '#community' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  // Navigation items for multi-page routing
  const multiPageNavItems = [
    { label: 'Home', path: '/home' },
    { label: 'Why It Matters', path: '/about' },
    { label: 'Features', path: '/features' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
      setIsMenuOpen(false);
    }
  };
  return <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            {/* Logo - links to single-page layout */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <img alt="HerMind Space logo" className="w-10 h-10 rounded-full object-cover" src="/lovable-uploads/c74384cc-9194-4214-b091-f79971029284.png" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  HerMind Space
                </h1>
                <p className="text-xs text-gray-500 -mt-1">the girls' school of mind</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isSinglePage ? (
              // Single-page: smooth scroll navigation
              <>
                {singlePageNavItems.slice(0, 5).map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </>
            ) : (
              // Multi-page: route navigation
              <>
                {multiPageNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`transition-colors ${isActive(item.path) ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            )}
          </div>

          {/* Mobile Menu Button - All devices */}
          {isMobile ? (
            // Mobile: Three-dot menu
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <MoreVertical className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle className="text-left text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-3 mt-6">
                  {isSinglePage ? (
                    // Single-page: scroll links
                    singlePageNavItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className="text-left py-3 px-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors font-medium"
                      >
                        {item.label}
                      </button>
                    ))
                  ) : (
                    // Multi-page: route links
                    multiPageNavItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-left py-3 px-2 rounded-md transition-colors font-medium ${
                          isActive(item.path) ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            // Tablet: Hamburger menu
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>

        {/* Tablet Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {isSinglePage ? (
                // Single-page: scroll navigation
                singlePageNavItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))
              ) : (
                // Multi-page: route navigation
                multiPageNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-left py-2 transition-colors ${
                      isActive(item.path) ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </nav>;
};
export default Navigation;