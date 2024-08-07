"use client";
import { Icons } from "@/components/Icons";
import { ChevronDown, ChevronDownCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import HomePage from "@/components/Home";
import krishna from "../public/krishnaImg.png";
import { motion } from "framer-motion";
const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1, // You can adjust the duration as needed
      delay: 0.2,
      type: "spring", // Delay the fade-in by 0.6 seconds
    },
  },
};

const circlePath = {
  hidden: { strokeDasharray: "0 130" },
  show: {
    strokeDasharray: "160 200",
    transition: {
      duration: 1,
      delay: 0.6,
    },
  },
};

export default function Home() {
  const roundedFactor = 0.5;
  const [height, setHeight] = useState(100); // Initial height as 100%
  const [autoReduce, setAutoReduce] = useState<boolean>(false);
  const [roundedValue, setRoundedValue] = useState(50);
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
      className="  "
    >
      <div
        className={
          height >= 100
            ? `fixed top-0 left-0 w-full bg-[#650002] transition-all duration-300 ease rounded-b-[0px]`
            : `fixed top-0 left-0 w-full bg-[#650002] transition-all duration-300 ease rounded-b-[40px] sm:rounded-b-[100%]`
        }
        style={{ height: `${height}vh` }}
      >
        <div className="relative flex items-center justify-center h-full text-white">
          {height === 100 && (
            <motion.div initial="hidden" animate="show" variants={fadeIn}>
              <Image src={krishna} alt="Krishna png" width={400} height={200} />
              {height === 100 && (
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[13vh] ml-[20px]"
                >
                  <motion.path
                    variants={circlePath}
                    initial="hidden"
                    animate="show"
                    d="M100,40 
           a80,80 0 0,1 0,160 
           a80,80 0 0,1 0,-160"
                    fill="none"
                    stroke="#BE7A5B"
                    strokeWidth="1"
                    strokeLinecap="round"
                    transform="rotate(360, 360, 360)"
                  />
                </svg>
              )}
            </motion.div>
          )}
        </div>
      </div>
      {height === 100 && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className=""
        >
          <div style={{ position: "relative", width: "100%" }}>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              style={{
                position: "absolute",
                right: "30px",
                top: "10vh",
                fontSize: "32px",
              }}
              className="font-extrabold"
            >
              <span className="justify-center text-center">
                S<br />
                <span className="ml-[-2px]">C</span>
                <br />R<br />
                <span className="ml-[-2px]">O</span>
                <br />
                <span className="ml-[4px]">L</span>
                <br />
                <span className="ml-[4px]">L</span>
                <br />
                <br />D<br />O<br />
                <span className="ml-[-4px]">W</span>
                <br />N
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          >
            <ChevronDown
              size={50}
              className=" text-white rounded-[50%] absolute right-5 bottom-5 animate-bounce"
            />
          </motion.div>
        </motion.div>
      )}
      <div className="flex">{height < 100 && <HomePage />}</div>
    </div>
  );
}
