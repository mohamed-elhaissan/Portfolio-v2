import { Link } from "react-router-dom";
import work1 from "../../assets/work/Chat UI Page Result (User).svg";
import work2 from "../../assets/work/Portfolio.svg";
import work3 from "../../assets/work/Products.svg";
import work4 from "../../assets/work/work.svg";
import { motion } from "motion/react";
import buzzlyImage from "../../assets/buzzly.svg"; 

const Work = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

const work = [
  {
    id: 5,
    title: "Buzzly - React Toast Notification Library",
    description:
      "A customizable and lightweight toast notification system built with React, Tailwind CSS, and Framer Motion. Designed for modern apps.",
    image: buzzlyImage,
    technology: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    id: 1,
    title: "Chat Page Result (User)",
    description:
      "A user interface design for a chat application, showcasing the conversation layout and user interactions.",
    image: work1,
    technology: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "Stock Market Dashboard",
    description:
      "A sleek and modern interface for tracking stocks, portfolios, and market insights in real time.",
    image: work2,
    technology: ["React", "Recharts", "Tailwind CSS", "REST API"],
  },
  {
    id: 4,
    title: "E-Commerce Product Listing Page",
    description:
      "A minimal and user-friendly shop interface with advanced filters and responsive product grid.",
    image: work4,
    technology: ["React", "Tailwind CSS", "TypeScript", "Redux Toolkit"],
  },
  {
    id: 3,
    title: "Digital Marketing Agency Website",
    description: "Clean and modern platform for a digital marketing agency.",
    image: work3,
    technology: ["React", "Tailwind CSS", "GSAP"],
  }
];

  return (
    <motion.div
      id="work"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex relative flex-col p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 text-black items-start my-8 sm:my-12 md:my-16 lg:my-20 justify-start w-full flex-1 min-h-screen"
      style={{ zIndex: 1 }}
    >
      <motion.div
        variants={titleVariants}
        className="text-black text-left leading-8 sm:leading-10 w-full"
      >
        <motion.h1
          variants={titleVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#163664] will-change-transform"
        >
          {"My Work".split("").map((char, index) => (
            <motion.span
              style={{ display: "inline-block" }}
              variants={charVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
              key={index}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          variants={wordVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-zinc-600 mt-2 sm:mt-4"
        >
          Explore My Work
        </motion.p>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2">
          (all that work are available in my github)
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex mt-6 sm:mt-8 md:mt-10 lg:mt-16 xl:mt-20 flex-col w-full gap-4 sm:gap-6 md:gap-8 lg:gap-12"
      >
        {work.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            className={`flex flex-col ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } w-full border-[1px] border-[rgba(34, 34, 34, .1)] p-3 sm:p-4 md:p-6 lg:p-8 items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 will-change-transform rounded-lg hover:shadow-lg transition-shadow duration-300`}
          >
            <motion.div
              className={`flex-1 text-center md:text-left ${
                index % 2 !== 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[var(--text-color)] mt-2 sm:mt-4 leading-tight">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-2 sm:mt-3 md:mt-4 leading-relaxed px-2 sm:px-0">
                {item.description}
              </p>
              <div className="mt-3 sm:mt-4 md:mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                {item.technology.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block text-xs sm:text-sm md:text-base lg:text-lg text-[#163664] bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 max-w-sm rounded-lg shadow-lg will-change-transform"
              loading="lazy"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;