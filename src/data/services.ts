import { Code, Server, Smartphone, Database, Rocket, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  featuresKey: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "web-development",
    titleKey: "webDev",
    descriptionKey: "webDev",
    featuresKey: "webDev",
    icon: Code,
  },
  {
    id: "backend-development",
    titleKey: "backend",
    descriptionKey: "backend",
    featuresKey: "backend",
    icon: Server,
  },
  {
    id: "mobile-development",
    titleKey: "mobile",
    descriptionKey: "mobile",
    featuresKey: "mobile",
    icon: Smartphone,
  },
  {
    id: "database-design",
    titleKey: "database",
    descriptionKey: "database",
    featuresKey: "database",
    icon: Database,
  },
  {
    id: "devops",
    titleKey: "devops",
    descriptionKey: "devops",
    featuresKey: "devops",
    icon: Rocket,
  },
  {
    id: "consulting",
    titleKey: "consulting",
    descriptionKey: "consulting",
    featuresKey: "consulting",
    icon: Wrench,
  },
];
