import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom"; 

const Header = () => {

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
      className="flex items-center justify-between w-full p-6  "
    >
      <Link to="/" className="text-3xl   p-2 hover:opacity-50  rounded-md text-[var(--text-color)]   ">
        elhaissan.dev
      </Link>


      <div>
        <nav className="flex  text-xl items-center justify-center gap-6  text-[var(--text-color)]">
          
          <li>
            <Link to={'/work'} className=" px-2 py-1 rounded-md hover:bg-[#f5f5f5]">work</Link>
          </li>
          <li>
            <Link to={'https://www.linkedin.com/in/mohamed-elhaissan-050509301/'} className=" px-2 py-1 rounded-md hover:bg-[#f5f5f5]" target="_blank">linkedin</Link>
          </li>
          <li>
            <Link to={'https://www.instagram.com/mohamed_elhaissan/'} className=" px-2 py-1 rounded-md hover:bg-[#f5f5f5]" target="_blank">instagram</Link>
          </li>
          <li>
            <Link to={'https://www.github.com/mohamed-elhaissan/'} className=" px-2 py-1 rounded-md hover:bg-[#f5f5f5]" target="_blank">github</Link>
          </li>
        </nav>
      </div>

    
     
    </motion.header>
  );
};

export default Header;
