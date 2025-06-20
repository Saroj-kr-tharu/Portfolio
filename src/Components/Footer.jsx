import { motion } from "framer-motion";
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { setTheme } from '../Redux/Slice/themeSlice';
import { BaiscuserData } from '../UserData/UserData';

function Footer() {
    const dispatch = useDispatch();
    const { theme, dark } = useSelector(state => state.theme);
    
    const handleToggle = () => {
    // Toggle between 'dark' and 'cupcake' themes
    const newTheme = theme === 'dark' ? 'lofi' : 'dark';
    // Just dispatch the new theme name
    dispatch(setTheme(newTheme));
    
    // Update the data-theme attribute on the HTML element
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Toggle dark class for Tailwind dark mode
    if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};
    
    return (
        <motion.footer
          whileInView={{ y: 0, opacity: 1 }}
       initial={{ y: 10, opacity: 0 }}
       transition={{
           y: { duration: 0.5, ease: "easeIn" },
           opacity: { duration: 0.5, ease: "easeIn" },
       }}
       
        className="  py-4 px-6 mt-auto overflow-x-hidden">
            <div className="container mx-auto flex flex-row justify-around items-center">
               <div className={`${dark ? "text-gray-50" : "text-gray-700"} mb-4 sm:mb-0`}>
                    Copyright © {new Date().getFullYear()} {BaiscuserData.name}
                </div>
                
                <button 
                    onClick={handleToggle}
                    className="flex items-center justify-center -mt-4 sm:mt-0 sm:w-10 sm:h-10 rounded-full  dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
                    aria-label="Toggle dark mode"
                >
                    {dark ? (
                        <FaSun className="h-5 w-5 text-yellow-500" />
                    ) : (
                        <FaMoon className="h-5 w-5 text-gray-700" />
                    )}
                </button>
            </div>
        </motion.footer>
    );
}

export default Footer;