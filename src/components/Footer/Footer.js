import FooterSocial from "./FooterSocial";

// icons import
import Discord from "../../assets/svg/discord.svg";
import Instagram from "../../assets/svg/instagram.svg";
import spotify from "../../assets/svg/spotify.svg";
import Gmail from "../../assets/svg/gmail.svg";
import Soundcloud from "../../assets/svg/soundcloud.svg";
import { SiPolywork } from "react-icons/si";

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
          href="https://www.instagram.com/xalone153/"
        />
        <FooterSocial
          className="pr-2 md:pr-0"
          icon={spotify}
          name="Spotify"
          href="https://open.spotify.com/user/wt082rqavs34vnpov07868win"
        />
        <FooterSocial
          className="pr-4 md:pr-0"
          icon={Gmail}
          name="Gmail"
          href="mailto:xalonemusic153@gmail.com"
        />
        <FooterSocial
          className="pl-9 md:pl-0"
          icon={Soundcloud}
          name="SoundCloud"
          href="https://soundcloud.com/xalone0153"
        />
        <li className="text-lightest text-lg mb-3 md:mb-0 mt-3 md:mt-0">
          <a
            href="https://www.polywork.com/xalone"
            className="flex"
            target="_blank"
            rel="noreferrer"
          >
            <span className="pr-2 pt-2 ">
              <SiPolywork />
            </span>
            Polywork
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
