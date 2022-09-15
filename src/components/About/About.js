import AboutContent from "./AboutContent";
import AboutPhoto from "./AboutPhoto";

const About = () => {
  return (
    <div
      id="Section2"
      className="text-light flex flex-col lg:flex-row justify-evenly items-center mt-0 md:mt-20 ml-0 md:ml-10 lg:ml-20 p-0 md:p-20 bg-[#1B3431] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-[100%] md:w-[90%] "
    >
      <AboutPhoto />
      <AboutContent />
    </div>
  );
};

export default About;
