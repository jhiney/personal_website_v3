import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

import { ScrollToTop } from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 bg-plastic-light text-plastic-text font-sans">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
