import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import arrow from "../../assets/arrow-right-long-line.svg";
import { menuVariants } from "../variants";
import { menuItemVariants } from "../variants";

const Menu = ({ setIsOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="  absolute left-0 top-0 w-full z-40 bg-black h-screen  "
    >
      <motion.div
        variants={menuItemVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full absolute top-0 left-0 bg-[#101010]"
      />
      <motion.ul
        onClick={() => setIsOpen(false)}
        initial={{
          opacity: 0,
          y: "-100%",
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: "-100%",
        }}
        variants={menuItemVariants}
        className="flex  space-x-4 flex-col items-start gap-10 justify-evenly relative   h-full text-9xl"
      >
        <li
          className=" border-b-2 border-[#809CFA] w-full h-full p-10 before:content-[''] before:absolute before:top-0 before:translate-y-full before:left-0 before:w-full before:h-full before:bg-[#809CFA] z-0  hover:before:translate-y-0 overflow-hidden before:transition-transform before:ease-in-out before:duration-300 relative"
          onMouseEnter={() => setIsHovered("home")}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link
            to="/"
            className=" flex z-10 relative  items-center justify-between"
          >
            Home
            {isHovered === "home" && (
              <img
                src={arrow}
                alt="arrow"
                className="w-20 h-20  transition-transform duration-300 transform hover:translate-x-2"
              />
            )}
          </Link>
        </li>
        <li
          className=" border-b-2 border-[#809CFA] w-full h-full p-10 before:content-[''] before:absolute before:top-0 before:translate-y-full before:left-0 before:w-full before:h-full before:bg-[#809CFA] z-0  hover:before:translate-y-0 overflow-hidden before:transition-transform before:ease-in-out before:duration-300 relative"
          onMouseEnter={() => setIsHovered("work")}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link
            to="/work"
            className="z-10 relative flex  items-center justify-between"
          >
            Work
            {isHovered === "work" && (
              <img
                src={arrow}
                alt="arrow"
                className="w-20 h-20 transition-transform duration-300 transform hover:translate-x-2"
              />
            )}
          </Link>
        </li>
        <li
          className=" border-b-2 border-[#809CFA] w-full h-full p-10 before:content-[''] before:absolute before:top-0 before:translate-y-full before:left-0 before:w-full before:h-full before:bg-[#809CFA] z-0  hover:before:translate-y-0 overflow-hidden before:transition-transform before:ease-in-out before:duration-300 relative"
          onMouseEnter={() => setIsHovered("services")}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link
            to="/services"
            className="z-10 relative flex  items-center justify-between"
          >
            Services
            {isHovered === "services" && (
              <img
                src={arrow}
                alt="arrow"
                className="w-20 h-20 transition-transform duration-300 transform hover:translate-x-2"
              />
            )}
          </Link>
        </li>
        <li
          className=" border-b-2 border-[#809CFA] w-full h-full p-10 before:content-[''] before:absolute before:top-0 before:translate-y-full before:left-0 before:w-full before:h-full before:bg-[#809CFA] z-0  hover:before:translate-y-0 overflow-hidden before:transition-transform before:ease-in-out before:duration-300 relative"
          onMouseEnter={() => setIsHovered("Github")}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link
            to="https://github.com/mohamed-elhaissan"
            className="z-10 relative flex  items-center justify-between"
          >
            Github
            {isHovered === "Github" && (
              <img
                src={arrow}
                alt="arrow"
                className="w-20 h-20 transition-transform duration-300 transform hover:translate-x-2"
              />
            )}
          </Link>
        </li>
        <li
          className=" border-b-2 border-[#809CFA] w-full h-full p-10 before:content-[''] before:absolute before:top-0 before:translate-y-full before:left-0 before:w-full before:h-full before:bg-[#809CFA] z-0  hover:before:translate-y-0 overflow-hidden before:transition-transform before:ease-in-out before:duration-300 relative"
          onMouseEnter={() => setIsHovered("Linkedin")}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link
            to="https://www.linkedin.com/in/mohamed-elhaissan-050509301/"
            className="z-10 relative flex  items-center justify-between"
          >
            Linkedin
            {isHovered === "Linkedin" && (
              <img
                src={arrow}
                alt="arrow"
                className="w-20 h-20 transition-transform duration-300 transform hover:translate-x-2"
              />
            )}
          </Link>
        </li>
        <li
          className=" border-b-2 border-[#809CFA] w-full h-full p-10 before:content-[''] before:absolute before:top-0 before:translate-y-full before:left-0 before:w-full before:h-full before:bg-[#809CFA] z-0  hover:before:translate-y-0 overflow-hidden before:transition-transform before:ease-in-out before:duration-300 relative"
          onMouseEnter={() => setIsHovered("Instagram")}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link
            to="https://www.instagram.com/mohamed_elhaissan/"
            className="z-10 relative flex  items-center justify-between"
          >
            Instagram
            {isHovered === "Instagram" && (
              <img
                src={arrow}
                alt="arrow"
                className="w-20 h-20 transition-transform duration-300 transform hover:translate-x-2"
              />
            )}
          </Link>
        </li>
      </motion.ul>
    </motion.nav>
  );
};

export default Menu;
