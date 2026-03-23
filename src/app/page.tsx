'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";
import ProjectCarousel from "@/components/ProjectCarousel";
import WritingCarousel from "@/components/WritingCarousel";

function weightedPick(options: { token: string; prob: string }[]) {
  const weights = options.map((o) => parseFloat(o.prob));
  const sum = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * sum;
  for (let i = 0; i < options.length; i++) {
    r -= weights[i] ?? 0;
    if (r <= 0) return options[i]!;
  }
  return options[options.length - 1]!;
}

const identitySteps = [
  {
    thought: "Analyzing professional trajectory... high-confidence role detected.",
    prefix: "is a ",
    options: [
      { token: "Data Scientist", prob: "0.84" },
      { token: "Research Engineer", prob: "0.12" },
      { token: "ML Architect", prob: "0.04" }
    ]
  },
  {
    thought: "Cross-referencing current affiliation... AWS cluster identified.",
    prefix: " @ ",
    options: [
      { token: "AWS", prob: "0.91" },
      { token: "Amazon", prob: "0.07" },
      { token: "Cloud AI", prob: "0.02" }
    ]
  },
  {
    thought: "Evaluating core competencies... filtering for high-impact domains.",
    prefix: " specializing in ",
    options: [
      { token: "Large Language Model training", prob: "0.55" },
      { token: "cybersecurity", prob: "0.35" },
      { token: "agentic system security", prob: "0.10" }
    ]
  }
];

const SAMPLING_MS = 2200;

