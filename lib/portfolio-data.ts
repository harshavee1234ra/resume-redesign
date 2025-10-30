// Centralized content derived from the provided resume image

export const person = {
  name: "Harshavardhan Bodapati",
  title: "Full Stack Developer",
  tagline: "Building clean, scalable web apps with React, Node.js, and cloud services.",
  contact: {
    phone: "+91-9704257475",
    email: "harshavardhan80956@gmail.com",
    github: "https://github.com/harsha33983",
    // Add LinkedIn or personal site here when available
  },
  about:
    "Versatile and detail-oriented Full Stack Developer with a strong foundation in both frontend and backend technologies. Passionate about building scalable web applications with clean, efficient code and user-friendly interfaces. Proficient in React and Node.js, with hands-on experience in REST APIs, databases (SQL & NoSQL), and cloud services. A quick learner, collaborative team player, and problem-solver who thrives in dynamic environments and enjoys turning ideas into digital reality.",
}

export const skills = [
  {
    category: "Programming",
    items: ["Python", "Java", "JavaScript"],
    level: 80,
    icon: "Code",
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React.js", "Tailwind CSS"],
    level: 85,
    icon: "Layout",
  },
  {
    category: "Backend",
    items: ["Node.js", "REST API", "EXPRESS.JS"],
    level: 75,
    icon: "Server",
  },
  {
    category: "Databases",
    items: ["MongoDB", "SQL", "SUPABASE"],
    level: 70,
    icon: "Database",
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Firebase", "Postman"],
    level: 80,
    icon: "Wrench",
  },
  {
    category: "Cloud",
    items: ["Vercel"],
    level: 65,
    icon: "Cloud",
  },
]

export const education = [
  {
    school: "NIT Trichy",
    degree: "B.Tech in Computer Science and Engineering (AI & DS)",
    period: "2023 – 2027",
    detail: "CGPA: 8.40 / 10",
  },
  {
    school: "Narayana Junior College, Vijayawada",
    degree: "Intermediate (XII)",
    period: "2020 – 2022",
    detail: "Percentage: 94",
  },
  {
    school: "Sri Chaitanya High School, Vijayawada",
    degree: "SSC (X)",
    period: "2020",
    detail: "GPA: 10 / 10",
  },
]

export const projects = [
  {
    name: "ResuMaster",
    subtitle: "AI-Powered Resume Builder & Analyzer",
    description:
      "A modern, responsive, and intelligent resume-building platform built with TypeScript, Tailwind CSS, and AI capabilities. Users can sign up, create/edit resumes using pre-designed templates, preview in real time, and download resumes and AI-generated analysis reports.",
    highlights: [
      "Firebase Authentication (email/password) with per-user dashboards",
      "Multiple responsive resume templates with real-time preview",
      "AI Resume Analyzer with insights, keyword density, and ATS-focused suggestions",
      "Supabase-backed resume storage (save, update, retrieve) with secure access",
      "One-click PDF export for resumes and AI feedback reports",
      "Fully responsive UI using Tailwind CSS",
    ],
    links: [{ label: "Live Demo", href: "https://radiant-lebkuchen-11fa53.netlify.app/" }],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Auth",
      "Supabase",
      "AI (OpenAI/custom)",
      "html2pdf.js / react-to-pdf",
    ],
  },
  {
    name: "Streamflix",
    subtitle: "A Movie Streaming Platform",
    description:
      "Responsive Netflix-inspired streaming app to browse, search, and watch trailers/full movies via a clean UI.",
    highlights: [
      "Firebase Authentication (protected routing)",
      "TMDB API for real-time movies/TV data by trends/genres",
      "Embedded YouTube player for trailers and full content",
      "Intelligent search with optional voice input",
    ],
    links: [{ label: "Live Demo", href: "https://harshastreamflix.netlify.app" }],
    tech: ["React", "Firebase Auth", "TMDB API", "YouTube Embed"],
  },
  {
    name: "Harsha Music Player",
    subtitle: "Feature-rich Music Player",
    description:
      "A modern, feature-rich music player built with React, TypeScript, and the YouTube API. Search, play, and organize your favorite music with an intuitive interface and powerful features.",
    highlights: [
      "YouTube Integration to search and play millions of songs",
      "Smart Search with text and voice input tuned for music queries",
      "Continuous playback with auto-play queue and seamless transitions",
      "Full media controls: play, pause, next/previous, seek, and volume",
      "Queue management to view and control the current playlist",
      "Sleep Timer with preset/custom durations and auto-stop",
      "Responsive, modern UI with dark theme and smooth animations",
      "LocalStorage-powered liked songs and custom playlists",
      "Audio/video toggle, thumbnails, and full-screen support",
    ],
    links: [{ label: "Live Demo", href: "https://harshamusicc.netlify.app" }],
    tech: ["React", "TypeScript", "YouTube API", "LocalStorage", "Speech Recognition (voice search)"],
  },
]

export const experience = [
  // No formal roles provided; keep an inviting placeholder for recruiters.
  {
    company: "Open to Opportunities",
    role: "Intern / Full-time (Software)",
    period: "Currently",
    details: [
      "Looking for roles where I can contribute across the stack (React, Node.js, databases).",
      "Demonstrated skills through Streamflix and ResuMaster projects.",
    ],
  },
]

export const achievements = ["CGPA 8.40/10 (B.Tech, AI & DS)", "94% (Intermediate XII)", "10/10 GPA (SSC X)"]
