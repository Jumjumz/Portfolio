import Propic from "../../assets/WebpImgs/prof.webp";
import Resume from "../../assets/Resume/Resume.pdf";
import { gFStack } from "../Techstack/techstack";
import { gGUIStack } from "../Techstack/techstack";
import { motion } from "framer-motion";

function Profile() {
  const getFStack = gFStack();
  const getGUIStack = gGUIStack();
  return (
    <>
      <motion.div
        className="min-[1600px]:w-full min-[1600px]:h-full min-[1600px]:flex-col min-[1600px]:justify-center min-[1025px]:w-full min-[1025px]:h-[432px] min-[1025px]:flex-row min-[1025px]:justify-between max-[1024px]:w-[432px] max-[1024px]:h-[900px] max-[1024px]:self-center flex flex-col flex-wrap col-start-1 row-start-1 row-span-8 p-4 justify-center rounded-3xl bg-bluegrn shadow-2xl dark:shadow-cadet-600/30 dark:bg-champagne-900"
        variants={{
          hidden: { y: ["-100vh"] },
          animate: { y: 0 },
        }}
        initial="hidden"
        animate="animate"
        transition={{
          delay: 0.5,
          ease: "linear",
          duration: 1,
          type: "spring",
          bounce: 1,
          stiffness: 30,
        }}
      >
        <div className="min-[1600px]:h-52 min-[1600px]:w-[100%] min-[1025px]:w-[25%] h-52 flex flex-row justify-center">
          <motion.div className="max-[1600px]:w-56 max-[1600px]:h-48 w-60 h-48 rounded-full self-center absolute bg-gradient-to-r from-fuchsia animate-spin dark:bg-gradient-to-t dark:from-indgo" />
          <img
            src={Propic}
            className=" w-48 h-48 rounded-full self-center z-10"
          />
        </div>
        <div className="min-[1600px]:h-52 min-[1600px]:w-[100%] min-[1025px]:w-[40%] h-52 flex flex-col pt-2 pb-2 justify-evenly border-gray-700 border-b-2">
          <h1 className="max-[1600px]:text-4xl mt-2 mb-2 font-serif text-5xl text-center text-gray-900">
            Jummer Ramos
          </h1>
          <p className="max-[1600px]:text-lg ml-2 mr-2 font-serif text-lg text-gray-900">
            Services: Full Stack, UI/UX, Graphic Design
          </p>
          <p className="max-[6300px]:text-lg ml-2 mr-2 font-serif text-lg text-gray-900">
            Availability: Present--
          </p>
          <p className=" max-[1600px]:text-lg ml-2 mr-2 font-serif text-lh text-gray-900">
            Design Experience: 5+ years
          </p>
          <p className="max-[1600px]:text-lg ml-2 mr-2 font-serif text-lg text-gray-900">
            Front-end, UI/UX: 1.5+ years
          </p>
        </div>
        <div className="min-[1600px]:h-36 min-[1600px]:w-full min-[1600px]:pt-0 min-[1025px]:w-[35%] min-[1025px]:h-52 min-[1025px]:pt-5 w-[100%] h-40 flex flex-col border-gray-700 border-b-2">
          <h1 className="min-[1600px]:text-3xl min-[1025px]:text-4xl font-serif text-3xl text-center text-gray-900">
            Tech Stack
          </h1>
          <div className=" w-[100%] h-[100%] flex flex-col flex-wrap justify-evenly overflow-clip gradient-mask-r-80">
            <div className=" w-[100%] h-8 flex flex-col flex-wrap justify-evenly">
              {getFStack.map((getFStack) => (
                <motion.h1
                  className=" w-32 h-8 text-center font-mono text-base flex flex-col justify-center align-middle text-slate-800 bg-slate-200 ml-2 rounded-md shadow-lg shadow-cadet-900/60 dark:shadow-rred-500/60"
                  animate={{ x: [0, -1495] }}
                  transition={{
                    x: {
                      duration: 30,
                      repeatType: "loop",
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  key={getFStack.id}
                >
                  {getFStack.text}
                </motion.h1>
              ))}
            </div>
            <div className=" w-[100%] h-8 flex flex-col flex-wrap justify-evenly">
              {getGUIStack.map((getGUIStack) => (
                <motion.h1
                  className=" w-32 h-8 text-center font-mono text-base flex flex-col justify-center align-middle text-slate-800 bg-slate-200 ml-2 rounded-md shadow-lg shadow-blu/60 dark:shadow-rred-500/60"
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
                  key={getGUIStack.id}
                >
                  {getGUIStack.text}
                </motion.h1>
              ))}
            </div>
          </div>
        </div>
        <div className="min-[1600px]:h-26 min-[1600px]:w-full min-[1025px]:w-[50%] w-[100%] h-26 flex flex-row flex-wrap justify-evenly text-center">
          <h1 className=" font-serif text-3xl w-[100%]">Contacts</h1>
          <p className=" font-serif text-lg w-[100%]">
            Email: jumjumramos@gmail.com
          </p>
          <p className="font-serif text-lg w-[100%]">Skype: jumjumramos_1</p>
        </div>
        <div className="min-[1600px]:h-36 min-[1600px]:w-full min-[1600px]:gap-0 min-[1025px]:w-[50%] w-[100%] h-30 pt-1 pb-1 flex flex-col gap-2 justify-evenly mt-2">
          <motion.a
            className="max-[1600px]:h-12 h-10 rounded-2xl bg-rred-900 font-sans font-semibold text-white text-lg text-center p-1 tracking-[0.3rem] shadow-md shadow-rred-500/60 hover:shadow-rred-800/40 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href={Resume}
            download="Resume.pdf"
          >
            RESUME
          </motion.a>
          <motion.a
            className="max-[1600px]:h-12 h-10 rounded-2xl bg-zinc-700 font-mono font-semibold text-white text-lg text-center p-1 tracking-[0.3rem] shadow-md shadow-gray-500/60 hover:shadow-gray-800/40 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Jumjumz/Portfolio"
            target="_blank"
          >
            CODE
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}

export default Profile;
