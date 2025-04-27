import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>
          <p className="tx-3xl">:-/</p>
          <div className="tx-3xl">404</div>
          <div className="tx-2xl">존재하지 않는 페이지입니다</div>
        </div>
        <button className={styles.button} onClick={() => window.history.back()}>
          <p className="tx-lg">이전 화면 돌아가기</p>
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
