import { motion } from "framer-motion";
import { experienceData } from 'UserData/UserData';

// Sample experience data with icons instead of image paths
;

function ExperienceSection() {
  return (
    <motion.section
    whileInView={{ y: 0, opacity: 1 }}
       initial={{ y: -10, opacity: 0 }}
       transition={{
           y: { duration: 0.5, ease: "easeIn" },
           opacity: { duration: 0.5, ease: "easeIn" },
       }}

    id="experience" className="py-16 mt-4 sm:mt-10 ">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12">Work Experience</h2>
        
        <div className="flex flex-col mx-10 sm:mx-0 gap-10">
          {experienceData.map((experience, index) => {
            const Icon = experience.icon;
            
            return (
              <motion.div 
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{
                  y: { duration: 0.5, ease: "easeIn" },
                  opacity: { duration: 0.5, ease: "easeIn" },
              }}

              key={index} className="flex flex-col md:flex-row justify-between hover:scale-101 hover:cursor-pointer transition-transform duration-300 ease-in-out items-start md:items-center py-4 border-b border-base">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center p-3 text-blue-400">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{experience.company_name}</h3>
                    <p className="text-lg text-gray-400">{experience.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{experience.role}</p>
                  </div>
                </div>
                <div className="md:text-right">
                  <p className="text-gray-400 text-sm md:text-base">{experience.date}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default ExperienceSection;