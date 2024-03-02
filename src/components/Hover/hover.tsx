import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";

interface Hprops {
  setNumHover: Number;
  setPop: (open: Number) => void;
  styleDiv: string;
  styleBtn: string;
}

const Hover: FC<Hprops> = ({ setNumHover, setPop, styleDiv, styleBtn }) => {
  return (
    <>
      <AnimatePresence>
        {setNumHover && (
          <div className={styleDiv}>
            <motion.button
              className={styleBtn}
              onClick={() => setPop(setNumHover)}
              variants={{
                hidden: { y: 700 },
                visible: { y: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                duration: 0.5,
                delay: 0,
                ease: "linear",
                type: "spring",
                bounce: 0.5,
                stiffness: 30,
              }}
            >
              EXPLORE
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hover;
