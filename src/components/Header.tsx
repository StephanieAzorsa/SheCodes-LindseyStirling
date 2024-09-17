import { Guitar } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-purple-500 dark:bg-slate-950 text-white py-4 fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto px-4 flex justify-between items-center">

                <h1 className="text-4xl font-bold flex items-center">
                    <Guitar size={32} className="mr-4"/>
                    Lindsey Stirling Tribute
                </h1>
                <nav>
                    <a href="#biography" className="mx-4 hover:underline">Biografía</a>
                    <a href="#discography" className="mx-4 hover:underline">Discografía</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;