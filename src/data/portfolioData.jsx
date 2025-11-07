import React from 'react';
import {
  IoLogoPython, IoCafeOutline, IoLogoJavascript, IoLogoAndroid, IoLeafOutline,
  IoLogoWindows, IoGitNetworkOutline, IoServerOutline, IoLogoFirebase,
  IoLogoGithub, IoColorPaletteOutline, IoCodeSlashOutline,
  IoSyncCircleOutline, IoPeopleOutline, IoBulbOutline, IoChatbubblesOutline,
  IoDocumentTextOutline, IoRestaurantOutline, IoCartOutline, IoLogoLinkedin,
  IoMailOutline, IoLocationOutline
} from 'react-icons/io5';
import { FaCode } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';

// --- HERO DATA ---
export const heroData = {
  name: "Harsh Mandaliya",
  titles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Python & Django Expert",
    "Java & .NET Specialist"
  ],
  valueProposition: "Results-driven developer with expertise in designing, developing, and deploying scalable web and mobile applications using modern tech and thoughtful design."
};

// --- ABOUT DATA ---
export const aboutData = {
  who: {
    key: 'who', // <-- ADDED KEY
    title: "Who I Am",
    icon: <IoPeopleOutline className="text-xl mr-2 -mt-1" />,
    content: [
      "I'm a results-driven Software Engineer and Full-Stack Developer with a proven expertise in designing, developing, and deploying scalable web and mobile applications.",
      "My strength lies in a strong proficiency across a diverse tech stack, including Python, Django, Java, and .NET Core. I'm adept at managing the complete software development lifecycle (SDLC) to deliver high-quality solutions."
    ]
  },
  what: {
    key: 'what', // <-- ADDED KEY
    title: "What I Do",
    icon: <IoCodeSlashOutline className="text-xl mr-2 -mt-1" />,
    content: [
      { title: "Full-Stack Development:", text: "Building end-to-end applications, from responsive UI design to robust backend logic." },
      { title: "API Development:", text: "Crafting secure, efficient, and scalable RESTful APIs to power applications." },
      { title: "Database Management:", text: "Designing and optimizing databases (MySQL, SQL Server, Firebase) for performance and integrity." },
      { title: "Team Leadership:", text: "Leading cross-functional teams and mentoring members to enhance user experience and efficiency." }
    ]
  },
  passion: {
    key: 'passion', // <-- ADDED KEY
    title: "My Passion",
    icon: <IoBulbOutline className="text-xl mr-2 -mt-1" />,
    content: [
      "I am passionate about embracing emerging technologies and dedicate myself to continuous learning.",
      "What truly drives me is the challenge of solving complex technical problems. I thrive on architecting solutions that are not only functional but also efficient, scalable, and provide a seamless user experience."
    ]
  }
};

// --- PHILOSOPHY DATA ---
export const philosophyData = [
  {
    icon: <IoCodeSlashOutline className="text-4xl text-primary" />,
    title: "Full SDLC",
    text: "Expertise in the complete Software Development Lifecycle, from design and development to testing and deployment."
  },
  {
    icon: <IoSyncCircleOutline className="text-4xl text-primary" />,
    title: "Agile Methodology",
    text: "Proficient in Agile/Scrum environments, focusing on iterative progress, collaboration, and rapid delivery."
  },
  {
    icon: <IoServerOutline className="text-4xl text-primary" />,
    title: "Database Optimization",
    text: "Skilled in database design, normalization, and writing optimized queries for performance and scalability."
  },
  {
    icon: <IoPeopleOutline className="text-4xl text-primary" />,
    title: "Team Leadership",
    text: "Demonstrated ability to lead cross-functional teams, mentor junior developers, and manage project workflows."
  },
  {
    icon: <IoBulbOutline className="text-4xl text-primary" />,
    title: "Critical Thinking",
    text: "A strong problem-solver who can analyze complex challenges and devise efficient, robust solutions."
  },
  {
    icon: <IoChatbubblesOutline className="text-4xl text-primary" />,
    title: "Effective Communication",
    text: "Fluent in English, Hindi, and Gujarati, ensuring clear communication with all stakeholders."
  }
];

// --- SKILLS DATA ---
export const skillsData = [
  { name: "Python", category: "lang", icon: <IoLogoPython className="text-3xl text-blue-500" /> },
  { name: "Java", category: "lang", icon: <IoCafeOutline className="text-3xl text-red-500" /> },
  { name: "C#", category: "lang", icon: <FaCode className="text-3xl text-purple-500" /> },
  { name: "Kotlin", category: "lang", icon: <IoLogoAndroid className="text-3xl text-green-600" /> },
  { name: "JavaScript", category: "lang", icon: <IoLogoJavascript className="text-3xl text-yellow-500" /> },
  { name: "Django", category: "fw", icon: <IoLeafOutline className="text-3xl text-green-800" /> },
  { name: ".NET Core", category: "fw", icon: <IoLogoWindows className="text-3xl text-blue-700" /> },
  { name: "Android SDK", category: "fw", icon: <IoLogoAndroid className="text-3xl text-green-500" /> },
  { name: "RESTful APIs", category: "web", icon: <IoGitNetworkOutline className="text-3xl text-gray-500" /> },
  { name: "MySQL", category: "db", icon: <IoServerOutline className="text-3xl text-blue-600" /> },
  { name: "SQL Server", category: "db", icon: <IoServerOutline className="text-3xl text-red-700" /> },
  { name: "Firebase", category: "db", icon: <IoLogoFirebase className="text-3xl text-yellow-600" /> },
  { name: "Bootstrap 5", category: "web", icon: <BsBootstrap className="text-3xl text-purple-600" /> }, // FIX: Use BsBootstrap
  { name: "Git", category: "web", icon: <IoLogoGithub className="text-3xl text-neutral-dark" /> },
  { name: "UI/UX Design", category: "web", icon: <IoColorPaletteOutline className="text-3xl text-pink-500" /> }
];

