import FormInput from "../UI/ContactForm/FormInput";
import FormSubmit from "../UI/ContactForm/FormSubmit";
import FormTextArea from "../UI/ContactForm/FormTextArea";

const ContactForm = () => {
  return (
    <div className="bg-[#142121] grow w-[100%] lg:w-[80%] flex items-center flex-col justify-center mt-5 lg:mt-0">
      <div className="flex items-center flex-col">
        <div className="text-3xl mb-9 font-medium mt-5 lg:mt-0">
          Connect Here
        </div>
        <form
          action="https://formsubmit.co/sonumohanty077@gmail.com"
          className="contactForm grid grid-cols-2"
          name="xalone"
          method="POST"
        >
          <FormInput type="text" placeholder="First Name" name="First Name" />
          <FormInput type="text" placeholder="Last Name" name="Last Name" />
          <FormInput
            type="email"
            placeholder="Email"
            className="col-span-2"
            name="Email"
          />
          <FormInput type="text" placeholder="Phone" name="Phone Number" />
          <input
            className=" rounded-lg p-2 m-2 bg-main border-main border-2 text-light placeholder:text-[#DADADA]"
            name="Attached Files (url)"
            type="text"
            placeholder="Attach Files(Url)"
          />

          <FormTextArea />
          <FormSubmit />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
