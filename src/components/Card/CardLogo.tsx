import styles from "./CardLogo.module.css";

export default function CardLogo() {
  return (
    <div className={styles["card-logo"]}>
      {/* TODO : 이미지 경로 props로 수정 */}
      <img
        className={styles["card-logo-image"]}
        src="./master-logo.png"
        alt="로고"
      ></img>
    </div>
  );
}
