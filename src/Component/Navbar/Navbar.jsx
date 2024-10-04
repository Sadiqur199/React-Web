import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
          <div>
            <h1 className="text-white text-xl ">React Web page</h1>
            {/* Desktop Menu */}
          </div>
            <ul className=" hidden  space-x-6 md:flex  text-white">
              <li>
                <a href="#home" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-yellow-400">
                  Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
        {/* mobile view */}
        <button className="md:hidden block text-white" onClick={toggleBar}>
          {isOpen ? "x" : "="}
        </button>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-gray-700 text-white`}
      >
        <ul className="space-y-4 p-4">
          <li>
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-yellow-400">
              Service
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
