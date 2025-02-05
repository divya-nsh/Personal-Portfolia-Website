import { icons, TLogoProp } from "@/Components/icons";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

export const projects = [
  {
    id: "1",
    title: "StoryNest - Blogg App",
    slug: "story-next-blog-app",
    discription:
      "A MERN stack-based blogging platform with essential features for user interaction and content management, hosted on render and vercel",
    imageURL: "/images/social-blog-app-screenshot.png",
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
    imageURL: "/images/mern-todos-screenshot.jpeg",
    techStack: ["ReactJS", "MongoDB", "Expressjs", "TailwindCss", "Typescript"],
    githubURL: "https://github.com/divya-nsh/MERN-Todos",
    liveURL: "https://story-nest-blog-app.vercel.app/",
  },
  {
    id: "3",
    title: "🕹️ Tic-Tac-Toe Game with AI",
    slug: "tic-tac-toe-game",
    discription:
      "Classic Tic-Tac-Toe game with an unbeatable AI powered by the Minimax algorithm, It can be played with a friend or against one of three computer difficulties. The game includes dynamic score tracking, responsive design and a clean user interface with some animations for an engaging experience. Think you can beat the hardest level? Give it a try!",
    imageURL: "/images/tic-tac-toe-screenshot.png",
    techStack: ["ReactJS", "TailwindCss", "TS"],
    githubURL: "https://github.com/divya-nsh/Tic-Tac-Toe-Game",
    liveURL: "https://tic-tac-toe-game-theta-fawn.vercel.app/",
  },
  {
    id: "4",
    title: "Gift Chain Ai Landing Page",
    slug: "gift-chain-ai-landing-page",
    discription:
      "A visually appealing responsive web page built as part of the Scrimba JavaScriptmas Challenge 2024. This project involved transforming a Figma design (https://scrimba.com/links/santa-saas-figma) into a functional responsive web page. It was bit tricky to build using just html and css",
    imageURL: "/images/gift-chain-ai-screenshot.jpeg",
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
    imageURL: "/images/canva-particle-screenshot.jpg",
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
    imageURL: "/images/personal-site-screenshot.jpg",

    techStack: ["Next.js", "TailwindCss"],
    githubURL: "XXXXXXXXXXXXXXXXXXXXXX",
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
      { label: "JavaScript", Icon: icons.Javascript },
      { label: "TypeScript", Icon: icons.Typescript },
      { label: "ReactJS", Icon: icons.ReactJs },
      { label: "NextJS", Icon: icons.NextJs },
      { label: "TailwindCSS", Icon: icons.TailwindCss },
      { label: "React Query", Icon: icons.ReactQuery },
      { label: "Redux", Icon: icons.Redux },
      { label: "HTML", Icon: icons.HTML },
      { label: "CSS", Icon: icons.Css },
    ],
  },
  {
    category: "Backend",
    skills: [
      { label: "NodeJS", Icon: icons.NodeJS },
      { label: "ExpressJS", Icon: icons.ExpressJs },
      { label: "EJS", Icon: icons.EJS },
      { label: "MongoDB", Icon: icons.MongodbDB },
      { label: "REST-APIs", Icon: "" },
    ],
  },
  {
    category: "Tools & version control",
    skills: [
      { label: "Git", Icon: icons.Git },
      { label: "GitHub", Icon: icons.Github },
      { label: "Figma", Icon: icons.Figma },
      { label: "Postman", Icon: icons.PostMan },
    ],
  },
];
