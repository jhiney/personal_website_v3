import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Project } from "../types";

export const personalWebsiteV3: Project = {
  slug: "personal-website-v3",
  title: "Personal Website v3",
  description: "My personal portfolio built with Next.js and Tailwind.",
  stack: [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },

  ],
  repoUrl: "https://github.com/jhiney/personal_website_v3",
  icon: SiNextdotjs,
  content: `
## Why a Rewrite?
My previous website was built with Svelte, which I love, but I wanted to gain more experience with the Next.js.

## Design Philosophy
Check out the page on the [Famicon Design System](/projects/famicom-design-system) to see more insights into the design process.
`,
};

