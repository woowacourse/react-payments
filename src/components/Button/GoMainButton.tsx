import styles from "./Button.module.css";

export default function GoMainButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={[styles.primary, styles.go_main].join(" ")}
    >
      확인
    </button>
  );
}
