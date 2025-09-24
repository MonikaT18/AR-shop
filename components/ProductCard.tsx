
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onViewInAR: () => void;
    onAddToCart: () => void;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex text-[#ffbe0b] mb-4">
            {[...Array(fullStars)].map((_, i) => <i key={`full-${i}`} className="bi bi-star-fill"></i>)}
            {halfStar && <i className="bi bi-star-half"></i>}
            {[...Array(emptyStars)].map((_, i) => <i key={`empty-${i}`} className="bi bi-star"></i>)}
        </div>
    );
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewInAR, onAddToCart }) => {
    const { name, price, originalPrice, rating, imageUrl, badge } = product;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
            <div className="relative">
                <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
                {badge && (
                    <span className="absolute top-4 right-4 bg-[#f72585] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {badge}
                    </span>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[#2b2d42] mb-2">{name}</h3>
                <RatingStars rating={rating} />
                <div className="text-2xl font-bold text-[#4361ee] mb-4">
                    ${price.toFixed(2)}
                    {originalPrice && (
                        <span className="text-base text-gray-400 line-through ml-2">${originalPrice.toFixed(2)}</span>
                    )}
                </div>
                <div className="mt-auto space-y-2">
                    <button 
                        onClick={onViewInAR}
                        className="w-full bg-[#4361ee] text-white font-semibold py-2 rounded-full transition-colors duration-300 hover:bg-[#3f37c9]"
                    >
                        View in AR
                    </button>
                    <button 
                        onClick={onAddToCart}
                        className="w-full bg-white text-[#4361ee] font-semibold py-2 rounded-full border-2 border-[#4361ee] transition-all duration-300 hover:bg-[#4361ee] hover:text-white"
                    >
                        <i className="bi bi-cart-plus mr-2"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
