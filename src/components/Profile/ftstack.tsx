import { motion } from "framer-motion";
import { gFStack } from "../Techstack/techstack";

function FTStack() {
  const getFStack = gFStack();
  return (
    <>
      {getFStack.map((getFStack) => (
        <motion.h1
          animate={{ x: [0, -1495] }}
          transition={{
            x: {
              duration: 30,
              repeatType: "loop",
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className=" w-32 h-8 text-center font-mono text-base flex flex-col justify-center align-middle text-slate-800 bg-slate-300 ml-2 rounded-md shadow-lg shadow-slate-500/60"
          key={getFStack.id}
        >
          {getFStack.text}
        </motion.h1>
      ))}
    </>
  );
}

export default FTStack;
