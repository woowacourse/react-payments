import styles from "./PreviewCardLogo.module.css";

export default function PreviewCardLogo() {
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
