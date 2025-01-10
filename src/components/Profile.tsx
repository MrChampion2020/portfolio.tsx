
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import me from "../assets/champ.jpg";

export function Profile() {
  return (
    <div className="relative">
      {/* Background section with fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="h-32 sm:h-48 bg-white bg-[url('../assets/champ.jpg')] bg-cover bg-center opacity-40"
      ></motion.div>

      <div className="p-4">
        {/* Profile image with zoom-in animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-16 sm:top-24 left-4"
        >
          <Image
            src={me}
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full border-4 border-black sm:w-32 sm:h-32"
          />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-20"
        >
          {/* Text elements with staggered fade-in animation */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-white"
          >
            Champion Aden
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500"
          >
            @sirchampionad
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 text-sm sm:text-base text-white"
          >
            Full Stack Developer | React | Node.js | Free Lancer | Cyber Security Analyst
          </motion.p>

          {/* Links and stats with fade-in animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-y-1 gap-x-4 mt-2 text-gray-500 text-sm"
          >
            <span>📍 Lagos, Nigeria</span>
            <Link href="https://github.com/mrchampion2020" className="hover:underline">
              🔗 github.com/mrchampion
            </Link>
            <span>📅 Since September 2018</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex space-x-3 mt-2 text-sm sm:text-base text-white"
          >
            <span>
              <strong>1K+</strong> <span className="text-gray-500">Jobs Completed</span>
            </span>
            <span>
              <strong>1K+</strong> <span className="text-gray-500">Trained</span>
            </span>
            <span>
              <strong>5+</strong> <span className="text-gray-500">Scholarships Awarded</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
