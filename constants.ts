import type { Product } from './types';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Stealth Drone X',
        price: 899.99,
        rating: 4.8,
        imageUrl: 'https://picsum.photos/seed/drone/500/500',
        badge: 'New',
    },
    {
        id: 2,
        name: 'Aura Wireless Headphones',
        price: 249.99,
        rating: 4.6,
        imageUrl: 'https://picsum.photos/seed/headphones/500/500',
        badge: 'Popular',
    },
    {
        id: 3,
        name: 'EchoSphere Smart Speaker',
        price: 99.99,
        originalPrice: 129.99,
        rating: 4.9,
        imageUrl: 'https://picsum.photos/seed/speaker/500/500',
        badge: 'Sale',
    },
];

export const FEATURES = [
    {
        icon: 'bi-phone-vibrate',
        title: 'Visualize in Your Space',
        description: 'Place 3D models of products in your environment to see how they look and fit before you buy.',
    },
    {
        icon: 'bi-cart-check',
        title: 'Confident Purchases',
        description: "Reduce returns and buyer's remorse by making informed decisions with our AR visualization tools.",
    },
    {
        icon: 'bi-globe-americas',
        title: 'Seamless Experience',
        description: 'Access our AR technology directly from your browser with no app downloads required.',
    },
];

export const HOW_IT_WORKS_STEPS = [
    {
        step: 1,
        title: 'Select a Product',
        description: "Browse our catalog and choose any product you'd like to visualize in your space.",
    },
    {
        step: 2,
        title: 'Enable AR',
        description: 'Click "View in AR" to activate your device\'s camera and start the augmented reality experience.',
    },
    {
        step: 3,
        title: 'Place & Visualize',
        description: 'Position the product in your space, rotate it, and see how it fits before making your purchase.',
    },
];