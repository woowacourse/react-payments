import clsx from "clsx";
import styles from "./RoundCheckIcon.module.css";

const RoundCheckIcon = ({ size = "md" }) => {
  const containerClassName = clsx(styles.roundCheckIcon, styles[size]);

  return (
    <div className={containerClassName}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.checkMark}
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
};

export default RoundCheckIcon;
