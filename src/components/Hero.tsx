"use client";
import { Gradient } from "stripe-gradient";
import { useEffect, useRef } from "react";

function Hero() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (ref.current) {
      const gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");
      ref.current.style.clipPath = "polygon(0 0, 100% 0, 100% 50%, 0% 100%)";
    }
  }, [ref]);

  return (
    <section className="w-full border-2 border-transparent h-[500px]">
      <div className="flex flex-col m-40 max-w-2xl">
        <h1 className="text-8xl text-gray-900">Panda</h1>
        <h1 className="text-4xl text-gray-700 break-words">
          Automating household electricity consumption reports, for free
        </h1>
      </div>
      <canvas
        ref={ref}
        id="gradient-canvas"
        className="absolute top-0 left-0 z-[-1] w-full"
      />
    </section>
  );
}

export default Hero;
