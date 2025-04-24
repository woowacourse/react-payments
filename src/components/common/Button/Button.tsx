import styles from "./Button.module.css";

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button className={styles.basic} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
