import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-purple-300 dark:bg-gray-950 p-2 flex justify-center items-center">
            <div className="text-gray-950 dark:text-gray-400">
                © 2024 - Programado por una fan 🤍
            </div>
            <a href="https://github.com/StephanieAzorsa/SheCodes-LindseyStirling" >
                <Github size={20} className="m-2 dark:text-white text-gray-950 dark:hover:text-indigo-900 hover:text-indigo-900"/>
            </a>
        </footer>
    );
};

export default Footer;