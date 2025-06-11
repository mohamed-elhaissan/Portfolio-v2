import { Link } from "react-router-dom";
import arrow from "../../assets/arrow-right-long-line.svg";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className="flex items-center justify-between w-full p-6  text-black">
      <a
        href="https://www.linkedin.com/in/mohamed-elhaissan-050509301/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-bold hover:underline"
      >
        elhaissan.dev
      </a>

      <button className="text-2xl font-bold hover:underline cursor-pointer">
        Menu
      </button>
      <nav className=" fixed left-0 top-0 w-full bg-white h-screen p-20 ">
        <ul className="flex space-x-4 flex-col items-start justify-evenly   h-full text-9xl">
          <li
            className=" w-full h-full"
            onMouseEnter={() => setIsHovered("home")}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link
              to="/"
              className="hover:underline flex  items-center justify-between"
            >
              Home
              {isHovered === "home" && (
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-10 h-10 transition-transform duration-300 transform hover:translate-x-2"
                />
              )}
            </Link>
          </li>
          <li
            onMouseEnter={() => setIsHovered("about")}
            onMouseLeave={() => setIsHovered(false)}
            className=" w-full h-full"
          >
            <Link to="/about" className="hover:underline">
              About
              {isHovered === "about" && (
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-10 h-10 transition-transform duration-300 transform hover:translate-x-2"
                />
              )}
            </Link>
          </li>
          <li
            className=" w-full h-full"
            onMouseEnter={() => setIsHovered("projects")}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to="/projects" className="hover:underline">
              Projects
              {isHovered === "projects" && (
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-10 h-10 transition-transform duration-300 transform hover:translate-x-2"
                />
              )}
            </Link>
          </li>
          <li
            className=" w-full h-full"
            onMouseEnter={() => setIsHovered("contact")}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to="/contact" className="hover:underline">
              Contact
              {isHovered === "contact" && (
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-10 h-10 transition-transform duration-300 transform hover:translate-x-2"
                />
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
