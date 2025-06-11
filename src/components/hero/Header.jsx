import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between text-[var(--links-color)] w-full  paddingeffect  items-center">
      <Link
      className="text-2xl font-bold text-black"
        target="_blank"
        to={"https://www.linkedin.com/in/mohamed-elhaissan-050509301/"}
      >
        ELH
      </Link>
      <nav className="mt-5">
        <ul className="flex justify-between items-end gap-10">
          <li>
            <NavLink to={"/work"}>Work</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to={"/"}>Linkedin</NavLink>
    </header>
  );
};

export default Header;
