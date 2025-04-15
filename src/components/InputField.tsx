import style from '../css/input.module.css';

type InputFieldProps = {
  value: number | '';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
};

const InputField = ({ value, onChange, isError = false }: InputFieldProps) => {
  console.log(isError, 'hello');
  return (
    <input
      value={value}
      onChange={onChange}
      className={isError ? style.error : style.basic}
    />
  );
};

export default InputField;
