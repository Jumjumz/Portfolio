import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="max-[1600px]:h-[100px] max-[768px]:h-[80px] flex flex-row flex-wrap col-start 2 col-span-3 row-start-2 bg-indigo-300 rounded-3xl justify-evenly z-20"
      variants={{
        hidden: { x: ["100vw"] },
        animate: { x: 0 },
      }}
      initial="hidden"
      animate="animate"
      transition={{
        delay: 1.3,
        ease: "linear",
        duration: 1,
        type: "spring",
        bounce: 1,
        stiffness: 30,
      }}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " max-[768px]:w-24 max-[768px]:text-[1rem] max-[768px]:font-extrabold dark:max-[768px]:text-[1rem] h-[100%] w-40 text-2xl font-mono rounded-lg text-center flex flex-col flex-wrap justify-center transition ease-in-out duration-700 delay-100 translate-y-10 bg-purplehz relative text-white dark:font-serif dark:text-xl"
            : "max-[768px]:w-24 max-[768px]:text-[1rem] max-[768px]:font-extrabold dark:max-[768px]:text-[1rem] h-[100%] w-40 text-2xl font-mono rounded-lg text-center flex flex-col flex-wrap justify-center duration-700 hover:bg-indgo hover:text-white dark:text-lg dark:font-serif"
        }
      >
        <h1 className="w-[100%]">INTRO</h1>
      </NavLink>
      <NavLink
        to="UIUX"
        className={({ isActive }) =>
          isActive
            ? "max-[768px]:w-24 max-[768px]:text-[1rem] max-[768px]:font-extrabold dark:max-[768px]:text-[1rem] h-[100%] w-40 text-2xl font-mono rounded-lg text-center flex flex-col flex-wrap justify-center transition ease-in-out duration-700 delay-100 translate-y-10 bg-purplehz relative text-white dark:font-serif dark:text-xl"
            : "max-[768px]:w-24 max-[768px]:text-[1.2rem] max-[768px]:font-extrabold dark:max-[768px]:text-[1rem] h-[100%] w-40 text-2xl font-mono rounded-lg text-center flex flex-col flex-wrap justify-center duration-700 hover:bg-indgo hover:text-white dark:text-lg dark:font-serif"
        }
      >
        <h1 className="w-[100%]">UI/UX</h1>
      </NavLink>
      <NavLink
        to="front-end"
        className={({ isActive }) =>
          isActive
            ? "max-[768px]:w-24 max-[768px]:text-[1rem] max-[768px]:font-extrabold dark:max-[768px]:text-[1rem] h-[100%] w-40 text-2xl font-mono rounded-lg text-center flex flex-col flex-wrap justify-center transition ease-in-out duration-700 delay-100 translate-y-10 bg-purplehz relative text-white dark:font-serif dark:text-xl"
            : "max-[768px]:w-24 max-[768px]:text-[1rem] max-[768px]:font-extrabold dark:max-[768px]:text-[1rem] h-[100%] w-40 text-2xl font-mono rounded-lg text-center flex flex-col flex-wrap justify-center duration-700 hover:bg-indgo hover:text-white dark:text-lg dark:font-serif"
        }
      >
        <h1 className="w-[100%]">FRONT-END</h1>
      </NavLink>
      <NavLink
        to="graphics"
        className={({ isActive }) =>
          isActive
            ? "max-[768px]:w-24 max-[768px]:text-[1rem] max-[768px]:font-extrabold dark:max-[768px]:text-[1rem] h-[100%] w-40 text-2xl font-mono rounded-lg text-center flex flex-col flex-wrap justify-center transition ease-in-out duration-700 delay-100 translate-y-10 bg-purplehz relative text-white dark:font-serif dark:text-xl"
            : "max-[768px]:w-24 max-[768px]:text-[1rem] max-[768px]:font-extrabold dark:max-[768px]:text-[1rem] h-[100%] w-40 text-2xl font-mono rounded-lg text-center flex flex-col flex-wrap justify-center duration-700 hover:bg-indgo hover:text-white dark:text-lg dark:font-serif"
        }
      >
        <h1 className="w-[100%]">GRAPHICS</h1>
      </NavLink>
    </motion.nav>
  );
}

export default Navbar;
