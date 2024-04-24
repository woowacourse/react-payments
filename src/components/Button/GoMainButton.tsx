import Button from "../common/Button/Button";
import styles from "./Button.module.css";

export default function GoMainButton() {
  return (
    <Button classes={[styles.primary, styles.go_main].join(" ")}>확인</Button>
  );
}
