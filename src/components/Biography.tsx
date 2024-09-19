// Componente no usado en la aplicación, pero se mantiene para futuras actualizaciones
import React from 'react';
import {Facebook, Instagram, X, Youtube} from 'lucide-react';

const socialLinks = [
    {name: 'YouTube', url: 'https://www.youtube.com/user/lindseystomp', icon: Youtube, color: 'text-red-600'},
    {name: 'Instagram', url: 'https://www.instagram.com/lindseystirling/', icon: Instagram, color: 'text-white-600'},
    {name: 'Facebook', url: 'https://www.facebook.com/lindseystirlingmusic', icon: Facebook, color: 'text-blue-600'},
    {name: 'Twitter', url: 'https://twitter.com/LindseyStirling', icon: X, color: 'text-white-400'},
];

const Biography: React.FC = () => {
    return (
        <section className="container mx-auto px-4 py-8 pt-32">
            <h2 className="text-3xl font-bold mb-4 text-primary-light dark:text-primary-dark">Biografía</h2>
            <div className="flex flex-col md:flex-row items-center">
                <div className="relative w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                    <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/031/468/original/00-Lindsey-Stirling.jpg?1649575250"
                        alt="Lindsey Stirling"
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 p-4 rounded-t-lg">
                        <div className="flex justify-center space-x-6">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${link.color} hover:opacity-80 transition duration-300`}
                                >
                                    <link.icon size={24}/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <p className="text-lg mb-4">
                        Lindsey Stirling es una violinista, bailarina y compositora estadounidense conocida por su
                        estilo único que fusiona música clásica, electrónica y dance. Nacida el 21 de septiembre de
                        1986, Stirling ganó fama a través de su canal de YouTube, donde publica videos musicales y de
                        rendimiento que combinan su habilidad para tocar el violín con coreografías elaboradas.
                    </p>
                    <p className="text-lg mb-4">
                        A lo largo de su carrera, Stirling ha lanzado varios álbumes de estudio, realizado giras
                        mundiales y colaborado con numerosos artistas. Su estilo innovador y su presencia en el
                        escenario la han convertido en una de las artistas más únicas y reconocibles en la industria de
                        la música.
                    </p>
                    <p className="text-lg">
                    ¿Quieres saber más? Visita su página oficial:
                    <a
                        href="https://www.lindseystirling.com/home"
                        className="underline decoration-wavy decoration-pink-800 transition-colors duration-300 hover:bg-pink-950 hover:text-white px-1"
                    >
                        aquí
                    </a>
                    para descubrir todo sobre Lindsey Stirling.
                </p>
                </div>
            </div>
        </section>
    );
};

export default Biography;