import styles from "./Button.module.css";

export default function SubmitButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={[styles.primary, styles.submit].join(" ")}
    >
      확인
    </button>
  );
}
