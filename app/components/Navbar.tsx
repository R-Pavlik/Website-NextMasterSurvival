"use client";  // Přidáno na začátek souboru

import React, { useState } from "react";
import { FaHome, FaClipboardList, FaBars, FaTimes } from "react-icons/fa";
import { HiNewspaper } from "react-icons/hi2";
import { BsFillPeopleFill } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-[90px] bg-neutral-800 flex justify-between items-center text-white px-4">
      {/* Obrázek vlevo */}
      <img src="./banner.png" alt="Banner" className="w-[50%] md:w-[10%] md:mr-auto md:ml-10" />

      {/* Hamburger Icon pro malé obrazovky */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Menu, které se zobrazí vpravo na větších obrazovkách */}
      <ul className={`sm:flex sm:flex-row sm:space-x-4 ${isOpen ? 'flex' : 'hidden'} flex-col absolute sm:static top-[90px] left-0 w-full sm:w-auto bg-neutral-800 sm:bg-transparent z-10 md:flex md:ml-auto md:mr-10`}>
        <li className="flex flex-row items-center p-4 sm:p-0">
          <a href="/">
            <button className="flex items-center space-x-2 font-bold">
              <FaHome />
              <span>Domov</span>
            </button>
          </a>
        </li>
        <li className="flex flex-row items-center p-4 sm:p-0">
          <a href="/pravidla">
            <button className="flex items-center space-x-2 font-bold">
              <HiNewspaper />
              <span>Pravidla</span>
            </button>
          </a>
        </li>
        <li className="flex flex-row items-center p-4 sm:p-0">
          <a href="/adminteam">
            <button className="flex items-center space-x-2 font-bold">
              <BsFillPeopleFill />
              <span>AdminTeam</span>
            </button>
          </a>
        </li>
        <li className="flex flex-row items-center p-4 sm:p-0">
          <a href="/faq">
            <button className="flex items-center space-x-2 font-bold">
              <FaClipboardList />
              <span>FAQ</span>
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}
