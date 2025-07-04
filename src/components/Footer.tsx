
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
            Creating safe digital spaces for women's mental wellness, one mind at a time.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">
              © 2024 herMind space. All rights reserved. Made with 💜 for women's mental wellness.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
