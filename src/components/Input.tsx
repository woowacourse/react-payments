type InputProps = {
  value: number | '';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange }: InputProps) => {
  return <input value={value} onChange={onChange} />;
};

export default Input;