export default function Home() {
  const [terminalText, setTerminalText] = useState('');
  const [generatedText, setGeneratedText] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isSampling, setIsSampling] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [thoughtText, setThoughtText] = useState("");
  const [candidates, setCandidates] = useState<{token: string, prob: string}[]>([]);
  const [showIdentity, setShowIdentity] = useState(false);
  const [showFullUI, setShowFullUI] = useState(false);
  const [terminalComplete, setTerminalComplete] = useState(false);
  
  const terminalMessages = [
    "> [SYSTEM]: Loading Identity Weights [cristian_leo_v4.bin]",
    "> [SYSTEM]: Initializing Multi-Head Attention...",
    "> [SYSTEM]: Computing Softmax(QK^T / sqrt(d_k))V...",
    "> [SYSTEM]: Identity successfully reified."
  ];

  const terminalMsgIdx = useRef(0);
  const terminalCharIdx = useRef(0);
  const thoughtCharIdx = useRef(0);
  const prefixCharIdx = useRef(0);

  useEffect(() => {
    const typeTerminal = setInterval(() => {
      if (terminalMsgIdx.current < terminalMessages.length) {
        const fullMsg = terminalMessages[terminalMsgIdx.current];
        if (terminalCharIdx.current < fullMsg.length) {
          const char = fullMsg[terminalCharIdx.current];
          if (char !== undefined) setTerminalText(prev => prev + char);
          terminalCharIdx.current++;
        } else {
          setTerminalText(prev => prev + '\n');
          terminalMsgIdx.current++;
          terminalCharIdx.current = 0;
          if (terminalMsgIdx.current === terminalMessages.length) {
            clearInterval(typeTerminal);
            setTerminalComplete(true);
            setTimeout(() => setShowIdentity(true), 500);
          }
        }
      }
    }, 20);
    return () => clearInterval(typeTerminal);
  }, []);

  useEffect(() => {
    if (!showIdentity || currentStep >= identitySteps.length) {
      if (currentStep >= identitySteps.length) setShowFullUI(true);
      return;
    }

    const step = identitySteps[currentStep];
    setIsThinking(true);
    thoughtCharIdx.current = 0;

    const thoughtInterval = setInterval(() => {
      if (thoughtCharIdx.current < step.thought.length) {
        const char = step.thought[thoughtCharIdx.current];
        if (char !== undefined) setThoughtText(step.thought.substring(0, thoughtCharIdx.current + 1));
        thoughtCharIdx.current++;
      } else {
        clearInterval(thoughtInterval);
        setTimeout(() => {
          setIsThinking(false);
          startPrefixTyping(step);
        }, 400);
      }
    }, 15);

    const startPrefixTyping = (currentStepData: any) => {
      prefixCharIdx.current = 0;
      const prefixInterval = setInterval(() => {
        if (prefixCharIdx.current < currentStepData.prefix.length) {
          const char = currentStepData.prefix[prefixCharIdx.current];
          if (char !== undefined) setGeneratedText(prev => prev + char);
          prefixCharIdx.current++;
        } else {
          clearInterval(prefixInterval);
          setIsSampling(true);
          setCandidates(currentStepData.options);
          setTimeout(() => {
            const options = currentStepData.options;
            const chosen = weightedPick(options);
            setIsSampling(false);
            setTimeout(() => {
              setCandidates([]);
              if (chosen?.token) setGeneratedText((prev) => prev + chosen.token);
              setCurrentStep((prev) => prev + 1);
            }, 380);
          }, SAMPLING_MS);
        }
      }, 20);
    };

    return () => clearInterval(thoughtInterval);
  }, [currentStep, showIdentity]);

  return (
    <div className="flex flex-col items-center justify-center pb-32 bg-white dark:bg-zinc-950 transition-colors duration-700">
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
        <NeuralNetworkBackground />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="w-full max-w-xl mb-12 bg-black/95 rounded-xl p-6 border border-zinc-800 shadow-2xl font-mono text-[10px] md:text-xs text-blue-400 text-left overflow-hidden min-h-[140px] backdrop-blur-sm">
            <pre className="whitespace-pre-wrap leading-relaxed opacity-80">
              {terminalText}
              {!terminalComplete && <span className="animate-pulse bg-blue-400 text-transparent ml-1">|</span>}
            </pre>
          </div>

          <div className={`w-full flex flex-col items-center transition-all duration-1000 ${showIdentity ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className={`mb-8 min-h-[1.5rem] font-mono text-[9px] md:text-[10px] transition-all duration-500 ${isThinking ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-zinc-400 dark:text-zinc-600 italic">
                &lt;thought&gt; {thoughtText} &lt;/thought&gt;
              </span>
            </div>

            {/* Logits: state was set during “sampling” but nothing rendered it until now */}
            {candidates.length > 0 && (
              <div
                className={`mb-6 w-full max-w-md mx-auto transition-opacity duration-300 ease-out ${
                  isSampling ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={!isSampling}
              >
                <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/80 px-4 py-3 text-left shadow-sm backdrop-blur-sm">
                  <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 mb-2">
                    Next-token logits
                  </p>
                  <ul className="space-y-2 font-mono text-[11px] md:text-xs">
                    {candidates.map((c) => {
                      const p = parseFloat(c.prob);
                      const pct = Number.isFinite(p) ? p * 100 : 0;
                      return (
                        <li key={c.token} className="flex flex-col gap-0.5">
                          <div className="flex justify-between gap-3 text-zinc-800 dark:text-zinc-200">
                            <span className="truncate" title={c.token}>
                              {c.token}
                            </span>
                            <span className="shrink-0 tabular-nums text-emerald-600 dark:text-emerald-400">
                              p = {c.prob}
                            </span>
                          </div>
                          <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                            <div
                              className="h-full rounded-full bg-emerald-500/80 dark:bg-emerald-400/70 transition-[width] duration-700 ease-out"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}

            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-white leading-relaxed">
                <span className="font-bold text-zinc-900 dark:text-white tracking-tighter">Cristian Leo</span>{' '}
                <span className="text-zinc-400 dark:text-zinc-500 font-serif italic">{generatedText}</span>
                <span className={`inline-block w-1 h-6 bg-blue-600 ml-2 align-middle ${isSampling ? 'animate-bounce' : 'animate-pulse'}`} />
              </h1>
            </div>

            <div className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 ${showFullUI ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link href="/projects" className="px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg">
                View Experiments
              </Link>
              <Link href="/blog" className="px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
                The Latent Space
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Carousel Section */}
      <section className="w-full py-32 border-b border-zinc-50 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16 flex justify-between items-end px-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase tracking-tighter">Latest Writing</h2>
            <p className="text-zinc-500 mt-1 font-medium text-sm italic tracking-tight">Verified research logs from Medium.</p>
          </div>
          <a href="https://medium.com/@cristianleo120" target="_blank" className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 hover:text-blue-500 transition-colors">
            See all on Medium &rarr;
          </a>
        </div>

        <WritingCarousel />
      </section>

      {/* Project Carousel Section */}
      <section className="w-full py-32 bg-zinc-50/30 dark:bg-zinc-900/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16 px-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase tracking-tighter">Active Projects</h2>
          <p className="text-zinc-500 mt-1 font-medium text-sm italic tracking-tight">Real-time deployment streams.</p>
        </div>

        <ProjectCarousel />
      </section>
    </div>
  );
}
