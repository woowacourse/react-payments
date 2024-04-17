interface InputProps {
  maxLength?: number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ maxLength, placeholder, onChange }: InputProps) => {
  return (
    <>
      <input
        type="text"
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Input;
