import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import Footer from "./Footer";
import Routers from "./Router";
import { FiChevronUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappNumber = "+918794795255";
  const customMessage = "Hello, I have a question about your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}/?text=${encodeURIComponent(customMessage)}`;

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 left-6 p-3 rounded-full bg-green-900 text-white shadow-lg transition-all duration-300 hover:bg-green-700 focus:outline-none"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      <Navbar />

      <div className="pt-10 bg-dark-900 text-gray-200 min-h-screen">
        <Routers />
      </div>

      <Footer />

      {showScrollButton && (
        <button
          className="fixed bottom-6 right-6 p-3 rounded-full bg-green-900 text-white shadow-lg transition-all duration-300 hover:bg-green-700 focus:outline-none"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <FiChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Layout;