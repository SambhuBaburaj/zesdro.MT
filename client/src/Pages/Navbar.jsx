import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const naivigate=useNavigate()
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
const Navigate=useNavigate()
  return (
    <>
        <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-18"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
              alt="Nike"
            />
          </div>
          <div className="flex items-center">
            {!isOpen && (
              <div className="flex justify-end">
                <div className="md:hidden  ">
                  <SearchBar />
                </div>
              </div>
            )}

            <div className="hidden md:block ">
              <div className="ml-28 flex items-center space-x-4">
                <a onClick={()=>
                {
naivigate('/')
                }}
                  href="#"
                  className="text-black hover:bg-gray-200 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a onClick={()=>
                {
                  naivigate('/product')
                }}
                  href="#"
                  className="text-black hover:bg-gray-200 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-black hover:bg-gray-200 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="*"
                  className="text-black hover:bg-gray-200 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              />
              <button className="ml-2 px-3 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                Search
              </button>
              <FontAwesomeIcon icon={faCartShopping} className="p-2" onClick={()=>
              {
                Navigate('/cart')
              }} />
              <FontAwesomeIcon icon={faHeart} className="p-2" />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <>
          <div className="md:hidden">
            <div></div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
              onClick={()=>
                {
                  naivigate('/')
                }}
                href="*"
                className="text-black hover:bg-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a 
              onClick={()=>
                {
                  naivigate('/product')
                }}
                href="#"
                className="text-black hover:bg-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Products
              </a>
              <a
                href="*"
                className="text-black hover:bg-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="*"
                className="text-black hover:bg-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </>
      )}

    </nav>
    <Outlet/>
    </>

  );
};

export default Navbar;
