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
    image: "placeholder_geometric",
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
    image: "placeholder_attention",
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
              <div className="relative mb-8 aspect-[1/1.3] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-700 shadow-inner">
                {paper.image.includes('placeholder') ? (
                  <div className="flex h-full w-full flex-col p-8 text-left bg-white text-zinc-900 font-serif overflow-hidden select-none">
                    {/* Fake Header */}
                    <div className="mb-6 flex justify-between items-center opacity-30 border-b border-zinc-200 pb-2">
                        <span className="text-[6px] font-sans font-bold uppercase tracking-widest">{paper.venue}</span>
                        <span className="text-[6px] font-sans font-bold uppercase tracking-widest">{paper.year}</span>
                    </div>

                    {/* Fake Title */}
                    <h4 className="text-[14px] font-bold leading-tight mb-3 text-zinc-800 line-clamp-3">
                        {paper.title}
                    </h4>

                    {/* Fake Authors */}
                    <div className="text-[8px] italic text-zinc-500 mb-6">
                        {paper.authors}
                    </div>

                    {/* Fake Abstract Section */}
                    <div className="mb-4">
                        <div className="text-[7px] font-bold uppercase tracking-tighter mb-1">Abstract</div>
                        <p className="text-[7px] leading-relaxed text-zinc-400 line-clamp-[12]">
                            {paper.abstract} This research addresses a critical gap in the field of large-scale language model evaluation and security forensics. By developing a novel methodology for probing geometric concept spaces, we establish a new baseline for autonomous investigative depth. Our findings suggest that existing benchmarks significantly underrepresent the complexity of forensic reasoning required in cloud-native environments. We introduce the Once Upon A Threat (OUAT) framework as a standardized telemetry replay system.
                        </p>
                    </div>

                    {/* Fake Columns/Columns Mockup */}
                    <div className="mt-auto grid grid-cols-2 gap-4 opacity-[0.05]">
                        <div className="space-y-1">
                            <div className="h-1 w-full bg-zinc-900" />
                            <div className="h-1 w-full bg-zinc-900" />
                            <div className="h-1 w-3/4 bg-zinc-900" />
                            <div className="h-1 w-full bg-zinc-900" />
                        </div>
                        <div className="space-y-1">
                            <div className="h-1 w-full bg-zinc-900" />
                            <div className="h-1 w-5/6 bg-zinc-900" />
                            <div className="h-1 w-full bg-zinc-900" />
                            <div className="h-1 w-2/3 bg-zinc-900" />
                        </div>
                    </div>
                    
                    {/* Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[35deg] pointer-events-none">
                        <span className="text-[40px] font-black text-zinc-100 opacity-20 uppercase tracking-[0.5em]">SSRN_PREVIEW</span>
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
