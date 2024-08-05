import {
  maria,
  creator,
  mobile,
  web, 
  css,
  figma,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  clipboard,
  globalsphere,
  universityIcon,
  cearteIcon,
  githubIcon,
  freecodecampIcon,
  codingIcon,
  backend,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UX Research",
    icon: web,
  },
  {
    title: "UI Design",
    icon: mobile,
  },
  {
    title: "Front End Developer",
    icon: backend, 
  },
  {
    title: "Project Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "UX/UI Engineering",
    company_name: "BIT - Beam Institute of Technology",
    icon: codingIcon,
    iconBg: "white",
    date: "Jan 2024 - Jul 2024",
    points: [
      "Developed skills in front-end development and UX/UI design",
      "Learned to create and manage design projects, build dynamic web applications, and improve development processes",
      "Enhanced abilities with user interface libraries and tools for documenting and testing UI components",
      "Focused on responsive and user-friendly web application design",
    ],
  },
  {
    title: "User Experience (UX) Design",
    company_name: "University of Georgia",
    icon: universityIcon,
    iconBg: "white",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired foundational knowledge in UX design and digital technologies to enhance the visitor experience",
      "Focused on user-centered design principles, discovery and evaluation cycles, and UX design techniques",
      "Learned to gather user needs, design interfaces, and evaluate solutions",
      "Emphasized systematic and data-driven design processes",
      "Equipped with skills to create effective user-centered solutions",
    ],
  },
  {
    title: "Museography and Heritage Management",
    company_name: "CEARTE",
    icon: cearteIcon,
    iconBg: "white",
    date: "Sep 2011 - Dec 2013",
    points: [
      "Managed collections, organized exhibitions, and oversaw acquisitions in a museum or gallery",
      "Designed and implemented engaging and educational exhibitions",
      "Oversaw the preservation and promotion of cultural heritage sites",
      "Supported the technical and operational aspects of museum exhibits and collections",
    ],
  },
  {
    title: "GitHub Professional Certificate",
    company_name: "GitHub",
    icon: githubIcon,
    iconBg: "white",
    date: "Jun 2024 - Jul 2024",
    points: [
      "Learned to create automation workflows using GitHub Actions",
      "Gained skills in managing and collaborating on projects using GitHub",
      "Explored and practiced using GitHub’s AI development tool, Copilot",
      "Learned to efficiently search and manage code on GitHub",
    ],
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    company_name: "freeCodeCamp",
    icon: freecodecampIcon,
    iconBg: "white",
    date: "May 2024 - Jul 2024",
    points: [
      "Developed strong skills in JavaScript algorithms and data structures",
      "Explored and practiced using GitHub’s AI development tool, Copilot",
      "Gained proficiency in solving complex coding challenges and optimizing solutions",
    ],
  },
];

const projects = [
  {
    name: "eCommerce Website",
    description:
      "Web-based platform that allows users to browse, purchase, and manage their orders , providing a seamless and enjoyable shopping experience .",
    tags: [
      { name: "#react", color: "text-blue-500" },
      { name: "#nodejs", color: "text-green-500" },
      { name: "#tailwind", color: "text-pink-500" },
    ],
    image: maria,
    live_link: "https://raphaelavazq.github.io/e-commerce-React-final-project/",
    source_code_link: "https://github.com/Raphaelavazq/e-commerce-React-final-project",
    figma_link: "https://www.figma.com/proto/zp6efoo0pcCU0wmPOrz7NT/Maria-e_commerce-Website?page-id=6945%3A24354&node-id=6980-9045&viewport=99%2C246%2C0.08&t=2R3AdJ4peafbrbx9-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    name: "Landing Page",
    description:
      "Web application that enables users to track and organize everything they copy across all their devices.",
    tags: [
      { name: "#react", color: "text-blue-500" },
      { name: "#scss", color: "text-pink-500" },
    ],
    image: clipboard,
    live_link: "https://clipboard-landing-page-7cj.pages.dev/",
    source_code_link: "https://github.com/Raphaelavazq/Clipboard-Landing-Page",
    figma_link: "https://www.figma.com/design/gdfBerR4YFaY9iCjjavMWW/clipboard-landing-page?node-id=0-1&t=nfXQsmzyBg82fLMW-1",
  },
  {
    name: "Event Hub",
    description:
      "Web app connecting individuals globally to events in music, culture, tech, and more, offering a guide to popular events and fostering a community of enthusiasts.",
    tags: [
      { name: "#html", color: "text-blue-500" },
      { name: "#css", color: "text-green-500" },
      { name: "#javascript", color: "text-yellow-500" },
    ],
    image: globalsphere,
    live_link: "https://raphaelavazq.github.io/globalSphere/",
    source_code_link: "https://github.com/Raphaelavazq/globalSphere/tree/main",
    figma_link: "https://figma.com/your-figma-link",
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rafaela proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rafaela does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rafaela optimized our website, our traffic increased by 50%. We can't thank her enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, projects, testimonials };