"use client";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export default function Controls() {
  const { isSignedIn } = useUser();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 400) {
        setCount((prevCount) => prevCount + 2);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count]);

  const fontSize = 16 + (count / 400) * 80;
  const grayValue = 400 - Math.min(count, 400);
  const textColor = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
  const logged = `text-[#7DAFCE] border-[#7DAFCE] hover:bg-[#7DAFCE]`;
  const guest = `text-[#32a852] border-[#32a852] hover:bg-[#32a852]`;

  return (
    <section
      id="login"
      className="flex flex-col items-center justify-center"
    >
      <div
        className="text-center font-bold transition-all duration-300 flex-flex-col"
        style={{ color: textColor }}
      >
        <p style={{ fontSize }}>{count}+</p>
        <p style={{ fontSize: fontSize / 4 }}>Households using our product</p>
      </div>
      <div
        style={{ opacity: Math.floor(count / 400) }}
        className={`flex items-center justify-center gap-4 w-[900px] min-h-[150px] rounded-lg py-8`}
      >
        <a
          href="/home"
          className={`text-center px-4 py-2 bg-white border-4 font-bold hover:text-white rounded-md w-[180px] ${
            isSignedIn ? logged : guest
          } transition-all`}
        >
          {isSignedIn ? "Launch" : "Log In"}
        </a>
        <a
          href="#faq"
          className="text-center px-4 py-2 bg-white border-4 text-[#F69C4D] font-bold border-[#F69C4D] hover:bg-[#F69C4D] hover:text-white rounded-md w-[180px] transition-all"
        >
          More Info
        </a>
      </div>
    </section>
  );
}
