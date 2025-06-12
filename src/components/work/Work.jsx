import work1 from "../../assets/work/Chat UI Page Result (User).svg";
import work2 from "../../assets/work/Portfolio.svg";
import work3 from "../../assets/work/Products.svg";
import work4 from "../../assets/work/work.svg";
import { motion } from "motion/react";

const Work = () => {
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

  const work = [
    {
      id: 1,
      title: "Chat  Page Result (User)",
      description:
        "A user interface design for a chat application, showcasing the conversation layout and user interactions.",
      image: work1,
    },
    {
      id: 2,
      title: "Stock Market Dashboard ",
      description:
        "A sleek and modern interface for tracking stocks, portfolios, and market insights in real time.",
      image: work2,
    },
    {
      id: 4,
      title: "E-Commerce Product Listing Page",
      description:
        " A minimal and user-friendly shop interface with advanced filters and responsive product grid",
      image: work4,
    },
    {
      id: 3,
      title: "Digital Marketing Agency Website",
      description: "Clean and modern platform for a digital marketing agency ",
      image: work3,
    },
  ];
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
  return (
    <div className="w-full flex-1">
      <motion.div
      initial="hidden"
      animate="visible"
      className="text-black text-center mt-20  leading-10">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={charVariants}
          className="text-9xl text-[#C6BEAD]"
        >
          {"Work".split("").map((char, index) => (
            <motion.span
              style={{ display: "inline-block" }}
              variants={charVariants}
              animate="visible"
              initial="hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              key={index}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={charVariants}
          className="text-4xl"
        >
          Explore My Work
        </motion.p>
      </motion.div>
      <div className="flex mt-20  flex-wrap flex-col justify-around   ">
        {work.map((l, i) => (
          <motion.div key={l.id}
          whileInView={"visible"}
          initial="hidden"
          variants={containerVariants}

          >
            <div className="flex flex-row-reverse mx-1 border-3 border-[#EFE9DD] p-4  items-center justify-around">
              <img
                key={i}
                src={l.image}
                alt={l.title}
                className=" w-1/4 rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-6xl text-[#C6BEAD] font-bold mt-4">
                  {l.title}
                </h2>
                <p className="text-lg text-gray-600 mt-2">{l.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="h-screen bg-[#EFE9DD] flex flex-col items-center justify-center">
        <h1 className="text-9xl text-[#C6BEAD]">Let's Collaborate</h1>
        <p className="text-2xl text-gray-600">
          If you are interested in collaborating or have any questions, feel
          free to reach out!
        </p>
        <a
          href="mailto:mhalwasoffice@gmail.com"
          className="mt-4 px-6 py-3 bg-[#C6BEAD] text-white text-lg rounded-lg hover:bg-[#A89F8D] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Work;
