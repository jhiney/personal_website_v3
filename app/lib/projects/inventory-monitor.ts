import { Project } from "../types";
import { SiPython, SiDigitalocean } from "react-icons/si";

export const inventoryMonitor: Project = {
    slug: "inventory-monitor",
    title: "Shopify Inventory Monitor",
    description: "A simple, configurable Python script to monitor Shopify and other websites for knife restocks (or any other products) and send notifications via ntfy.sh.",
    brief: "Inventory Tracker",
    icon: SiPython,
    stack: [
        { name: "Python", icon: SiPython },
        { name: "Digital Ocean", icon: SiDigitalocean },
    ],
    demoUrl: "",
    repoUrl: "https://github.com/jhiney/inventory_monitor",
    content: `
### Overview
This project is a Python-based automation tool designed to monitor e-commerce websites for product restocks. It was originally built to track knife inventory but can be configured for any product. It supports both Shopify's JSON API for reliable tracking and generic regex-based scraping for other platforms.

### Key Features
- **Shopify Integration:** Leverages the Shopify JSON API to monitor collections efficiently without parsing HTML.
- **Universal Support:** Includes a regex-based monitor to track products on non-Shopify websites.
- **Smart Notifications:** Integrates with [ntfy.sh](https://ntfy.sh) to deliver push notifications to iOS, Android, and Desktop devices.
- **State Management:** Maintains a local state of known inventory to prevent duplicate notifications for existing items.
- **Availability Filtering:** Can be configured to alert only when items are actually in stock.

### How It Works
The script runs as a scheduled task or cron job. It fetches product data from configured sources, compares it against the locally stored state, and triggers a notification if a new or restocked item is detected. The configuration is handled via a JSON file, making it easy to add or remove sites without touching the code.

### Tech Stack
Built with **Python** using the \`requests\` library for network operations. The simplicity of the stack ensures it can run on minimal hardware like a Raspberry Pi or a small VPS.
    `,
    screenshots: [],
};
