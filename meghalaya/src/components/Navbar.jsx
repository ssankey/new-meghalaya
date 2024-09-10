import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/images/mountain forest.svg";
// import ContactBar from '../Contact/contactBar';

export const navLinks = {
  locations: [
    {
      main_heading: "Shillong",
      main_link: "/Shillong",
    },
    {
      main_heading: "Sohra",
      main_link: "/Sohra",
    },

    {
      main_heading: "Jaintia Hills",
      main_link: "/Jaintia Hills",
    },
    {
      main_heading: "South West Khasi Hills",
      main_link: "/South West Khasi Hills",
    },
    {
      main_heading: "Garo Hills",
      main_link: "/Garo Hills",
    },
    {
      main_heading: "Assam",
      main_link: "/Assam",
    },
  ],

  Packages: [
    {
      package_name: "Family Trip",
      package_link: "/tour-package/FAMILY TRIP",
    },
    {
      package_name: "Couple Trip",
      package_link: "/tour-package/COUPLE TRIP",
    },
    {
      package_name: "Friends Trip",
      package_link: "/tour-package/FRIENDS TRIP",
    },
    {
      package_name: "Corporate Trip",
      package_link: "/tour-package/BUSINESS TRIP",
    },
  ],
};
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isThemesDropdownOpen, setIsThemesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
    setIsThemesDropdownOpen(false);
  };
  const toggleThemesDropdown = () => {
    setIsThemesDropdownOpen(!isThemesDropdownOpen);
    setIsLocationDropdownOpen(false);
  };
  const closeNavbar = () => {
    setIsMobileMenuOpen(false);
    setIsLocationDropdownOpen(false);
    setIsThemesDropdownOpen(false);
  };

  return (
    <>
      {/* <ContactBar /> */}
      <nav className="bg-green-900 z-50 w-full text-white fixed top-0 shadow-lg">
        <div className="flex items-center justify-between px-4 py-1 sm:px-8">
          {/* Logo */}
          <Link to="/" onClick={closeNavbar}>
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                className="w-10 h-10 sm:w-16 sm:h-16 rounded-full"
                alt="Logo"
              />
              <div className="text-sm sm:text-lg">
                <p>Meghalaya - Into The Mountains</p>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-300" onClick={closeNavbar}>
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleLocationDropdown}
                className="hover:text-gray-300 flex items-center"
              >
                Locations <FiChevronDown className="ml-2" />
              </button>
              {isLocationDropdownOpen && (
                <div className="absolute bg-green-600 z-10 py-3 w-48 text-white rounded shadow-md">
                  {navLinks.locations.map((location, index) => (
                    <Link
                      key={index}
                      to={location.main_link}
                      className="block px-4 py-2 hover:bg-green-700"
                      onClick={closeNavbar}
                    >
                      {location.main_heading}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleThemesDropdown}
                className="hover:text-gray-300 flex items-center"
              >
                Themes <FiChevronDown className="ml-2" />
              </button>
              {isThemesDropdownOpen && (
                <div className="absolute bg-green-600 z-10 py-3 w-48 text-white rounded shadow-md">
                  {navLinks.Packages.map((pkg, index) => (
                    <Link
                      key={index}
                      to={pkg.package_link}
                      className="block px-4 py-2 hover:bg-green-700"
                      onClick={closeNavbar}
                    >
                      {pkg.package_name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/services"
              className="hover:text-gray-300"
              onClick={closeNavbar}
            >
              Services
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-gray-300"
              onClick={closeNavbar}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="md:hidden text-2xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 py-3 text-lg bg-green-800">
            <Link to="/" className="block py-2" onClick={closeNavbar}>
              Home
            </Link>
            <button
              onClick={toggleLocationDropdown}
              className="w-full flex items-center justify-between py-2"
            >
              Locations <FiChevronDown />
            </button>
            {isLocationDropdownOpen && (
              <div className="bg-green-700 px-4 py-2">
                {navLinks.locations.map((location, index) => (
                  <Link
                    key={index}
                    to={location.main_link}
                    className="block py-1"
                    onClick={closeNavbar}
                  >
                    {location.main_heading}
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={toggleThemesDropdown}
              className="w-full flex items-center justify-between py-2"
            >
              Themes <FiChevronDown />
            </button>
            {isThemesDropdownOpen && (
              <div className="bg-green-700 px-4 py-2">
                {navLinks.Packages.map((pkg, index) => (
                  <Link
                    key={index}
                    to={pkg.package_link}
                    className="block py-1"
                    onClick={closeNavbar}
                  >
                    {pkg.package_name}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/services" className="block py-2" onClick={closeNavbar}>
              Services
            </Link>
            <Link to="/contact-us" className="block py-2" onClick={closeNavbar}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
