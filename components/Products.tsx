
import React from 'react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductsProps {
    products: Product[];
    onViewInAR: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2b2d42] mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    </div>
);


export const Products: React.FC<ProductsProps> = ({ products, onViewInAR, onAddToCart }) => {
    return (
        <section id="products" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <SectionTitle title="Featured Products" subtitle="Explore our collection and visualize them in your space with AR" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onViewInAR={() => onViewInAR(product)} 
                            onAddToCart={() => onAddToCart(product)} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
