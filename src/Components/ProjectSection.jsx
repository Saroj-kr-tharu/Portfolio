import { motion } from "framer-motion";
import { FiExternalLink } from 'react-icons/fi';
import { projectData } from 'UserData/UserData';


function ProjectSection() {
    return (
        <motion.section 
          whileInView={{ y: 0, opacity: 1 }}
       initial={{ y: -10, opacity: 0 }}
       transition={{
           y: { duration: 0.5, ease: "easeIn" },
           opacity: { duration: 0.5, ease: "easeIn" },
       }}
        className="py-16 bg-black mb-2 sm:mb-10 text-white overflow-x-hidden">
            <div className="container mx-auto px-2 sm:px-4">
                <h2 className="text-4xl font-bold mb-12 px-2 sm:px-10">Projects</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-10">
                    {projectData.map((project, index) => (
                        <motion.a 

                             whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: Math.floor(index / 3) % 2 === 0 ? -200 : 200, opacity: 0 }}
                            transition={{
                                    opacity: { duration: 0.2, ease: "easeInOut" },
                                    x: { duration: 0.2, ease: "easeInOut" },
                                }}

                                viewport={{  once:true }}
                                
                                
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:cursor-pointer hover:scale-102 ${project.gradient_look}`}
                        >
                            <div className="p-5">
                                <div className="bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg overflow-hidden mb-4">
                                    <img 
                                        src={project.photo} 
                                        alt={project.title} 
                                        className="w-full h-48 object-cover object-center"
                                    />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-sm text-justify text-white/80">{project.details}</p>
                                
                                <div className="flex items-center mt-4 text-white/70 hover:text-white">
                                    <span className="text-sm">View Project</span>
                                    <FiExternalLink className="ml-1" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default ProjectSection;