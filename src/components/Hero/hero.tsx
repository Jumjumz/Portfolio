import Profile from "../Profile/profile";
import Navbar from "../Navbar/navbar";
import Samples from "../Samples/samples";
import Toggle from "../Darkmode/toggledrk";
import { motion } from "framer-motion";
import { Suspense } from "react";

function Hero() {
  return (
    <>
      <Suspense>
        <section className="flex max-[1600px]:h-[100%] flex-row flex-wrap h-dvh justify-center overflow-hidden dark:bg-cadet-900">
          <motion.div className="grid min-[1880px]:w-[1838px] max-[1880px]:h-[calc(100%-4rem)] h-[856px] max-[1600px]:flex max-[1600px]:flex-col max-[1600px]:flex-wrap max-[1600px]:justify-center grid-cols-4 grid-rows-8 m-8 gap-2 self-center">
            <Toggle />
            <Profile />
            <Navbar />
            <Samples />
          </motion.div>
        </section>
      </Suspense>
    </>
  );
}

export default Hero;
