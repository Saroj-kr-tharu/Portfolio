import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

function SkillAndConnect() {
  const skills = [
    { name: 'Next JS', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Framer Motion', category: 'frontend' },
    { name: 'Daisy Ui', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Node JS', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'MySql', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'VectorDB', category: 'database' },
    { name: 'RabbitMQ', category: 'backend' },
    { name: 'AWS', category: 'cloud' },
    { name: 'Docker', category: 'cloud' },
    { name: 'Python', category: 'cloud' },
    { name: 'CI CD', category: 'cloud' },
    { name: 'Vercel', category: 'deployment' },
    { name: 'Git', category: 'tool' },
    { name: 'Ai/Ml', category: 'technology' }
  ];

  const connectDetails = {
    socialMedia: [
      { 
        name: 'GitHub', 
        url: 'https://github.com/yourusername', 
        icon: FaGithub 
      },
      { 
        name: 'LinkedIn', 
        url: 'https://linkedin.com/in/yourprofile', 
        icon: FaLinkedin 
      },
      { 
        name: 'Twitter', 
        url: 'https://twitter.com/yourhandle', 
        icon: FaTwitter 
      },
      { 
        name: 'Instagram', 
        url: 'https://instagram.com/yourhandle', 
        icon: FaInstagram 
      }
    ],
    contactInfo: [
      {
        title: 'Email',
        value: 'sarojc11345@gmail.com',
        icon: FaEnvelope
      },
      {
        title: 'Address',
        value: 'Katmandu, Nepal',
        icon: FaMapMarkerAlt
      }
    ]
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-10 sm:mt-20">
      {/* Skills Section */}
      <div className="bg-zinc-900 rounded-lg px-6 py-4 flex-1">
        <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div 
                key={index}
                className="bg-zinc-800  text-white px-4 py-2 rounded-full text-sm hover:cursor-pointer hover:scale-120 transition-transform duration-300 ease-in-out"
            >
                {skill.name}
            </div>
            ))}
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-zinc-900 rounded-lg px-6 py-4 flex-1">
        <h2 className="text-2xl font-bold text-white mb-6">Let's connect</h2>
        
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
          <div key={index} className="mb-4">
            <h3 className="text-white text-lg mb-2 flex  items-center gap-2">
              <info.icon size={16} color="white" />
              {info.title}
            </h3>
            <p className="text-gray-300">{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillAndConnect;