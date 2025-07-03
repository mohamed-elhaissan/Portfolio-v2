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
    image: buzzlyImage, // replace this with your actual Buzzly image import
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
      className="flex relative flex-col p-20 text-black items-start my-20 justify-start w-full flex-1  min-h-screen  "
      style={{ zIndex: 1 }}
      
    >
      <motion.div
        variants={titleVariants}
        className="text-black text-left  leading-8 sm:leading-10"
      >
        <motion.h1
          variants={titleVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#163664] will-change-transform"
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
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-600  xl:text-4xl mt-2 sm:mt-4"
        >
          Explore My Work
        </motion.p>
        <p >(all that work are avaible in my github )</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex mt-10 sm:mt-16 lg:mt-20 flex-wrap  justify-around w-full "
      >
        {work.map((item,index) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            className={`flex ${!index %2 == 0 && "flex-row-reverse"} justify-between  mx-1 sm:mx-2 lg:mx-4  w-full border-[1px] border-[rgba(34, 34, 34, .1)] p-3 sm:p-4 lg:p-6 items-center gap-20  will-change-transform mb-6 sm:mb-8 lg:mb-12 rounded-lg`}
          >
           
            <motion.div
              className={`flex-1 text-center sm:text-left `}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[var(--text-color)]  mt-2 sm:mt-4 leading-tight">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2 leading-relaxed px-2 sm:px-0">
                {item.description}
              </p>
                  <div>
              {
                item.technology.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block  text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#163664] mt-5 bg-gray-100 px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))
              }
            </div>
            </motion.div>
             <motion.img
              src={item.image}
              alt={item.title}
              className="w-1/3 rounded-lg shadow-lg will-change-transform mb-4 sm:mb-0"
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
