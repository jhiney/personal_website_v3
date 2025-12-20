import { Project } from "./types";
import { tickertronV2 } from "./projects/tickertron-v2";
import { personalWebsiteV3 } from "./projects/personal-website-v3";
import { famicomDesignSystem } from "./projects/famicom-design-system";
import { inventoryMonitor } from "./projects/inventory-monitor";

// Re-export types for backward compatibility with existing imports
export * from "./types";

export const projectsData: Project[] = [
  tickertronV2,
  personalWebsiteV3,
  famicomDesignSystem,
  inventoryMonitor,
];
