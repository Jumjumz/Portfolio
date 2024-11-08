import Pic from "../../assets/WebpImgs/profBig.webp";
import Arrow from "../../assets/svgs/icon-arrow.svg";
import { getSvgURL } from "../Utils/utils";
import { getTestimonials } from "../Testimonies/testimonies";
import { useInView, motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

function Intro() {
  const setTestimonials = getTestimonials();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        className="col-start-2 col-span-3 row-start-3 row-span-6 flex flex-col flex-wrap bg-blu rounded-3xl overflow-clip shadow-2xl dark:shadow-cadet-600/20 dark:bg-cadet-700"
        variants={{
          hidden: { y: ["100vh"] },
          animate: { y: 0 },
        }}
        initial="hidden"
        animate="animate"
        transition={{
          delay: 1,
          ease: "linear",
          duration: 1,
          type: "spring",
          bounce: 1,
          stiffness: 30,
        }}
      >
        <div
          className="max-[1600px]:h-[640px] max-[1024px]:h-[100%] max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:flex-wrap h-[calc(100%-2rem)] grid grid-cols-6 grid-rows-6 m-4 gap-2 rounded-3xl overflow-clip"
          ref={ref}
        >
          <motion.div
            className=" max-[1024px]:h-[542px] col-start-1 col-span-2 row-start-1 row-span-6 overflow-clip flex flex-col flex-wrap rounded-xl"
            variants={{
              hidden: { x: -1000 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 1.2,
              ease: "linear",
              type: "spring",
              bounce: 0.5,
              stiffness: 45,
            }}
          >
            <div className=" h-full">
              <img
                className="max-[1024px]:object-contain w-full h-full object-cover"
                src={Pic}
              />
            </div>
          </motion.div>
          <motion.div
            className="col-start-3 col-span-2 row-start-1 row-span-4 bg-ylw rounded-xl p-4 flex flex-col flex-wrap"
            variants={{
              hidden: { y: -1000 },
              visible: { y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1.3,
              delay: 1.8,
              ease: "linear",
              type: "spring",
              bounce: 0.5,
              stiffness: 45,
            }}
          >
            <h1 className="max-[1879px]:text-xl max-[1600px]:text-4xl max-[1400px]:text-3xl max-[1024px]:text-4xl font-mono font-black text-3xl text-center">
              HI!
            </h1>
            <h1 className="max-[1879px]:text-4xl max-[1600px]:text-5xl max-[1400px]:text-4xl max-[1024px]:text-4xl font-mono font-light text-5xl text-center">
              WELCOME TO MY
              <em className=" text-slate-700 font-black not-italic">
                {" "}
                POR
                <span className=" animate-pulse text-fuchsia">T</span>
                FOLIO
              </em>
            </h1>
            <p className=" max-[1600px]:text-sm max-[1200px]:text-xs max-[1024px]:text-m font-san text-sm text-center mt-2">
              This portfolio is a showcase of what I can do as a{" "}
              <em className="font-bold not-italic">Web Developer </em>
              and my past work as a{" "}
              <em className="font-bold not-italic">Graphic Designer. </em>I like
              building websites(obviously xD) and its processes in order to make
              one. I want to create and learn a lot of things to further improve
              my skillset and expertise in web development.
            </p>
            <p className=" max-[1600px]:text-sm max-[1200px]:text-xs max-[1024px]:text-m font-san text-sm text-center mt-2">
              Currently, I am enjoying the process of making websites as a{" "}
              <em className="font-bold not-italic">Full Stack Developer.</em> My
              favorite in making front-end websites are{" "}
              <motion.em className="font-bold not-italic animate-pulse">
                Animations
              </motion.em>{" "}
              as they make websites become more interactive and interesting.
            </p>
          </motion.div>
          <motion.div
            className=" col-start-3 col-span-2 row-start-5 row-span-2 bg-bluegrn rounded-xl p-4 flex flex-col flex-wrap justify-evenly"
            variants={{
              hidden: { y: 1000 },
              visible: { y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1.3,
              delay: 1.8,
              ease: "linear",
              type: "spring",
              bounce: 0.5,
              stiffness: 45,
            }}
          >
            <h1 className=" max-[1600px]:text-2xl max-[1200px]:text-xl font-mono font-black text-3xl text-center">
              What They Say About Me
            </h1>
            <p className=" max-[1300px]:text-m max-[1200px]:text-sm font-san text-sm text-center">
              These are the statements from very respectable people that I
              previously worked with. The people that taught me and made me who
              I am today in the industry.
            </p>
          </motion.div>
          <motion.img
            className="max-[1024px]:hidden max-[1879px]:w-12 col-start-5 row-start-5 w-12 h-16 z-10 relative left-[-1.8rem] top-[-2.3rem] rotate-90"
            ref={ref}
            src={Arrow}
            variants={{
              hidden: { rotate: 0 },
              visible: { rotate: 90 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1.3,
              delay: 1.8,
              ease: "linear",
              type: "spring",
              bounce: 0.5,
              stiffness: 45,
            }}
          />
          <motion.img
            className="max-[1024px] max-[1024px]:h-10 max-[1024px]:self-center max-[1024px]:top-0 min-[1025px]:hidden col-start-5 row-start-5 w-14 h-16 z-10 relative left-[-1.8rem] top-[-2.3rem] rotate-90"
            ref={ref}
            src={Arrow}
            variants={{
              hidden: { rotate: 0 },
              visible: { rotate: -90 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1.3,
              delay: 1.8,
              ease: "linear",
              type: "spring",
              bounce: 0.5,
              stiffness: 45,
            }}
          />
          <motion.div
            className="max-[1024px]:h-[608px] max-[1024px]:w-[443px] max-[1024px]:self-center col-start-5 col-span-2 row-start-1 row-span-6 flex flex-row flex-wrap bg-coral-700 rounded-xl overflow-y-clip"
            variants={{
              hidden: { x: 1000 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1.3,
              delay: 1.8,
              ease: "linear",
              type: "spring",
              bounce: 0.5,
              stiffness: 45,
            }}
          >
            {setTestimonials.map((setTestimonials) => (
              <motion.div
                className=" w-[100%] h-30 m-2 flex flex-row flex-wrap relative bg-coral-600 rounded-xl hover:bg-coral-800 shadow-2xl shadow-slate-700/30 hover:shadow-red-600 cursor-default"
                ref={ref}
                key={setTestimonials.id}
                variants={{
                  hidden: { y: 0 },
                  visible: { y: [0, -1215] },
                }}
                initial="hidden"
                animate={mainControls}
                whileHover={{ scale: 1.02 }}
                transition={{
                  y: {
                    delay: 3.5,
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                }}
              >
                <div className="w-[100%] h-8 flex flex-row flex-wrap justify-center">
                  <img
                    className=" w-8 h-100%"
                    src={getSvgURL(setTestimonials.qoute)}
                  />
                </div>
                <p className=" font-sans text-sm text-center ml-2 mr-2">
                  {setTestimonials.message}
                </p>
                <h1 className=" font-serif text-lg text-center w-[100%]">
                  {setTestimonials.name}
                </h1>
                <h1 className=" font-serif text-sm text-center w-[100%]">
                  {setTestimonials.title}
                </h1>
                <div className=" w-[100%] h-8 flex flex-row flex-wrap justify-center">
                  <img
                    className=" w-8 h-[100%]"
                    src={getSvgURL(setTestimonials.cover)}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Intro;
