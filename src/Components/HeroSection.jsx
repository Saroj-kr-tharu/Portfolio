import { Animation_Counter } from 'Components/Animation_Counter';
import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { useSelector } from 'react-redux';
import { BaiscuserData } from 'UserData/UserData';

function HeroSection(){
   
    const { dark } = useSelector(state => state.theme);

    // Handle resume download
      const handleResumeDownload = () => {
        // Using window.open for more reliable download behavior
        window.open(BaiscuserData.resumeFile, '_blank');
    };
    

    // Handle email opening
    const handleContactMe = () => {
        window.location.href = `mailto:${BaiscuserData.email}?subject=Let's Connect&body=Hi Saroj, I would like to connect with you.`;
    };

      
 
    return(
        <div>
            <div id="hero" className={`flex      flex-col items-center gap-y-2 md:gap-y-3 mt-4 md:mt-6 px-4 `}>

                {/* Profile avatar */}
                <motion.div 
                 initial={{ y: 50, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.1, 0.25, 1], 
                    staggerChildren: 0.1 
                }}
                viewport={{  margin: "-50px" }}


                className="w-36 h-36 md:w-36 lg:w-45 md:h-36 lg:h-45 rounded-full border-indigo-500 border-4 p-1 hover:cursor-pointer flex items-center justify-center shadow-lg
                
                ">
                    <div className="w-full h-full overflow-hidden rounded-full border-2 border-indigo-500">
                        <img 
                            src={BaiscuserData.imgsrc} 
                            alt={BaiscuserData.name}
                            className="w-full h-full transition-all duration-300 ease-in-out transform hover:scale-115 object-cover rounded-full" 
                        />
                    </div>
                </motion.div>
                
                {/* Name heading */}
                <Animation_Counter once={true} className={"text-3xl md:text-4xl lg:text-5xl font-semibold pb-2 text-center"} text={BaiscuserData.name} /> 
                
                {/* Professional subtitle */}
                <motion.p
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ 
                        delay:0.2,
                        duration: 0.6, 
                        ease: [0.25, 0.1, 0.25, 1], 
                        staggerChildren: 0.1 
                    }}
                    viewport={{ margin: "-50px" }}
                className="text-sm md:text-xl text-center max-w-xs md:max-w-lg lg:max-w-2xl">
                    {BaiscuserData.description}
                </motion.p>

               
                
                {/* Action buttons */}
                <div className="flex flex-row justify-center gap-3 md:gap-6 w-full max-w-xl md:max-w-none mt-2">
                    
                    <motion.button 
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -60, opacity: 0 }}
                    transition={{
                        x: { duration: 0.5, ease: "easeIn" },
                       opacity: { duration: 0.8, ease: "easeIn" },
                    }}
                    viewport={{ once: true }}

                        onClick={handleResumeDownload}
                        className="flex items-center  justify-center md:justify-start px-0 sm:px-4 md:px-6 py-2 md:py-3 border-1 border-base-400 rounded-lg hover:cursor-pointer hover:bg-white hover:border-indigo-900 hover:text-black
                         transition-all duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto"
                    >
                        <span className="mr-2 text-xl md:text-2xl"><IoMdDownload /></span> Download Resume
                    </motion.button>

                    <motion.button 
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 60, opacity: 0 }}
                    transition={{
                        x: { duration: 0.5, ease: "easeIn" },
                        opacity: { duration: 0.8, ease: "easeIn" },
                    }}
                    viewport={{ once: true }}
                        onClick={handleContactMe}
                        className="flex items-center justify-center md:justify-start px-0 sm:px-4 md:px-6 py-2 md:py-3 bg-transparent border-1 border-base-400 hover:cursor-pointer hover:bg-white hover:border-indigo-900 hover:text-black rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto"
                    >
                        <span className="mr-2 text-lg md:text-xl"><FiMessageCircle /></span> Chat with me
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection