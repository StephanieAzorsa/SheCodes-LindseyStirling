import React from 'react';
import {Moon, Sun} from 'lucide-react';

interface HeaderProps {
    toggleTheme: () => void;
    theme: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({toggleTheme, theme}) => {
    return (
        <header className="bg-purple-300 dark:bg-gray-950 text-white p-2">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold leading-7 text-gray-800
                                          dark:text-white sm:truncate sm:text-3xl sm:tracking-tight">
                    Tributo a Lindsey Stirling
                </h1>
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700">
                    {theme === 'dark' ? <Sun size={24}/> : <Moon size={24}/>}
                </button>
            </div>
        </header>
    );
};

export default Header;