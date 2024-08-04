import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-yellow py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-700">© 2024 Company. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-700 hover:text-gray-900 mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 mx-2">Terms of Service</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
