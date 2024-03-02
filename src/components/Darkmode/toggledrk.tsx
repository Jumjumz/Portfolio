import SunSvg from "../../assets/svgs/sun-solid-white.svg";
import MoonSvg from "../../assets/svgs/moon-solid.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Toggle() {
  const [toggleDark, setToggleDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      setToggleDark(true);
    }
  }, []);

  const clicked = () => {
    if (toggleDark) {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    }
    setToggleDark(!toggleDark);
  };

  return (
    <>
      <motion.div
        className="max-[768px]:h-10 col-start 2 col-span-3 row-start-1 flex flex-row flex-wrap justify-end overflow-clip"
        variants={{
          hidden: { y: ["-100vh"] },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 3,
          ease: "linear",
          duration: 1,
          type: "spring",
          bounce: 1,
          stiffness: 30,
        }}
      >
        <motion.div
          className=" w-24 h-[100%] flex flex-row flex-wrap cursor-pointer"
          onClick={clicked}
          variants={{
            hidden: { y: -50 },
            visible: { y: 0 },
            exit: { y: 50 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            ease: "linear",
            duration: 1,
            type: "spring",
            bounce: 1,
            stiffness: 30,
          }}
        >
          {toggleDark ? (
            <img
              className="max-[768px]:h-8 w-[100%] h-10 self-center "
              src={SunSvg}
            />
          ) : (
            <img
              className="max-[768px]:h-8 w-[100%] h-10 self-center"
              src={MoonSvg}
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Toggle;
