import { motion } from "motion/react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen text-black  w-full flex flex-col items-center justify-center py-20 px-4 will-change-transform"
    >
      <motion.h1
        variants={titleVariants}
        className="text-6xl md:text-9xl text-[#7EA0F4] text-center mb-6 will-change-transform"
      >
        Contact Me
      </motion.h1>

      <motion.p
        variants={subtitleVariants}
        className="text-lg md:text-2xl text-white text-center max-w-2xl mb-8"
      >
        If you are interested in collaborating or have any questions, feel free
        to reach out!
      </motion.p>

      <motion.form
        variants={formVariants}
        className="w-full max-w-4xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <motion.div
          variants={inputVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          <motion.div
            variants={inputVariants}
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="name" className="text-[#809CFA] font-medium mb-2">
              Name *
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="bg-white border-2 border-transparent rounded-lg py-3 px-4 w-full focus:outline-none focus:border-[#7EA0F4] transition-all duration-300 will-change-transform"
              whileFocus={{ scale: 1.02, borderColor: "#C6BEAD" }}
              required
            />
          </motion.div>

          <motion.div
            variants={inputVariants}
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="lastName" className="text-[#809CFA] font-medium mb-2">
              Last Name *
            </label>
            <motion.input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              className="bg-white border-2 border-transparent rounded-lg py-3 px-4 w-full focus:outline-none focus:border-[#7EA0F4] transition-all duration-300 will-change-transform"
              whileFocus={{ scale: 1.02, borderColor: "#C6BEAD" }}
              required
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={inputVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          <motion.div
            variants={inputVariants}
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="company" className="text-[#809CFA] font-medium mb-2">
              Company Name
            </label>
            <motion.input
              type="text"
              id="company"
              name="company"
              placeholder="Enter your company name"
              className="bg-white border-2 border-transparent rounded-lg py-3 px-4 w-full focus:outline-none focus:border-[#7EA0F4] transition-all duration-300 will-change-transform"
              whileFocus={{ scale: 1.02, borderColor: "#C6BEAD" }}
            />
          </motion.div>

          <motion.div
            variants={inputVariants}
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="email" className="text-[#809CFA] font-medium mb-2">
              Email *
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="bg-white border-2 border-transparent rounded-lg py-3 px-4 w-full focus:outline-none focus:border-[#7EA0F4] transition-all duration-300 will-change-transform"
              whileFocus={{ scale: 1.02, borderColor: "#C6BEAD" }}
              required
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={inputVariants}
          className="mb-8"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <label htmlFor="message" className="text-[#809CFA] font-medium mb-2 block">
            Message *
          </label>
          <motion.textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or question..."
            className="bg-white border-2  rounded-lg py-3 px-4 w-full h-32 resize-none focus:outline-none focus:border-[#7EA0F4] transition-all duration-300 will-change-transform"
            whileFocus={{ scale: 1.01, borderColor: "#C6BEAD" }}
            required
          />
        </motion.div>

        <motion.div
          variants={buttonVariants}
          className="flex justify-center"
        >
          <motion.button
            type="submit"
            className="bg-[#809CFA] cursor-pointer font-semibold py-4 px-12 rounded-lg shadow-lg transition-all duration-300 will-change-transform"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#A89F8D",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 },
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;