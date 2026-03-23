import Image from 'next/image';

export const metadata = {
  title: 'Blog | Cristian Leo',
  description: 'Data Science & AI articles by Cristian Leo on Medium',
};

const blogPosts = [
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

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-32">
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 border-l-4 border-emerald-500 pl-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4 uppercase">
            The Latent Space
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium max-w-2xl leading-relaxed italic">
            &ldquo;A technical record of deep dives into high-dimensional intelligence, interpretability, and AI security.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, idx) => (
            <a 
              key={idx} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col h-full bg-white dark:bg-zinc-900/40 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all hover:shadow-[0_0_50px_rgba(16,185,129,0.1)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={post.image} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  unoptimized
                />
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex flex-col flex-grow p-8">
                <div className="flex items-center space-x-2 mb-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  <span className="text-emerald-600 dark:text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">Medium</span>
                  <span>|</span>
                  <span>{post.date}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                  {post.subtitle}
                </p>
                
                <div className="flex items-center text-xs font-black uppercase tracking-widest text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform">
                  Read Deployment <span className="ml-2 text-emerald-500">&rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <a 
            href="https://medium.com/@cristianleo120" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl"
          >
            Follow on Medium
          </a>
        </div>
      </section>
    </div>
  );
}
