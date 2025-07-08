import React from 'react';
import {
  FaDiscord,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-black w-full py-10 px-6 text-white ">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 items-start">
        <img src="footerlogo.svg" alt="Footer Logo" className="h-8" />

        <ul className="text-sm sm:text-base flex flex-wrap gap-x-6 gap-y-4 overflow-x-auto">
          <li>Templates</li>
          <li>Themes</li>
          <li>Showcase</li>
          <li>Blog</li>
          <li>Guides</li>
          <li>Docs</li>
          <li>Builder</li>
          <li>Pricing</li>
          <li>Notion Sites vs Super</li>
          <li>Icons</li>
          <li>Illustrations</li>
          <li>Create</li>
          <li>Roadmap</li>
          <li>Community</li>
          <li>Affiliates — 30% commission</li>
          <li>Consulting</li>
          <li>Report</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>

        <div className="flex justify-center gap-6 text-xl mt-4">
          <a href="https://discord.com/" >
            <FaDiscord className="hover:text-blue-400 cursor-pointer h-6 w-6" />
          </a>
          <a href="https://x.com/" >
            <FaXTwitter className="hover:text-gray-300 cursor-pointer h-6 w-6" />
          </a>
          <a href="https://instagram.com/" >
            <FaInstagram className="hover:text-pink-400 cursor-pointer h-6 w-6" />
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500 cursor-pointer h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
