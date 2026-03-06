import { icons, TLogoProp } from "@/Components/icons";
import { TProject } from "@/types/types";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

export const projects: TProject[] = [
  {
    id: "1",
    title: "StoryNest - Blogg App",
    slug: "story-next-blog-app",
    discription:
      "A MERN stack-based blogging platform with essential features for user interaction and content management, hosted on render and vercel",
    images: ["/images/social-blog-app-screenshot.png"],
    features: [
      "Integrated cloudinary for image uploads & transformations.",
      "Authentication: Sign up, log in, and recover passwords and integrate Google One Tap OAuth for a seamless experience.",
      "Profile Management: Edit profile avatar, username and other personal details.",
      "Post Creation: Create, edit, and delete blog posts with cover images. Includes a Rich Text Editor for easy formatting.",
      "Content Feed: Browse and explore posts from other users, sorted by the latest, with infinite scrolling.",
      "Search: Full-text search for posts and user profiles.",
      "Infinite Scroll: Posts, comments, and almost every list are loaded infinitely on scrolling.",
      "User Interaction: View and interact with other users' profiles and posts through likes, bookmarks, and comments.",
      "Performance Optimized: API preconnection for faster loading times.",
      "Responsive Design with light/Dark Mode.",
      "Secure against XXS Attack.",
      "And many more..",
    ],

    techStack: [
      "ReactJS",
      "TailwindCss",
      "Expressjs",
      "MongoDB",
      "React Query",
      "Typscript",
      "Cloudinary",
    ],

    githubURL: "https://github.com/divya-nsh/Social-Blog-App",
    liveURL: "https://story-nest-blog-app.vercel.app/",
  },
  {
    id: "2",
    title: "Mern todos",
    slug: "mern-stack-todos-app",
    discription:
      "Simple todo app where users can Login and add, edit, delete, and toggle the completion status of tasks he have to do. created this to practice mern stack and learn to deploy. Backend is hosted on a Render free service which spin down server after every 15 minute of inactivity resulting to coldstart",
    images: ["/images/mern-todos-screenshot.jpeg"],
    techStack: ["ReactJS", "MongoDB", "Expressjs", "TailwindCss", "Typescript"],
    githubURL: "https://github.com/divya-nsh/MERN-Todos",
    liveURL: "https://mern-todos-ten.vercel.app/",
  },
  {
    id: "3",
    title: "Tic-Tac-Toe Multiplayer (online)",
    slug: "tic-tac-toe-multiplayer-online",
    discription:
      "A classic turn-based Tic-Tac-Toe game that can be played offline or online by creating private rooms. Supports larger boards up to 6×6 for a more challenging experience",
    images: [
      "/images/tic-tac-toe-ultimate-screenshot.jpeg",
      "https://res.cloudinary.com/dets3mcof/image/upload/v1772784170/Personal-Portfolio-Assets/d483b6e1-43e5-4a17-b65a-6cebd43d1722.png",
    ],
    techStack: ["Node", "React", "Socket.io", "TailwindCss", "Typescript"],
    githubURL: "https://github.com/divya-nsh/Tic-Tac-Toe-Ultimate",
    liveURL: "https://tic-tac-toe-ultimate-eight.vercel.app/",
    features: [
      "Multiplayer Mode: Invite friends to private rooms using unique room codes.",
      "Customizable Board Sizes: Play on boards ranging from 3x3 to 6x6 for added complexity.",
      "Responsive Design: Enjoy a seamless gaming experience across devices.",
      "Real-time Updates: Experience smooth gameplay with instant move updates using Socket.io.",
      "Live Chat: Communicate with your opponent during the game using the integrated chat feature.",
      "Score Tracking: Keep track of wins, losses, and draws across multiple games.",
      "Offline Mode: Play against a friend on the same device without an internet connection.",
      "AI Opponent: Challenge yourself against a basic AI when playing offline.",
      "Intuitive UI: User-friendly interface with clear indicators for turns and game status.",
    ],
  },
  // {
  //   id: "3",
  //   title: "🕹️ Tic-Tac-Toe Game with AI",
  //   slug: "tic-tac-toe-game",
  //   discription:
  //     "Classic Tic-Tac-Toe game with an unbeatable AI powered by the Minimax algorithm, It can be played with a friend or against one of three computer difficulties. The game includes dynamic score tracking, responsive design and a clean user interface with some animations for an engaging experience. Think you can beat the hardest level? Give it a try!",
  //   imageURL: "/images/tic-tac-toe-screenshot.png",
  //   techStack: ["ReactJS", "TailwindCss", "TS"],
  //   githubURL: "https://github.com/divya-nsh/Tic-Tac-Toe-Game",
  //   liveURL: "https://tic-tac-toe-game-theta-fawn.vercel.app/",
  // },
  {
    id: "7",
    title: "ERP Sales Module (Work in Progress)",
    slug: "erp-sales-module",
    discription:
      "Worked on modernizing selective modules of an company existing ASP.NET Web Forms–based ERP system at Pegasus International Computer Co. by building a fast, responsive, and user-friendly interface using a modern stack. Developed a React-based UI to replace parts of the legacy interface while preserving the original workflow. Built Node.js APIs with TypeScript connected to the existing SQL Server database to handle data operations and ensure the new application behavior matched the legacy ERP system. Also implemented JWT-based authentication with multi-user support and access control, improving security, performance, and overall usability of the system.",
    images: [
      //Products PAge
      "https://res.cloudinary.com/dets3mcof/image/upload/v1772792231/Personal-Portfolio-Assets/8761846d-148f-4fbc-86c0-503fcbc06453.png",

      // Sales Order List Page
      "https://res.cloudinary.com/dets3mcof/image/upload/v1772792374/Personal-Portfolio-Assets/64839500-b2aa-436d-9708-b91d9fa0def7.png",

      // Edit Sales Order Page
      "https://res.cloudinary.com/dets3mcof/image/upload/v1772792431/Personal-Portfolio-Assets/bde21a1e-a32d-4803-9e30-bcea9dd9bddf.png",

      // Sales Order Page PArt 2
      "https://res.cloudinary.com/dets3mcof/image/upload/v1772792436/Personal-Portfolio-Assets/70df7ecd-9ebe-4af2-bd71-12dea85cd87b.png",
    ],
    techStack: [
      "ReactJS",
      "TailwindCss",
      "Nodejs",
      "Tanstack Router",
      "SQLServer",
      "Kysely (Query Builder)",
      "Typescript",
    ],
  },
  {
    id: "4",
    title: "Gift Chain Ai Landing Page",
    slug: "gift-chain-ai-landing-page",
    discription:
      "A visually appealing responsive web page built as part of the Scrimba JavaScriptmas Challenge 2024. This project involved transforming a Figma design (https://scrimba.com/links/santa-saas-figma) into a functional responsive web page. It was bit tricky to build using just html and css",
    images: [
      "/images/gift-chain-ai-screenshot.jpeg",
      "/images/gift-chain-ai-screenshot.jpeg",
    ],
    techStack: ["HTML", "CSS"],
    githubURL: "https://github.com/divya-nsh/Gift-Chain-Ai-Landing-Page",
    liveURL: " https://divya-nsh.github.io/Gift-Chain-Ai-Landing-Page/",
  },

  {
    id: "5",
    title: "JS Canva Particle Effect",
    slug: "javascript-canva-particle-effect",
    discription:
      "This is an interactive JavaScript-based particle animation creates a dynamic stream of multi-colored lights that follow the cursor as it moves across the canvas, gradually fading away. It also features a toggleable connection effect, where particles can be connected by lines. Intuition behind this project was to learn how to use JavaScript Canvas and create animations with it.",
    images: ["/images/canva-particle-screenshot.jpg"],
    techStack: ["Javascript"],
    githubURL: "https://github.com/divya-nsh/canva-particle-effect",
    liveURL: "https://canva-particle-effect.onrender.com/",
  },

  {
    id: "6",
    title: "Personal portfolio Website",
    slug: "personal-portfolio-website",
    discription:
      "You're currently browsing the website I built to showcase my skills and work. Developed with Next.js for speed, scalability, and SEO optimization.",
    features: [
      "Server-side rendering (SSR) for faster load times and better SEO.",
      "Static Site Generation (SSG) for projects pages.",
      "Utilizes React Server Components (RSC) for a smaller bundle size and improved performance.",
    ],
    images: ["/images/personal-site-screenshot.jpg"],

    techStack: ["Next.js", "TailwindCss"],
    githubURL: "https://github.com/divya-nsh/Personal-Portfolia-Website",
  },
];

