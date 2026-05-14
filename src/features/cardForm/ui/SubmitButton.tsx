import styles from './SubmitButton.module.css';

interface SubmitButtonProps {
  form: string;
  disabled?: boolean;
}

export const SubmitButton = ({ form }: SubmitButtonProps) => {
  return (
    <button className={styles.submitButton} type="submit" form={form}>
      확인
    </button>
  );
};
