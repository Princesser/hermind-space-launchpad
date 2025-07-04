
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            herMind space
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Changing the mental health narrative in Africa, one girl at a time. 
            Breaking stigma, building resilience, creating hope.
          </p>
          
          <div className="mb-8">
            <p className="text-purple-300 font-medium mb-2">Founded by Princess Mbamalu</p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              An 18-year-old product designer and social entrepreneur dedicated to fighting 
              the mental health crisis affecting millions of girls across Africa.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Our Mission</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Mental Health Resources</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">
              © 2024 herMind space. All rights reserved. Made with 💜 for African teen girls' mental wellness.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Over 70 million women in Africa are experiencing a mental health crisis. Let's change that together.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
