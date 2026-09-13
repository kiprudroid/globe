"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GlobeScene = dynamic(() => import("@/components/earth/GlobeScene"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-zinc-400 text-sm">Loading globe…</p>
      </div>
    </div>
  ),
});

export default function EarthPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {mounted && <GlobeScene />}

      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <p className="text-zinc-500 text-xs">
          Earth imagery:{" "}
          <a
            href="https://www.solarsystemscope.com/textures/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-300 transition-colors"
          >
            Solar System Scope
          </a>{" "}
          (CC BY 4.0) · Based on{" "}
          <a
            href="https://earthobservatory.nasa.gov/features/BlueMarble"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-300 transition-colors"
          >
            NASA Blue Marble
          </a>{" "}
          data
        </p>
      </div>
    </div>
  );
}
