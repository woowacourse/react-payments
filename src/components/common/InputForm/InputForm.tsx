import styles from './InputForm.module.css';

export interface InputFormProps {
  title: string;
  label: string;
  description?: string;
  children: React.ReactNode;
}

function InputForm(props: InputFormProps) {
  const { title, label, description } = props;

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <h3 className='tx-xl'>{title}</h3>
        {description && <p className='tx-md'>{description}</p>}
      </div>
      <div className={styles.inputBox}>
        <label className='tx-lg'>{label}</label>
        <div className={styles.inputContainer}>{props.children}</div>
      </div>
    </div>
  );
}

export default InputForm;
