import { IconType } from "react-icons";

export type Project = {
    slug: string;
    title: string;
    brief?: string;
    description: string;
    stack: { name: string; icon: IconType }[];
    icon?: IconType;
    content: string;
    screenshots?: string[];
    repoUrl?: string;
    demoUrl?: string;
    status?: 'active' | 'construction' | 'archived';
};
