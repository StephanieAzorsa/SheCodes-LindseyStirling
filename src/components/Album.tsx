import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, X } from 'lucide-react';

interface Song {
    id: number;
    title: string;
    duration: string;
}

interface AlbumProps {
    id: number;
    name: string;
    year: number;
    cover: string;
    songs: Song[];
}

const Album: React.FC<AlbumProps> = ({name, year, cover, songs }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [playingSong, setPlayingSong] = useState<number | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const togglePlay = (songId: number) => {
        if (playingSong === songId) {
            setPlayingSong(null);
        } else {
            setPlayingSong(songId);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <>
            <div
                className="flex-none w-64 cursor-pointer
                 transform transition duration-300
                 hover:scale-105"
                onClick={() => setIsModalOpen(true)}
            >
                <img
                    src={cover}
                    alt={name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-2"
                />
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{year}</p>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div ref={modalRef} className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">{name}</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <img src={cover} alt={name} className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
                        <ul>
                            {songs.map((song) => (
                                <li key={song.id} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                                    <span>{song.title}</span>
                                    <div className="flex items-center">
                                        <span className="mr-2">{song.duration}</span>
                                        <button
                                            onClick={() => togglePlay(song.id)}
                                            className="text-primary-light dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary-light"
                                        >
                                            {playingSong === song.id ? <Pause size={20} /> : <Play size={20} />}
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Album;