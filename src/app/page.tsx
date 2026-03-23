import HomeHero from "@/components/HomeHero";
import ProjectCarousel from "@/components/ProjectCarousel";
import WritingCarousel from "@/components/WritingCarousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white pb-32 transition-colors duration-700 dark:bg-zinc-950">
      <HomeHero />

      <section className="w-full border-b border-zinc-50 py-32 dark:border-zinc-900">
        <div className="mx-auto mb-16 flex max-w-6xl items-end justify-between px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-zinc-900 dark:text-white">
              Latest Writing
            </h2>
            <p className="mt-1 text-sm font-medium italic tracking-tight text-zinc-500">
              Verified research logs from Medium.
            </p>
          </div>
          <a
            href="https://medium.com/@cristianleo120"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 transition-colors hover:text-blue-500"
          >
            See all on Medium &rarr;
          </a>
        </div>

        <WritingCarousel />
      </section>

      <section className="w-full bg-zinc-50/30 py-32 dark:bg-zinc-900/10">
        <div className="mx-auto mb-16 max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-zinc-900 dark:text-white">
            Active Projects
          </h2>
          <p className="mt-1 text-sm font-medium italic tracking-tight text-zinc-500">
            Real-time deployment streams.
          </p>
        </div>

        <ProjectCarousel />
      </section>
    </div>
  );
}
