import React from 'react';
import { Target, Layers, Cpu } from 'lucide-react';

export const projectsData = [
  {
    id: "rk-care",
    title: "RK The Complete Care",
    shortDescription: "Bridging the Gap Between Specialized Physiotherapy and Digital Clinic Management.",
    fullDescription: "RK The Complete Care is a high-performance, full-stack healthcare ecosystem designed specifically for modern physiotherapy clinics. It serves as a dual-sided platform, providing patients with a seamless booking and recovery experience while empowering clinic administrators with robust operational tools. The platform addresses the fragmentation in traditional clinic management by unifying appointment scheduling, patient records, and recovery guides into a single, secure environment. Built with the MERN stack, it prioritizes data integrity and real-time responsiveness to ensure critical healthcare information is always accessible and protected.",
    stats: [
      { label: "Success Rate", value: "98%" },
      { label: "Patients Managed", value: "1000+" },
      { label: "Specialized Doctors", value: "5+" },
      { label: "Clinical Experience", value: "10+ Years" }
    ],
    techFeatures: [
      "Secure JWT-based Multi-Role Authentication",
      "Automated Appointment Scheduling System",
      "Dynamic Admin Command Center",
      "High-Performance RESTful API Architecture",
      "Multipart File Management with Multer",
      "One-Click WhatsApp & Call Integration",
      "Interactive Google Maps Clinic Navigation",
      "Mobile-First Fluid Interface with Tailwind CSS"
    ],
    coreFeatures: [
      "Booking system (clinic + video consultation)",
      "Patient & appointment management",
      "Services & recovery guides",
      "Testimonials system",
      "Contact system"
    ],
    adminFeatures: [
      "Manage appointments (pending, confirmed, completed)",
      "Patient management",
      "Doctor management",
      "Content management (banners, posters)",
      "Dashboard analytics"
    ],
    impact: [
      "Production-Ready Medical Infrastructure",
      "40% Reduction in Administrative Overhead",
      "Elimination of Manual Scheduling Conflicts",
      "Architected for Cross-Regional Scaling"
    ],
    techStack: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS", "Razorpay"],
    challenges: "Implementing a multi-tenant architecture for doctors and patients while ensuring data security was the primary challenge. I optimized database queries with MongoDB aggregation pipelines to handle concurrent bookings efficiently.",
    image: "/projects/rk care.png",
    liveLink: "https://rk-complete-care.vercel.app/",
    githubLink: "https://github.com/hani8104/rk-complete-care",
    icon: <Target className="text-blue-400" size={20} />,
    status: "Live",
    isFeatured: true,
    metrics: { users: "1000+", performance: "98%", apis: "15+" }
  },
  {
    id: "grocify",
    title: "Grocify",
    shortDescription: "A professional Grocery Web Application built with the MERN stack, featuring REST APIs and secure authentication.",
    fullDescription: "Grocify is an end-to-end e-commerce solution for grocery shopping. It includes a user-friendly product catalog, real-time inventory management, and a streamlined checkout process. The platform is built for speed and scalability.",
    features: [
      "User Authentication with JWT & Bcrypt",
      "Search & Filter functionality for products",
      "Dynamic Shopping Cart & Order Tracking",
      "Admin Panel for Inventory Management",
      "Responsive UI optimized for all devices"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Framer Motion"],
    challenges: "Managing state for a complex shopping cart across different page sessions was challenging. I implemented persistent local storage and optimized state management for better performance.",
    image: "/projects/grocify.png",
    liveLink: "#",
    githubLink: "https://github.com/hani8104/grocify",
    icon: <Layers className="text-green-400" size={20} />,
    status: "Completed",
    isFeatured: true,
    metrics: { users: "200+", performance: "95%", apis: "8+" }
  },
  {
    id: "workout-tracker",
    title: "Workout Tracker",
    shortDescription: "An interactive Workout Tracking application with complete CRUD APIs and progress visualization.",
    fullDescription: "This Workout Tracker helps fitness enthusiasts log their daily exercises, sets, and reps. It provides visual insights into their progress over time using charts and graphs. The backend is designed for high-availability.",
    features: [
      "Customizable Exercise Logging (CRUD)",
      "Progress Visualization with Charts",
      "User Specific Activity History",
      "Goal Setting & Achievement tracking",
      "Mobile-First Responsive Design"
    ],
    techStack: ["MERN Stack", "Tailwind CSS", "Recharts", "Render Deployment"],
    challenges: "Generating real-time charts from user-logged data required efficient data aggregation. I implemented server-side calculations to reduce client-side processing overhead.",
    image: "/projects/workout.png",
    liveLink: "https://workout-tracker-fawn.vercel.app/",
    githubLink: "https://github.com/hani8104/workout-tracker",
    icon: <Cpu className="text-orange-400" size={20} />,
    status: "Live",
    isFeatured: false,
    metrics: { users: "150+", performance: "92%", apis: "6+" }
  }
];
