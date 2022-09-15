
const AboutPhoto = () => {
  return (
    <div className="flex flex-col items-center mt-20 md:mt-0">
      <div className="text-3xl underline underline-offset-2 mb-3 text-light font-semibold">
        Sashikanta Mohanty
      </div>
      <div className="text-2xl text-light font-medium mb-16">
        ~ Student
      </div>
      <div>
        <img
          src="https://shockwave24.s3.ap-south-1.amazonaws.com/sashikantmain.jpg"
          alt="Sashikant profile"
          className="h-96 w-96 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default AboutPhoto;
