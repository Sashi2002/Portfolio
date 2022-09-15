const FormTextArea = () => {
  return (
    <textarea
      placeholder="Type your message here"
      className="rounded-lg p-2 m-2 bg-main border-main border-2 text-light col-span-2 h-40 placeholder:text-[#DADADA]"
      name="Message"
    ></textarea>
  );
};

export default FormTextArea;
