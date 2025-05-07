import styles from "./InputField.module.css";

export interface InputFieldProps {
  title: string;
  label: string;
  description?: string;
  feedbackMessage?: string;
  children: React.ReactNode;
}

function InputField({
  title,
  label,
  description,
  feedbackMessage,
  children,
}: InputFieldProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <h3 className="tx-xl">{title}</h3>
        {description && <p className="tx-md">{description}</p>}
      </div>
      <div className={styles.inputBox}>
        <label className="tx-lg">{label}</label>
        <div className={styles.inputContainer}>{children}</div>
        {feedbackMessage && (
          <p className={`${styles.feedbackMessage} tx-lg`}>{feedbackMessage}</p>
        )}
      </div>
    </div>
  );
}

export default InputField;
