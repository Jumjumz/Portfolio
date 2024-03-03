import ImgOne from "../../assets/WebpImgs/Desktop-Hero-Page.webp";
import ImgTwo from "../../assets/WebpImgs/Desktop-Travel-Hero-Page.webp";
import ImgThree from "../../assets/WebpImgs/Desktop-StartUp-Hero-Page.webp";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

function FrontEnd() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });
  const isInView2 = useInView(ref2, { once: false });
  const isInView3 = useInView(ref3, { once: false });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [isInView1]);

  useEffect(() => {
    if (isInView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [isInView2]);

  useEffect(() => {
    if (isInView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
  }, [isInView3]);

  return (
    <>
      <motion.div
        className="max-[1600px]:h-[640px] max-[1200px]:overflow-clip max-[1200px]:h-[100%] col-start-2 col-span-3 row-start-3 row-span-6 flex flex-row flex-wrap justify-end relative bg-blu rounded-3xl overflow-clip overflow-y-scroll thin-scrollbar scroll-smooth shadow-2xl dark:shadow-cadet-600/20 dark:bg-cadet-700"
        variants={{
          hidden: { y: ["100vh"] },
          animate: { y: 0 },
        }}
        initial="hidden"
        animate="animate"
        transition={{
          delay: 1,
          ease: "linear",
          duration: 1.3,
          type: "spring",
          bounce: 1,
          stiffness: 30,
        }}
      >
        <motion.div
          className="max-[1600px]:flex-row w-[calc(100%-2rem)] h-[calc(100%-2rem)] flex flex-col flex-wrap m-4 justify-evenly rounded-xl overflow-clip"
          ref={ref1}
        >
          <motion.div
            className="max-[1600px]:m-0 max-[1600px]:h-[100%] max-[1200px]:w-[100%] max-[1200px]:h-44 max-[1200px]:m-0 max-[1200px]:rounded-none w-[calc(30%-2rem)] h-[calc(100%-2rem)] flex flex-col flex-wrap m-4 p-4 justify-evenly dark:bg-rquartz  bg-honeysuckle rounded-e-xl order-2"
            variants={{
              hidden: { y: 600 },
              visible: { y: 0 },
            }}
            initial="hidden"
            animate={controls1}
            transition={{
              delay: 0,
              ease: "linear",
              duration: 1.3,
              type: "spring",
              bounce: 1,
              stiffness: 30,
            }}
          >
            <h1 className="max-[1200px]:text-center max-[1200px]:text-4xl font-serif text-5xl font-semibold text-slate-900">
              E-Commerce Website
            </h1>
            <div className="max-[1200px]:h-10  w-[100%] h-12 flex flex-row justify-center">
              <motion.a
                className=" w-32 h-[100%] shadow-xl rounded-lg bg-rquartz dark:bg-slate-900 dark:text-rquartz text-center p-2 font-mono font-semibold text-lg align-middle cursor-pointer"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                href="https://sneaker-store-sample-website.vercel.app/"
                target="_blank"
              >
                DEMO
              </motion.a>
            </div>
          </motion.div>
          <motion.img
            className="max-[1600px]:m-0 max-[1600px]:h-[100%] max-[1200px]:w-[100%] max-[1200px]:h-72 max-[1200px]:m-0 max-[1200px]:rounded-none max-[1200px]:object-cover w-[calc(70%-2rem)] h-[calc(100%-2rem)] m-4 rounded-s-xl"
            variants={{
              hidden: { y: -600 },
              visible: { y: 0 },
            }}
            initial="hidden"
            animate={controls1}
            transition={{
              delay: 0,
              ease: "linear",
              duration: 1.3,
              type: "spring",
              bounce: 1,
              stiffness: 30,
            }}
            src={ImgOne}
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="max-[1600px]:flex-row w-[calc(100%-2rem)] h-[calc(100%-2rem)] flex flex-col flex-wrap m-4 justify-evenly rounded-xl overflow-clip"
          ref={ref2}
        >
          <motion.div
            className="max-[1600px]:m-0 max-[1600px]:h-[100%] max-[1200px]:w-[100%] max-[1200px]:h-44 max-[1200px]:m-0 max-[1200px]:rounded-none w-[calc(30%-2rem)] h-[calc(100%-2rem)] flex flex-col flex-wrap m-4 p-4 justify-evenly dark:bg-rquartz bg-honeysuckle rounded-e-xl order-2"
            variants={{
              hidden: { y: 600 },
              visible: { y: 0 },
            }}
            initial="hidden"
            animate={controls2}
            transition={{
              delay: 0,
              ease: "linear",
              duration: 1.3,
              type: "spring",
              bounce: 1,
              stiffness: 30,
            }}
          >
            <h1 className="max-[1200px]:text-center max-[1200px]:text-4xl font-serif text-[3rem] font-semibold text-slate-900">
              Travel Website
            </h1>
            <div className="max-[1200px]:h-10 w-[100%] h-12 flex flex-row justify-center">
              <motion.a
                className=" w-32 h-[100%] shadow-xl rounded-lg bg-rquartz dark:bg-slate-900 dark:text-rquartz text-center p-2 font-mono font-semibold text-lg align-middle cursor-pointer"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
              >
                DEMO
              </motion.a>
            </div>
          </motion.div>
          <motion.img
            className="max-[1600px]:m-0 max-[1600px]:h-[100%] max-[1200px]:w-[100%] max-[1200px]:h-72 max-[1200px]:m-0 max-[1200px]:rounded-none max-[1200px]:object-cover w-[calc(70%-2rem)] h-[calc(100%-2rem)] m-4 rounded-s-xl"
            variants={{
              hidden: { y: -600 },
              visible: { y: 0 },
            }}
            initial="hidden"
            animate={controls2}
            transition={{
              delay: 0,
              ease: "linear",
              duration: 1.3,
              type: "spring",
              bounce: 1,
              stiffness: 30,
            }}
            src={ImgTwo}
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="max-[1600px]:flex-row w-[calc(100%-2rem)] h-[calc(100%-2rem)] flex flex-col flex-wrap m-4 justify-evenly rounded-xl overflow-clip"
          ref={ref3}
        >
          <motion.div
            className="max-[1600px]:m-0 max-[1600px]:h-[100%] max-[1200px]:w-[100%] max-[1200px]:h-44 max-[1200px]:m-0 max-[1200px]:rounded-none w-[calc(30%-2rem)] h-[calc(100%-2rem)] flex flex-col flex-wrap m-4 p-4 justify-evenly dark:bg-rquartz  bg-honeysuckle rounded-e-xl order-2"
            variants={{
              hidden: { y: 600 },
              visible: { y: 0 },
            }}
            initial="hidden"
            animate={controls3}
            transition={{
              delay: 0,
              ease: "linear",
              duration: 1.3,
              type: "spring",
              bounce: 1,
              stiffness: 30,
            }}
          >
            <h1 className="max-[1200px]:text-center max-[1200px]:text-4xl font-serif text-[3rem] font-semibold text-slate-900">
              StartUp Website
            </h1>
            <div className="max-[1200px]:h-10 w-[100%] h-12 flex flex-row justify-center">
              <motion.a
                className=" w-32 h-[100%] shadow-xl rounded-lg bg-rquartz dark:bg-slate-900 dark:text-rquartz text-center p-2 font-mono font-semibold text-lg align-middle cursor-pointer"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                href="https://start-up-sample-site.vercel.app/"
                target="_blank"
              >
                DEMO
              </motion.a>
            </div>
          </motion.div>
          <motion.img
            className="max-[1600px]:m-0 max-[1600px]:h-[100%] max-[1200px]:w-[100%] max-[1200px]:h-72 max-[1200px]:m-0 max-[1200px]:rounded-none max-[1200px]:object-cover w-[calc(70%-2rem)] h-[calc(100%-2rem)] m-4 rounded-s-xl"
            variants={{
              hidden: { y: -600 },
              visible: { y: 0 },
            }}
            initial="hidden"
            animate={controls3}
            transition={{
              delay: 0,
              ease: "linear",
              duration: 1.3,
              type: "spring",
              bounce: 1,
              stiffness: 30,
            }}
            src={ImgThree}
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default FrontEnd;
