
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";

const ContactInfo = () => {
  return (
    <div className="bg-main p-8 flex flex-col justify-center items-center">
      <div className="text-3xl my-6 font-semibold">Contact Information</div>
      <img
        src="https://shockwave24.s3.ap-south-1.amazonaws.com/sashikant.jpg"
        alt="profile"
        className="rounded-full brigtness-[1.2] h-60 mx-28 border-2 border-main"
      />

      <div className="max-w-sm m-4 font-medium text-lg">
        Please fill out the quick form and we'll get back with lightening speed
      </div>
      <div>
        <div className="text-xl m-2 flex">
          <span className="pt-1">
            <MdEmail />
          </span>{" "}
          <span className="ml-1">sonumohanty077@gmail.com</span>
        </div>
        <div className="text-xl m-2 flex">
          <span className="pt-1">
            <AiFillPhone />
          </span>{" "}
          <span className="ml-1">+91 6371294381</span>
        </div>
        <div className="text-xl m-2 flex">
          <span className="pt-1">
            <SiGooglemaps />
          </span>{" "}
          <span className="ml-1">Sunabeda,Odisha,India</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
