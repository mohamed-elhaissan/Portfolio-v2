import { motion } from "motion/react";

const Contact = () => {
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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={wordVariants}
      className="min-h-screen w-full bg-[#163664] flex flex-col items-center justify-center will-change-transform px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <motion.h1
        variants={wordVariants}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white text-center leading-tight mb-4 sm:mb-6"
      >
        Ready to Build Something Great?
      </motion.h1>
      <motion.p
        variants={wordVariants}
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 text-center max-w-4xl leading-relaxed px-4"
      >
        Let's turn your idea into reality. Send me a message and let's get started.
      </motion.p>
      <motion.a
        href="mailto:mhalwasoffice@gmail.com"
        className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 flex items-center bg-black text-white text-base sm:text-lg rounded-lg transition-colors duration-300 will-change-transform hover:shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          backgroundColor: "#D0BAFD",
          color: "black",
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
  );
};

export default Contact;
