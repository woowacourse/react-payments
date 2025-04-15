import Input, { InputProps } from './Input/Input';
import styles from './InputForm.module.css';

export interface InputFormProps extends InputProps {
  inputCount?: number;
}

function InputForm(props: InputFormProps) {
  const inputCounter = Array.from({
    length: props.inputCount ? props.inputCount : 1,
  });
  const inputs = inputCounter.map((input) => <Input {...props} />);
  return <div className={styles.inputForm}>{inputs}</div>;
}

export default InputForm;
