interface InputProps {
  maxLength?: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ maxLength, handleChange }: InputProps) => {
  return (
    <>
      <input
        type="text"
        maxLength={maxLength}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default Input;
