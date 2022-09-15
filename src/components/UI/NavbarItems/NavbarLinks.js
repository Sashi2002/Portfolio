import { Link } from "react-scroll";
import "./NavbarLinks.css";

const NavbarLinks = (props) => {
  return (
    <li
      className={
        props.logo
          ? "cursor-pointer animation1"
          : "px-5 cursor-pointer animation1"
      }
    >
      <Link
        to={props.to}
        spy={true}
        smooth={true}
        duration={1000}
        offset={props.contact ? 20 : 0}
      >
        {props.data}
      </Link>
    </li>
  );
};

export default NavbarLinks;
