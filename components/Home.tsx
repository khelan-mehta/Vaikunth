import React, { useEffect, useRef, useState } from "react";

import { Icons } from "./Icons";
import {
  delay,
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { PhoneCall, X } from "lucide-react";
import favorite from "../public/favorite.png";
import arrowheads from "../public/arrowheads.png";
import swirlyArrow from "../public/swirly-arrow.png";
import upperRightArrow from "../public/upper-right-arrow.png";
import rightArrow from "../public/right-arrow.png";
import goodRating from "../public/goodRating.png";
import separator from "../public/separator.png";
import mG from "../public/Mask group.png";
import balloons from "../public/balloons.png";
import graph1 from "../public/graph 1.png";
import Image from "next/image";
import MobileView from "./views/mobileView";
import TabView from "./views/tabView";
import DesktopView from "./views/desktopView";
import Hero from "./Landing/Hero";
import Location from "./Landing/Location";
import pin from "../public/pin.png";
import PartyBooking from "./PartyBooking";
const fadeIn = {
  hidden: {
    opacity: 0,
    x: "100%", // Start off-screen to the left
  },
  show: {
    opacity: 1,
    x: "3%", // Slide in to the final position

    transition: {
      duration: 3, // You can adjust the duration as needed
      delay: 0.2,
      type: "spring", // Delay the fade-in by 0.6 seconds
    },
  },
};
const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (e: any) => {
    const element = e.target;
    const scrollWidth = element.scrollWidth - element.clientWidth;
    const scrollLeft = element.scrollLeft;
    const scrolled = (scrollLeft / scrollWidth) * 80;
    setScrollProgress(scrolled);
  };
  return (
    <>
      <div className="gap-4 bg-[#f9f5e9] ">
        <div className="bg-[#f9f5e9]">
          <MobileView>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="absolute right-0 bottom-[5vh] mt-[-70px]"
            >
              <Icons.heroImg width={552} height={493} />
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="absolute right-[30vw] bottom-[5vh] z-[-1] mt-[-70px]"
            >
              <Image
                src={favorite}
                alt="swirlyArrow"
                width={150}
                height={150}
                className="rotate-25"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="absolute right-[10vw] top-[25vh] z-[-1] mt-[-70px]"
            >
              <Image
                src={swirlyArrow}
                alt="swirlyArrow"
                width={150}
                height={150}
                className="rotate-25"
              />
            </motion.div>
          </MobileView>
          <TabView>
            <div className="flex flex-col p-[5rem] justify-center gap-24 w-screen h-screen">
              <motion.div
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                className="flex flex-col text-[24px] gap-1 font-extrabold"
              >
                <p>
                  EMBRACE THE{" "}
                  <span
                    style={{
                      textShadow: "2px -2px 0px #650002",
                      WebkitTextStroke: "2px #650002",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-[34px]"
                  >
                    FOOD
                  </span>
                </p>
                <p>
                  IN ESSENCE OF{" "}
                  <span
                    style={{
                      textShadow: "2px -2px 0px #650002",
                      WebkitTextStroke: "2px #650002",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-[34px]"
                  >
                    DIVINE
                  </span>
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                className="flex flex-col text-[20px] gap-7 font-medium"
              >
                <div className="flex gap-7">
                  <Image
                    src={goodRating}
                    alt="gR"
                    width={30}
                    height={30}
                    className="self-center"
                  ></Image>
                  <p>
                    <span className="text-[#f78764] self-center">1k+ </span>
                    5star Rating on Google
                  </p>
                </div>
                <div className="flex gap-6">
                  <motion.button
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
                    className=" bg-[#650002] w-[110px] h-[6vh] text-[14px] uppercase rounded-[5px] text-white"
                  >
                    Menu
                  </motion.button>
                  <div className="flex">
                    <PhoneCall
                      size={14}
                      className="border-[#650002] self-center h-[6vh] w-[6vw] p-3 rounded-l-md border-[1px] border-solid"
                    />
                    <motion.button
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 1.5,
                      }}
                      className=" flex justify-around gap-4 border-[#650002] bg-transparent border-[1px] border-l-[0px] border-solid w-[130px] h-[6vh] text-[14px] uppercase rounded-r-[5px] text-[#650002] items-center"
                    >
                      Call Us
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="absolute right-0 top-[14vh] mt-[-70px]"
            >
              <Icons.heroImg width={952} height={693} />
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="absolute right-[30vw] top-[15vh] z-[-1] mt-[-70px]"
            >
              <Image
                src={swirlyArrow}
                alt="swirlyArrow"
                width={150}
                height={150}
                className="rotate-25"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="absolute right-[10vw] top-[15vh] z-[-1] mt-[-70px]"
            >
              <Image
                src={favorite}
                alt="swirlyArrow"
                width={150}
                height={150}
                className="rotate-25"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="absolute right-[37vw] top-[50vh] z-[-1] mt-[-70px]"
            >
              <Image
                src={rightArrow}
                alt="swirlyArrow"
                width={150}
                height={150}
                className="rotate-25"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="absolute right-[30vw] bottom-[10vh] z-[-1] mt-[-70px]"
            >
              <Image
                src={upperRightArrow}
                alt="swirlyArrow"
                width={150}
                height={150}
                className="rotate-25"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="absolute right-[4vw] bottom-[3vh]  mt-[-70px]"
            >
              <Image
                src={arrowheads}
                alt="swirlyArrow"
                width={150}
                height={150}
                className="rotate-25"
              />
            </motion.div>
          </TabView>
          <DesktopView>
            <div className="">
              <div className="px-[5rem] flex flex-col gap-12   bg-transparent mt-[130px]">
                <motion.div
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                  className="flex flex-col text-[40px] gap-1 font-extrabold"
                >
                  <p>
                    EMBRACE THE{" "}
                    <span
                      style={{
                        textShadow: "2px -2px 0px #650002",
                        WebkitTextStroke: "2px #650002",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-[54px]"
                    >
                      FOOD
                    </span>
                  </p>
                  <p>
                    IN ESSENCE OF{" "}
                    <span
                      style={{
                        textShadow: "2px -2px 0px #650002",
                        WebkitTextStroke: "2px #650002",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="text-[54px]"
                    >
                      DIVINE
                    </span>
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                  className="flex flex-col text-[24px] gap-7 font-medium"
                >
                  <div className="flex gap-7">
                    <Image
                      src={goodRating}
                      alt="gR"
                      width={40}
                      height={40}
                      className="self-center"
                    ></Image>
                    <p>
                      <span className="text-[#f78764] self-center">1k+ </span>
                      5star Rating on Google
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <motion.button
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 1.5,
                      }}
                      className=" bg-[#650002] w-[130px] h-[7vh] text-[14px] uppercase rounded-[5px] text-white"
                    >
                      Menu
                    </motion.button>
                    <div className="flex">
                      <PhoneCall
                        size={14}
                        className="border-[#650002] self-center h-[7vh] w-[3vw] p-3 rounded-l-md border-[1px] border-solid"
                      />
                      <motion.button
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                          delay: 1.5,
                        }}
                        className=" flex justify-around gap-4 border-[#650002] bg-transparent border-[1px] border-l-[0px] border-solid w-[130px] h-[7vh] text-[14px] uppercase rounded-r-[5px] text-[#650002] items-center"
                      >
                        Call Us
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                  className="flex flex-col  gap-7 font-medium"
                >
                  {" "}
                  <div className="flex  mt-[0px] bg-white justify-center w-[45vw] px-2 rounded-lg border-dashed border-2 border-[#650002]">
                    <div className="flex w-[15%] justify-center items-center">
                      <Image
                        src={pin}
                        alt="locationIcon"
                        className="w-[40px] h-[40px]"
                        width={50}
                        height={5}
                      ></Image>
                    </div>
                    <div className="flex flex-col  text-black z-[1] w-[85%] self-end  items-center justify-center h-[12vh] bg-white">
                      Vaikunth Village Restaurant Kuha, opp. Shiv Aradhna, Shiv
                      Aradhna, Kuha, Gujarat 382433
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="flex justify-center w-screen z-[-1] mt-[80px]">
                <Image
                  src={separator}
                  width={1000}
                  height={40}
                  alt="sep"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 w-screen z-[-1] mt-[80px] mb-[200px]">
                <div
                  onScroll={handleScroll}
                  className="w-[80%] h-[81vh] overflow-y-hidden  py-[5rem] z-[1] overflow-x-scroll customScrollBar2 flex rounded-[20px] relative"
                >
                  <div className="flex w-[500vw] ">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, repeat: 0 }}
                    >
                      <PartyBooking />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, repeat: 0 }}
                    >
                      <PartyBooking />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, repeat: 0 }}
                    >
                      <PartyBooking />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, repeat: 0 }}
                    >
                      <PartyBooking />
                    </motion.div>
                  </div>
                </div>
                <div className="flex relative w-full">
                  <motion.div
                    className="bg-[transparent]  border-solid border-[#f7866433] border-2 z-[0] h-[76vh] absolute top-[-73vh] left-[10%] rounded-[20px]"
                    initial={{ width: "0%" }}
                    animate={{ width: `80%` }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="bg-[#6500020c]  z-[0] h-[76vh] absolute top-[-73vh] left-[10%] rounded-[20px]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn}
                className="absolute right-[-50px] top-[130px]  z-[0] mt-[-70px]"
              >
                <Icons.heroImg width={1080} height={733} />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn}
                className="absolute right-[25vw] top-[27vh] z-[0] mt-[-70px]"
              >
                <Image
                  src={swirlyArrow}
                  alt="swirlyArrow"
                  width={150}
                  height={150}
                  className="rotate-25"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn}
                className="absolute right-[5vw] top-[22vh] z-[0] mt-[-70px]"
              >
                <Image
                  src={favorite}
                  alt="swirlyArrow"
                  width={150}
                  height={150}
                  className="rotate-25"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn}
                className="absolute right-[37vw] top-[50vh]  mt-[-70px]"
              >
                <Image
                  src={rightArrow}
                  alt="swirlyArrow"
                  width={150}
                  height={150}
                  className="rotate-25"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn}
                className="absolute right-[30vw] bottom-[10vh]  mt-[-70px]"
              >
                <Image
                  src={upperRightArrow}
                  alt="swirlyArrow"
                  width={150}
                  height={150}
                  className="rotate-25"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn}
                className="absolute right-[4vw] bottom-[3vh]  mt-[-70px]"
              >
                <Image
                  src={arrowheads}
                  alt="swirlyArrow"
                  width={150}
                  height={150}
                  className="rotate-25"
                />
              </motion.div>
            </div>
          </DesktopView>
        </div>
      </div>
    </>
  );
};

export default Home;
