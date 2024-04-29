import Button from '../../common/Button/Button';
import styles from './ErrorBoundary.module.css';

import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();

  const navigate = useNavigate();
  const goToPreviousPage = () => {
    navigate(-1);
  };

  if (!(error instanceof Error)) return;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>일시적인 오류가 발생했습니다.</h1>
      <p className={styles.description}>
        서비스에 불편을 드려 죄송합니다. <br /> 잠시 후 다시 이용해 주세요.🥲
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
