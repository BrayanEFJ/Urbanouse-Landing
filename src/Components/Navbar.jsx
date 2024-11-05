import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Efecto para controlar el scroll del body
    useEffect(() => {
        if (isOpen) {
            // Deshabilitar el scroll cuando el menú está abierto
            document.body.style.overflow = 'hidden';
        } else {
            // Habilitar el scroll cuando el menú está cerrado
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    return (
        <header className="w-full relative">
            <nav className="flex items-center justify-center">
                <div className="w-full mx-3 max-w-[1500px]">
                    <div className="flex h-24 w-full items-center justify-between">
                        <div className="flex space-x-1">
                            <img src={Logo} alt="Urbanouse Logo" className="h-10 w-10" />
                            <strong className="text-2xl font-bold">Urbanouse</strong>
                        </div>
                        
                        {/* Desktop Menu */}
                        <div className="hidden lg:flex md:space-x-10 text-black/60">
                            <a href="*" className="hover:text-black">Home</a>
                            <a href="*" className="hover:text-black">About Us</a>
                            <a href="*" className="hover:text-black">Agents</a>
                            <a href="*" className="hover:text-black">Collection</a>
                            <a href="*" className="hover:text-black">Building</a>
                            <a href="*" className="hover:text-black">Service</a>
                        </div>

                        {/* Contact Button (Desktop) */}
                        <div className="hidden lg:block">
                            <button className="w-32 p-3 text-center rounded-3xl bg-black text-white hover:bg-gray-100 transition-colors hover:text-black/60">
                                Contact Us
                            </button>
                        </div>

                        {/* Hamburger Menu Button (Mobile) */}
                        <button 
                            onClick={toggleMenu} 
                            className="lg:hidden z-40"
                        >
                            {isOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>

                        {/* Mobile Menu */}
                        <div className={`fixed inset-0 z-10 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
                                <a href="*" className="hover:text-black/60">Home</a>
                                <a href="*" className="hover:text-black/60">About Us</a>
                                <a href="*" className="hover:text-black/60">Agents</a>
                                <a href="*" className="hover:text-black/60">Collection</a>
                                <a href="*" className="hover:text-black/60">Building</a>
                                <a href="*" className="hover:text-black/60">Service</a>
                                <button className="w-32 p-3 text-center rounded-3xl bg-black text-white hover:bg-gray-100 transition-colors hover:text-black/60">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
