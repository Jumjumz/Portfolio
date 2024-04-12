import getGraphic from "./graphicImport";
import PopupImage from "../Popup/popup";
import Hover from "../Hover/hover";
import { getGraphicURL } from "../Utils/utils";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

function Graphics() {
  const getGraphicImage = getGraphic();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [showImage, setShowImage] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        className="col-start-2 col-span-3 row-start-3 row-span-6 bg-blu rounded-3xl overflow-clip shadow-2xl dark:shadow-cadet-600/20 dark:bg-cadet-700"
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
        <div className="max-[1600px]:h-[640px] max-[1299px]:hidden w-[100%] h-[100%] grid grid-cols-6 grid-rows-6 p-4 gap-2">
          {getGraphicImage.map((getGraphicImage) => (
            <>
              <motion.div
                className={getGraphicImage.classname}
                ref={ref}
                key={getGraphicImage.id}
                initial={getGraphicImage.hidden}
                animate={getGraphicImage.visible}
                transition={getGraphicImage.transition}
                onHoverStart={() => setHover(getGraphicImage.id)}
                onHoverEnd={() => setHover(0)}
              >
                <AnimatePresence>
                  {hover === getGraphicImage.id && (
                    <Hover
                      setNumHover={getGraphicImage.id}
                      setPop={() => setShowImage(getGraphicImage.id)}
                      styleDiv="w-[100%] h-[100%] bg-slate-800 hover:opacity-80 relative col-start-1 row-start-1 z-20 cursor-default"
                      styleBtn="w-[100%] h-16 bg-teal-300 hover:bg-teal-500 text-center font-sans text-lg text-neutral-900 font-semibold hover:text-zinc-900"
                    />
                  )}
                </AnimatePresence>
                <img
                  className={getGraphicImage.style}
                  src={getGraphicURL(getGraphicImage.webp)}
                  alt={getGraphicImage.alt}
                  loading="lazy"
                />
              </motion.div>
              <AnimatePresence>
                {showImage === getGraphicImage.id && (
                  <PopupImage
                    imgName={getGraphicURL(getGraphicImage.name)}
                    setNumPopUp={getGraphicImage.id}
                    notNum={() => setShowImage(0)}
                  />
                )}
              </AnimatePresence>
            </>
          ))}
        </div>
        <div className="min-[1300px]:hidden max-[1300px]:h-[52rem] max-[1300px]:justify-center max-[1300px]:overflow-y-scroll max-[1300px]:thin-scrollbar max-[1300px]:flex max-[1300px]:flex-row max-[1300px]:flex-wrap w-[100%] h-[100%] grid grid-cols-6 grid-rows-6 p-4 gap-2">
          {getGraphicImage.map((getGraphicImage) => (
            <>
              <motion.div
                className={getGraphicImage.classname}
                ref={ref}
                key={getGraphicImage.id}
                onClick={() => setShowImage(getGraphicImage.id)}
              >
                <img
                  className={getGraphicImage.style}
                  src={getGraphicURL(getGraphicImage.name)}
                  alt={getGraphicImage.alt}
                  loading="lazy"
                />
              </motion.div>
              {showImage === getGraphicImage.id && (
                <PopupImage
                  imgName={getGraphicURL(getGraphicImage.name)}
                  setNumPopUp={getGraphicImage.id}
                  notNum={() => setShowImage(0)}
                />
              )}
            </>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Graphics;
