import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function Footer() {
    const [darkMode, setDarkMode] = useState(false);
    
   const handleToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Toggle the data-theme attribute on the HTML element
    document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'cupcake');
};
    
    return (
        <footer className="bg-gray-100 dark:bg-black py-4 px-6 mt-auto">
            <div className="container mx-auto  flex flex-row justify-around items-center">
                <div className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-0">
                    Copyright © {new Date().getFullYear()} Saroj Kumar Tharu
                </div>
                
                <button 
                    onClick={handleToggle}
                    className="flex items-center justify-center -mt-4 sm:mt-0 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? (
                        <FaSun className="h-5 w-5 text-yellow-500" />
                    ) : (
                        <FaMoon className="h-5 w-5 text-gray-700" />
                    )}
                </button>
            </div>
        </footer>
    );
}

export default Footer;