import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, FC, useEffect } from "react";

interface Props {
  image: string;
  link: string;
  header: string;
  btn: string;
}

const ref = useRef(null);
const isInView = useInView(ref, { once: false });
const mainControls = useAnimation();

useEffect(() => {
  if (isInView) {
    mainControls.start("visible");
    console.log(isInView);
  } else {
    mainControls.start("hidden");
    console.log(isInView);
  }
}, [isInView]);

const FrontComp: FC<Props> = ({ image, link, header, btn }) => {
  return (
    <>
      <motion.div
        className=" w-[calc(100%-2rem)] h-[calc(100%-2rem)] flex flex-col flex-wrap m-4 justify-evenly rounded-xl overflow-clip"
        ref={ref}
      >
        <motion.div
          className="w-[calc(30%-2rem)] h-[calc(100%-2rem)] flex flex-col flex-wrap m-4 p-4 justify-evenly  bg-rred-600 rounded-e-xl order-2"
          variants={{
            hidden: { y: 600 },
            visible: { y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            delay: 0.5,
            ease: "linear",
            duration: 1.3,
            type: "spring",
            bounce: 1,
            stiffness: 30,
          }}
        >
          <h1 className=" font-serif text-[3rem] font-semibold text-slate-900">
            {header}
          </h1>
          <div className=" w-[100%] h-12 flex flex-row justify-center">
            <motion.a
              className=" w-32 h-[100%] shadow-xl rounded-lg bg-rquartz text-center p-2 font-mono font-semibold text-lg align-middle cursor-pointer"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              href={link}
            >
              {btn}
            </motion.a>
          </div>
        </motion.div>
        <motion.img
          className="w-[calc(70%-2rem)] h-[calc(100%-2rem)] m-4 rounded-s-xl"
          variants={{
            hidden: { y: -600 },
            visible: { y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            delay: 0.5,
            ease: "linear",
            duration: 1.3,
            type: "spring",
            bounce: 1,
            stiffness: 30,
          }}
          src={image}
        />
      </motion.div>
    </>
  );
};

export default FrontComp;
