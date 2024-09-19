import React, {useRef, useState} from 'react';
import Album from "./Album.tsx";
import albumsData from '../data/lindseyStirlingData.json';
import {ChevronLeft, ChevronRight} from 'lucide-react';


const Discography: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        const container = containerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            container.scrollBy({left: scrollAmount, behavior: 'smooth'});
            setScrollPosition(container.scrollLeft + scrollAmount);
        }
    };

    return (
        <section className="m-12 pl-32 pr-32 relative">
            <h2 className="text-3xl font-bold mb-4 text-primary-light dark:text-primary-dark">Discografía</h2>
            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white
                    dark:bg-gray-800 rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                    style={{display: scrollPosition <= 0 ? 'none' : 'block'}}
                >
                    <ChevronLeft size={24} className="text-primary-light dark:text-primary-dark"/>
                </button>
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
                    style={{scrollBehavior: 'smooth'}}
                >
                    {albumsData.map((album) => (
                        <Album key={album.id} {...album}/>
                    ))}
                </div>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                    style={{display: containerRef.current && scrollPosition >= containerRef.current.scrollWidth - containerRef.current.clientWidth ? 'none' : 'block'}}
                >
                    <ChevronRight size={24} className="text-primary-light dark:text-primary-dark"/>
                </button>
            </div>
        </section>
    );
};

export default Discography;