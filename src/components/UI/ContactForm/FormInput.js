const FormInput = (props) => {
  return (
    <input
      className={
        props.className +
        " rounded-lg p-2 m-2 bg-main border-main border-2 text-light placeholder:text-[#DADADA]"
      }
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      required
    />
  );
};

export default FormInput;
