import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import InfoPanel from './components/InfoPanel';
import {ThemeProvider, useTheme} from './contexts/ThemeContext';

const AppContent: React.FC = () => {
    const {theme, toggleTheme} = useTheme();
    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <div className={`flex flex-col min-h-screen ${theme === 'dark' ?
            'dark bg-gray-900 text-white' : 'bg-white text-gray-900 bg-purple-100'}`}>
            <Header
                toggleTheme={toggleTheme}
                theme={theme}
            />
            <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row">
                <Timeline selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                <InfoPanel selectedItem={selectedItem}/>
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
