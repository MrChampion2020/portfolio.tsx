

// 'use client'
// import { Project } from './Project';
// import { useState } from 'react';

// export function Timeline() {
//   const [activeTab, setActiveTab] = useState('projects');
//   const projects = [
//     {
//       id: 1,
//       title: 'E-commerce Platform',
//       description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB.',
//       date: '2023-05-15',
//       tech: ['React', 'Node.js', 'MongoDB', 'Express']
//     },
//     {
//       id: 2,
//       title: 'Dating App and Web',
//       description: 'Developed a material ui and tailwind css powered mobile and web applications with real-time chats and patment systems.',
//       date: '2023-03-01',
//       tech: ['React', 'Firebase', 'Tailwind CSS', 'React Native', 'Node Js', 'Stripe', 'Websocket']
//     },
//     {
//       id: 3,
//       title: 'Banking Solution',
//       description: 'Created banking solution web based application using React and Node Js.',
//       date: '2023-01-10',
//       tech: ['React', 'API Integration', 'Styled Components', 'Payment Transfers']
//     }
//   ];

//   const skills = [
//     {
//       id: 1,
//       name: 'JavaScript',
//       level: 'Advanced'
//     },
//     {
//       id: 2,
//       name: 'React',
//       level: 'Advanced'
//     },
//     {
//       id: 3,
//       name: 'Node.js',
//       level: 'Intermediate'
//     },
//     {
//       id: 4,
//       name: 'MongoDB',
//       level: 'Intermediate'
//     }
//   ];

//   const experience = [
//     {
//       id: 1,
//       company: 'ABC Corporation',
//       position: 'Frontend Developer',
//       date: '2022-01-01 - 2023-01-01',
//       description: 'Developed multiple web applications using React and Node.js.'
//     },
//     {
//       id: 2,
//       company: 'DEF Startups',
//       position: 'Fullstack Developer',
//       date: '2021-06-01 - 2021-12-31',
//       description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB.'
//     }
//   ];

//   return (
//     <section className="p-4">
//       <nav className="flex border-b border-gray-800 mb-4 overflow-x-auto lg:w-[95%] w-[95%] mx-auto">
//         <button
//           className={`px-4 py-2 font-semibold border-b-2 ${
//             activeTab === 'projects' ? 'border-blue-500' : 'border-transparent'
//           } whitespace-nowrap`}
//           onClick={() => setActiveTab('projects')}
//         >
//           Projects
//         </button>
//         <button
//           className={`px-4 py-2 text-gray-500 whitespace-nowrap ${
//             activeTab === 'skills' ? 'border-b-2 border-blue-500' : ''
//           }`}
//           onClick={() => setActiveTab('skills')}
//         >
//           Skills
//         </button>
//         <button
//           className={`px-4 py-2 text-gray-500 whitespace-nowrap ${
//             activeTab === 'experience' ? 'border-b-2 border-blue-500' : ''
//           }`}
//           onClick={() => setActiveTab('experience')}
//         >
//           Experience
//         </button>

//       </nav>


//       {activeTab === 'projects' && (
//         <div className="space-y-4 lg:w-[95%] w-[95%] mx-auto">
//           {projects.map(project => (
//             <Project key={project.id} {...project} />
//           ))}
//         </div>
//       )}
//       {activeTab === 'skills' && (
//         <div className="space-y-4 lg:w-[90%] w-[90%] mx-auto">
//           {skills.map(skill => (
//             <div key={skill.id} className="flex justify-between">
//               <p className="text-lg">{skill.name}</p>
//               <p className="text-lg">{skill.level}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       {activeTab === 'experience' && (
//         <div className="space-y-4 lg:w-[90%] w-[90%] mx-auto">
//           {experience.map(exp => (
//             <div key={exp.id} className="space-y-2">
//               <p className="text-lg font-bold">{exp.company}</p>
//               <p className="text-lg">{exp.position}</p>
//               <p className="text-lg">{exp.date}</p>
//               <p className="text-lg">{exp.description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

