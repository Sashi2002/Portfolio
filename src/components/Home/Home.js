import { useEffect, useState } from "react";
import background1 from "../../assets/images/xalone_background_2.jpg";
import background2 from "../../assets/images/xalone_background_3.png";
import background3 from "../../assets/images/xalone_background_4.png";
import background4 from "../../assets/images/xalone_background_5.png";

const Home = () => {
  const [background, setBackground] = useState(background1);
  useEffect(() => {
    const allBackgrounds = [background1, background2, background3, background4];
    const interval = setInterval(() => {
      const newBackground = Math.floor(Math.random() * (3 - 0 + 1) + 0);
      setBackground(allBackgrounds[newBackground]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const width = window.innerWidth;
  return (
    <div className="relative" id="Section1">
      <div
        className={
          "text-white w-screen -z-10 flex justify-center items-center h-[" +
          width +
          "px] md:h-screen"
        }
      >
        <img
          src={background}
          alt="background"
          className={"w-full brightness-90 object-cover h-full"}
        />
      </div>
    </div>
  );
};

export default Home;
