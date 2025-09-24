
import React from 'react';
import { FEATURES } from '../constants';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-white rounded-2xl p-8 text-center h-full shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="text-5xl text-[#4361ee] mb-6 inline-block">
            <i className={`bi ${icon}`}></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-[#2b2d42]">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2b2d42] mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    </div>
);

export const Features: React.FC = () => {
    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-4">
                <SectionTitle title="Why Choose AR Shopping?" subtitle="Discover the benefits of our augmented reality shopping platform" />
                <div className="grid md:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};
