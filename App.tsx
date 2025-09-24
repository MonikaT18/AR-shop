
import React, { useState, useRef, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { ARViewer } from './components/ARViewer';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { Toast, ToastType } from './components/Toast';
import type { Product } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
    const [products] = useState<Product[]>(PRODUCTS);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [toasts, setToasts] = useState<ToastType[]>([]);
    const arViewerRef = useRef<HTMLDivElement>(null);

    const scrollToARViewer = () => {
        arViewerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleViewInAR = useCallback((product: Product) => {
        setSelectedProduct(product);
        setTimeout(scrollToARViewer, 100);
    }, []);

    const handleAddToCart = useCallback((product: Product) => {
        const newToast: ToastType = {
            id: Date.now(),
            message: `${product.name} has been added to your cart.`,
        };
        setToasts(prevToasts => [...prevToasts, newToast]);
        setTimeout(() => {
            setToasts(prevToasts => prevToasts.filter(toast => toast.id !== newToast.id));
        }, 3000);
    }, []);
    
    const handleCloseAR = useCallback(() => {
        setSelectedProduct(null);
    }, []);

    return (
        <div className="bg-[#f8f9fa] font-['Poppins',_sans-serif] text-[#333]">
            <Header />
            <main>
                <Hero onStartExperience={scrollToARViewer} />
                <Features />
                <Products products={products} onViewInAR={handleViewInAR} onAddToCart={handleAddToCart} />
                <ARViewer ref={arViewerRef} selectedProduct={selectedProduct} onClose={handleCloseAR} />
                <HowItWorks />
            </main>
            <Footer />
            <div className="fixed bottom-0 right-0 p-4 space-y-2 z-50">
                {toasts.map(toast => (
                    <Toast key={toast.id} message={toast.message} onClose={() => setToasts(ts => ts.filter(t => t.id !== toast.id))} />
                ))}
            </div>
        </div>
    );
};

export default App;
