interface InputProps {
  value?: string;
  maxLength?: number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, maxLength, placeholder, onChange }: InputProps) => {
  return (
    <>
      <input
        type="text"
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Input;
