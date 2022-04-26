import "./index.scss";

const InputContainer = ({ labelName, children, classList }) => {
  return (
    <div className={`input__container ${classList?.join(" ")}`}>
      <label>{labelName}</label>
      <div>{children}</div>
    </div>
  );
};

export default InputContainer;
