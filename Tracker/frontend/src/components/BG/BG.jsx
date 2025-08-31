import { useContext, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // use slim preset
import { ThemeContext } from "../../context/ThemeContext";
import { useEffect, useState } from "react";

export default function BG({children}) {
  const { theme } = useContext(ThemeContext);
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    // initialize tsparticles engine
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  if (!engineReady) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      {theme === "dark" && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: "#0a0a0a" },
            particles: {
              number: { value: 80, density: { enable: true, area: 800 } },
              color: { value: "#2563EB" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 4 } },
              links: {
                enable: true,
                distance: 150,
                color: "#00ffcc",
                opacity: 0.3,
                width: 1,
              },
              move: { enable: true, speed: 2, outModes: { default: "out" } },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                repulse: { distance: 100 },
                push: { quantity: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}
