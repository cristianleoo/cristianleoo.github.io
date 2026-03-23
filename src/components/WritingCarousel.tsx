'use client';

import React, { useState, useEffect, useRef } from 'react';

interface BlogPost {
  title: string;
  date: string;
  link: string;
  image: string;
  subtitle: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "I Dissected Two Language Models to Find Out Where They Hide Their Cybersecurity Knowledge",
    subtitle: "A causal-tracing experiment comparing SecureBERT 2.0 and ModernBERT to locate factual associations.",
    date: "Feb 11, 2026",
    link: "https://medium.com/@cristianleo120/i-dissected-two-language-models-to-find-out-where-they-hide-their-cybersecurity-knowledge-c48d2dc76a33",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*3SPDtbueYuiqzf-W1OseUw.png"
  },
  {
    title: "Recursive Language Models: The End of Context Rot",
    subtitle: "Moving beyond infinite context windows toward more efficient, human-like recursive processing.",
    date: "Jan 22, 2026",
    link: "https://medium.com/@cristianleo120/recursive-language-models-the-end-of-context-rot-649fc51885ea",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*W4PPhPCIVr-leJ6HJbIqZw.png"
  },
  {
    title: "2026: The Year AI Goes Smarter, Not Bigger",
    subtitle: "Why the era of brute-force scaling is ending in favor of architectural efficiency and native agency.",
    date: "Jan 6, 2026",
    link: "https://medium.com/@cristianleo120/2026-the-year-ai-goes-smarter-not-bigger-646e34e700a4",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*BPcSZourltM1M4jQQ8mw9w.png"
  },
  {
    title: "How Brain-Inspired AI is Revolutionizing Complex Reasoning",
    subtitle: "Exploring hierarchical reasoning models that bridge the gap between System 1 and System 2 thinking.",
    date: "Aug 5, 2025",
    link: "https://medium.com/@cristianleo120/how-brain-inspired-ai-is-revolutionizing-complex-reasoning-e784c1a21ac1",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*Oj0ZVOLvdGL7AjgYlTimCw.png"
  },
  {
    title: "The Math Behind Graph Attention Networks (GAT)",
    subtitle: "A deep dive into message passing, attention mechanisms, and building GNNs from scratch.",
    date: "Feb 19, 2025",
    link: "https://medium.com/gitconnected/the-math-behind-graph-attention-networks-gat-3358796efcfc",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*iPXL9NVkuG0wbphC"
  }
];

export default function WritingCarousel() {
  const [offset, setOffset] = useState(0);
  const requestRef = useRef<number>(null);
  
  const displayPosts = [...blogPosts, ...blogPosts, ...blogPosts];

  const animate = () => {
    setOffset((prev) => {
      const next = prev + 0.4;
      const threshold = blogPosts.length * 490;
      return next > threshold ? 0 : next;
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden relative py-10">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10" />

      <div 
        className="flex space-x-10 will-change-transform"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {displayPosts.map((post, i) => (
          <a 
            key={i} 
            href={post.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[450px] group transition-all"
          >
            <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden mb-6 border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-[0.5]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Research_Log
              </div>
            </div>
            
            <div className="px-4">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-500 tracking-widest">Article</span>
                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{post.date}</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs font-medium italic opacity-0 group-hover:opacity-100 transition-opacity">
                Read Publication &rarr;
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
