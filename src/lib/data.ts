import { Code, GitBranch, Database, Bot, Cpu, Wrench, Smartphone, Globe } from "lucide-react";
import type { ComponentType } from "react";
export const profile = {
  name: "Vadla Vidyasagar",
  initials: "VS",
  title: "Full-Stack Developer | AI Enthusiast | Data Analyst",
  location: "Sangareddy",
  email: "vidya1sagar123@gmail.com",
  linkedin: "https://www.linkedin.com/in/vidyasagarvadla-v1705",
  github: "https://github.com/vidyasagar-vadla",
  avatar: `/profile.jpg`,
  phone: "7382055697",
  about: "Hello there! I'm a passionate developer dedicated to building innovative solutions through code. I thrive on collaboration and am always eager to connect with fellow enthusiasts, recruiters, or anyone curious about my work."
};

export const navigation = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/experience/" },
  { name: "Projects", href: "/projects/" },
  { name: "Contact", href: "/contact/" },
];
export const experience = [
    {
        role: "Web Development Intern",
        company: "Sparks To Ideas (Remote)",
        period: "May 2025 – June 2025",
        description: "Worked on real-time projects involving both front-end and back-end technologies. Enhanced coding, teamwork, and problem-solving skills while contributing to full-stack web development tasks.",
    },
    {
        role: "Data Science & AI Intern",
        company: "CODTECH IT SOLUTIONS (Remote)",
        period: "April 2025 – May 2025",
        description: "Developed an ETL pipeline using Pandas and Scikit-learn, built deep learning models for image classification and NLP with TensorFlow and PyTorch, and deployed an ML model via Flask API. Applied Linear Programming (PuLP) to optimize a business problem and delivered actionable insights.",
    },
];

export const projects = [
    {
        name: "Budget Buddy",
        description: "A mobile app (Flutter, Dart) to track and manage daily financial transactions with real-time account balance updates, interactive dashboards, category-based insights, and secure login/logout functionality.",
        tags: ["Flutter", "Dart", "Mobile App", "Finance"],
        image: `/budgetbuddy.png`,
        link: "https://github.com/vidyasagar-vadla/Budget_Buddy",
    },
    {
        name: "Exam Conductor and Preparator",
        description: "A KivyMD and MySQL-based application to streamline exam conduction for instructors, improve student participation, and simplify exam preparation and management.",
        tags: ["KivyMD", "MySQL", "Python", "Education"],
        image: `/exmconpre.png`,
        link: "https://github.com/vidyasagar-vadla/Exam-Conductor-and-Preparator",
    },
    {
        name: "Smart Feedback & Analysis System",
        description: "A full-stack feedback management system developed using React and Node.js with NLP-based sentiment analysis. Generates performance metrics, visual insights, and interactive dashboards with MySQL-backed role-based access control.",
        tags: ["React", "Node.js", "MySQL", "NLP", "Sentiment Analysis"],
        image: `/smartfeedback.png`,
        link: "https://github.com/vidyasagar-vadla/vidyasagar-vadla-smart-feedback-analysis-system",
    },
    {
        name: "Interview Slot Booking & Candidate Tracking System",
        description: "A DBMS-driven interview scheduling system with normalized relational schema, conflict-free slot allocation, audit logging, and lifecycle status management. Built with MySQL and a Python-based CLI interface.",
        tags: ["DBMS", "MySQL", "Python", "System Design", "CLI Application"],
        image: `/interviewtracking.png`,
        link: "https://github.com/vidyasagar-vadla/Interview-Slot-Booking-Candidate-Tracking-System",
    },

];

type Skill = {
    name: string;
    icon: ComponentType<{ className?: string }>;
}

type Skills = {
    [key: string]: Skill[];
}

export const skills: Skills = {
    "Languages & Frameworks": [
        { name: "Python", icon: Code },
        { name: "C", icon: Code },
        { name: "C++", icon: Code },
        { name: "Java", icon: Code },
        { name: "Dart", icon: Code },
        { name: "JavaScript", icon: Code },
        { name: "HTML/CSS", icon: Code },
        { name: "Node.js", icon: Code },
        { name: "Ruby", icon: Code },
        { name: "Flutter", icon: Code },
        { name: "KivyMD", icon: Code },
        { name: "TensorFlow", icon: Code },
    ],
    "Databases & Tools": [
        { name: "MySQL", icon: Database },
        { name: "SQLite", icon: Database },
        { name: "Firebase Realtime DB", icon: Database },
        { name: "GitHub", icon: GitBranch },
        { name: "Tableau", icon: Wrench },
        { name: "VSCode", icon: Wrench },
        { name: "Android Studio", icon: Wrench },
        { name: "Jupyter Notebook", icon: Wrench },
    ],
    "Domains": [
        { name: "Machine Learning", icon: Bot },
        { name: "Deep Learning", icon: Cpu },
        { name: "Artificial Intelligence", icon: Cpu },
        { name: "Mobile App Development", icon: Smartphone },
        { name: "Web App Development", icon: Globe },
    ],
};

export const education = [
    {
        degree: "B.Tech in Computer Science and Engineering (AI & ML)",
        institution: "JNTUH College of Engineering Manthani",
        years: "2022 – 2026",
        cgpa: "8.03 (up to 6th semester)",
    },
];
