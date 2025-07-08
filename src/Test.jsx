import React from 'react';

export default function PricingPage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      <header className="w-full flex justify-between items-center p-4 shadow">
        <div className="text-lg font-bold">super</div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Templates</a>
          <a href="#" className="hover:underline">Showcase</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Login</a>
          <button className="bg-yellow-400 text-black px-4 py-1 rounded">Get started free</button>
        </nav>
      </header>

      

      <footer className="bg-black text-white text-sm px-4 md:px-20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>© super</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
