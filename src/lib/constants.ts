import type { Project, Skill } from "@/types";

export const PROJECTS: Project[] = [
    {
        id: "neural-dashboard",
        title: "Neural Dashboard",
        category: "Web Development",
        description: "Full-stack React application with real-time data visualization and AI-powered analytics.",
        technologies: ["Next.js", "TypeScript", "WebGL", "Node.js", "tRPC"],
        color: "from-emerald-400 to-cyan-400",
        liveUrl: "https://neural-dashboard.brm.dev",
        githubUrl: "https://github.com/brm/neural-dashboard",
    },
    {
        id: "network-infrastructure",
        title: "Network Infrastructure",
        category: "Networking",
        description: "Enterprise-grade network architecture design with automated monitoring and security protocols.",
        technologies: ["Cisco", "Python", "Docker", "Kubernetes"],
        color: "from-blue-400 to-purple-400",
    },
    {
        id: "brand-identity",
        title: "Brand Identity System",
        category: "Graphic Design",
        description: "Complete visual identity including logo design, typography, and digital brand guidelines.",
        technologies: ["Figma", "Adobe CC", "Blender", "After Effects"],
        color: "from-pink-400 to-red-400",
    },
    // ... more projects
];

export const SKILLS: Skill[] = [
    { name: "React/Next.js", level: 95, category: "frontend" },
    { name: "TypeScript", level: 92, category: "frontend" },
    { name: "Three.js/WebGL", level: 88, category: "frontend" },
    { name: "Network Security", level: 92, category: "networking" },
    { name: "UI/UX Design", level: 85, category: "design" },
    { name: "DevOps/Cloud", level: 90, category: "backend" },
    { name: "Motion Graphics", level: 82, category: "design" },
    { name: "tRPC", level: 87, category: "backend" },
];

export const CONTACT_INFO = {
    email: "contact@brm.dev",
    linkedin: "https://linkedin.com/in/brm",
    github: "https://github.com/brm",
    location: "Cape Town, South Africa",
};