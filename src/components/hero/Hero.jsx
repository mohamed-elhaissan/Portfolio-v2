import Header from "./Header";
import { motion } from "motion/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const secondLine = `Great design needs great code. Great code needs great design. I deliver both.`;

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Main title animation variants
const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98],
      staggerChildren: 0.02,
    },
  },
};

// Character animation variants
const charVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: 90,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      type: "spring",
      damping: 25,
      stiffness: 120,
    },
  },
};

// Word animation variants for subtitle
const wordVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(15px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={containerVariants}
      className="flex relative flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8"
    >
     
      <motion.span
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          type: "spring",
          damping: 15,
          stiffness: 200,
        }}
        className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 text-[var(--text-color-secondary)] items-center"
      >
        (*)
      </motion.span>

      <motion.div
        variants={titleVariants}
        className="text-7xl sm:text-8xl  md:text-6xl lg:text-7xl xl:text-9xl flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-10 justify-center items-center text-center"
      >
        <motion.div
          variants={titleVariants}
          className="text-[var(--text-color-secondary)]"
        >
          {"Hey ,Iam".split("").map((char, index) => (
            <motion.span
              variants={charVariants}
              style={{
                display: "inline-block",
                transformOrigin: "50% 100%",
              }}
              className="inline-block"
              key={`iam-${index}`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={titleVariants}
          className="text-[var(--text-color-secondary)]"
        >
          {"Mohamed".split("").map((char, index) => (
            <motion.span
              variants={charVariants}
              style={{
                display: "inline-block",
                transformOrigin: "50% 100%",
              }}
              className="inline-block"
              key={`mohamed-${index}`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={titleVariants}
          className="text-[var(--text-color-secondary)]"
        >
          {"elhaissan".split("").map((char, index) => (
            <motion.span
              variants={charVariants}
              style={{
                display: "inline-block",
                transformOrigin: "50% 100%",
              }}
              className="inline-block"
              key={`elhaissan-${index}`}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.04, delayChildren: 1.2 }}
        className="text-xl tracking-wide  sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-[#163664] selection:bg-[#FF8200] selection:text-black mt-4 sm:mt-6 md:mt-8 text-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl px-4 leading-relaxed"
      >
        {secondLine.split(" ").map((word, index) => (
          <motion.span
            variants={wordVariants}
            style={{ display: "inline-block" }}
            className="mx-1"
            key={`word-${index}`}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 2,
          duration: 1,
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
        className="absolute top-1/4 left-4 sm:left-10 w-1 h-1 sm:w-2 sm:h-2 bg-black rounded-full opacity-20"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 2.2,
          duration: 1,
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
        className="absolute top-1/3 right-6 sm:right-16 w-1 h-1 bg-black rounded-full opacity-30"
      />
    </motion.div>
  );
};

export default Hero;