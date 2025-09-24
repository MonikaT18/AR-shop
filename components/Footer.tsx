
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-gray-300 transition-colors duration-300 hover:text-[#f72585]">
            {children}
        </a>
    </li>
);

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2b2d42] text-white pt-20 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-3xl font-bold mb-4">
                            <i className="bi bi-box-seam-fill text-[#f72585]"></i> AR Shop
                        </h3>
                        <p className="text-gray-400">Revolutionizing the shopping experience with augmented reality technology.</p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-2xl transition-colors duration-300 hover:text-[#f72585]"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-2xl transition-colors duration-300 hover:text-[#f72585]"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-2xl transition-colors duration-300 hover:text-[#f72585]"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-2xl transition-colors duration-300 hover:text-[#f72585]"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <FooterLink href="#home">Home</FooterLink>
                            <FooterLink href="#features">Features</FooterLink>
                            <FooterLink href="#products">Products</FooterLink>
                            <FooterLink href="#how-it-works">How It Works</FooterLink>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-3">
                            <FooterLink href="#">FAQ</FooterLink>
                            <FooterLink href="#">Contact Us</FooterLink>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Terms of Service</FooterLink>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to receive updates on new products and AR features.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#4361ee]" />
                            <button className="bg-[#4361ee] px-4 py-2 rounded-r-md font-semibold transition-colors duration-300 hover:bg-[#3f37c9]">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-8 border-t border-gray-700">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} AR Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
