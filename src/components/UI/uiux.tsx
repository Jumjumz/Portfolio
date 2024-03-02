import { uiuxImageURL } from "../Utils/utils";
import { getSneaker, getTravel, getCarousel } from "./uiuxImport";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function UiUx() {
  const getSneakerImage = getSneaker();
  const getTravelImage = getTravel();
  const getCarouselImage = getCarousel();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [carousel, setCarousel] = useState(0);
  const ONE_SEC = 1000;
  const AUTO_DELAY = ONE_SEC * 5;

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCarousel((prev) =>
        prev === getCarouselImage.length - 1 ? 0 : prev + 1
      );
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  return (
    <>
      <motion.div
        className="max-[1600px]:h-[640px] max-[1200px]:h-[607px] col-start-2 col-span-3 row-start-3 row-span-6 flex flex-row flex-wrap bg-blu rounded-3xl overflow-clip overflow-y-scroll thin-scrollbar shadow-2xl dark:shadow-cadet-600/20 dark:bg-cadet-700"
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
        <div className="max-[1600px]:grid-rows-6 max-[1600px]:grid-cols-6 max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:flex-wrap max-[1200px]:h-[150rem] w-[calc(100%-2rem)] h-[607px] m-4 grid grid-cols-10 grid-rows-8 gap-2 overflow-clip">
          {getSneakerImage.map((getSneakerImage) => (
            <motion.a
              ref={ref}
              key={getSneakerImage.id}
              className={getSneakerImage.divclass}
              initial={getSneakerImage.divhidden}
              animate={getSneakerImage.divvisible}
              transition={getSneakerImage.divtransition}
              href={getSneakerImage.link}
              target="_blank"
            >
              <motion.img
                src={uiuxImageURL(getSneakerImage.name)}
                className={getSneakerImage.imgclass}
                animate={getSneakerImage.imgvisible}
                transition={getSneakerImage.imgtransition}
                loading="lazy"
              />
            </motion.a>
          ))}
        </div>
        <motion.div
          className="max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:flex-wrap max-[1200px]:h-[198em] w-[calc(100%-2rem)] h-[607px] m-4 grid grid-cols-8 grid-rows-8 gap-2 overflow-clip"
          ref={ref}
        >
          {getTravelImage.map((getTravelImage) => (
            <motion.a
              key={getTravelImage.id}
              variants={{
                hidden: { x: -1500, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              target="_blank"
              className={getTravelImage.divclass}
              initial="hidden"
              animate={mainControls}
              transition={getTravelImage.divtransition}
            >
              <motion.img
                src={uiuxImageURL(getTravelImage.name)}
                className={getTravelImage.imgclass}
                loading="lazy"
              />
            </motion.a>
          ))}
          <motion.a
            className=" max-[1200px]:h-[300px] col-start-3 col-span-4 row-start-2 row-span-6 flex flex-row flex-wrap justify-center p-4 bg-celadon rounded-xl overflow-clip cursor-pointer"
            href="https://www.figma.com/file/rR79NPwcWUUX0O4bDdv8Bt/Travel-Website?type=design&mode=design&t=UTZjQKDaqfj5cbMe-1"
            target="_blank"
            ref={ref}
            variants={{
              hidden: { x: -1500, opacity: 0.5 },
              visible: { x: 0, opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: "linear",
              type: "spring",
              bounce: 0.3,
              stiffness: 30,
            }}
          >
            {getCarouselImage.map((getCarouselImage) => (
              <motion.img
                className="w-[100%] h-[100%] object-contain self-center"
                key={getCarouselImage.id}
                src={uiuxImageURL(getCarouselImage.name)}
                animate={{ translateY: `-${carousel * 100}%` }}
                transition={getCarouselImage.transition}
                loading="lazy"
              />
            ))}
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
}

export default UiUx;
