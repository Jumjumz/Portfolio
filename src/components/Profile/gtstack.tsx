import { gGUIStack } from "../Techstack/techstack";
import { motion } from "framer-motion";

function GTStack() {
  const getGUIStack = gGUIStack();
  return (
    <>
      {getGUIStack.map((getGUIStack) => (
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: [-815, 0] }}
          transition={{
            x: {
              duration: 20,
              repeatType: "loop",
              repeatDelay: 0,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className=" w-32 h-8 text-center font-mono text-base flex flex-col justify-center align-middle text-slate-800 bg-slate-300 ml-2 rounded-md shadow-lg shadow-slate-500/60"
          key={getGUIStack.id}
        >
          {getGUIStack.text}
        </motion.h1>
      ))}
    </>
  );
}

export default GTStack;
