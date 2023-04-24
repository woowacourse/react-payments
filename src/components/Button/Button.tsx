import styles from './Button.module.css';
type ButtonProps = {
  type: 'submit' | 'button' | 'reset';
  children: string;
  className: string;
  onClick: () => void;
};

const Button = ({ type, children, ...rest }: ButtonProps) => {
  return (
    <button type={type} {...rest} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
