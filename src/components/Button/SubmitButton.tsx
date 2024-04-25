import Button from "../common/Button/Button";
import styles from "./Button.module.css";

export default function SubmitButton({
  isCompletedSections,
  onClick,
}: {
  isCompletedSections: boolean[];
  onClick: () => void;
}) {
  const allSectionsCompleted = isCompletedSections[0];
  return allSectionsCompleted ? (
    <Button onClick={onClick} classNames={[styles.primary, styles.submit]}>
      확인
    </Button>
  ) : null;
}
