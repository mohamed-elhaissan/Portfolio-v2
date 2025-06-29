import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Reduced stagger for smoother flow
        delayChildren: 0.1,
      },
    },
  };

  // Simplified title animation variants
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

  // Optimized character animation variants - removed heavy blur
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

  // Lighter word animation variants - removed blur
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

  // Card animation variants for work items
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

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building responsive and user-friendly websites using modern technologies.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces for web and mobile applications.",
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      description:
        "Developing robust e-commerce platforms with seamless shopping experiences.",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "Designing and building mobile applications for iOS and Android platforms.",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex relative flex-col text-black items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8"
      style={{ zIndex: 1 }}
    >
      <motion.div
        variants={titleVariants}
        className="text-black text-center mt-10 sm:mt-16 lg:mt-20 leading-8 sm:leading-10"
      >
        <motion.h1
          variants={titleVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#809CFA] will-change-transform"
        >
          {"Services".split("").map((char, index) => (
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
          className="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4"
        >
          What I Do
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex mt-10 sm:mt-16 lg:mt-20 w-full max-w-6xl flex-wrap flex-col justify-around gap-6 sm:gap-8 lg:gap-12"
      >
        {services.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            className="flex flex-col sm:flex-row w-full p-6 sm:p-8 lg:p-12 xl:p-16 mx-1 sm:mx-2 border-2 sm:border-3 border-[#CCBAFC] items-center justify-center sm:justify-between will-change-transform rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col text-center sm:text-left w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[] font-bold mb-3 sm:mb-4 leading-tight">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={wordVariants}
        className="min-h-screen w-full bg-[#809CFA]  flex flex-col items-center justify-center will-change-transform px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-12 sm:mt-16 lg:mt-20"
      >
        <motion.h1 
          variants={wordVariants} 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-black text-center leading-tight mb-4 sm:mb-6"
        >
          Let's Collaborate
        </motion.h1>
        <motion.p 
          variants={wordVariants} 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center max-w-4xl leading-relaxed px-4"
        >
          If you are interested in collaborating or have any questions, feel
          free to reach out!
        </motion.p>
        <motion.a
          href="mailto:mhalwasoffice@gmail.com"
          className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 flex items-center bg-black text-white text-base sm:text-lg rounded-lg transition-colors duration-300 will-change-transform hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            backgroundColor: "#A89F8D",
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}
        >
          <span>Contact Me</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Services;