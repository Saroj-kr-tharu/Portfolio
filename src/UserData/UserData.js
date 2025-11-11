import { FaEnvelope, FaGithub, FaInstagram, FaLaptopCode, FaLinkedin, FaMapMarkerAlt, FaTwitter, FaUserTie } from 'react-icons/fa';

// User's basic information
export const BaiscuserData = {
    name: 'Saroj Kumar Tharu', 
    description: 'Full-stack developer & Freelancer crafting innovative digital solutions', 
    imgsrc: '/pp.jpg',
    resumeFile: "/cv.pdf", 
    email: "sarojc11345@gmail.com"
};

// Work experience details
export const experienceData = [
 {
    title: "Full Stack Developer",
    role: "Full Stack Developer",
    date: "Jun 2024 - Present",
    company_name: "Freelancer",
    icon: FaLaptopCode
},
 {
    title: "Full Stack Developer",
    role: "Full Stack Developer",
    date: "Jan 2023 - Jun 2024",
    company_name: "Self Employed",
    icon: FaUserTie
},
 
];

// Projects portfolio
export const projectData = [
  {
    title: 'ChatWithPDF',
    details: 'An AI-powered RAG application enabling interactive conversations with uploaded PDF, DOCX, and CSV documents using Google Gemini, LangChain, FAISS vectorization, and Streamlit interface.',
    photo: '/images/projects/chatWithPDF.jpg',
    github_link: 'https://github.com/Saroj-kr-tharu/Chat_With_PDF',
    gradient_look: 'bg-gradient-to-br from-blue-400 to-blue-600'
  },
  {
    title: 'QBitZone',
    details: 'Modern agency landing page built with Next.js, featuring responsive design, fast performance, and automated CI/CD deployment for seamless updates and reliability.',
    photo: '/images/projects/qbitzone.png',
    live_link: 'https://qbitzone.com/',
    gradient_look: 'bg-gradient-to-br from-rose-200 to-rose-500'
  },
  {
    title: 'BookMyCinema',
    details: 'Online movie ticket booking web app with seat selection and payment integration. Features an intuitive UI for browsing movies, showtimes, and theaters.',
    photo: '/images/projects/BookMyCinema.png',
    github_link: 'https://github.com/Saroj-kr-tharu/OnlineMovieBooking-Fortend',
    live_link: 'https://online-movie-booking-fortend.vercel.app/',
    gradient_look: 'bg-gradient-to-br from-orange-300 to-orange-600'
  },
  {
    title: 'GoodReadsClone',
    details: 'A community platform where user can discover, review, and books . Features user profiles, personalized recommendations, reading lists, and an interactive rating system.',
    photo: '/images/projects/goodreadsClone.png',
    github_link: 'https://github.com/Saroj-kr-tharu/GoodReadsClone',
    gradient_look: 'bg-gradient-to-br from-teal-300 to-teal-600'
  },
  {
    title: 'AI Driven Melody Generator',
    details: 'An AI-powered tool that predicts and generates the next chord or melody based on input sequences. Creates harmonious musical progressions using machine learning algorithms.',
    photo: '/images/projects/AI_Driven_Melody_Generatro.png',
    github_link: 'https://github.com/Saroj-kr-tharu/AI_Driver_Melody_Generator',
    gradient_look: 'bg-gradient-to-br from-red-400 to-red-600'
  },
  {
    title: 'Airline Ticket Booking API',
    details: 'A microservice  system for airline ticket reservations with features for flight search, booking management, and payment processing. Built with Node.js and Express following microservice architecture.',
    photo: '/images/projects/AirlineBackendSsytem.png',
    github_link: 'https://github.com/Saroj-kr-tharu/Airline_Backend_Microservice',
    gradient_look: 'bg-gradient-to-br from-indigo-400 to-purple-600'
  },
  {
    title: 'Todo WebApp',
    details: 'A task management application with complete CRUD operations allowing users to create, update and delete tasks. Features user authentication and authorization for secure personal task lists.',
    photo: '/images/projects/TodoWebApp.png',
    github_link: 'https://github.com/Saroj-kr-tharu/TodoApp',
    gradient_look: 'bg-gradient-to-br from-blue-300 to-blue-500'
  },
  {
    title: 'Shadow Socket',
    details: 'A Python-based remote access tool using socket programming for educational purposes. Features persistent connections, file transfers, and remote screen/camera access through reverse TCP handshake.',
    photo: '/images/projects/ShadowSocket.png',
    github_link: 'https://github.com/Saroj-kr-tharu/ShadowSocket',
    gradient_look: 'bg-gradient-to-br from-violet-400 to-slate-800'
  },
  {
    title: 'Url Shortner',
    details: 'A Node.js microservice for URL analytics with RabbitMQ integration for message brokering and cron jobs for scheduling reminder notifications. Part of a larger URL shortening system architecture.',
    photo: '/images/projects/urlShortner.png',
    github_link: 'https://github.com/Saroj-kr-tharu/UrlShortnerAnalyticMicroSerivce',
    

    gradient_look: 'bg-gradient-to-br from-emerald-300 to-cyan-600'
  }
];

// Connect and contact information
export const connectDetails = {
    socialMedia: [
      { 
        name: 'GitHub', 
        url: 'https://github.com/Saroj-kr-tharu', 
        icon: FaGithub 
      },
      { 
        name: 'LinkedIn', 
        url: 'https://www.linkedin.com/in/saroj-kumar-tharu-96058b287/?originalSubdomain=np', 
        icon: FaLinkedin 
      },
      { 
        name: 'Twitter', 
        url: 'https://twitter.com/yourhandle', 
        icon: FaTwitter 
      },
      { 
        name: 'Instagram', 
        url: 'https://www.instagram.com/sarojkrtharu?igsh=NXd6N29lNDRyczZv', 
        icon: FaInstagram 
      }
    ],
    contactInfo: [
      {
        title: 'Email',
        value: 'sarojc11345@gmail.com',
        icon: FaEnvelope,
        fun: () => window.location.href = `mailto:${BaiscuserData.email}?subject=Let's Connect&body=Hi Saroj, I would like to connect with you.`
      },
      {
        title: 'Address',
        value: 'Katmandu, Nepal',
        icon: FaMapMarkerAlt,
        fun: () => window.open(`https://www.google.com/maps/search/?api=1&query=Katmandu%2C%20Nepal`, '_blank')
      }
    ]
};

// Skills categorized by type
export const skills = [
    
    { name: 'Next JS', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Framer Motion', category: 'frontend' },
    { name: 'Daisy Ui', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },

    { name: 'Node JS', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'RabbitMQ', category: 'backend' },
    
    { name: 'MongoDB', category: 'database' },
    { name: 'VectorDB', category: 'database' },
    { name: 'MySql', category: 'database' },

    { name: 'AWS', category: 'cloud' },
    { name: 'Docker', category: 'cloud' },
    { name: 'Python', category: 'cloud' },
    { name: 'CI CD', category: 'cloud' },

    { name: 'Vercel', category: 'deployment' },
    { name: 'Git', category: 'tool' },
    { name: 'Ai/Ml', category: 'technology' }
];

// Default export for all data
export default {
    BaiscuserData,
    experienceData,
    projectData,
    connectDetails,
    skills
};