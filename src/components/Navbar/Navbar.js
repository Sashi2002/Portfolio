import NavbarLinks from "../UI/NavbarItems/NavbarLinks";
import NavbarIcon from "../UI/NavbarItems/NavbarIcons";
import { useState } from "react";

// imported icons
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram , AiFillGithub} from "react-icons/ai";
import { SiCodechef, SiHackerrank , SiLinkedin } from "react-icons/si";

const Navbar = () => {
  const [nav, setNav] = useState("bg-transparent");

  const changeBackgoundTransparent = () => {
    const height =
      window.innerWidth < 760 ? window.innerWidth : window.innerHeight;
    if (window.scrollY < height) {
      setNav("bg-transparent");
      window.removeEventListener("scroll", changeBackgoundTransparent);
      window.addEventListener("scroll", changeBackgoundColor);
    }
  };

  const changeBackgoundColor = () => {
    const height =
      window.innerWidth < 760 ? window.innerWidth : window.innerHeight;
    if (window.scrollY > height) {
      setNav("bg-main");
      window.removeEventListener("scroll", changeBackgoundColor);
      window.addEventListener("scroll", changeBackgoundTransparent);
    }
  };

  window.addEventListener("scroll", changeBackgoundColor);

  const links = (
    <ul className="flex py-4">
      <NavbarLinks to="Section2" data="About" />
      <NavbarLinks to="Section4" data="Contact" contact={true} />
      <NavbarIcon icon={FaDiscord} href="https://discord.gg/QzgmNGtgeQ" />
      <NavbarIcon
        icon={AiFillInstagram}
        href="https://www.instagram.com/sashikant.mohanty/"
      />
      <NavbarIcon
        icon={AiFillGithub}
        href="https://github.com/Sashi2002"
      />
      <NavbarIcon
        icon={SiHackerrank}
        href="https://www.hackerrank.com/sm8168?hr_r=1"
      />
      <NavbarIcon
        icon={SiCodechef}
        href="https://www.codechef.com/users/sashi_2002"
      />
      <NavbarIcon
        icon={SiLinkedin}
        href="https://www.linkedin.com/in/sashikanta-mohanty"
        className="pr-10"
      />
      
    </ul>
  );

  const responsiveLinks = (
    <ul className="flex py-4">
      <NavbarLinks to="Section2" data="About" />
      <NavbarLinks to="Section4" data="Contact" contact={true} />
    </ul>
  );
  return (
    <div
      className={"flex justify-between fixed z-10 w-full text-lightest " + nav}
    >
      <span className="p-4">
        <NavbarLinks to="Section1" data="Sashikant" logo={true} />
      </span>
      {window.innerWidth < 570 ? responsiveLinks : links}
    </div>
  );
};

export default Navbar;
