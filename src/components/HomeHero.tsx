'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

type IdentityStep = {
  thought: string;
  prefix: string;
  options: { token: string; prob: string }[];
};

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

const identitySteps: IdentityStep[] = [
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
const TERMINAL_MESSAGES = [
  "> [SYSTEM]: Loading Identity Weights [cristian_leo_v4.bin]",
  "> [SYSTEM]: Initializing Multi-Head Attention...",
  "> [SYSTEM]: Computing Softmax(QK^T / sqrt(d_k))V...",
  "> [SYSTEM]: Identity successfully reified."
];

export default function HomeHero() {
  const [terminalText, setTerminalText] = useState('');
  const [generatedText, setGeneratedText] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isSampling, setIsSampling] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [thoughtText, setThoughtText] = useState("");
  const [candidates, setCandidates] = useState<{ token: string; prob: string }[]>([]);
  const [showIdentity, setShowIdentity] = useState(false);
  const [terminalComplete, setTerminalComplete] = useState(false);

  const terminalMsgIdx = useRef(0);
  const terminalCharIdx = useRef(0);
  const thoughtCharIdx = useRef(0);
  const prefixCharIdx = useRef(0);
  const showFullUI = currentStep >= identitySteps.length;

  useEffect(() => {
    const typeTerminal = setInterval(() => {
      if (terminalMsgIdx.current < TERMINAL_MESSAGES.length) {
        const fullMsg = TERMINAL_MESSAGES[terminalMsgIdx.current];
        if (terminalCharIdx.current < fullMsg.length) {
          const char = fullMsg[terminalCharIdx.current];
          if (char !== undefined) {
            setTerminalText((prev) => prev + char);
          }
          terminalCharIdx.current++;
        } else {
          setTerminalText((prev) => prev + '\n');
          terminalMsgIdx.current++;
          terminalCharIdx.current = 0;
          if (terminalMsgIdx.current === TERMINAL_MESSAGES.length) {
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
      return;
    }

    const step = identitySteps[currentStep];
    thoughtCharIdx.current = 0;

    const thoughtInterval = setInterval(() => {
      if (thoughtCharIdx.current < step.thought.length) {
        const char = step.thought[thoughtCharIdx.current];
        if (char !== undefined) {
          setIsThinking(true);
          setThoughtText(step.thought.substring(0, thoughtCharIdx.current + 1));
        }
        thoughtCharIdx.current++;
      } else {
        clearInterval(thoughtInterval);
        setTimeout(() => {
          setIsThinking(false);
          startPrefixTyping(step);
        }, 400);
      }
    }, 15);

    const startPrefixTyping = (currentStepData: IdentityStep) => {
      prefixCharIdx.current = 0;
      const prefixInterval = setInterval(() => {
        if (prefixCharIdx.current < currentStepData.prefix.length) {
          const char = currentStepData.prefix[prefixCharIdx.current];
          if (char !== undefined) {
            setGeneratedText((prev) => prev + char);
          }
          prefixCharIdx.current++;
        } else {
          clearInterval(prefixInterval);
          setIsSampling(true);
          setCandidates(currentStepData.options);
          setTimeout(() => {
            const chosen = weightedPick(currentStepData.options);
            setIsSampling(false);
            setTimeout(() => {
              setCandidates([]);
              setThoughtText("");
              if (chosen?.token) {
                setGeneratedText((prev) => prev + chosen.token);
              }
              setCurrentStep((prev) => prev + 1);
            }, 380);
          }, SAMPLING_MS);
        }
      }, 20);
    };

    return () => clearInterval(thoughtInterval);
  }, [currentStep, showIdentity]);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
      <NeuralNetworkBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center lg:px-8">
        <div className="mb-12 min-h-[140px] w-full max-w-xl overflow-hidden rounded-xl border border-zinc-800 bg-black/95 p-6 text-left font-mono text-[10px] text-blue-400 shadow-2xl backdrop-blur-sm md:text-xs">
          <pre className="whitespace-pre-wrap leading-relaxed opacity-80">
            {terminalText}
            {!terminalComplete && <span className="ml-1 animate-pulse bg-blue-400 text-transparent">|</span>}
          </pre>
        </div>

        <div className={`flex w-full flex-col items-center transition-all duration-1000 ${showIdentity ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className={`mb-8 min-h-[1.5rem] font-mono text-[9px] transition-all duration-500 md:text-[10px] ${isThinking ? 'opacity-100' : 'opacity-0'}`}>
            <span className="italic text-zinc-400 dark:text-zinc-600">
              &lt;thought&gt; {thoughtText} &lt;/thought&gt;
            </span>
          </div>

          {candidates.length > 0 && (
            <div
              className={`mx-auto mb-6 w-full max-w-md transition-opacity duration-300 ease-out ${
                isSampling ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
              aria-hidden={!isSampling}
            >
              <div className="rounded-lg border border-zinc-200 bg-zinc-50/90 px-4 py-3 text-left shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
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
                            className="h-full rounded-full bg-emerald-500/80 transition-[width] duration-700 ease-out dark:bg-emerald-400/70"
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

          <div className="mb-12 text-center">
            <h1 className="text-2xl font-medium leading-relaxed tracking-tight text-zinc-900 dark:text-white md:text-3xl">
              <span className="font-bold tracking-tighter text-zinc-900 dark:text-white">Cristian Leo</span>{' '}
              <span className="font-serif italic text-zinc-400 dark:text-zinc-500">{generatedText}</span>
              <span className={`ml-2 inline-block h-6 w-1 align-middle bg-blue-600 ${isSampling ? 'animate-bounce' : 'animate-pulse'}`} />
            </h1>
          </div>

          <div className={`flex flex-col items-center justify-center space-y-4 transition-all duration-1000 sm:flex-row sm:space-x-6 sm:space-y-0 ${showFullUI ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Link href="/projects" className="rounded-full bg-zinc-900 px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:scale-105 dark:bg-white dark:text-zinc-900">
              View Experiments
            </Link>
            <Link href="/blog" className="rounded-full border border-zinc-200 px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900">
              The Latent Space
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
