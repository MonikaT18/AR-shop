
import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';

interface StepCardProps {
    step: number;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => (
    <div className="bg-white rounded-2xl p-8 text-center h-full shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="flex items-center justify-center w-16 h-16 bg-[#4361ee] text-white rounded-full text-2xl font-bold mb-6 mx-auto">
            {step}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-[#2b2d42]">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


export const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2b2d42] mb-4">How It Works</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple steps to start your AR shopping experience</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {HOW_IT_WORKS_STEPS.map((step) => (
                        <StepCard key={step.step} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};
