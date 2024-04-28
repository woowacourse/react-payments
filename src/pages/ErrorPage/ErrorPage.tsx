import { useRouteError } from 'react-router-dom';

import { Button } from '@components/common';

import useMovePage from '@hooks/useMovePage';

import { ROUTE_ENDPOINT_MAP } from '@routes/constant';

import { Card } from '@assets/images';

import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const handleClickHomeButton = useMovePage(ROUTE_ENDPOINT_MAP.root);
  const error = useRouteError();

  return (
    <div className={styles.errorPageContainer}>
      <img className={styles.fallbackImage} src={Card} alt="card" />
      <h1 className={styles.fallbackTitle}>{'에러가 발생했습니다. \n 확인 버튼을 눌러주세요 :)'}</h1>
      <p className={styles.errorSubTitle}>세부 에러 내용</p>
      <div className={styles.fallbackContent}>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
      <Button onClick={handleClickHomeButton}>확인</Button>
    </div>
  );
};

export default ErrorPage;
