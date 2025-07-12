import React from 'react';
import { Linkedin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Section - Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">herMind space</h3>
            <p className="text-purple-100 mb-4 leading-relaxed">
              Changing the mental health narrative in Africa, one girl at a time.
              Breaking stigma, building resilience, creating hope.
            </p>
            <p className="text-purple-200 text-sm">
              Over 70 million women in Africa are experiencing a mental health crisis. Let's change that together.
            </p>
          </div>
          
          {/* Middle Section - Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-purple-100">Quick Links</h4>
            <div className="space-y-3">
              <a href="#" className="block text-purple-200 hover:text-white transition-colors">About Our Mission</a>
              <a href="#" className="block text-purple-200 hover:text-white transition-colors">Mental Health Resources</a>
              <a href="#" className="block text-purple-200 hover:text-white transition-colors">Support Community</a>
              <a href="#" className="block text-purple-200 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          
          {/* Right Section - Founded By */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-purple-100">Founded By</h4>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-medium text-white">Princess Mbamalu</span>
                <a href="https://www.linkedin.com/in/princess-mbamalu%E2%9A%A1%EF%B8%8F-29134821a/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-purple-200 text-sm">Product designer and social technology entrepreneur, dedicated to fighting the mental health crisis in Africa.</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-purple-800 mt-12 pt-8 text-center">
          <p className="text-purple-300 text-sm">
            © 2025 herMind space. All rights reserved. Made with 💜 for African teen girls
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;