
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  tech: string[];
}

interface Skill {
  id: number;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface Experience {
  id: number;
  company: string;
  position: string;
  date: string;
  description: string;
}

const projects: Project[] = [
  { id: 1, title: 'E-commerce Platform', description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB.', date: '2022-07-15', tech: ['React', 'Node.js', 'MongoDB', 'Express'] },
  { id: 2, title: 'Dating App and Web', description: 'Developed mobile and web applications with real-time chats and payment systems.', date: '2023-05-01', tech: ['Firebase', 'expo', 'Node.js', 'Stripe'] },
  { id: 3, title: 'Banking Solution', description: 'Created a banking solution web-based application using React and Node.js.', date: '2024-06-10', tech: ['Swift', 'Node Js', 'Verve', 'Transfers'] }
];

const skills: Skill[] = [
  { id: 1, name: 'JavaScript', level: 'Advanced' },
  { id: 2, name: 'React', level: 'Advanced' },
  { id: 3, name: 'Node.js', level: 'Advanced' },
  { id: 4, name: 'MongoDB', level: 'Advanced' },
  { id: 5, name: 'TypeScript', level: 'Intermediate' },
  { id: 6, name: 'Cybersecurity', level: 'Intermediate' },
  { id: 7, name: 'PHP', level: 'Intermediate' },
  { id: 8, name: 'HTML', level: 'Advanced' },
  { id: 9, name: 'SQL', level: 'Advanced' },
  { id: 10, name: 'CSS', level: 'Advanced' }
];

const experience: Experience[] = [
  { id: 1, company: 'Scottified Technology Limited', position: 'PHP Developer and Tutor', date: '2018-04-07 - 2022-03-01', description: 'Developed multiple web applications using Php, html, css and javascript.' },
  { id: 2, company: 'Runorx', position: 'Fullstack Developer', date: '2022-06-01 - 2024-12-31', description: 'Built full-stack e-commerce banking platforms using React, Node.js, and MongoDB.' }
];

const levelToPercentage = (level: 'Beginner' | 'Intermediate' | 'Advanced'): number => {
  switch (level) {
    case 'Beginner':
      return 30;
    case 'Intermediate':
      return 60;
    case 'Advanced':
      return 90;
    default:
      return 0;
  }
};

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const percentage = levelToPercentage(skill.level);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <h3 className="font-bold text-lg">{skill.name}</h3>
      <div className="relative pt-2">
        <div className="h-2 bg-gray-300 rounded-full">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="absolute top-0 right-0 text-xs text-blue-600">{percentage}%</div>
      </div>
      <p className="text-sm text-gray-500">{skill.level} level</p>
    </motion.div>
  );
};

export function Timeline() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section className="p-4">
      <nav className="flex border-b border-gray-800 mb-4 overflow-x-auto lg:w-[95%] w-[90%] mx-auto">
        <button
          className={`px-4 py-2 font-semibold border-b-2 ${activeTab === 'projects' ? 'border-blue-500' : 'border-transparent'} whitespace-nowrap`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={`px-4 py-2 text-gray-500 whitespace-nowrap ${activeTab === 'skills' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button
          className={`px-4 py-2 text-gray-500 whitespace-nowrap ${activeTab === 'experience' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === 'projects' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-4 lg:w-[95%] w-[95%] mx-auto"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm">{project.date}</p>
                <p>{project.description}</p>
                <div className="flex space-x-2 text-sm">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-gray-300 py-1 px-2 rounded-md text-black">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'skills' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-4 lg:w-[90%] w-[90%] mx-auto"
          >
            {skills.map((skill) => (
              <SkillBar key={skill.id} skill={skill} />
            ))}
          </motion.div>
        )}

        {activeTab === 'experience' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-4 lg:w-[90%] w-[90%] mx-auto"
          >
            {experience.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <p className="text-lg font-bold">{exp.company}</p>
                <p className="text-lg">{exp.position}</p>
                <p className="text-lg">{exp.date}</p>
                <p className="text-lg">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
