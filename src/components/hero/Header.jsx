import { useState } from "react";
import Menu from "./Menu";
import { AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full p-6  text-black">
      <Link
        to="/"
        className="text-2xl font-bold hover:underline"
      >
        elhaissan.dev
      </Link>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className=" relative z-30 text-2xl font-bold hover:underline cursor-pointer"
      >
        Menu
      </button>
      <AnimatePresence mode="wait">
      {isOpen && (
          <Menu key='menu' />
      )}
        </AnimatePresence>
    </header>
  );
};

export default Header;
