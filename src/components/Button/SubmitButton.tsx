import Button from "../common/Button/Button";
import styles from "./Button.module.css";

export default function SubmitButton({
  isCompletedSections,
}: {
  isCompletedSections: boolean[];
}) {
  const allSectionsCompleted = isCompletedSections[0];
  return allSectionsCompleted ? (
    <Button classes={[styles.primary, styles.submit].join(" ")}>확인</Button>
  ) : null;
}
