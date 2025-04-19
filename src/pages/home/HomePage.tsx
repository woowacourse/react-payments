import styles from "./HomePage.module.css";
import { Link } from "react-router";
import { PAGE_URL } from "@/constants/pageUrl";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>메인 페이지</h1>
      <Link to={PAGE_URL.ADD_CARD} className={styles.addCardLink}>
        카드 추가 하기
      </Link>
    </div>
  );
}

export default HomePage;
