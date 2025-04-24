import styles from "./Button.module.css";

export default function Button({
  text,
  onClick,
  disabled = false,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className={`${styles[`button`]} ${disabled ? styles[`disabled`] : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
