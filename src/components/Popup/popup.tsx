import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  setNumPopUp: Number;
  notNum: (close: Number) => void;
  imgName: string;
}

const PopupImage: FC<Props> = ({ imgName, setNumPopUp, notNum }) => {
  return (
    <AnimatePresence>
      {setNumPopUp && (
        <motion.div
          className=" w-[calc(100%-2rem)] h-[calc(100%-2rem)] fixed bg-slate-700 flex flex-row flex-wrap justify-center p-8 z-50"
          key={imgName}
          onClick={(e) => e.stopPropagation()}
          variants={{
            hidden: { scale: 0.3 },
            visible: { scale: 1 },
            exit: { y: 1000 },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            type: "spring",
            bounce: 0.8,
            stiffness: 90,
          }}
        >
          <motion.div className=" w-[100%] h-2 flex flex-row flex-wrap justify-center mr-4 ml-4">
            <motion.button
              className=" w-16 h-16 bg-slate-50 relative top-6 text-4xl font-semibold rounded-full"
              onClick={() => notNum(0)}
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.8, rotate: 0 }}
            >
              X
            </motion.button>
          </motion.div>
          <motion.div className=" w-[100%] h-[90%] bg-drose m-4 flex flex-row flex-wrap justify-center">
            <motion.img
              className=" w-[calc(100%-4rem)] h-[calc(100%-4rem)] object-contain self-center shadow-2xl"
              src={imgName}
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupImage;
