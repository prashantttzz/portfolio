import { clsx, type ClassValue } from "clsx"
import { Brain, HomeIcon, Instagram, MailIcon, Printer, Projector } from "lucide-react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "About" },
    { href: "/Projects", icon: Brain, label: "Projects" },
  ],
  contact: {
    social: {
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/prashanttzz/",
        icon: Instagram,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: MailIcon,
      },
    },
  },
};
