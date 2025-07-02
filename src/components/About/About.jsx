import { motion } from "motion/react";
import { Link } from "react-router-dom";

const About = () => {
  const aboutME = `Mohamed Elhaissan. Full-stack developer.

I turn broken ideas into working applications. Fast load times, clean code, zero drama.

Your users will thank you. Your competitors won't.

Let's build something that matters.`;
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
  return (
    <div className="p-20 my-20 text-center    flex flex-col items-center justify-center ">
      <motion.h1
        variants={titleVariants}
        className="text-4xl sm:text-6xl md:text-7xl md lg:text-8xl xl:text-9xl text-[#163664] will-change-transform"
      >
        {"Who Iam ?".split(" ").map((char, index) => (
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
            className="mx-5 hover:text-[#FF8200] text-[#163664]"
            key={index}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <div className="flex flex-wrap gap-2 mt-10 cursor-pointer ">
        {aboutME.split(" ").map((text, index) => (
          <div
            key={index}
            className="text-lg sm:text-xl md:text-2xl opacity-70 hover:opacity-100 lg:text-3xl xl:text-4xl text-[var(--text-color-secondary)] hover:text-[#FF8200]"
          >
            {text}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default About;
