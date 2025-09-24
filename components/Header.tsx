
import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-[#2b2d42] font-medium transition-colors duration-300 hover:text-[#4361ee] px-3 py-2 rounded-md">
            {children}
        </a>
    </li>
);

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-3xl font-bold text-[#4361ee]">
                            <i className="bi bi-box-seam-fill text-[#f72585]"></i> AR Shop
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <ul className="ml-10 flex items-baseline space-x-4">
                            <NavLink href="#home">Home</NavLink>
                            <NavLink href="#features">Features</NavLink>
                            <NavLink href="#products">Products</NavLink>
                            <NavLink href="#how-it-works">How It Works</NavLink>
                            <NavLink href="#ar-viewer">AR Viewer</NavLink>
                        </ul>
                    </div>
                    <div className="hidden md:block ml-4">
                         <a href="#ar-viewer" className="bg-[#4361ee] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#3f37c9] hover:-translate-y-0.5 hover:shadow-lg">
                            Try AR Now
                         </a>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#4361ee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                       <NavLink href="#home">Home</NavLink>
                        <NavLink href="#features">Features</NavLink>
                        <NavLink href="#products">Products</NavLink>
                        <NavLink href="#how-it-works">How It Works</NavLink>
                        <NavLink href="#ar-viewer">AR Viewer</NavLink>
                    </ul>
                     <div className="p-4">
                         <a href="#ar-viewer" className="w-full block text-center bg-[#4361ee] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#3f37c9] hover:-translate-y-0.5 hover:shadow-lg">
                            Try AR Now
                         </a>
                    </div>
                </div>
            )}
        </header>
    );
};
