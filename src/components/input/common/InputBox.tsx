interface InputBoxProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: "small" | "medium" | "large";
  placeholder: string;
  id: string;
  name: string;
}

const InputBox = ({ inputValue, handleChange, size, placeholder, id, name }: InputBoxProps) => {
  const sizeWidthMap = {
    small: 20,
    medium: 45,
    large: 100,
  };

  const widthPercentage = sizeWidthMap[size];

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      style={{ width: `${widthPercentage}%` }}
      placeholder={placeholder}
      id={id}
      name={name}
    />
  );
};

export default InputBox;
