import { Link } from "react-router-dom";
import work1 from "../../assets/work/Chat UI Page Result (User).svg";
import work2 from "../../assets/work/Portfolio.svg";
import work3 from "../../assets/work/Products.svg";
import work4 from "../../assets/work/work.svg";
import { motion } from "motion/react";

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
      id: 1,
      title: "Chat Page Result (User)",
      description:
        "A user interface design for a chat application, showcasing the conversation layout and user interactions.",
      image: work1,
    },
    {
      id: 2,
      title: "Stock Market Dashboard",
      description:
        "A sleek and modern interface for tracking stocks, portfolios, and market insights in real time.",
      image: work2,
    },
    {
      id: 4,
      title: "E-Commerce Product Listing Page",
      description:
        "A minimal and user-friendly shop interface with advanced filters and responsive product grid",
      image: work4,
    },
    {
      id: 3,
      title: "Digital Marketing Agency Website",
      description: "Clean and modern platform for a digital marketing agency",
      image: work3,
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
          {"Work".split("").map((char, index) => (
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
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white xl:text-4xl mt-2 sm:mt-4"
        >
          Explore My Work
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex mt-10 sm:mt-16 lg:mt-20 flex-wrap flex-col justify-around w-full max-w-7xl"
      >
        {work.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            className={`flex ${
              index % 2 === 0
                ? "flex-col sm:flex-row-reverse"
                : "flex-col sm:flex-row"
            } mx-1 sm:mx-2 lg:mx-4 border-2 sm:border-3 border-[#CCBAFC] p-3 sm:p-4 lg:p-6 items-center justify-around will-change-transform mb-6 sm:mb-8 lg:mb-12 rounded-lg`}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full sm:w-2/5 lg:w-1/3 xl:w-1/4 rounded-lg shadow-lg will-change-transform mb-4 sm:mb-0"
              loading="lazy"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            />
            <motion.div
              className={`flex-1 text-center sm:text-left ${
                index % 2 === 0 ? "sm:mr-6 lg:mr-8" : "sm:ml-6 lg:ml-8"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#C0E0FA]  mt-2 sm:mt-4 leading-tight">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2 leading-relaxed px-2 sm:px-0">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={wordVariants}
        className="min-h-screen w-full bg-[#809CFA] flex flex-col items-center justify-center will-change-transform px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
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
            backgroundColor: "#D0BAFD",
            color : "black",
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

export default Work;
