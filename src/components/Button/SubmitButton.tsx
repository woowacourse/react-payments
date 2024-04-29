import Button from "../common/Button/Button";
import styles from "./Button.module.css";

export default function SubmitButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} classNames={[styles.primary, styles.submit]}>
      확인
    </Button>
  );
}
