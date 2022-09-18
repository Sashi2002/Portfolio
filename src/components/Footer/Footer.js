import FooterSocial from "./FooterSocial";

// icons import
import Discord from "../../assets/svg/discord.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Gmail from "../../assets/svg/gmail.svg";

const Footer = () => {
  return (
    <div className="bg-main min-h-[200px] flex justify-center items-center text-white">
      <ul className="flex justify-center items-center w-full flex-col md:justify-evenly md:flex-row">
        <FooterSocial
          icon={Discord}
          name="Discord"
          href="https://discord.gg/Hs2kkSkVdh"
        />
        <FooterSocial
          className="pl-6 md:pl-0"
          icon={Instagram}
          name="Instagram"
          href="https://www.instagram.com/sashikant.mohanty/"
        />
        
        <FooterSocial
          className="pr-4 md:pr-0"
          icon={Gmail}
          name="Gmail"
          href="mailto:sashikantamohanty019@gmail.com"
        />
        
      </ul>
    </div>
  );
};

export default Footer;
