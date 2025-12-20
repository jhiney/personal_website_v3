import { Project } from "../types";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export const famicomDesignSystem: Project = {
    slug: "famicom-design-system",
    title: "Famicom Design System",
    description: "A custom design system inspired by the Super Nintendo Entertainment System. Includes a full-ish suite of reusable components.",
    brief: "Component Library",
    icon: SiReact,
    stack: [
        { name: "React", icon: SiReact },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "TypeScript", icon: SiTypescript },
    ],
    demoUrl: "/style_guide",
    repoUrl: "https://github.com/jhiney/super-famicon",
    content: `
### Level 1: Inspiration
I was watching a video about the AYN Thor 2, and noticed that there was a cool "Rainbow" colorway that evoked the old Super Famicom. I had also been thinking about re-writing my personal website, and I thought it would be fun to create a design system that was inspired by the Super Famicom, but with a modern twist.

### Level 2: Architecture
Built with React and Tailwind CSS, the components are designed to be reusable and customizable. The core principle was to avoid "flat" design and instead embrace depth, borders, and tactile interactions, reminiscent of physical buttons and plastic cartridges. The intentional use of "mouse up" events on buttons to navigate was to simulate the feel of pressing a button. When I tried using "mouse down" everything felt a little too flat

### Level 3: Components
The system includes a variety of components such as:
- **Buttons:** Modeled after the A, B, X, Y, and Shoulder buttons.
- **Cards:** Designed to look like game cartridges or plastic casings.
- **Badges:** Used for tags and status indicators, contrasting with the main palette.
- **Inputs:** Stylized form elements that fit the retro theme.

### Level 4: Consistency
One of the main challenges was maintaining a consistent "plastic" look across different components while ensuring accessibility and usability. This required iteratively tweaking shadows, borders, and color hues to get the perfect balance between retro charm and modern functionality.

Click the "DEMO" button above to check out the live Style Guide to see all components in action.
    `,
    screenshots: [],
};
