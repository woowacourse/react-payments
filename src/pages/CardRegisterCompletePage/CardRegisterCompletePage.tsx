import { useLocation } from 'react-router-dom';

import { Button } from '@components/common';

import { Card, SuccessCircle } from '@assets/images';

import useMovePage from '@hooks/useMovePage';

import { ROUTE_ENDPOINT_MAP } from '@routes/constant';

import styles from './CardRegisterCompletePage.module.css';

const CardRegisterCompletePage = () => {
  const handleMoveRootPage = useMovePage(ROUTE_ENDPOINT_MAP.root);

  const { state } = useLocation();

  return (
    <div className={styles.cardRegisterCompletePageContainer}>
      <>
        <img
          className={state ? styles.image : styles.fallbackImage}
          src={state ? SuccessCircle : Card}
          alt={state ? 'successCircle' : 'card'}
        />
        <p className={styles.cardRegisterDescription}>
          {state
            ? `${state.cardPassword}로 시작하는 <br /> ${state.cardBrand}가 등록되었습니다.`
            : '임의로 접근할 수 없습니다. \n 다시 메인 페이지로 돌아가주세요 :)'}
        </p>
      </>
      <Button onClick={handleMoveRootPage}>확인</Button>
    </div>
  );
};

export default CardRegisterCompletePage;
