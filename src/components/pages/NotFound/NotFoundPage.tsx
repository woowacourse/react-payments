import styles from './NotFoundPage.module.css';

import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const goToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        존재하지 않는 페이지에요.
        <br />
        주소가 정확한지 확인해 보세요.
      </p>
      <Button
        type="button"
        text="이전 페이지로 돌아가기"
        onClick={goToPreviousPage}
        theme="default"
      />
    </div>
  );
}
