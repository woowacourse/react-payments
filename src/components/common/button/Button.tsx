import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClickHandler: () => void;
  backgroundColor?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  onClickHandler,
  type,
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClickHandler}
      style={{ backgroundColor }}
      className={`${styles.button} tx-lg`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
