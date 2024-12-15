import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "/ / home", href: "home", badge: "01" },
    { name: "/ / expertise", href: "expertise", badge: "02" },
    { name: "/ / work", href: "work", badge: "03" },
    { name: "/ / experience", href: "experience", badge: "04" },
    { name: "/ / contact", href: "contact", badge: "05" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth", // Smooth scrolling
      });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav
      id="home"
      className={`fixed w-full z-20 top-0 start-0 transition-colors duration-300 ${
        isScrolled ? "bg-[#1A191D]/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2 py-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="text-3xl font-roboto font-medium whitespace-nowrap dark:text-[#66D9ED]">
            Syed Abdulaziz <span className="text-white">.</span>
            <span className="text-purple-500 font-bold">_</span>
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <div className="hidden lg:flex space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              class="text-white flex bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Portfolio
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <FiMenu className="w-5 h-5" />
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => handleScrollTo(item.href)}
                  className="text-[1rem] font-roboto py-2 px-3 rounded-md text-gray-300 hover:text-blue-500"
                >
                  {item.name}
                  <span className="absolute top-0 right-0 -mr-2 inline-flex items-center justify-center w-5 h-5 text-[12px] font-semibold text-[#ddd]">
                    {item.badge}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