export function getProject(idOrSlug?: string) {
  if (!idOrSlug) return null;
  return projects.find((v) => v.id === idOrSlug || v.slug === idOrSlug);
}

export const links = [
  {
    label: "Linkdin",
    Icon: LinkedinLogo,
    href: "https://www.linkedin.com/in/divyansh-soni-4a5810257/",
  },
  { label: "Github", Icon: GithubLogo, href: "https://github.com/divya-nsh" },
  { label: "Email", Icon: Envelope, href: "mailto:divyanshsoni279@gmail.com" },
  { label: "Twitter", Icon: XLogo, href: "https://x.com/divyansh_soni_0" },
];

export type Skill = {
  label: string;
  Icon: ((prop: TLogoProp) => React.ReactNode | React.JSX.Element) | string;
};

export const skills: Array<{ category: string; skills: Skill[] }> = [
  {
    category: "Frontend",
    skills: [
      { label: "ReactJS", Icon: icons.ReactJs },
      { label: "TailwindCSS", Icon: icons.TailwindCss },
      { label: "Tanstack Query", Icon: icons.ReactQuery },
      { label: "NextJS", Icon: icons.NextJs },
      { label: "Tanstack Router", Icon: "" },
      { label: "Tanstack Form", Icon: "" },
      { label: "Shadcn UI", Icon: "" },
      { label: "JavaScript", Icon: icons.Javascript },
      { label: "TypeScript", Icon: icons.Typescript },
      { label: "HTML", Icon: icons.HTML },
      { label: "CSS", Icon: icons.Css },
    ],
  },
  {
    category: "Backend",
    skills: [
      { label: "NodeJS", Icon: icons.NodeJS },
      { label: "ExpressJS", Icon: icons.ExpressJs },
      { label: "Prisma ORM", Icon: icons.prisma },
      { label: "MongoDB", Icon: icons.MongodbDB },
      { label: "PostgresSQL", Icon: "" },
      { label: "SQL", Icon: "" },
      { label: "REST-APIs", Icon: "" },
    ],
  },
  {
    category: "Tools & Other",
    skills: [
      { label: "Git & GitHub", Icon: icons.Github },
      // { label: "Figma", Icon: icons.Figma },
      { label: "Postman", Icon: icons.PostMan },
    ],
  },
];
