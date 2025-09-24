
import React from 'react';

interface HeroProps {
    onStartExperience: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartExperience }) => {
    return (
        <section id="home" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-20 md:py-32 rounded-b-3xl">
            <div className="container mx-auto text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-down">
                    Revolutionize Your Shopping
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-in-up">
                    Visualize products in your space before you buy. Experience the future of shopping with AR Shop.
                </p>
                <button 
                    onClick={onStartExperience}
                    className="bg-[#f72585] text-white font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300 hover:bg-[#e63946] hover:-translate-y-1 hover:shadow-xl transform"
                >
                    Start AR Experience
                </button>
            </div>
        </section>
    );
};
