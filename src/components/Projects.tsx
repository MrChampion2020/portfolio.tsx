'use client'

import { useState } from 'react'

const tabs = ['Projects', 'Skills', 'Experience'] as const
type Tab = typeof tabs[number]

export function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('Projects')

  return (
    <div className="p-4">
      <nav className="flex border-b border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeTab === tab
                ? 'text-white border-b-2 border-blue-500'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="mt-4 space-y-4">
        {activeTab === 'Projects' && (
          <>
            <ProjectCard
              title="E-commerce Platform"
              date="May 15, 2023"
              description="Built a full-stack e-commerce platform using React, Node.js, and MongoDB."
              tags={['React', 'Node.js', 'MongoDB', 'Express']}
            />
            <ProjectCard
              title="Task Management App"
              date="March 1, 2023"
              description="Developed a Kanban-style task management application with real-time updates."
              tags={['React', 'Firebase', 'Tailwind CSS']}
            />
          </>
        )}
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  date,
  description,
  tags,
}: {
  title: string
  date: string
  description: string
  tags: string[]
}) {
  return (
    <div className="border border-gray-800 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <time className="text-sm text-gray-500">{date}</time>
      <p className="mt-2 text-gray-300">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

