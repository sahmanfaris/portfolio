export interface Project {
  slug: string;
  titleKey: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "zoox",
    titleKey: "zoox",
    tech: ["React", "Koa", "MySQL"],
    image: "/images/projects/zoox.jpg",
    featured: true,
  },
  {
    slug: "clothing-shop",
    titleKey: "clothingShop",
    tech: ["React", "Node.js", "MongoDB", "React Native"],
    image: "/images/projects/clothing-shop.jpg",
    featured: true,
  },
  {
    slug: "erp-system",
    titleKey: "erp",
    tech: ["React", "Node.js", "MySQL", "Formik", "React Table"],
    image: "/images/projects/erp.jpg",
    featured: true,
  },
  {
    slug: "pickleball",
    titleKey: "pickleball",
    tech: ["Next.js 15", "React", "Tailwind CSS", "shadcn/ui", "React Query", "Zustand"],
    image: "/images/projects/pickleball.jpg",
    featured: true,
  },
  {
    slug: "vognplan",
    titleKey: "vognplan",
    tech: ["React", "Node.js", "MongoDB", "React Native"],
    image: "/images/projects/vognplan.jpg",
    featured: false,
  },
  {
    slug: "ebus",
    titleKey: "ebus",
    tech: ["React", "Spring", "Java"],
    image: "/images/projects/ebus.jpg",
    featured: false,
  },
  {
    slug: "odemshop",
    titleKey: "odemshop",
    tech: ["WordPress", "WooCommerce", "PHP"],
    image: "/images/projects/odemshop.jpg",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
