"use client";
import { Icons } from "@/components/Icons";
import { ChevronDown, ChevronDownCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import HomePage from "@/components/Home";
export default function Home() {
  const [height, setHeight] = useState(100); // Initial height as 100%
  const [autoReduce, setAutoReduce] = useState<boolean>(false);

  const handleWheel = () => {
    setHeight((prevHeight) => Math.max(prevHeight - 30, 0)); // Decrease height by 10% on each scroll
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (height <= 70 && height > 0) {
      setAutoReduce(true);
    } else {
      setAutoReduce(false);
    }

    if (autoReduce) {
      interval = setInterval(() => {
        setHeight((prevHeight) => Math.max(prevHeight - 3, 0));
      }, 50); // Adjust the interval speed as needed
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [height, autoReduce]);

  return (
    <div
      onWheel={handleWheel}
      className="h-screen transition-all overflow-hidden "
    >
      <div
        className="fixed top-0 left-0 w-full bg-black transition-all duration-300 ease"
        style={{ height: `${height}vh` }}
      >
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          {height > 30 && (
            <Icons.Loading
              style={{
                transform: `scale(${height / 100})`,
                transition: "transform 0.3s ease-in-out",
              }}
            />
          )}
        </div>
      </div>
      {height > 50 && (
        <ChevronDown
          size={50}
          className=" text-white rounded-[50%] absolute right-5 bottom-5 animate-bounce"
        />
      )}
      <div className="flex">{height < 100 && <HomePage />}</div>
    </div>
  );
}
