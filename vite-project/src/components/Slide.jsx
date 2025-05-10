import React, { useState, useEffect } from 'react';
import { FaApple } from 'react-icons/fa';
import AppleTVLogo from '../assets/apple-tv-plus.svg';

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const products = [
        {
            id: 1,
            name: 'Constellation',
            description: 'A thrilling space mystery that will keep you guessing.',
            subtitle: 'Starring Noomi Rapace',
            image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
        },
        {
            id: 2,
            name: 'The Studio',
            description: 'Seth Rogen leads this hilarious Hollywood satire.',
            subtitle: 'A comedy about the chaos of running a movie studio',
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
        },
        {
            id: 3,
            name: 'Severance',
            description: 'Your work life and personal life are about to get separated.',
            subtitle: 'The mind-bending thriller returns',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
        },
        {
            id: 4,
            name: 'Shrinking',
            description: 'Sometimes the best therapy is no filter.',
            subtitle: 'Starring Jason Segel and Harrison Ford',
            image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
        },
        {
            id: 5,
            name: 'For All Mankind',
            description: 'The race to Mars is just the beginning.',
            subtitle: 'The epic space drama continues',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
        }
    ];

    return (
        <div className="w-screen h-screen overflow-hidden bg-black/95 backdrop-blur-sm">
            <div className="relative h-full w-full">
                <div className="absolute inset-0 flex w-full" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 800ms cubic-bezier(0.32, 0, 0.67, 0)' }}>
                    {products.map((product) => (
                        <div 
                            key={product.id}
                            className="group relative w-screen h-screen flex-shrink-0 overflow-hidden bg-[#fbfbfd]"
                        >
                            <img 
                                className="w-full h-full object-cover transition-transform duration-700"
                                src={product.image}
                                alt={product.name}
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 pb-12 md:pb-16 space-y-4 md:space-y-6 animate-fade-in-up backdrop-blur-sm bg-black/40 rounded-t-3xl">
                                <h3 className="text-4xl md:text-5xl font-semibold text-white flex items-center gap-4 animate-slide-in-left leading-tight">
                                    
                                    <span className="font-medium flex items-center gap-2"><FaApple className="relative top-[-1px]" />tv+</span>
                                    <span className="font-light"> {product.name}</span>
                                </h3>
                                <p className="text-2xl md:text-3xl font-light text-white/95 leading-snug animate-slide-in-right max-w-2xl">{product.description}</p>
                                <p className="text-xl md:text-2xl text-white/80 animate-slide-in-left leading-relaxed">{product.subtitle}</p>
                                <div className="mt-8 flex gap-4">
                                    <button className="rounded-full bg-white/90 hover:bg-white px-10 py-3.5 text-lg font-medium text-black transition-all duration-300 hover:scale-105 animate-bounce-in">
                                        Learn More
                                    </button>
                                    <button className="rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/40 px-10 py-3.5 text-lg font-medium text-white transition-all duration-300 hover:scale-105 border border-white/30 animate-bounce-in">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes slide-in-left {
                    0% { transform: translateX(-100%); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                @keyframes slide-in-right {
                    0% { transform: translateX(100%); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                @keyframes bounce-in {
                    0% { transform: scale(0); opacity: 0; }
                    60% { transform: scale(1.1); opacity: 1; }
                    100% { transform: scale(1); }
                }
                .animate-slide-in-left { animation: slide-in-left 0.8s cubic-bezier(0.32, 0, 0.67, 0) forwards; }
                .animate-slide-in-right { animation: slide-in-right 0.8s cubic-bezier(0.32, 0, 0.67, 0) forwards; }
                .animate-bounce-in { animation: bounce-in 0.8s cubic-bezier(0.32, 0, 0.67, 0) forwards; }
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default Slide;