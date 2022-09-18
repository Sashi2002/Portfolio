import background1 from "../../assets/images/Background.jpg";

const Home = () => {

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
          src={background1}
          alt="background"
          className={"w-full brightness-90 object-cover h-full"}
        />
      </div>
    </div>
  );
};

export default Home;
