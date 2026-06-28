// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: 'Manthan Bhegade',
  firstName: 'Manthan',
  lastName: 'Bhegade',
  role: 'Full-Stack Developer',
  roleHighlight: 'UI Enthusiast',
  tagline:
    'Full-Stack MERN Developer, Machine Learning Enthusiast, and Problem Solver building scalable and impactful digital solutions.',
  email: 'manthanbhegade407@gmail.com',
  github: 'https://github.com/Manthan-Bhegade7781',
  linkedin: 'https://www.linkedin.com/in/manthanbhegade',
  location: 'Pune, Maharashtra, India',
  resumeUrl: 'https://drive.google.com/file/d/1YATQk53VQoIxwfmevZ0F7KvXQ2UQpt0V/view?usp=sharing',
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { num: '2+', label: 'Years of experience' },
  { num: '10+', label: 'Projects completed' },
  { num: '10+', label: 'Technologies mastered' },
  { num: '100+', label: 'DSA Question Solved' },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    title: 'Frontend',
    emoji: '⚛️',
    color: 'rgba(124,108,252,.12)',
    tags: [
    'React.js', 'Vite', 'JavaScript', 'HTML5',
    'CSS3', 'Tailwind CSS', 'Bootstrap',
    'Responsive Design'
    ],
  },
  {
    title: 'Backend',
    emoji: '🛠️',
    color: 'rgba(110,231,183,.1)',
    tags: [
    'Node.js', 'Express.js', 'REST APIs',
    'MongoDB', 'MySQL', 'PostgreSQL',
    'Django'
    ],
  },
  {
    title: 'Programming & ML',
    emoji: '🧠',
    color: 'rgba(251,191,36,.1)',
    tags: [
    'C++', 'Python', 'Machine Learning',
    'Data Structures', 'Algorithms',
    'Object-Oriented Programming',
    'Problem Solving'
    ],
  },
  {
    title: 'Tools & Platforms',
    emoji: '🔧',
    color: 'rgba(167,139,250,.1)',
    tags: [
    'Git', 'GitHub', 'VS Code',
    'Postman', 'Jira',
    'Vercel', 'GitHub Pages'
    ],
  }
]


// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
{
title: 'MERN Blog Platform',
description:
'A full-stack blogging platform built using the MERN stack featuring user authentication, JWT-based authorization, blog creation, editing, image uploads, and responsive UI. Implemented secure authentication with cookies and role-based access control.',
emoji: '📝',
color: 'rgba(124,108,252,.12)',
stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
liveUrl: 'https://mern-blog-platform-one.vercel.app/',
githubUrl: 'https://github.com/Manthan-Bhegade7781/mern-blog-platform',
featured: true,
},

{
title: 'Crop Recommendation System',
description:
'An intelligent machine learning application that recommends the most suitable crop based on soil nutrients, temperature, humidity, pH, and rainfall. Implemented multiple ML algorithms to deliver accurate crop predictions through an interactive web interface.',
emoji: '🌱',
color: 'rgba(110,231,183,.1)',
stack: ['Python', 'Machine Learning', 'React', 'JavaScript', 'Scikit-learn'],
liveUrl: '#',
githubUrl: 'https://github.com/Manthan-Bhegade7781/Crop-Recommendation-System-Using-Machine-Learning',
featured: true,
},

{
title: 'Personal Portfolio Website',
description:
'A modern, fully responsive portfolio website showcasing projects, technical skills, certifications, and achievements. Built with React and Vite featuring smooth animations, interactive UI, and optimized performance.',
emoji: '🌐',
color: 'rgba(251,191,36,.1)',
stack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
liveUrl: '#',
githubUrl: 'https://github.com/Manthan-Bhegade7781/my-portfolio',
featured: true,
},

{
title: 'URL Shortener',
description:
'A full-stack URL shortening application that allows users to generate short URLs, manage links, and track URL usage. Implemented authentication, secure routing, and MongoDB integration for persistent data storage.',
emoji: '🔗',
color: 'rgba(239,68,68,.1)',
stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'JWT'],
liveUrl: '#',
githubUrl: 'https://github.com/Manthan-Bhegade7781/URL-Shortner',
featured: false,
},
]


// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'Bachelor of Engineering — Computer Engineering',
    institution: 'Pimpri Chinchwad University',
    period: '2023 — Present',
    grade: 'CGPA: 8.51 / 10',
    description:
      'Focused on core computer science fundamentals including data structures, algorithms, operating systems, and database management. Developed multiple academic projects using web technologies.',
    highlights: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management',
      'Web Technologies',
      'Object-Oriented Programming',
      'Computer Networks',
    ],
    icon: '🎓',
    color: 'rgba(124,108,252,.12)',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Maharashtra State Board',
    period: '2021 — 2023',
    grade: 'Percentage: 77%',
    description:
      'Completed HSC with Physics, Chemistry, and Mathematics as core subjects. Developed a strong analytical foundation and problem-solving mindset.',
    highlights: ['Physics', 'Chemistry', 'Mathematics'],
    icon: '📚',
    color: 'rgba(110,231,183,.1)',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Maharashtra State Board',
    period: '2021',
    grade: 'Percentage: 91%',
    description:
      'Completed SSC with distinction. Demonstrated exceptional performance in Mathematics and Science, sparking an interest in technology and computing.',
    highlights: ['Mathematics', 'Science', 'English'],
    icon: '🏫',
    color: 'rgba(251,191,36,.1)',
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
{
name: 'Agile with Atlassian Jira',
issuer: 'Atlassian',
year: '2024',
icon: '📋',
},
{
name: 'Django Web Framework',
issuer: 'Coursera',
year: '2024',
icon: '🌐',
},
{
name: 'Blockchain Specialization',
issuer: 'University at Buffalo',
year: '2025',
icon: '⛓️',
},
{
name: 'IBM Machine Learning',
issuer: 'Coursera',
year: '2025',
icon: '🤖',
},
{
name: 'Introduction to Software Testing',
issuer: 'University of Minnesota',
year: '2025',
icon: '🧪',
},
{
name: 'Operating System Fundamentals',
issuer: 'NPTEL',
year: '2024',
icon: '💻',
},
]

