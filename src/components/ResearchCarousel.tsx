'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ResearchPaper {
  title: string;
  authors: string;
  year: string;
  venue: string;
  abstract: string;
  link: string;
  image: string;
  bibtex: string;
}

const researchPapers: ResearchPaper[] = [
  {
    title: "SIR-BENCH: Evaluating Investigation Depth in Security Incident Response Agents",
    authors: "Daniel Begimher, Cristian Leo, Jack Huang, Pat Gaw, Bonan Zheng",
    year: "2026",
    venue: "arXiv:2604.12040",
    abstract: "Introduces a benchmark of 794 cases evaluating autonomous SIR agents. Differentiates genuine forensic investigation from 'alert parroting' using the Once Upon A Threat (OUAT) framework.",
    link: "https://arxiv.org/abs/2604.12040",
    image: "/images/research/sirbench.jpg",
    bibtex: `@article{begimher2026sirbench,
  title={SIR-BENCH: Evaluating Investigation Depth in Security Incident Response Agents},
  author={Begimher, Daniel and Leo, Cristian and Huang, Jack and Gaw, Pat and Zheng, Bonan},
  journal={arXiv preprint arXiv:2604.12040},
  year={2026}
}`
  },
  {
    title: "Geometric Concept Spaces in Small Encoders: A Comparative Mechanistic Probing of ModernBERT and DeBERTa-v3",
    authors: "Cristian Leo",
    year: "2026",
    venue: "SSRN (6486258)",
    abstract: "Mechanistic probing of ModernBERT and DeBERTa-v3 to identify how factual associations and concepts are represented in geometric latent spaces.",
    link: "https://ssrn.com/abstract=6486258",
    image: "/images/research/geometric_placeholder.png",
    bibtex: `@article{leo2026geometric,
  title={Geometric Concept Spaces in Small Encoders: A Comparative Mechanistic Probing of ModernBERT and DeBERTa-v3},
  author={Leo, Cristian},
  journal={SSRN},
  year={2026},
  note={6486258}
}`
  },
  {
    title: "Survey of Attention Mechanisms in Encoder-Only Language Models",
    authors: "Cristian Leo",
    year: "2026",
    venue: "SSRN (6508042)",
    abstract: "Comprehensive survey of architectural variations in attention mechanisms specifically for encoder-only transformers, focusing on efficiency and security applications.",
    link: "https://ssrn.com/abstract=6508042",
    image: "/images/research/attention_placeholder.png",
    bibtex: `@article{leo2026survey,
  title={Survey of Attention Mechanisms in Encoder-Only Language Models},
  author={Leo, Cristian},
  journal={SSRN},
  year={2026},
  note={6508042}
}`
  }
];

export default function ResearchCarousel() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="group relative w-full py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-32 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent md:block" />

      <div className="overflow-x-auto px-6 md:overflow-hidden md:px-0">
        <div className="flex w-max gap-6 motion-reduce:animate-none md:gap-10 md:animate-[marquee_45s_linear_infinite] md:group-hover:[animation-play-state:paused]">
          {[...researchPapers, ...researchPapers].map((paper, i) => (
            <div
              key={`${paper.title}-${i}`}
              className="flex w-[88vw] max-w-[500px] flex-shrink-0 flex-col rounded-[2.5rem] border border-zinc-200 bg-white p-8 shadow-xl transition-all dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div className="relative mb-8 aspect-[1/1.3] w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white dark:border-zinc-800">
                {paper.image.includes('placeholder') ? (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-800/20 p-12 text-center">
                    <div className="mb-6 flex w-full flex-col space-y-2 opacity-20">
                        <div className="h-1 w-full bg-zinc-400" />
                        <div className="h-1 w-3/4 bg-zinc-400" />
                        <div className="h-1 w-full bg-zinc-400" />
                        <div className="h-1 w-1/2 bg-zinc-400" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-2">Paper_Draft</span>
                    <h4 className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed px-4">{paper.title}</h4>
                    <div className="mt-8 flex w-full flex-col space-y-2 opacity-10">
                        <div className="h-1 w-full bg-zinc-400" />
                        <div className="h-1 w-full bg-zinc-400" />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={paper.image}
                    alt={`${paper.title} first page`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    unoptimized
                  />
                )}
                {/* Subtle overlay to prevent harsh white in dark mode */}
                <div className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.02] pointer-events-none" />
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-[9px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">Research_Paper</span>
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">{paper.year}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(paper.bibtex, i)}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-[8px] font-black uppercase tracking-tighter text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                >
                  {copiedIndex === i ? 'Copied!' : 'Copy BibTeX'}
                </button>
              </div>

              <h3 className="mb-3 text-lg font-bold leading-tight tracking-tight text-zinc-900 dark:text-white">
                {paper.title}
              </h3>
              
              <p className="mb-4 text-[9px] font-medium italic text-zinc-500 dark:text-zinc-400">
                {paper.authors}
              </p>

              <div className="mb-6 h-px w-full bg-zinc-100 dark:bg-zinc-800" />

              <p className="mb-6 flex-grow text-[13px] font-medium leading-relaxed text-zinc-600 dark:text-zinc-300">
                {paper.abstract}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">{paper.venue}</span>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black uppercase tracking-widest text-blue-600 transition-colors hover:text-blue-500"
                >
                  Read Paper &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
