import styles from "./ArrowSvg.module.css";

interface ArrowSvgProp {
  isOpened: boolean;
  color: string;
}

// 디렉션으로 방향 받기
// 컬러 받기

const ArrowSvg = ({ isOpened, color }: ArrowSvgProp) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.arrow} ${isOpened ? styles.reverse : ""}`}
    >
      <path
        d="M4.04019 5.72987L7.86012 9.5498L11.6801 5.72987"
        stroke={color}
        strokeWidth="1.32867"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowSvg;
