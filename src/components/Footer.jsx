import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-10 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        <div className="md:w-1/3">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer text-logo mb-4">Netflix</h1> 
          <p className="text-lg font-bold mb-4">Questions? Call 1-800-123-4567</p>
          <div className="flex space-x-4">
            <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 mb-4">
              <p className="text-lg font-bold mb-2">Discover</p>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4">
              <p className="text-lg font-bold mb-2">Help Center</p>
              <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Media Center</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Gift Cards</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4">
              <p className="text-lg font-bold mb-2">Ways to Watch</p>
              <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Legal Notices</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4">
              <p className="text-lg font-bold mb-2">Account</p>
              <ul>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Redeem Gift Cards</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
