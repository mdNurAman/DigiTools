import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between  text-white pt-16">
        <div className="one">
          <h1 className="text-4xl font-semibold">DigiTools</h1>
          <p className="text-gray-300 max-w-[400px] my-5">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful
            tools.
          </p>
        </div>
        <div className="two text-md text-gray-200">
          <h1 className="font-semibold text-2xl text-white">Product</h1>
          <p>Features</p>
          <p>Pricing</p>
          <p>Templates</p>
          <p>Integrations</p>
        </div>
        <div className="three text-md text-gray-200">
          <h1 className="font-semibold text-2xl text-white">Company</h1>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
        <div className="four three text-md text-gray-200">
          <h1 className="font-semibold text-2xl text-white">Resources</h1>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Community</p>
          <p>Contact</p>
        </div>
        <div className="five ">
          <h1 className="font-semibold text-2xl text-white">Social Links</h1>
          <div className="flex items-center justify-between gap-3 mt-2">
            <div className="rounded-full bg-gray-600 w-fit p-4">
              <FaFacebookF />
            </div>
            <div className="rounded-full bg-gray-600 w-fit p-4">
              <FaXTwitter />
            </div>
            <div className="rounded-full bg-gray-600 w-fit p-4">
              <CiInstagram />
            </div>
            <div className="rounded-full bg-gray-600 w-fit p-4">
              <CiLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white container mx-auto w-full  border-t border-gray-500 py-8"></div>
      <div className="flex justify-between items-center text-white container mx-auto pb-20">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className='flex justify-between items-center gap-10'>
          <p>Privacy Policy</p>
          <p>Terms of Service </p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;