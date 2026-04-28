export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools & DevOps" | "Design";
  level: number; // 1-5
}

export const projects: Project[] = [
  {
    slug: "ai-dashboard",
    title: "AI Analytics Dashboard",
    description:
      "A real-time analytics platform powered by machine learning, featuring interactive charts, predictive insights, and customizable widgets.",
    longDescription:
      "Built a full-stack analytics platform that ingests streaming data and surfaces AI-driven insights. The dashboard features real-time WebSocket updates, interactive D3.js visualizations, and a drag-and-drop widget system. The ML pipeline runs on a FastAPI backend with scikit-learn models for anomaly detection and trend forecasting. Deployed on AWS with auto-scaling and a Redis cache layer for sub-100ms query times.",
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "AWS", "D3.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/ai-dashboard.jpg",
    featured: true,
    year: 2024,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A high-performance online store with server-side rendering, Stripe payments, inventory management, and a headless CMS backend.",
    longDescription:
      "Designed and built a production-grade e-commerce platform serving thousands of daily users. Implemented server-side rendering for SEO, integrated Stripe for secure payments with webhook handling, and built a custom inventory management system. The headless CMS (Sanity) powers product content, and Algolia provides instant search. Achieved a 98 Lighthouse performance score through aggressive image optimization and edge caching.",
    techStack: ["Next.js", "TypeScript", "Stripe", "Sanity", "Algolia", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/ecommerce.jpg",
    featured: true,
    year: 2024,
  },
  {
    slug: "devops-pipeline",
    title: "CI/CD Pipeline Toolkit",
    description:
      "An open-source toolkit for building automated deployment pipelines with Docker, Kubernetes, and GitHub Actions integration.",
    longDescription:
      "Created an open-source CLI toolkit that scaffolds production-ready CI/CD pipelines. Supports Docker multi-stage builds, Kubernetes manifests generation, GitHub Actions workflows, and Terraform infrastructure-as-code templates. The tool has been adopted by over 500 developers and has 1.2k GitHub stars. Includes a web dashboard for monitoring pipeline runs and deployment history.",
    techStack: ["Go", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus", "Grafana"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/devops.jpg",
    featured: true,
    year: 2023,
  },
  {
    slug: "realtime-collab",
    title: "Real-Time Collaboration Tool",
    description:
      "A Notion-inspired collaborative workspace with real-time editing, rich text, nested pages, and team permissions.",
    longDescription:
      "Built a collaborative document editor using operational transformation for conflict-free real-time editing. Features include rich text editing with Tiptap, nested page hierarchies, inline comments, @mentions, and granular team permissions. The backend uses Elixir/Phoenix for low-latency WebSocket connections handling thousands of concurrent editors. Includes offline support with automatic sync on reconnect.",
    techStack: ["React", "TypeScript", "Elixir", "Phoenix", "Tiptap", "PostgreSQL", "WebSockets"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/collab.jpg",
    featured: false,
    year: 2023,
  },
  {
    slug: "mobile-fitness",
    title: "Fitness Tracking App",
    description:
      "A cross-platform mobile app for workout tracking, nutrition logging, and progress visualization with social features.",
    longDescription:
      "Developed a cross-platform fitness app using React Native with a Node.js backend. Features include custom workout builder, barcode scanner for nutrition tracking, Apple Health/Google Fit integration, and social challenges. The app uses ML to provide personalized workout recommendations based on user history. Achieved 4.8 stars on the App Store with 10k+ downloads.",
    techStack: ["React Native", "TypeScript", "Node.js", "MongoDB", "TensorFlow Lite", "Expo"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/fitness.jpg",
    featured: false,
    year: 2022,
  },
  {
    slug: "blockchain-wallet",
    title: "Web3 Wallet Interface",
    description:
      "A multi-chain cryptocurrency wallet with DeFi integrations, NFT gallery, and transaction history analytics.",
    longDescription:
      "Built a non-custodial Web3 wallet interface supporting Ethereum, Polygon, and Solana. Features include token swaps via Uniswap/Jupiter aggregators, NFT gallery with metadata rendering, transaction history with gas analytics, and WalletConnect integration. The interface uses ethers.js and @solana/web3.js for blockchain interactions, with a custom indexer for fast transaction history queries.",
    techStack: ["React", "TypeScript", "ethers.js", "Solana Web3.js", "WalletConnect", "The Graph"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/wallet.jpg",
    featured: false,
    year: 2022,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 5 },
  { name: "Next.js", category: "Frontend", level: 5 },
  { name: "TypeScript", category: "Frontend", level: 5 },
  { name: "Tailwind CSS", category: "Frontend", level: 5 },
  { name: "Framer Motion", category: "Frontend", level: 4 },
  { name: "React Native", category: "Frontend", level: 4 },
  { name: "Vue.js", category: "Frontend", level: 3 },
  { name: "D3.js", category: "Frontend", level: 3 },
  // Backend
  { name: "Node.js", category: "Backend", level: 5 },
  { name: "Python", category: "Backend", level: 4 },
  { name: "Go", category: "Backend", level: 3 },
  { name: "PostgreSQL", category: "Backend", level: 4 },
  { name: "MongoDB", category: "Backend", level: 4 },
  { name: "Redis", category: "Backend", level: 4 },
  { name: "GraphQL", category: "Backend", level: 4 },
  { name: "REST APIs", category: "Backend", level: 5 },
  // Tools & DevOps
  { name: "Docker", category: "Tools & DevOps", level: 4 },
  { name: "Kubernetes", category: "Tools & DevOps", level: 3 },
  { name: "AWS", category: "Tools & DevOps", level: 4 },
  { name: "Vercel", category: "Tools & DevOps", level: 5 },
  { name: "GitHub Actions", category: "Tools & DevOps", level: 4 },
  { name: "Terraform", category: "Tools & DevOps", level: 3 },
  // Design
  { name: "Figma", category: "Design", level: 4 },
  { name: "UI/UX Design", category: "Design", level: 4 },
  { name: "Design Systems", category: "Design", level: 4 },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Email", href: "mailto:alex@example.com", icon: "Mail" },
];

export const contactInfo = {
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
};

export const personalInfo = {
  name: "Alex Morgan",
  title: "Full-Stack Engineer",
  tagline: "I build fast, beautiful, and scalable web experiences.",
  bio: "I'm a full-stack engineer with 5+ years of experience crafting high-performance web applications. I specialize in React/Next.js on the frontend and Node.js/Python on the backend, with a passion for clean architecture, developer experience, and pixel-perfect UIs.",
  bio2: "When I'm not shipping code, you'll find me contributing to open source, writing technical articles, or exploring the latest in AI/ML tooling. I believe great software is built at the intersection of engineering rigor and thoughtful design.",
  location: "San Francisco, CA",
  email: "alex@example.com",
  available: true,
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "40+" },
    { label: "Open Source Stars", value: "2.1k" },
    { label: "Happy Clients", value: "30+" },
  ],
};
