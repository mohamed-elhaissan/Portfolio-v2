import { Link } from "react-router-dom";
import work1 from "../../assets/work/Chat UI Page Result (User).svg";
import work2 from "../../assets/work/Portfolio.svg";
import work3 from "../../assets/work/Products.svg";
import work4 from "../../assets/work/work.svg";
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
      className="flex relative flex-col text-black items-center justify-center w-full flex-1"
      style={{ zIndex: 1 }}
    >
      <motion.div
        variants={titleVariants}
        className="text-black text-center mt-20 leading-10"
      >
        <motion.h1
          variants={titleVariants}
          className="text-9xl text-[#C6BEAD] will-change-transform"
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
        <motion.p variants={wordVariants} className="text-4xl">
          What i do
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex mt-20 w-full flex-wrap flex-col justify-around"
      >
        {services.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            className="flex  w-full p-40  mx-1 border-3 border-[#EFE9DD] p-4 items-center justify-around will-change-transform"
          >
           
              <h2 className="text-6xl text-[#C6BEAD] font-bold mt-4">
                {item.title}
              </h2>
           
              <p className="text-lg text-gray-600 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={wordVariants}
        className="h-screen w-full bg-[#EFE9DD] flex flex-col items-center justify-center will-change-transform"
      >
        <motion.h1 variants={wordVariants} className="text-9xl text-[#C6BEAD]">
          Let's Collaborate
        </motion.h1>
        <motion.p variants={wordVariants} className="text-2xl text-gray-600">
          If you are interested in collaborating or have any questions, feel
          free to reach out!
        </motion.p>
        <motion.a
          href="mailto:mhalwasoffice@gmail.com"
          className="mt-4 px-6 py-3 flex items-center bg-[#C6BEAD] text-white text-lg rounded-lg transition-colors duration-300 will-change-transform"
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
