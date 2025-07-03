import { motion } from "motion/react";
import WordAnimated from "../wordAnimated.jsx";

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
    <div
      id="about"
      className="p-20 my-20 text-left     flex flex-col items-start justify-start "
    >
      <motion.h1
        variants={titleVariants}
        className="text-4xl sm:text-6xl md:text-7xl  lg:text-8xl xl:text-9xl text-[#163664] will-change-transform"
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
        <WordAnimated value={aboutME} />
      </div>
    </div>
  );
};

export default About;
