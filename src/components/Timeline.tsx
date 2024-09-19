import React, {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import lindseyData from '../data/lindseyStirlingData.json'; // Asumiendo que tienes el archivo JSON cargado en esta ruta

interface TimelineProps {
    selectedItem: number;
    setSelectedItem: (index: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({selectedItem, setSelectedItem}) => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        // Cargar imágenes en orden correcto: la foto de Lindsey primero, luego los álbumes
        const imageUrls = [
            lindseyData.artist.photo, // Imagen de Lindsey primero
            ...lindseyData.albums.map(album => album.coverImage), // Luego las imágenes de los álbumes
        ];
        setImages(imageUrls);
    }, []);

    const handlePrev = () => {
        setSelectedItem(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedItem(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="md:w-1/2 ">
            <div className="relative overflow-hidden max-h-xl max-w-xl md:h-[30rem] rounded-xl shadow-lg ">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{transform: `translateX(-${selectedItem * 100}%)`}}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0 relative ">
                            <img
                                src={image}
                                alt={index === 0 ? "Lindsey Stirling" : `Album ${index}`}
                            />
                            {index === 0 ? (
                                // Sección para la portada de la biografía
                                <div
                                    className="absolute top-4 left-4 text-white bg-black bg-opacity-80 p-2 rounded">
                                    <h3 className="font-bold text-lg">Biografía</h3>
                                </div>
                            ) : (
                                // Sección para las portadas de los álbumes
                                <div
                                    className="absolute top-4 left-4 text-white bg-black bg-opacity-90 p-2 rounded">
                                    <h3>Disco: {lindseyData.albums[index - 1].name}</h3>
                                    <p>{lindseyData.albums[index - 1].year}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full
                    dark:bg-gray-700 dark:hover:bg-gray-600 bg-purple-200 hover:bg-purple-400 transition-colors"
                >
                    <ChevronLeft size={24}/>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full
                    dark:bg-gray-700 dark:hover:bg-gray-600 bg-purple-200 hover:bg-purple-400 transition-colors"
                >
                    <ChevronRight size={24}/>
                </button>
            </div>
        </div>
    );
};

export default Timeline;
