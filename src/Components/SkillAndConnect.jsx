import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { connectDetails, skills } from 'UserData/UserData';

function SkillAndConnect() {
  
  const {  dark } = useSelector(state => state.theme);

  return (
    <div className="flex flex-col  mx-2 md:flex-row  gap-8 mt-10 sm:mt-20 overflow-x-hidden">

      {/* Skills Section */}
      <motion.div 
       whileInView={{ x: 0, opacity: 1 }}
       initial={{ x: -100, opacity: 0 }}
       transition={{
           x: { duration: 0.5, ease: "easeIn" },
           opacity: { duration: 0.5, ease: "easeIn" },
       }}
          className={` ${dark ? "bg-zinc-900 text-white/80" : "bg-base-300"  }   rounded-lg px-6 py-4 flex-1`} >
       {/* className=" bg-zinc-900 rounded-lg px-6 py-4 flex-1"> */}
        <h2 className="text-2xl font-bold  mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div 
                key={index}
                className="bg-zinc-800  text-white px-4 py-2 rounded-full text-sm hover:cursor-pointer hover:scale-120 transition-transform
                 duration-300 ease-in-out"
            >
                {skill.name}
            </div>
            ))}
        </div>
      </motion.div>
 
      {/* Connect Section */}
      <motion.div 
      whileInView={{ x: 0, opacity: 1 }}
       initial={{ x: 100, opacity: 0 }}
       transition={{
           x: { duration: 0.5, ease: "easeIn" },
           opacity: { duration: 0.5, ease: "easeIn" },
       }}

         className={` ${dark ? "bg-zinc-900 text-white/80" : "bg-base-300"  }   rounded-lg px-6 py-4 flex-1`} >
        <h2 className="text-2xl font-bold  mb-6">Let's connect</h2>
        
        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          {connectDetails.socialMedia.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Connect on ${social.name}`}
             
              className="bg-zinc-800 p-3 rounded-full hover:cursor-pointer hover:scale-120 transition-transform duration-300 ease-in-out hover:bg-zinc-700 "
            >
              <social.icon size={24} color="white" />
            </a>
          ))}
        </div>

        {/* Contact Information */}
        {connectDetails.contactInfo.map((info, index) => (
          <div key={index} className="mb-4 hover:cursor-pointer"  onClick={info.fun}>
            <h3 className=" text-lg mb-2 flex   items-center gap-2">
              <info.icon size={16} color="white" />
              {info.title}
            </h3>
            <p className="dark:text-gray-300">{info.value}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default SkillAndConnect;