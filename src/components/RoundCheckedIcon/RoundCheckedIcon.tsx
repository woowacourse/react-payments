import clsx from "clsx";
import styles from "./RoundCheckedIcon.module.css";

interface RoundCheckedIconProps {
  size?: "small" | "medium" | "large";
}
const RoundCheckIcon = ({ size = "medium" }: RoundCheckedIconProps) => {
  const containerClassName = clsx(styles.roundCheckIcon, styles[size]);

  return (
    <div
      className={containerClassName}
      role="img"
      aria-label="Success check mark"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.checkMark}
        aria-hidden="true"
      >
        <title>Check mark</title>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
};

export default RoundCheckIcon;
