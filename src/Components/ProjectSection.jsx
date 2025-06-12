import { FiExternalLink } from 'react-icons/fi';

const Project_data = [
  {
    title: 'Huminex',
    details: 'AI Powered Recruiting Platform, Hire Talent with AI',
    photo: '/images/projects/huminex.png', // Update with your image paths
    link: 'https://example.com/huminex',
    gradient_look: 'bg-gradient-to-br from-rose-200 to-rose-500'
  },
  {
    title: 'Build Portfolio',
    details: 'It is a portfolio builder tool where you can create your portfolio in minutes',
    photo: '/images/projects/build-portfolio.png',
    link: 'https://example.com/portfolio',
    gradient_look: 'bg-gradient-to-br from-orange-300 to-orange-600'
  },
  {
    title: 'Developer Think',
    details: 'Blog website for developers to share their thoughts and ideas',
    photo: '/images/projects/developer-think.png',
    link: 'https://example.com/devthink',
    gradient_look: 'bg-gradient-to-br from-teal-300 to-teal-600'
  },
  {
    title: 'Neuranium',
    details: 'AI Powered Call, Meeting and Email Analysis Platform',
    photo: '/images/projects/neuranium.png',
    link: 'https://example.com/neuranium',
    gradient_look: 'bg-gradient-to-br from-amber-200 to-amber-500'
  },
  {
    title: 'Resume Editor',
    details: 'A resume editor tool where you can create your resume in minutes',
    photo: '/images/projects/resume-editor.png',
    link: 'https://example.com/resume',
    gradient_look: 'bg-gradient-to-br from-indigo-400 to-purple-600'
  },
  {
    title: 'Og Image Generator',
    details: 'A og image generator tool where you can create og images in minutes',
    photo: '/images/projects/og-generator.png',
    link: 'https://example.com/og-generator',
    gradient_look: 'bg-gradient-to-br from-blue-300 to-blue-500'
  }
];

function ProjectSection() {
    return (
        <section className="py-16 bg-black  mb-2 sm:mb-10 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 px-3 sm:px-10">Projects</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                    {Project_data.map((project, index) => (
                        <a 
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:cursor-pointer hover:scale-102   ${project.gradient_look}`}
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
                                <p className="text-sm text-white/80">{project.details}</p>
                                
                                <div className="flex items-center mt-4 text-white/70 hover:text-white">
                                    <span className="text-sm">View Project</span>
                                    <FiExternalLink className="ml-1" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;