export const skillFilters = [
  { label: "All Skills", filter: "all" },
  { label: "Languages", filter: "lang" },
  { label: "Frameworks", filter: "fw" },
  { label: "Databases", filter: "db" },
  { label: "Web & Tools", filter: "web" }
];

// --- PROJECTS DATA ---
export const projectsData = [
  {
    id: 1,
    title: "Assignment Tracking System",
    icon: <IoDocumentTextOutline className="text-6xl text-primary opacity-50" />,
    tags: ["Python", "Django", "MySQL"],
    githubUrl: "https://github.com/Harsh-Mandaliya",
    modalData: {
      title: "Assignment Tracking System",
      fullTags: ["Python", "Django", "MySQL", "Bootstrap", "Pandas", "RESTful APIs"],
      details: [
        "Engineered a comprehensive web-based platform for managing student assignments with role-based access control for teachers and students.",
        "Implemented secure user authentication system using Django framework with session management and authorization protocols.",
        "Designed and optimized MySQL database schema with normalized tables for efficient data storage and retrieval.",
        "Developed RESTful APIs for assignment upload, submission tracking, and automated progress monitoring.",
        "Improved task management efficiency by 40% through real-time monitoring dashboard and automated notification system."
      ]
    }
  },
  {
    id: 2,
    title: "Restaurant Management System",
    icon: <IoRestaurantOutline className="text-6xl text-primary opacity-50" />,
    tags: ["Java", "Android SDK", "Firebase"],
    githubUrl: "https://github.com/Harsh-Mandaliya",
    modalData: {
      title: "Restaurant Management System",
      fullTags: ["Java", "Android SDK", "Firebase Authentication", "Firebase Firestore", "Firebase Realtime Database"],
      details: [
        "Developed a full-featured Android application for restaurant operations including menu browsing, order placement, and real-time order tracking.",
        "Integrated Firebase Authentication for secure user login/signup with email verification and password recovery features.",
        "Implemented Firestore database for storing restaurant menus, user profiles, and order history with offline data synchronization.",
        "Utilized Firebase Realtime Database for live order status updates and push notifications to enhance user engagement.",
        "Optimized app performance through efficient database queries, reducing data load time by 35% and improving user experience."
      ]
    }
  },
  {
    id: 3,
    title: "Amazon Clone - E-Commerce",
    icon: <IoCartOutline className="text-6xl text-primary opacity-50" />,
    tags: [".NET Core", "C#", "SQL Server"],
    githubUrl: "https://github.com/Harsh-Mandaliya",
    modalData: {
      title: "Amazon Clone - E-Commerce Platform",
      fullTags: [".NET Core", "C#", "SQL Server", "Bootstrap", "RESTful APIs", "MVC Architecture"],
      details: [
        "Built full-featured e-commerce web application with separate admin panel and customer interface using ASP.NET Core MVC.",
        "Implemented complete product lifecycle management including product listing, search/filter functionality, shopping cart, and checkout process.",
        "Designed normalized SQL Server database with stored procedures and indexing for optimal query performance and scalability.",
        "Created RESTful APIs for product management, user authentication, order processing, and payment integration.",
        "Developed responsive UI using Bootstrap 5 framework ensuring cross-device compatibility and seamless user experience."
      ]
    }
  }
];

// --- EDUCATION DATA ---
export const educationData = {
  degree: "Bachelor of Science in Information Technology (BSc IT)",
  institution: "Lok Jagruti University, Ahmedabad, India",
  notes: "GPA: 7.82/10 | First Class with Distinction",
  years: "2022-2025"
};

// --- CONTACT DATA ---
export const contactData = {
  email: "harshmandaliya4114gmail@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsh-mandaliya-4114-/",
  github: "https://github.com/Harsh-Mandaliya",
  location: "Ahmedabad, Gujarat, India"
};

export const contactLinks = [
  {
    href: `mailto:${contactData.email}`,
    icon: <IoMailOutline className="text-2xl" />,
    title: "Email",
    text: contactData.email
  },
  {
    href: contactData.linkedin,
    icon: <IoLogoLinkedin className="text-2xl" />,
    title: "LinkedIn",
    text: "in/harsh-mandaliya-4114"
  },
  {
    href: contactData.github,
    icon: <IoLogoGithub className="text-2xl" />,
    title: "GitHub",
    text: "Harsh-Mandaliya"
  },
  {
    href: "#",
    icon: <IoLocationOutline className="text-2xl" />,
    title: "Location",
    text: contactData.location,
    isLink: false
  }
];