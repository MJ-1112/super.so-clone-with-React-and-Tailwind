import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarOpaque, setNavbarOpaque] = useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
      setNavbarOpaque(false);
      } else {
      setNavbarOpaque(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full fixed top-0 left-0 z-50 bg-white shadow-md ${navbarOpaque ? "opacity-100" : "opacity-25"}`}>
      <nav className="h-20 px-6 flex items-center justify-between">
        
        <Link to="/">
          <img
            src="Logo.svg"
            alt="Logo"
            className="h-8 sm:h-7 w-auto max-w-[160px] cursor-pointer"
          />
        </Link>

       
        <ul className="hidden md:flex items-center gap-6 font-inter">
          <li><Link to="/templates" className="text-gray-600 text-lg">Templates</Link></li>
          <li><Link to="/showcase" className="text-gray-600 text-lg">Showcase</Link></li>
          <li><Link to="/features" className="text-gray-600 text-lg">Features</Link></li>
          <li><Link to="/pricing" className="text-gray-600 text-lg">Pricing</Link></li>
          <li><Link to="/guides" className="text-gray-600 text-lg">Guides</Link></li>
          <li><Link to="/blogs" className="text-gray-600 text-lg">Blog</Link></li>
          <li>
            <button className="rounded-xl shadow px-4 py-2 font-medium hover:bg-gray-100">
              Sign in
            </button>
          </li>
          <li>
            <button className="bg-yellow-500 px-6 py-2 rounded-xl font-medium hover:opacity-80">
              Get started free
            </button>
          </li>
        </ul>

       
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-white shadow">
          <Link to="/templates" className="block text-gray-700">Templates</Link>
          <Link to="/showcase" className="block text-gray-700">Showcase</Link>
          <Link to="/features" className="block text-gray-700">Features</Link>
          <Link to="/pricing" className="block text-gray-700">Pricing</Link>
          <Link to="/guides" className="block text-gray-700">Guides</Link>
          <Link to="/blogs" className="block text-gray-700">Blog</Link>
          <button className="block w-full text-left rounded-xl shadow px-4 py-2 font-medium hover:bg-gray-100">
            Sign in
          </button>
          <button className="block w-full bg-yellow-500 py-3 rounded-xl font-medium hover:opacity-80">
            Get started free
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
