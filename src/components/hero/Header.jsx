import { useState } from "react";
import Menu from "./Menu";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      filter: "blur(10px)",
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
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      exit="hidden"
      className="flex items-center justify-between w-full p-6  text-black"
    >
      <Link to="/" className="text-2xl font-bold hover:underline">
        elhaissan.dev
      </Link>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="relative  text-2xl font-bold hover:underline cursor-pointer"
      style={{ zIndex: 9999 }}
      >
        {isOpen ? <span>Close</span> : <span>Menu</span>}
      </button>
      <AnimatePresence mode="wait">
        {isOpen && <Menu key="menu" setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
