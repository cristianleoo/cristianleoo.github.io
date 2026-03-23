import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

export const metadata = {
  title: 'Request Connection | Cristian Leo',
  description: 'Get in touch with Cristian Leo for collaborations or inquiries.',
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center pb-32 bg-white dark:bg-zinc-950 transition-colors duration-700">
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
        <NeuralNetworkBackground />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-8 inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">
            Connection_Interface_v1
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-8 uppercase">
            Get in <span className="font-light italic text-zinc-400 dark:text-zinc-600">Touch.</span>
          </h1>
          
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-16 font-medium italic">
            &ldquo;Establishing a direct communication channel for collaborations in AI, Security, and Research.&rdquo;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
            {/* Primary Contact: Email */}
            <a 
              href="mailto:cristianleo120@gmail.com" 
              className="group p-10 rounded-[2.5rem] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex flex-col items-center justify-center space-y-4 hover:scale-105 transition-all shadow-2xl"
            >
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Secure Email</span>
              <span className="text-lg font-bold break-all">cristianleo120@gmail.com</span>
              <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 dark:bg-black/10 px-3 py-1 rounded-full">Send Message &rarr;</span>
            </a>

            {/* Social Connection */}
            <div className="flex flex-col space-y-4">
              <a 
                href="https://www.linkedin.com/in/cristian-leo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-8 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md flex items-center justify-between hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              >
                <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
                <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">Follow &rarr;</span>
              </a>
              <a 
                href="https://medium.com/@cristianleo120" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-8 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md flex items-center justify-between hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              >
                <span className="text-sm font-bold uppercase tracking-widest">Medium</span>
                <span className="text-emerald-600 font-black tracking-widest uppercase text-[10px]">Read &rarr;</span>
              </a>
            </div>
          </div>

          <div className="mt-20 font-mono text-[9px] text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.4em] opacity-50">
            End of Line // Status: Listening
          </div>
        </div>
      </section>
    </div>
  );
}
