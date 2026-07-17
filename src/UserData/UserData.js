import { FaEnvelope, FaGithub, FaLaptopCode, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

// User's basic information
export const BaiscuserData = {
    name: 'Saroj Kumar Tharu', 
    description: `Full Stack Engineer | Node.js, React, Angular, MongoDB/PostgreSQL | Docker, Kubernetes, AWS, Jenkins CI/CD | 5+ Production Apps Shipped End-to-End`, 
    imgsrc: '/pp.jpg',
    resumeFile: "/cv.pdf", 
    email: "sarojc11345@gmail.com"
};

// Work experience details
export const experienceData = [
  {
    title: "Software Engineer (Freelancer)",
    role: "Full Stack Engineer",
    date: "Nov 2025 - Present",
    company_name: "Freelancer",
    icon: FaLaptopCode
},
 {
    title: "Full Stack Engineer (Intern)",
    role: "Full Stack Engineer",
    date: "Jul 2025 - Oct 2025",
    company_name: "MyPay",
    icon: FaLaptopCode
},
 
];

// Projects portfolio
export const projectData = [
  {
    title: 'MarketMandu',
    details: 'Full-stack e-commerce platform with an Angular frontend and Node.js/Express backend, JWT authentication and RBAC, and modular REST APIs for checkout and inventory across a hybrid MongoDB/MySQL data layer. Deployed on Kubernetes with a Jenkins CI/CD pipeline and Nginx reverse proxy on AWS.',
    photo: '/images/projects/marketMandu.jpg', 
    github_link: 'https://github.com/Saroj-kr-tharu/Ecommerce-fortend', 
    gradient_look: 'bg-gradient-to-br from-amber-300 to-orange-600'
  },
  {
    title: 'Surakshya Cloud',
    details: 'Cloud-native storage platform with core REST APIs built on Node.js/Express, EJS templating, and Tailwind/DaisyUI. Modernized CI/CD with Jenkins, Docker, and Trivy vulnerability scanning, deployed on a Kubernetes cluster on AWS for high availability.',
    photo: '/images/projects/surakshyaCloud.jpg', 
    github_link: 'https://github.com/Saroj-kr-tharu/SurakshyaCloud', 
    gradient_look: 'bg-gradient-to-br from-cyan-300 to-sky-600'
  },
  {
    title: 'Movie Booking Microservices',
    details: 'Event-driven microservices backend (Auth, Payment, Reminder) using RabbitMQ for inter-service messaging, with a hybrid SQL/NoSQL data layer via Sequelize (MySQL) and Mongoose (MongoDB). Automated notification pipelines reduced missed bookings by 25%',
    photo: '/images/projects/BookMyCinema.png',
    github_link: 'https://github.com/Saroj-kr-tharu/OnlineMovieBooking-Fortend',
    gradient_look: 'bg-gradient-to-br from-orange-300 to-orange-600'
  },
  
  {
    title: 'College Management System (CMS)',
    details: 'Full-stack system for managing student, faculty, and admin modules, with REST APIs on Node.js/Express, MongoDB/Mongoose data modeling, and Cloudinary media storage. Automated CI/CD with Jenkins and deployed on Kubernetes with Nginx handling reverse proxy and load distribution.',
    photo: '/images/projects/cms.jpg', 
    github_link: 'https://github.com/Saroj-kr-tharu/College-management-system', 
    gradient_look: 'bg-gradient-to-br from-lime-300 to-green-700'
  },
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
    { name: 'Angular', category: 'frontend' },
    { name: 'Framer Motion', category: 'frontend' },
    { name: 'Daisy Ui', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },

    { name: 'Node JS', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'RabbitMQ', category: 'backend' },
    { name: 'Redis', category: 'backend' },

    { name: 'MongoDB', category: 'database' },
    { name: 'MySql', category: 'database' },
    { name: 'Postgresl', category: 'database' },
    { name: 'VectorDB', category: 'database' },

    { name: 'AWS', category: 'cloud' },
    { name: 'K8S', category: 'cloud' },
    { name: 'Docker', category: 'cloud' },
    { name: 'Python', category: 'cloud' },
    { name: 'CI CD', category: 'cloud' },
    { name: 'Jenkins', category: 'cloud' },
    { name: 'Linux', category: 'cloud' },

    { name: 'Vercel', category: 'deployment' },
    { name: 'Git', category: 'tool' },
];

// Default export for all data
export default {
    BaiscuserData,
    experienceData,
    projectData,
    connectDetails,
    skills
};