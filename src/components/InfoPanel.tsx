import React from 'react';
import {Facebook, Instagram, Music, X, Youtube} from 'lucide-react';
import lindseyData from '../data/lindseyStirlingData.json';

const socialLinks = [
    {name: 'YouTube', url: lindseyData.artist.socialMedia.youtube, icon: Youtube},
    {name: 'Instagram', url: lindseyData.artist.socialMedia.instagram, icon: Instagram},
    {name: 'Facebook', url: lindseyData.artist.socialMedia.facebook, icon: Facebook},
    {name: 'Twitter', url: lindseyData.artist.socialMedia.twitter, icon: X},
];

interface InfoPanelProps {
    selectedItem: number;
}

const InfoPanel: React.FC<InfoPanelProps> = ({selectedItem}) => {
    if (selectedItem === 0) {
        // Mostrar biografía de Lindsey Stirling
        return (
            <div className="md:w-1/2 p-5 sm:p-10 mt-4 sm:mt-0
                                        bg-gray-100 dark:bg-gray-800
                                        rounded-lg
                                        md:h-[30rem]
                                        md:overflow-auto
                                        scrollbar-hide">
                <h2 className="text-2xl font-bold mb-4">{lindseyData.artist.name}</h2>
                <p className="mb-4">{lindseyData.artist.biography}</p>
                <p>
                    ¿Quieres saber más? Visita su página oficial:
                    <a
                        href="https://www.lindseystirling.com/home"
                        target="_blank"
                        className="underline decoration-wavy decoration-pink-800 transition-colors duration-300 hover:bg-pink-950 hover:text-white px-1"
                    > aquí </a>
                    para descubrir más sobre Lindsey Stirling.
                </p>

                <p className="mt-4">Y síguela en sus redes sociales:</p>

                <div className="pt-5 flex space-x-4 mb-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 rounded-full
                            border-2 border-transparent transition-colors duration-300
                            hover:text-pink-950 bg-pink-200 hover:bg-pink-400
                            dark:hover:text-pink-700 dark:bg-gray-950 dark:hover:bg-gray-900"
                        >
                            <link.icon size={24}/>
                        </a>
                    ))}
                </div>
            </div>

        );
    } else {
        const album = lindseyData.albums[selectedItem - 1];
        // Mostrar información del álbum
        return (
            <div className="md:w-1/2 p-5 sm:p-10 mt-4 sm:mt-0
                                        bg-gray-100 dark:bg-gray-800
                                        rounded-lg
                                        md:h-[30rem]
                                        md:overflow-y-scroll
                                        scrollbar-hide">
                <h2 className="text-2xl font-bold mb-2">{album.name}</h2>
                <p className="mb-4">Año de lanzamiento: {album.year}</p>
                <h3 className="text-xl font-semibold mb-2">Lista de canciones:</h3>
                <ul className="list-disc list-inside mb-4">
                    {album.tracks.map((track, index) => (
                        <li key={index}>{track}</li>
                    ))}
                </ul>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a
                        href={album.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-100 bg-gray-950 p-3 rounded-xl hover:text-green-600"
                    >
                        <Music className="mr-2"/>
                        Escuchar en Spotify
                    </a>
                    <a
                        href={album.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-100 bg-gray-950 p-3 rounded-xl hover:text-red-600"
                    >
                        <Youtube className="mr-2"/>
                        Ver en YouTube
                    </a>
                </div>
            </div>
        );
    }
};

export default InfoPanel;
