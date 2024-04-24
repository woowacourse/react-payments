import Button from "../common/Button/Button";
import styles from "./Button.module.css";

export default function GoMainButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      classes={[styles.primary, styles.go_main].join(" ")}
    >
      확인
    </Button>
  );
}
