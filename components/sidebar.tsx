"use client";

import {
  Mail,
  Download,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Sidebar() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/prashantttzz", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/prashantt-chouhan/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/Prashan47590482", label: "Twitter" },
  ];

  const contactInfo = [
    { icon: Mail, label: "EMAIL", value: "contact.prashant31@gmail.com" },
  ];

  return (
    <motion.div
      className="glass rounded-3xl p-6 lg:p-8 sticky z-40 top-32"
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-6">
        <motion.div
          className="relative w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl" />
          <div className="relative w-full h-full glasvs-button !rounded-2xl p-3 flex items-center justify-center overflow-hidden">
            <Image
              src="/3d.png"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-xl"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-xl lg:text-2xl font-heading font-medium mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Prashant chouhan
        </motion.h1>

        <motion.div
          className="inline-block bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-medium mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          Software Developer
        </motion.div>

        <motion.div
          className="flex justify-center space-x-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass-button !rounded-xl flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={14} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="space-y-4 mb-6">
        {contactInfo.map((contact, index) => (
          <motion.div
            key={contact.label}
            className="flex items-center group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ x: 5 }}
          >
            <div className="w-10 h-10 glass-button !rounded-xl flex items-center justify-center mr-3 group-hover:bg-accent/10 transition-colors">
              <contact.icon className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                {contact.label}
              </p>
              <p className="text-xs font-medium">{contact.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="space-y-5">
        <motion.button
          className="w-full bg-gradient-to-r from-accent to-accent/80 text-black font-medium py-3 px-4 rounded-xl flex items-center justify-center hover:from-accent/90 hover:to-accent/70 transition-all text-sm"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="/prashant chouhan.pdf" download className="flex">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>
        </motion.button>
<motion.a
  href="https://resumate-io.vercel.app/preview/prashant-resume"
  target="_blank"
  className="w-full text-accent font-medium py-3 px-4 cursor-pointer rounded-xl flex items-center  z-40 justify-center hover:from-accent/90 hover:to-accent/70 transition-all text-sm"
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
>
  <ArrowUpRight className="w-4 h-4 mr-2" />
  Live Resume
</motion.a>

      </div>
    </motion.div>
  );
}
