import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Logo from '../images/Logo.webp';
// import { MenuItems } from "../data/NavData";




function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};

   
  return(
    <header className="min-h-full mb-5">
        
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img src={Logo} alt="Syllac" className="w-10"/>
                            </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <ul className="container flex text-white space-x-5">
                                    <li>
                                        <Link to="/">Accueil</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">&Agrave; propos</Link>
                                    </li>
                                    <li>
                                        <Link to="/Contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button type="button" onClick={toggleMenu} className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
            
                </div>
            </div>
        </nav>
        
        
    </header>

    )
}

export default Header;