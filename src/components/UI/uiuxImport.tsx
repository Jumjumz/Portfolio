const SneakerData = [
  {
    id: 1,
    hovId: 1,
    name: "Desktop-Sneaker-Whole-Page",
    link: "https://www.figma.com/file/cz8N05UO4eEv1Nw71iCPqN/Shoe-Shop-Website?type=design&mode=design&t=UTZjQKDaqfj5cbMe-1",
    divclass:
      "max-[1600px]:row-span-6 max-[1200px]:h-[576px] max-[1200px]:w-[100%] col-start-1 col-span-4 row-start-1 row-span-8 flex flex-row flex-wrap p-4 justify-center bg-ylw rounded-xl overflow-clip cursor-pointer",
    imgclass:
      "max-[1600px]:h-[400%] max-[1600px]:object-contain max-[1400px]:h-[380%] max-[1400px]:object-fill max-[1200px]:h-[380%] max-[1200px]:object-cover w-[100%] h-[400%] object-contain shadow-2xl relative t-[50rem]",
    divhidden: { y: -700 },
    divvisible: { y: 0 },
    divtransition: {
      duration: 1,
      delay: 1.8,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },

    imgvisible: { y: [-105, -1520] },
    imgtransition: {
      y: {
        delay: 3.5,
        duration: 18,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
      },
    },
  },

  {
    id: 2,
    name: "Desktop-Sneaker-Buy-Page",
    divclass:
      "max-[1600px]:col-span-2 max-[1600px]:row-span-2 max-[1200px]:h-[300px] col-start-5 col-span-3 row-start-1 row-span-4 flex flex-row flex-wrap p-4 justify-center bg-coral-700 rounded-xl overflow-clip",
    imgclass: " w-[100%] h-[100%] object-contain shadow-2xl relative",
    divhidden: { x: 1000 },
    divvisible: { x: 0 },
    divtransition: {
      duration: 1,
      delay: 1.8,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 3,
    name: "Tablet-Sneaker-Hero-Page",
    divclass:
      "max-[1600px]:col-span-2 max-[1600px]:col-start-7 max-[1600px]:col-span-2 max-[1600px]:row-span-4 max-[1200px]:h-[376px] col-start-8 col-span-3 row-start-1 row-span-5 flex flex-row flex-wrap p-4 justify-center bg-bluegrn rounded-xl overflow-clip",
    imgclass: "w-[100%] h-[100%] object-contain shadow-2xl relative",
    divhidden: { x: 1000 },
    divvisible: { x: 0 },
    divtransition: {
      duration: 1,
      delay: 3,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 4,
    name: "Mobile-Hero-Page",
    divclass:
      "max-[1600px]:col-start-5 max-[1600px]:col-span-2 max-[1600px]:row-start-3 max-[1600px]:row-span-4 max-[1200px]:h-[805px] col-start-5 col-span-3 row-start-5 row-span-4 flex flex-row flex-wrap p-4 justify-center bg-sanddlr rounded-xl overflow-clip",
    imgclass: "w-[100%] h-[100%] object-contain shadow-2xl relative",
    divhidden: { x: 1000 },
    divvisible: { x: 0 },
    divtransition: {
      duration: 1,
      delay: 2.5,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 5,
    name: "Desktop-Partners-Page",
    divclass:
      "max-[1600px]:col-start-7 max-[1600px]:col-span-2 max-[1600px]:row-start-5 max-[1600px]:row-span-2 max-[1200px]:h-[300px] col-start-8 col-span-3 row-start-6 row-span-3 flex flex-row flex-wrap p-4 justify-center bg-rred-600 rounded-xl overflow-clip",
    imgclass: "w-[100%] h-[100%] object-contain shadow-2xl relative",
    divhidden: { y: 600 },
    divvisible: { y: 0 },
    divtransition: {
      duration: 1,
      delay: 3,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },
];

const travelData = [
  {
    id: 1,
    name: "Mobile-Travel-Travel-Page",
    divclass:
      "max-[1200px]:h-[758px] col-start-7 row-start-5 row-span-4 flex flex-row flex-wrap p-4 justify-center bg-honeysuckle rounded-xl overflow-clip",
    imgclass: "w-[100%] h-[100%] object-contain shadow-2xl relative",
    divtransition: {
      duration: 1,
      delay: 1,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 2,
    name: "Tablet-Travel-Page",
    divclass:
      "max-[1200px]:h-[500px] col-start-1 col-span-2 row-start-1 row-span-5 flex flex-row flex-wrap p-4 justify-center bg-rquartz rounded-xl overflow-clip",
    imgclass: "w-[100%] h-[100%] object-contain shadow-2xl relative",
    divtransition: {
      duration: 1,
      delay: 2.2,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 3,
    name: "Desktop-Travel-Booking-Page",
    divclass:
      "max-[1200px]:h-[250px] col-start-7 col-span-2 row-start-1 row-span-4 flex flex-row flex-wrap p-4 justify-center bg-ylw rounded-xl overflow-clip",
    imgclass: "w-[100%] h-[100%] object-contain shadow-2xl relative",
    divtransition: {
      duration: 1,
      delay: 0.8,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 4,
    name: "Mobile-Travel-Hero Page-2",
    divclass:
      "max-[1200px]:h-[758px] col-start-8 row-start-5 row-span-4 flex flex-row flex-wrap p-4 justify-center bg-coral-700 rounded-xl overflow-clip",
    imgclass: "w-[100%] h-[100%] object-contain shadow-2xl relative",
    divtransition: {
      duration: 1,
      delay: 0.5,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 5,
    name: "Tablet-Travel-Hero Page-3",
    divclass:
      "max-[1200px]:h-[555px] col-start-1 col-span-2 row-start-6 row-span-3 flex flex-row flex-wrap p-4 justify-center bg-puce rounded-xl overflow-clip",
    imgclass: "w-[100%] h-[100%] object-contain shadow-2xl relative",
    divtransition: {
      duration: 1,
      delay: 2.5,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 6,
    name: "",
    divclass:
      "max-[1200px]:hidden col-start-3 col-span-4 row-start-1 bg-lilac-600 rounded-xl overflow-clip",
    imgclass: "hidden",
    divtransition: {
      duration: 1,
      delay: 1.7,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 7,
    name: "",
    divclass:
      "max-[1200px]:hidden col-start-3 col-span-4 row-start-8 bg-drose rounded-xl overflow-clip",
    imgclass: "hidden",
    divtransition: {
      duration: 1,
      delay: 1.8,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },
];

const travelCarousel = [
  {
    id: 1,
    name: "Desktop-Travel-Hero-Page",
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
    id: 2,
    name: "Desktop-Travel-Hero-Page-3",
    transition: {
      duration: 1,
      delay: 2,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 3,
    name: "Desktop-Travel-Travel-Page",
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
    id: 4,
    name: "Desktop-Travel-Travel-Page-2",
    transition: {
      duration: 1,
      delay: 3,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 5,
    name: "Desktop-Travel-Booking-Page",
    transition: {
      duration: 1,
      delay: 3.5,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },

  {
    id: 6,
    name: "Desktop-Travel-Contact-Page",
    transition: {
      duration: 1,
      delay: 4,
      ease: "linear",
      type: "spring",
      bounce: 0.3,
      stiffness: 30,
    },
  },
];

const getSneaker = () => {
  return SneakerData;
};

const getTravel = () => {
  return travelData;
};

const getCarousel = () => {
  return travelCarousel;
};

export { getSneaker, getTravel, getCarousel };
