import styles from './SubmitButton.module.css';

interface SubmitButtonProps {
  formId: string;
}

export const SubmitButton = ({ formId }: SubmitButtonProps) => {
  return (
    <button className={styles.submitButton} type="submit" form={formId}>
      확인
    </button>
  );
};
