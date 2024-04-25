import Button from "../common/Button/Button";
import styles from "./Button.module.css";

export default function GoMainButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} classNames={[styles.primary, styles.go_main]}>
      확인
    </Button>
  );
}
