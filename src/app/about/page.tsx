import Link from 'next/link';
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

export const metadata = {
  title: 'System Context | Cristian Leo',
  description: 'Professional background and technical persona of Cristian Leo',
};

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center pb-32 bg-white dark:bg-zinc-950 transition-colors duration-700">
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
        <NeuralNetworkBackground />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center pt-20">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
            Persona_Identity_Report
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-8 uppercase">
            System <span className="font-light italic text-zinc-400 dark:text-zinc-600">Context.</span>
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-medium italic">
            "Bridging the gap between high-dimensional theoretical research and secure, scalable AI implementations."
          </p>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Left Column: Technical Specs */}
          <div className="md:col-span-4 space-y-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-6 border-b border-blue-600/20 pb-2">Technical_Stack</h3>
              <ul className="space-y-4 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex justify-between"><span>Architecture</span> <span className="text-zinc-900 dark:text-zinc-100 font-bold">LLMs / RAG</span></li>
                <li className="flex justify-between"><span>Security</span> <span className="text-zinc-900 dark:text-zinc-100 font-bold">Threat Modeling</span></li>
                <li className="flex justify-between"><span>Core_Langs</span> <span className="text-zinc-900 dark:text-zinc-100 font-bold">Python / C++</span></li>
                <li className="flex justify-between"><span>Frameworks</span> <span className="text-zinc-900 dark:text-zinc-100 font-bold">PyTorch / Strands</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-6 border-b border-emerald-600/20 pb-2">Connect_Channels</h3>
              <div className="flex flex-col space-y-4">
                <a href="https://www.linkedin.com/in/cristian-leo/" target="_blank" className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 hover:text-blue-600 transition-colors">LinkedIn &rarr;</a>
                <a href="https://medium.com/@cristianleo120" target="_blank" className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors">Medium &rarr;</a>
                <a href="mailto:cristianleo120@gmail.com" className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 transition-colors">Email &rarr;</a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="md:col-span-8">
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">The Journey</h2>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
                Currently a **Data Scientist at Amazon Web Services (AWS)**, I focus on engineering the intersection of AI and security. My work revolves around building agentic systems that can reason through complex threat landscapes and automating the "Shift-Left" security paradigm.
              </p>
              
              <div className="p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 mb-12 italic text-zinc-500 dark:text-zinc-400">
                "I believe that the next decade of software will be defined not by the code we write, but by the constraints we place on the models that write it for us."
              </div>

              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
                My academic foundation was built at **Columbia University**, where I pursued an M.S. in Applied Analytics (GPA 4.1/4.0), and **Università Bocconi**, where I earned my B.S. in Economics and Management. This dual background allows me to communicate technical nuances to stakeholders while maintaining the mathematical rigor required for state-of-the-art AI development.
              </p>

              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                When I'm not architecting systems at AWS, I contribute to the open-source community through projects like **InfluencerPy** and **ThreatForest**, or share deep-dives into LLM interpretability on **Medium**.
              </p>
            </div>

            <div className="mt-16 pt-16 border-t border-zinc-100 dark:border-zinc-900">
              <Link href="/projects" className="inline-flex items-center px-10 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all">
                Explore Weights &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
