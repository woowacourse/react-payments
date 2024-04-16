interface InputProps {
  value: string;
  setValue: (value: string) => void;
  validate: (value: string) => boolean;
  handleError: () => void;
  width?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Input = ({ value, setValue, validate, handleError, width = '100%' }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!validate(value)) {
      handleError();
      return;
    }

    setValue(value);
  };

  return <input value={value} onChange={handleChange} />;
};

export default Input;