'use client'
import { useState } from 'react';

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
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB.',
    date: '2022-07-15',
    tech: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 2,
    title: 'Dating App and Web',
    description: 'Developed mobile and web applications with real-time chats and payment systems.',
    date: '2023-05-01',
    tech: ['Firebase', 'expo', 'Node.js', 'Stripe']
  },
  {
    id: 3,
    title: 'Banking Solution',
    description: 'Created a banking solution web-based application using React and Node.js.',
    date: '2024-06-10',
    tech: ['Swift', 'Node Js', 'Verve', 'Transfers']
  }
];

const skills: Skill[] = [
  { id: 1, name: 'JavaScript', level: 'Advanced' },
  { id: 2, name: 'React', level: 'Advanced' },
  { id: 3, name: 'Node.js', level: 'Intermediate' },
  { id: 4, name: 'MongoDB', level: 'Intermediate' },
  { id: 5, name: 'TypeScript', level: 'Advanced' },
  { id: 6, name: 'Cybersecurity', level: 'Intermediate' },
  { id: 7, name: 'PHP', level: 'Intermediate' },
  { id: 8, name: 'HTML', level: 'Advanced' },
  { id: 9, name: 'SQL', level: 'Advanced' },
  { id: 10, name: 'CSS', level: 'Advanced' }
];

const experience: Experience[] = [
  {
    id: 1,
    company: 'Scottified Technology Limited',
    position: 'PHP Developer and Tutor',
    date: '2018-04-07 - 2022-03-01',
    description: 'Developed multiple web applications using Php, html, css and javascript.'
  },
  {
    id: 2,
    company: 'Runorx',
    position: 'Fullstack Developer',
    date: '2022-06-01 - 2024-12-31',
    description: 'Built full-stack e-commerce banking platforms using React, Node.js, and MongoDB.'
  }
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
    <div className="mb-6">
      <h3 className="font-bold text-lg">{skill.name}</h3>
      <div className="relative pt-2">
        <div className="h-2 bg-gray-300 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="absolute top-0 right-0 text-xs text-blue-600">{percentage}%</div>
      </div>
      <p className="text-sm text-gray-500">{skill.level} level</p>
    </div>
  );
};

export function Timeline() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section className="p-4">
      <nav className="flex border-b border-gray-800 mb-4 overflow-x-auto lg:w-[95%] w-[90%] mx-auto">
        <button
          className={`px-4 py-2 font-semibold border-b-2 ${
            activeTab === 'projects' ? 'border-blue-500' : 'border-transparent'
          } whitespace-nowrap`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={`px-4 py-2 text-gray-500 whitespace-nowrap ${
            activeTab === 'skills' ? 'border-b-2 border-blue-500' : ''
          }`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button
          className={`px-4 py-2 text-gray-500 whitespace-nowrap ${
            activeTab === 'experience' ? 'border-b-2 border-blue-500' : ''
          }`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
      </nav>

      {activeTab === 'projects' && (
        <div className="space-y-4 lg:w-[95%] w-[95%] mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="space-y-2">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm">{project.date}</p>
              <p>{project.description}</p>
              <div className="flex space-x-2 text-sm">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-gray-300 py-1 px-2 rounded-md text-black">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'skills' && (
        <div className="space-y-4 lg:w-[90%] w-[90%] mx-auto">
          {skills.map((skill) => (
            <SkillBar key={skill.id} skill={skill} />
          ))}
        </div>
      )}

      {activeTab === 'experience' && (
        <div className="space-y-4 lg:w-[90%] w-[90%] mx-auto">
          {experience.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <p className="text-lg font-bold">{exp.company}</p>
              <p className="text-lg">{exp.position}</p>
              <p className="text-lg">{exp.date}</p>
              <p className="text-lg">{exp.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
