import style from '../css/Input.module.css';

type InputProps = {
  value: number | '';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
};

const Input = ({ value, onChange, isError = false }: InputProps) => {
  console.log(isError, 'hello');
  return (
    <input
      value={value}
      onChange={onChange}
      className={isError ? style.error : style.basic}
    />
  );
};

export default Input;
