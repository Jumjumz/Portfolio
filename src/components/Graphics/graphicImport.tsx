const graphicImport = [
  {
    id: 1,
    name: "EmailDesign.png",
    alt: "Design Poster",
    webp: "EmailDesign.webp",
    classname:
      "max-[1200px]:h-[100%] col-start-4 row-start-1 row-span-6 grid grid-cols-1 grid-row-2 bg-bluegrn overflow-clip rounded-xl cursor-pointer",
    style: "w-[100%] h-[100%] object-cover col-start-1 row-start-1 shrink-0",
    hidden: { y: -1000 },
    visible: { y: 0 },
    transition: {
      duration: 1,
      delay: 4,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 60,
    },
  },

  {
    id: 2,
    name: "04_Valentines_Day-01.png",
    alt: "Valentine Postcard",
    webp: "valentines-01.webp",
    classname:
      "max-[1300px]:w-[100%] col-start-5 col-span-2 row-start-3 row-span-4 grid grid-cols-1 grid-row-2 bg-rd overflow-clip rounded-xl cursor-pointer",
    style: "w-[100%] h-[100%] object-cover col-start-1 row-start-1 shrink-0",
    hidden: { x: 600 },
    visible: { x: 0 },
    transition: {
      duration: 1,
      delay: 2.5,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 3,
    name: "4th-July.png",
    alt: "Fourth of July",
    webp: "4th-July.webp",
    classname:
      "max-[1300px]:w-[100%] col-start-2 col-span-2 row-start-3 row-span-2 grid grid-cols-1 grid-row-2 bg-lilac-700 overflow-clip rounded-xl cursor-pointer",
    style: " object-cover w-[100%] h-[100%] col-start-1 row-start-1",
    hidden: { y: 500 },
    visible: { y: 0 },
    transition: {
      duration: 1,
      delay: 1.5,
      ease: "linear",
      type: "spring",
      bounce: 0.5,
      stiffness: 30,
    },
  },

  {
    id: 4,
    name: "SocialMedia.png",
    alt: "Social Media",
    webp: "SocialMedia.webp",
    classname:
      "col-start-5 col-span-2 row-start-1 row-span-2 grid grid-cols-1 grid-row-2 bg-coral-700 overflow-clip rounded-xl cursor-pointer",
    style: "w-[100%] h-[100%] object-cover col-start-1 row-start-1 shrink-0",
    hidden: { y: -300 },
    visible: { y: 0 },
    transition: {
      duration: 1,
      delay: 2.5,
      ease: "linear",
      type: "spring",
      bounce: 0.5,
      stiffness: 30,
    },
  },

  {
    id: 5,
    name: "hallow-een.jpg",
    alt: "Halloween",
    webp: "hallow-een.webp",
    classname:
      " col-start-1 col-span-3 row-start-5 row-span-2 grid grid-cols-1 grid-row-2 bg-rquartz overflow-clip rounded-xl cursor-pointer",
    style: "w-[100%] h-[100%] object-cover col-start-1 row-start-1 shrink-0",
    hidden: { y: 1000 },
    visible: { y: 0 },
    transition: {
      duration: 1,
      delay: 2.2,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 6,
    name: "dec-holiday.jpg",
    alt: "Holiday",
    webp: "dec-holiday.webp",
    classname:
      "col-start-2 col-span-2 row-start-1 row-span-2 grid grid-cols-1 grid-row-2 bg-champagne-800 overflow-clip rounded-xl cursor-pointer",
    style: "w-[100%] h-[100%] object-cover col-start-1 row-start-1 shrink-0",
    hidden: { y: -500 },
    visible: { y: 0 },
    transition: {
      duration: 1,
      delay: 1.5,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 7,
    name: "pros-myth.jpg",
    alt: "Myth",
    webp: "pros-myth.webp",
    classname:
      "col-start-1 row-start-1 row-span-4 grid grid-cols-1 grid-row-2 bg-purplehz overflow-clip rounded-xl cursor-pointer",
    style: " object-cover w-[100%] h-[100%] col-start-1 row-start-1 shrink-0",
    hidden: { x: -300 },
    visible: { x: 0 },
    transition: {
      duration: 1,
      delay: 2.5,
      ease: "linear",
      type: "spring",
      bounce: 0.5,
      stiffness: 30,
    },
  },
];

const getGraphic = () => {
  return graphicImport;
};

export default getGraphic;
