import Link from 'next/link';

export const metadata = {
  title: 'Projects | Cristian Leo',
  description: 'Open-source Data Science and AI projects by Cristian Leo',
};

const githubProjects = [
  {
    title: 'models-from-scratch-python',
    description: 'A comprehensive repository dedicated to recreating popular machine learning models from scratch using only Python and NumPy.',
    link: 'https://github.com/cristianleoo/models-from-scratch-python',
    stars: 124,
    forks: 37,
    tags: ['Python', 'Machine Learning', 'NumPy'],
  },
  {
    title: 'rag-knowledge-graph',
    description: 'Implementation of Retrieval-Augmented Generation (RAG) using Knowledge Graphs for enhanced context retrieval in LLMs.',
    link: 'https://github.com/cristianleoo/rag-knowledge-graph',
    stars: 35,
    forks: 9,
    tags: ['RAG', 'Knowledge Graphs', 'LLM'],
  },
  {
    title: 'montecarlo-portfolio-management',
    description: 'A quantitative finance tool for portfolio management and risk analysis utilizing Monte Carlo simulations.',
    link: 'https://github.com/cristianleoo/montecarlo-portfolio-management',
    stars: 21,
    forks: 7,
    tags: ['Finance', 'Monte Carlo', 'Python'],
  },
  {
    title: 'InfluencerPy',
    description: 'A specialized CLI application designed to automate social media management and interaction tasks.',
    link: 'https://github.com/cristianleoo/InfluencerPy',
    stars: 11,
    forks: 0,
    tags: ['CLI', 'Automation', 'Social Media'],
  },
  {
    title: 'Reinforcement-Learning',
    description: 'A collection of deep dives and implementations of various Reinforcement Learning algorithms and environments.',
    link: 'https://github.com/cristianleoo/Reinforcement-Learning',
    stars: 9,
    forks: 2,
    tags: ['RL', 'Q-Learning', 'Gymnasium'],
  },
  {
    title: 'gradient-flow-optimizer-neural-networks',
    description: 'Interactive visualization and optimizer analysis tool to monitor gradient flow in deep neural networks.',
    link: 'https://github.com/cristianleoo/gradient-flow-optimizer-neural-networks',
    stars: 4,
    forks: 1,
    tags: ['Streamlit', 'Neural Networks', 'Viz'],
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-32">
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 border-l-4 border-emerald-500 pl-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-6 uppercase">
            Open Source Repositories
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl font-medium leading-relaxed">
            A real-time collection of my most impactful work in AI, Machine Learning, and Quantitative Finance, hosted on GitHub.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {githubProjects.map((project, idx) => (
            <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
              <div className="flex flex-col justify-between h-full p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] group-hover:-translate-y-2">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                      {project.title}
                    </h2>
                    <div className="flex flex-col items-end text-[10px] font-black uppercase text-zinc-400 dark:text-zinc-600 tracking-widest">
                      <div className="flex items-center space-x-1">
                        <span>★</span>
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>⑂</span>
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-10 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="inline-flex items-center px-3 py-1 rounded-md text-[9px] uppercase tracking-tighter font-black bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 font-medium">Want to see all my contributions?</p>
          <a 
            href="https://github.com/cristianleoo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black hover:scale-105 transition-transform shadow-2xl"
          >
            Visit my GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
}
