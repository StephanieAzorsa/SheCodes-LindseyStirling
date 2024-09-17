import React from 'react';

import {ThemeProvider, useTheme} from './contexts/ThemeContext';
import {Moon, Sun} from 'lucide-react';
import Biography from "./components/Biography.tsx";
import Discography from "./components/Discography.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 bg-primary-light dark:bg-primary-dark text-white p-2 rounded-full z-50 hover:opacity-80 transition duration-300"
        >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
    );
};

const AppContent: React.FC = () => {
    return (
        <div
            className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <ThemeToggle/>
            <Header/>

            <main className="">
                <section id="biography" className=" flex items-center justify-center py-8">
                    <Biography/>
                </section>
                <section id="discography" className="p-6">
                    <Discography/>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <AppContent/>
        </ThemeProvider>
    );
};

export default App;