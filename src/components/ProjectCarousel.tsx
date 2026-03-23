'use client';

import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
  stars: number;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'models-from-scratch-python',
    description: 'Recreating popular machine learning models from scratch using only Python and NumPy.',
    link: 'https://github.com/cristianleoo/models-from-scratch-python',
    stars: 124,
    tags: ['ML', 'Python']
  },
  {
    title: 'rag-knowledge-graph',
    description: 'Implementation of Retrieval-Augmented Generation (RAG) using Knowledge Graphs.',
    link: 'https://github.com/cristianleoo/rag-knowledge-graph',
    stars: 35,
    tags: ['RAG', 'LLMs']
  },
  {
    title: 'InfluencerPy',
    description: 'A specialized CLI application designed to automate social media management and interaction tasks.',
    link: 'https://github.com/cristianleoo/InfluencerPy',
    stars: 11,
    tags: ['CLI', 'Automation']
  },
  {
    title: 'montecarlo-portfolio-management',
    description: 'Quantitative finance tool for risk analysis using Monte Carlo simulations.',
    link: 'https://github.com/cristianleoo/montecarlo-portfolio-management',
    stars: 21,
    tags: ['Finance', 'Simulation']
  },
  {
    title: 'Reinforcement-Learning',
    description: 'Deep dives into RL algorithms and gymnasium environments.',
    link: 'https://github.com/cristianleoo/Reinforcement-Learning',
    stars: 9,
    tags: ['RL', 'Q-Learning']
  }
];

const displayProjects = [...projects, ...projects];

export default function ProjectCarousel() {
  return (
    <div className="group relative w-full py-10">
      {/* Gradient Fades for depth */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-32 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent md:block" />

      <div className="overflow-x-auto px-6 md:overflow-hidden md:px-0">
        <div className="flex w-max gap-6 motion-reduce:animate-none md:gap-10 md:animate-[marquee_36s_linear_infinite] md:group-hover:[animation-play-state:paused]">
          {displayProjects.map((project, i) => (
          <a
            key={`${project.title}-${i}`}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/card relative flex h-[280px] w-[85vw] max-w-[400px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            {/* Tech Decoration */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex space-x-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded italic">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="font-mono text-[10px] text-zinc-400 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>v1.0.4</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 font-mono group-hover/card:text-blue-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed line-clamp-3 font-medium">
                {project.description}
              </p>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-zinc-300 dark:text-zinc-700 uppercase tracking-tighter">Identity_Hash</span>
                <span className="text-[10px] font-mono text-zinc-400">
                  0x{project.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0).toString(16).toUpperCase().padStart(6, '0')}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-zinc-900 dark:text-white">★ {project.stars}</span>
                <span className="text-[9px] font-black uppercase text-blue-600">Explore &rarr;</span>
              </div>
            </div>
          </a>
          ))}
        </div>
      </div>
    </div>
  );
}
