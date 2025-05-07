import styles from "./SubmitButton.module.css";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
}

const SubmitButton = ({
  backgroundColor,
  children,
  ...props
}: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      style={{ backgroundColor }}
      className={`${styles.button} tx-lg`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
