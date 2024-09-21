import React from 'react';
import './css/Footer.css'; // Import custom styles

const Footer = () => {
  return (
    <>
    <footer className="bg-custom-blue text-white py-10 font-glass-antiqua">
      <div className="container mx-auto flex justify-between items-start">
        {/* Left Section: Logo */}
        <div className="w-1/4">
          <h1 className="text-lg font-bold">LOGO</h1>
        </div>

        {/* Center Section: Quick Links */}
        <div className="w-1/4">
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About IBScience
              </a>
            </li>
            <li>
              <a href="/career" className="hover:underline">
                Career
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/feedback" className="hover:underline">
                Send Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Socials */}
        <div className="w-1/4">
          <h2 className="font-semibold text-lg mb-4">Socials</h2>
          <div className="flex space-x-4 mb-4">
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-300">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-2">Contact Us</h3>
            <p><a href="tel:+1234567890">+1234567890</a></p>
            <p><a href="tel:+0987654321">+0987654321</a></p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-custom-dark py-4 text-center mt-10 -mb-16">
        <p className="mb-0">2022 - IB Science. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
