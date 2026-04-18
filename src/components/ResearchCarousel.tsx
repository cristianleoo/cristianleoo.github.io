'use client';

import React, { useState } from 'react';

interface ResearchPaper {
  title: string;
  authors: string;
  year: string;
  venue: string;
  abstract: string;
  link: string;
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
    bibtex: `@article{leo2026survey,
  title={Survey of Attention Mechanisms in Encoder-Only Language Models},
  author={Leo, Cristian},
  journal={SSRN},
  year={2026},
  note={6508042}
}`
  },
  {
    title: "The Math Behind Convolutional Neural Networks",
    authors: "Cristian Leo",
    year: "2025",
    venue: "Towards Data Science",
    abstract: "Exploration of the spatial invariance and filter-based feature extraction in CNNs, bridging the gap between linear algebra and computer vision.",
    link: "https://towardsdatascience.com/the-math-behind-convolutional-neural-networks",
    bibtex: `@article{leo2025cnn,
  title={The Math Behind Convolutional Neural Networks},
  author={Leo, Cristian},
  journal={Towards Data Science},
  year={2025}
}`
  },
  {
    title: "The math behind the adam optimizer",
    authors: "Cristian Leo",
    year: "2024",
    venue: "Towards Data Science",
    abstract: "Foundational deep-dive into the mathematical mechanics of adaptive moment estimation, cited for its clarity in explaining convergence properties.",
    link: "https://towardsdatascience.com/the-math-behind-the-adam-optimizer",
    bibtex: `@article{leo2024adam,
  title={The math behind the adam optimizer},
  author={Leo, Cristian},
  journal={Towards Data Science},
  year={2024}
}`
  },
  {
    title: "The Math Behind Neural Networks",
    authors: "Cristian Leo",
    year: "2024",
    venue: "Medium",
    abstract: "Step-by-step derivation of backpropagation and gradient descent, providing a first-principles understanding of neural network training.",
    link: "https://medium.com/@cristianleo120/the-math-behind-neural-networks",
    bibtex: `@article{leo2024nn,
  title={The Math Behind Neural Networks},
  author={Leo, Cristian},
  journal={Medium},
  year={2024}
}`
  },
  {
    title: "The Math Behind K-Nearest Neighbors",
    authors: "Cristian Leo",
    year: "2024",
    venue: "Towards Data Science",
    abstract: "Analysis of distance metrics and the curse of dimensionality in high-dimensional vector spaces for classification tasks.",
    link: "https://towardsdatascience.com/the-math-behind-k-nearest-neighbors",
    bibtex: `@article{leo2024knn,
  title={The Math Behind K-Nearest Neighbors},
  author={Leo, Cristian},
  journal={Towards Data Science},
  year={2024}
}`
  },
  {
    title: "The math behind XGBoost",
    authors: "Cristian Leo",
    year: "2024",
    venue: "Medium",
    abstract: "Detailed breakdown of gradient boosting, Taylor expansion for loss approximation, and regularized objective functions in XGBoost.",
    link: "https://medium.com/@cristianleo120/the-math-behind-xgboost",
    bibtex: `@article{leo2024xgboost,
  title={The math behind XGBoost},
  author={Leo, Cristian},
  journal={Medium},
  year={2024}
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
        <div className="flex w-max gap-6 motion-reduce:animate-none md:gap-10 md:animate-[marquee_50s_linear_infinite] md:group-hover:[animation-play-state:paused]">
          {[...researchPapers, ...researchPapers].map((paper, i) => (
            <div
              key={`${paper.title}-${i}`}
              className="flex w-[88vw] max-w-[550px] flex-shrink-0 flex-col rounded-[2.5rem] border border-zinc-200 bg-white p-8 shadow-xl transition-all dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">Research_Paper</span>
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{paper.year}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(paper.bibtex, i)}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-[8px] font-black uppercase tracking-tighter text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                >
                  {copiedIndex === i ? 'Copied!' : 'Copy BibTeX'}
                </button>
              </div>

              <h3 className="mb-4 text-xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white">
                {paper.title}
              </h3>
              
              <p className="mb-4 text-[10px] font-medium italic text-zinc-500 dark:text-zinc-400">
                {paper.authors}
              </p>

              <div className="mb-6 h-px w-full bg-zinc-100 dark:bg-zinc-800" />

              <p className="mb-6 flex-grow text-sm font-medium leading-relaxed text-zinc-600 dark:text-zinc-400">
                {paper.abstract}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{paper.venue}</span>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black uppercase tracking-widest text-blue-600 transition-colors hover:text-blue-500"
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
