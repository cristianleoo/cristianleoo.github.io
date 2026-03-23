'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

export default function NeuralNetworkBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 0.5 },
          },
        },
      },
      particles: {
        color: { value: ["#71717a", "#3b82f6", "#10b981"] }, // Zinc, Blue, Emerald
        links: {
          color: "#71717a",
          distance: 180,
          enable: true,
          opacity: 0.4,
          width: 1.5,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        number: {
          density: { enable: true },
          value: 120,
        },
        opacity: {
          value: { min: 0.2, max: 0.6 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1.5, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

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
