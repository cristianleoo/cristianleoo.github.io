'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function NeuralNetworkBackground() {
  const [init, setInit] = useState(false);
  const [isMobileLike, setIsMobileLike] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPreferences = () => {
      setIsMobileLike(mobileQuery.matches);
      setPrefersReducedMotion(reducedMotionQuery.matches);
    };

    syncPreferences();
    mobileQuery.addEventListener("change", syncPreferences);
    reducedMotionQuery.addEventListener("change", syncPreferences);

    return () => {
      mobileQuery.removeEventListener("change", syncPreferences);
      reducedMotionQuery.removeEventListener("change", syncPreferences);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) {
        setInit(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion]);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: isMobileLike ? 30 : 60,
      interactivity: {
        events: {
          onHover: { enable: !isMobileLike, mode: "grab" },
        },
        modes: {
          grab: {
            distance: isMobileLike ? 120 : 200,
            links: { opacity: isMobileLike ? 0.25 : 0.5 },
          },
        },
      },
      particles: {
        color: { value: ["#71717a", "#3b82f6", "#10b981"] },
        links: {
          color: "#71717a",
          distance: isMobileLike ? 120 : 180,
          enable: true,
          opacity: isMobileLike ? 0.18 : 0.4,
          width: isMobileLike ? 1 : 1.5,
        },
        move: {
          enable: true,
          speed: isMobileLike ? 0.45 : 1.2,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        number: {
          density: { enable: true },
          value: isMobileLike ? 28 : 80,
        },
        opacity: {
          value: { min: 0.15, max: isMobileLike ? 0.3 : 0.6 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: isMobileLike ? 2.5 : 4 },
        },
      },
      detectRetina: !isMobileLike,
    }),
    [isMobileLike],
  );

  if (prefersReducedMotion) {
    return <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.10),transparent_35%)]" />;
  }

  if (init) {
    return (
      <div className="absolute inset-0 z-0 w-full h-full opacity-60 dark:opacity-40">
        <Particles
          id="tsparticles"
          options={options}
          className="h-full w-full"
        />
      </div>
    );
  }

  return null;
}
