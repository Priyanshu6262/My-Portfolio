/**
 * data.js — Central data store for portfolio content.
 * Edit this file to update all sections without touching components.
 */

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skills = {
  Frontend: [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript (ES6+)', level: 88 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Next.js', level: 75 },
  ],
  Backend: [
    { name: 'Node.js', level: 82 },
    { name: 'Express.js', level: 80 },
    { name: 'REST APIs', level: 85 },
    { name: 'JWT Auth', level: 78 },
  ],
  Database: [
    { name: 'MongoDB', level: 80 },
    { name: 'Mongoose ODM', level: 78 },
    { name: 'MySQL', level: 65 },
    { name: 'Firebase', level: 70 },
  ],
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'FootFlex E-Commerce',
    description:
      'Full-stack shoe e-commerce platform with JWT auth, cart system, admin dashboard, and AI-powered product descriptions using xAI Grok.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu',
  },
  {
    id: 2,
    title: 'QR Code Generator',
    description:
      'Web app to generate customized QR codes for URLs, text, and contact info. Supports download and color customization.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu',
  },
  {
    id: 3,
    title: 'Stepora Landing Page',
    description:
      'High-end e-commerce landing page with glassmorphism, animated hero, and admin-configurable content system.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu',
  },
  {
    id: 4,
    title: 'Inventory Manager',
    description:
      'Robust inventory system with size-color variant management, automated stock tracking, and order processing.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React'],
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'This very portfolio — a modern, responsive personal site with dark/light mode, AOS animations, and glassmorphism.',
    tags: ['React', 'Tailwind', 'Vite', 'AOS'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu',
  },
  {
    id: 6,
    title: 'MERN Blog Platform',
    description:
      'Full-stack blog with rich text editor, category filtering, comment system, and role-based admin panel.',
    tags: ['MERN', 'JWT', 'MongoDB', 'REST API'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu',
  },
]

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology — Computer Science',
    institution: 'Your University Name',
    year: '2021 – 2025',
    description: 'Specialized in full-stack web development, data structures, and software engineering principles.',
    grade: 'CGPA: 8.2 / 10',
  },
  {
    id: 2,
    degree: 'Intermediate (12th) — PCM',
    institution: 'Your School Name',
    year: '2019 – 2021',
    description: 'Focused on Physics, Chemistry, and Mathematics with strong foundation in logical reasoning.',
    grade: 'Percentage: 87%',
  },
  {
    id: 3,
    degree: 'High School (10th)',
    institution: 'Your School Name',
    year: '2017 – 2019',
    description: 'Achieved excellence in core subjects with an active interest in computers and technology.',
    grade: 'Percentage: 91%',
  },
]

// ─── CERTIFICATES ─────────────────────────────────────────────────────────────
export const certificates = [
  {
    id: 1,
    title: 'The Complete Web Developer Bootcamp',
    issuer: 'Udemy • 2024',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 2,
    title: 'Node.js, Express & MongoDB — Developer Course',
    issuer: 'Coursera • 2024',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 3,
    title: 'React — The Complete Guide (incl Hooks)',
    issuer: 'Udemy • 2023',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 4,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp • 2023',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop',
    link: '#',
  },
]

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
export const achievements = [
  {
    id: 1,
    icon: '🏆',
    title: 'Hackathon Winner',
    description: 'Won 1st place at the inter-college hackathon for building a real-time disaster alert system.',
  },
  {
    id: 2,
    icon: '⭐',
    title: '5-Star GitHub Contributor',
    description: 'Consistently contributed to open-source projects with over 200+ GitHub commits.',
  },
  {
    id: 3,
    icon: '🎓',
    title: 'Academic Excellence Award',
    description: 'Awarded for maintaining top 5% academic performance in the Computer Science department.',
  },
  {
    id: 4,
    icon: '🚀',
    title: '6+ Production Projects Deployed',
    description: 'Successfully designed, built, and deployed 6 full-stack applications to production.',
  },
  {
    id: 5,
    icon: '📜',
    title: '4+ Certified Courses',
    description: 'Completed industry-recognized certifications in MERN Stack, React, and Web Development.',
  },
  {
    id: 6,
    icon: '💡',
    title: 'Problem Solver',
    description: 'Solved 100+ DSA problems on LeetCode and HackerRank with focus on optimal solutions.',
  },
]
