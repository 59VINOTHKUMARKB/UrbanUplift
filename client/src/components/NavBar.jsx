import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const signInItems = [
    {
      label: "Citizens",
      icon: "pi pi-user",
      url: "/dashboard/citizen",
    },
    {
      label: "NGO's",
      icon: "pi pi-building",
      url: "/dashboard/ngo",
    },
    {
      label: "Officials",
      icon: "pi pi-shield",
      url: "/dashboard/officials",
    },
    {
      label: "Organizations",
      icon: "pi pi-book",
      url: "/dashboard/college",
    },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-green-600">
              UrbanUplift
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
            <div className="relative">
              <Button
                label="Sign In"
                icon="pi pi-user"
                onClick={(e) => menuRef.current.toggle(e)}
                className="p-button-text text-gray-600 hover:text-green-600 transition-colors"
              />
              <Menu model={signInItems} popup ref={menuRef} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              About
            </Link>
            <Link
              to="/how-it-works"
              className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              How It Works
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button
                label="Sign In"
                icon="pi pi-user"
                onClick={(e) => menuRef.current.toggle(e)}
                className="p-button-text text-gray-600 hover:text-green-600 w-full justify-start"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
