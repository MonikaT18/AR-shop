
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import type { Product } from '../types';

interface ARViewerProps {
    selectedProduct: Product | null;
    onClose: () => void;
}

export const ARViewer = forwardRef<HTMLDivElement, ARViewerProps>(({ selectedProduct, onClose }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [error, setError] = useState<string | null>(null);

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    useEffect(() => {
        const startCamera = async () => {
            if (selectedProduct) {
                try {
                    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
                    setStream(mediaStream);
                    if (videoRef.current) {
                        videoRef.current.srcObject = mediaStream;
                    }
                    setError(null);
                } catch (err) {
                    console.error("Camera access denied:", err);
                    setError("Camera access denied. Please enable camera permissions in your browser settings.");
                    setStream(null);
                }
            }
        };

        startCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                setStream(null);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedProduct]);

    const renderContent = () => {
        if (!selectedProduct) {
            return (
                 <div className="text-center text-gray-400">
                    <i className="bi bi-box-seam text-6xl mb-4"></i>
                    <h4 className="text-2xl font-bold text-white">AR Product Viewer</h4>
                    <p className="mt-2">Select a product to view it in augmented reality</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="text-center text-red-400 p-8">
                    <i className="bi bi-exclamation-triangle text-6xl mb-4"></i>
                    <h4 className="text-2xl font-bold text-white">Error</h4>
                    <p className="mt-2">{error}</p>
                </div>
            );
        }

        return (
            <>
                <video ref={videoRef} autoPlay playsInline muted className="absolute top-0 left-0 w-full h-full object-cover"></video>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                {selectedProduct && stream && (
                    <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-center z-10 pointer-events-none">
                        <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-48 h-48 object-contain drop-shadow-2xl" />
                        <p className="text-white font-bold text-lg bg-black bg-opacity-50 px-4 py-1 rounded-full mt-4">{selectedProduct.name}</p>
                    </div>
                )}
                 <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-opacity-75 transition-colors">
                    <i className="bi bi-x-lg"></i>
                </button>
            </>
        );
    };

    return (
        <section id="ar-viewer" className="py-20" ref={containerRef}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2b2d42] mb-4">AR Product Viewer</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Visualize products in your space using our AR technology</p>
                </div>
                <div className="bg-gray-100 rounded-3xl p-4 shadow-inner">
                    <div className="ar-viewport bg-black rounded-2xl h-[60vh] max-h-[700px] relative overflow-hidden flex items-center justify-center">
                       {renderContent()}
                    </div>
                    {selectedProduct && (
                      <div className="mt-8 flex justify-center flex-wrap gap-4">
                          <button className="bg-[#4361ee] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#3f37c9] hover:-translate-y-0.5 transform">Place Product</button>
                          <button className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-700 hover:-translate-y-0.5 transform">Rotate</button>
                          <button onClick={onClose} className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-700 hover:-translate-y-0.5 transform">Reset View</button>
                      </div>
                    )}
                </div>
            </div>
        </section>
    );
});
