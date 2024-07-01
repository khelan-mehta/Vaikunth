"use client";
import React, { useState } from "react";
import { Icons } from "./Icons";
import { User2, Menu, X, Home, Info, MenuIcon, Settings } from "lucide-react"; // Assuming you have these icons
import { delay, motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex flex-col w-screen p-8 overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex sm:ml-0 ml-[-30px]">
            <Icons.Logo />
          </div>
          <div className="hidden md:flex gap-12 uppercase items-center font-semibold text-[18px]">
            <div className="self-center">Home</div>
            <div className="self-center">About</div>
            <div className="self-center">Menu</div>
            <button className="p-3 bg-[#f78764] uppercase rounded-[50%] text-white">
              <User2 />
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="z-100 mt-4 sm:mt-0">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-12 absolute top-24 left-0 bg-[#F9F5E9] text-[40px] font-semibold w-screen z-[1] p-12 mt-2 h-screen text-pretty italic"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center gap-12 absolute  left-0 bg-[#F9F5E9] text-[40px] font-semibold w-screen z-[1] p-12  h-screen text-pretty italic"
            >
              <motion.div
                variants={staggerItem}
                className="self-center flex justify-between w-full items-center gap-2"
              >
                <Home size={40} /> Home
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="self-center justify-between w-full flex items-center gap-2"
              >
                <Info size={40} /> About
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="self-center justify-between w-full flex items-center gap-2"
              >
                <MenuIcon size={40} /> Menu
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="flex self-center justify-between gap-2 w-full"
              >
                <button className="bg-[#f78764] self-center flex items-center justify-center uppercase rounded-[50%] text-white w-20 h-20 ml-[-15px]">
                  <Settings size={40} className="self-center justify-center" />
                </button>
                Settings
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        <hr className="w-[70%] self-center mt-5" />
      </div>
    </div>
  );
};

export default Navbar;
