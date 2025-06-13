import { FiMessageCircle } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { BaiscuserData } from 'UserData/UserData';

function HeroSection(){
   

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
            <div id="hero" className="flex  flex-col items-center gap-y-2 md:gap-y-3 mt-4 md:mt-6 px-4">
                {/* Profile avatar */}
                <div className="w-28 h-28 md:w-36 lg:w-40 md:h-36 lg:h-40 rounded-full border-indigo-500 border-4 p-1 flex items-center justify-center shadow-lg">
                    <div className="w-full h-full overflow-hidden rounded-full border-2 border-indigo-500">
                        <img 
                            src={BaiscuserData.imgsrc} 
                            alt={BaiscuserData.name}
                            className="w-full h-full object-cover rounded-full" 
                        />
                    </div>
                </div>
                
                {/* Name heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-2 text-center">{BaiscuserData.name}</h1>
                
                {/* Professional subtitle */}
                <p className="text-sm md:text-xl text-center max-w-xs md:max-w-lg lg:max-w-2xl">
                    {BaiscuserData.description}
                </p>
                
                {/* Action buttons */}
                <div className="flex flex-row justify-center gap-3 md:gap-6 w-full max-w-xl md:max-w-none mt-2">
                    
                    <button 
                        onClick={handleResumeDownload}
                        className="flex items-center  justify-center md:justify-start px-0 sm:px-4 md:px-6 py-2 md:py-3 border-1 border-white rounded-lg hover:cursor-pointer hover:bg-white hover:border-indigo-900 hover:text-black transition w-full md:w-auto"
                    >
                        <span className="mr-2 text-xl md:text-2xl"><IoMdDownload /></span> Download Resume
                    </button>

                    <button 
                        onClick={handleContactMe}
                        className="flex items-center justify-center md:justify-start px-0 sm:px-4 md:px-6 py-2 md:py-3 bg-transparent border border-white hover:cursor-pointer hover:bg-white hover:border-indigo-900 hover:text-black rounded-lg transition w-full md:w-auto"
                    >
                        <span className="mr-2 text-lg md:text-xl"><FiMessageCircle /></span> Chat with me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection