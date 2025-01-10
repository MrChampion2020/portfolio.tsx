

'use client';

import Link from 'next/link';
import { Home, User, Briefcase, Mail, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const bubbleVariants = {
  rest: { scale: 0.8, opacity: 0 },
  hover: { 
    scale: 1.2, 
    opacity: 0.2,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    }
  },
};

const iconVariants = {
  rest: { y: 0 },
  hover: { y: -3 },
};

const NavItem = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link href={href} className={`relative group flex items-center space-x-3 text-xl p-3 rounded-lg transition-colors ${isActive ? 'text-blue-500' : 'text-gray-300 hover:text-blue-500'}`}>
        <motion.div
          className="absolute inset-0 bg-white rounded-lg"
          variants={bubbleVariants}
          initial="rest"
          whileHover="hover"
        />
        <motion.div variants={iconVariants} initial="rest" whileHover="hover" className="z-10">
          <Icon className="w-6 h-6 transition-colors group-hover:text-blue-500" />
        </motion.div>
        <span className="hidden lg:inline z-10">{label}</span>
      </Link>
    </li>
  );
};

export function Sidebar() {
  return (
    <aside className="fixed bottom-0 lg:top-0 w-full lg:w-64 bg-black border-t lg:border-r border-gray-800 z-50">
      <div className="h-full flex lg:flex-col justify-between p-4">
        <nav className="w-full">
          <ul className="flex lg:flex-col justify-around lg:justify-start lg:space-y-4">
            <NavItem href="/" icon={Home} label="Home" />
            <NavItem href="/about" icon={User} label="About" />
            <NavItem href="/projects" icon={Briefcase} label="Projects" />
            <NavItem href="/contact" icon={Mail} label="Contact" />
          </ul>
        </nav>
        <div className="hidden lg:block">
          <NavItem href="/settings" icon={Settings} label="Settings" />
        </div>
      </div>
    </aside>
  );
}

