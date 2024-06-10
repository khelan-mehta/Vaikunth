"use client";
import { Icons } from "@/components/Icons";
import { ChevronDown, ChevronDownCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import HomePage from "@/components/Home";
export default function Home() {
  const roundedFactor = 0.5;
  const [height, setHeight] = useState(100); // Initial height as 100%
  const [autoReduce, setAutoReduce] = useState<boolean>(false);
  const [roundedValue, setRoundedValue] = useState(50);
  const handleWheel = () => {
    setHeight((prevHeight) => Math.max(prevHeight - 10, 0)); // Decrease height by 10% on each scroll
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

  useEffect(() => {
    const handleRadiusChange = () => {
      console.log(height);

      setRoundedValue(height * roundedFactor * 10);
      console.log(`rounded-b-[${roundedValue}px]`);
    };
    handleRadiusChange();
  }, [height]);

  // Define the factor for the rounded value (adjust as needed)

  return (
    <div
      onWheel={handleWheel}
      className="h-screen transition-all overflow-hidden "
    >
      <div
        className={
          height >= 100
            ? `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[0px]`
            : height >= 90
            ? `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[100px]`
            : height >= 80
            ? `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[200px]`
            : height >= 70
            ? `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[300px]`
            : height >= 60
            ? `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[400px]`
            : height >= 50
            ? `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[500px]`
            : height >= 40
            ? `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[600px]`
            : height >= 30
            ? `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[700px]`
            : height >= 20
            ? `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[800px]`
            : height >= 10 
            ? `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[900px]`
            : `fixed top-0 left-0 w-full bg-black transition-all duration-300 ease rounded-b-[1000px]`
        }
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
