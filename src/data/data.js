/**
 * data.js — Central data store for portfolio content.
 * Edit this file to update all sections without touching components.
 */

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skills = {
  Frontend: [
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'HTML & CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    // { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  ],
  Backend: [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name: 'JWT Auth', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg' },
  ],
  Database: [
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    // { name: 'Mongoose ODM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
  ],
  'Programming Languages': [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  ],
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'FootFlex E-Commerce',
    description: 'Full-stack shoe e-commerce platform with JWT authentication, cart system, admin dashboard, and integrated AI chatbot for enhanced user interaction.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu6262/FootFlex.git',
  },
  {
    id: 2,
    title: 'AI Resume Maker',
    description: 'AI-powered resume builder application that generates professional resumes with customizable templates, real-time editing, and download functionality.',
    tags: ['AI', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu6262/AI-Resume-maker.git',
  },
  {
    id: 3,
    title: 'Meetzy – Video Chat Application',
    description: 'Real-time video chat application using MERN stack and WebRTC with meeting creation, join via code, and peer-to-peer communication support.',
    tags: ['MERN', 'WebRTC', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu6262/Meetzy-Video-Chat-Application.git',
  },
  {
    id: 4,
    title: 'Blogify',
    description: 'Blog web application built with Node.js, Express, MongoDB, and EJS allowing users to create, manage, and read dynamic blog content.',
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu6262/Blogify.git',
  },
  {
    id: 5,
    title: 'Maze Game',
    description: 'Interactive maze game using Python, Tkinter, and Prim’s algorithm featuring smooth navigation, dynamic maze generation, and user controls.',
    tags: ['Python', 'Tkinter', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu6262/Maze-Game.git',
  },
  {
    id: 6,
    title: 'Shopkeeper Billing System',
    description: 'Billing management system using Python and SQL with product entry, invoice generation, database storage, and efficient transaction handling.',
    tags: ['Python', 'SQL', 'Billing'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu6262/Shopkeeper-Billing-System.git',
  },
  {
    id: 7,
    title: 'Product Recommendation System',
    description: 'Product recommendation system using Python with data analysis, similarity algorithms, and personalized suggestions based on user preferences.',
    tags: ['Python', 'Data Analysis', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop',
    live: '#',
    github: 'https://github.com/Priyanshu6262/Business-Mini-Project.git',
  },
]

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Chandigarh University',
    year: '2024 – 2026',
    description: 'Pursuing advanced coursework in software engineering, advanced algorithms, and application development.',
    grade: 'CGPA: 6.8',
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Tilka Manjhi Bhagalpur University',
    year: '2020 – 2023',
    description: 'Studied core subjects including programming, database management systems, and computer architecture.',
    grade: 'Percentage: 71.28%',
  },
  {
    id: 3,
    degree: 'Higher Secondary (12th)',
    institution: 'R.S. College, Tarapur, Bihar',
    year: '2018 – 2020',
    description: 'Focused on core subjects with a strong foundation in logical reasoning and mathematics.',
    grade: 'Percentage: 64.4%',
  },
]

// ─── CERTIFICATES ─────────────────────────────────────────────────────────────
export const certificates = [
  {
    id: 1,
    title: 'ReactJS Course Completion',
    issuer: 'Infosys Springboard • Jan 2025',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop',
    link: 'https://verify.onwingspan.com',
  },
  {
    id: 2,
    title: 'Angular Course Completion',
    issuer: 'Infosys Springboard • Oct 2025',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&auto=format&fit=crop',
    link: 'https://verify.onwingspan.com',
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
