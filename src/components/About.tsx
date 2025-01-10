
"use client"

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="my-8 lg:w-[80%] w-[90%] mx-auto">
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="lg:w-[60%] w-[99%] mx-auto"
        style={{ color: "lightgrey" }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        I'm Sir Champion Aden, a passionate and versatile Full-Stack Developer with expertise in both web and mobile technologies. 
        I specialize in building responsive and scalable applications using technologies such as React, JavaScript, TypeScript, Node.js, PHP, MongoDB, SQL, React Native, and more. 
        My focus is on creating high-performance applications while ensuring security best practices are followed to safeguard data and prevent vulnerabilities.
      </motion.p>
      <motion.p 
        className="lg:w-[60%] w-[99%] mx-auto mt-4"
        style={{ color: "lightgrey" }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Whether building intuitive user interfaces with React, developing powerful backends with Node.js, or securing applications from cyber threats, 
        I am always learning and improving my skills to provide innovative solutions. I am also experienced in both mobile and web development, ensuring the user experience is consistent across platforms.
      </motion.p>
    </section>
  );
}
