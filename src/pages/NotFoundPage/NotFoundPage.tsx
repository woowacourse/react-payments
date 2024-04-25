import { Button } from '@components/common';

import useMovePage from '@hooks/useMovePage';

import { ROUTE_ENDPOINT_MAP } from '@routes/constant';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const handleClickHomeButton = useMovePage(ROUTE_ENDPOINT_MAP.root);
  return (
    <div className={styles.notFoundPageContainer}>
      404 에러가 발생했습니다.
      <Button onClick={handleClickHomeButton}>확인</Button>
    </div>
  );
};

export default NotFoundPage;
