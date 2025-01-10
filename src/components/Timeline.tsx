// import { Project } from './Project'

// export function Timeline() {
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
//       title: 'Task Management App',
//       description: 'Developed a Kanban-style task management application with real-time updates.',
//       date: '2023-03-01',
//       tech: ['React', 'Firebase', 'Tailwind CSS']
//     },
//     {
//       id: 3,
//       title: 'Weather Forecast App',
//       description: 'Created a weather forecast application using React and integrating with a weather API.',
//       date: '2023-01-10',
//       tech: ['React', 'API Integration', 'Styled Components']
//     }
//   ]

//   return (
//     <section className="p-4">
//       <nav className="flex border-b border-gray-800 mb-4 overflow-x-auto">
//         <button className="px-4 py-2 font-semibold border-b-2 border-blue-500 whitespace-nowrap">Projects</button>
//         <button className="px-4 py-2 text-gray-500 whitespace-nowrap">Skills</button>
//         <button className="px-4 py-2 text-gray-500 whitespace-nowrap">Experience</button>
//       </nav>
//       <div className="space-y-4">
//         {projects.map(project => (
//           <Project key={project.id} {...project} />
//         ))}
//       </div>
//     </section>
//   )
// }


'use client'
import { Project } from './Project';
import { useState } from 'react';

export function Timeline() {
  const [activeTab, setActiveTab] = useState('projects');
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB.',
      date: '2023-05-15',
      tech: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Developed a Kanban-style task management application with real-time updates.',
      date: '2023-03-01',
      tech: ['React', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'Created a weather forecast application using React and integrating with a weather API.',
      date: '2023-01-10',
      tech: ['React', 'API Integration', 'Styled Components']
    }
  ];

  const skills = [
    {
      id: 1,
      name: 'JavaScript',
      level: 'Advanced'
    },
    {
      id: 2,
      name: 'React',
      level: 'Advanced'
    },
    {
      id: 3,
      name: 'Node.js',
      level: 'Intermediate'
    },
    {
      id: 4,
      name: 'MongoDB',
      level: 'Intermediate'
    }
  ];

  const experience = [
    {
      id: 1,
      company: 'ABC Corporation',
      position: 'Frontend Developer',
      date: '2022-01-01 - 2023-01-01',
      description: 'Developed multiple web applications using React and Node.js.'
    },
    {
      id: 2,
      company: 'DEF Startups',
      position: 'Fullstack Developer',
      date: '2021-06-01 - 2021-12-31',
      description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB.'
    }
  ];

  return (
    <section className="p-4">
      <nav className="flex border-b border-gray-800 mb-4 overflow-x-auto lg:w-[90%] w-[90%] mx-auto">
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
        <div className="space-y-4 lg:w-[90%] w-[90%] mx-auto">
          {projects.map(project => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      )}
      {activeTab === 'skills' && (
        <div className="space-y-4 lg:w-[90%] w-[90%] mx-auto">
          {skills.map(skill => (
            <div key={skill.id} className="flex justify-between">
              <p className="text-lg">{skill.name}</p>
              <p className="text-lg">{skill.level}</p>
            </div>
          ))}
        </div>
      )}
      {activeTab === 'experience' && (
        <div className="space-y-4 lg:w-[90%] w-[90%] mx-auto">
          {experience.map(exp => (
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