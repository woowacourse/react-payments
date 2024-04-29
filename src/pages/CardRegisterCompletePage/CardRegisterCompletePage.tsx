import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './CardRegisterCompletePage.style';
import ENDPOINTS from '../../constants/endpoints';

export default function CardRegisterCompletePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate(ENDPOINTS.cardRegister);
    }
  }, [location.state, navigate]);

  const { firstFourCardNumberDigits, brand } = location.state || {};

  const handleClickCompleteButton = () => {
    navigate(ENDPOINTS.cardRegister);
  };

  return (
    <S.Container>
      <S.SuccessIcon />
      <S.SuccessDescription>
        {firstFourCardNumberDigits}로 시작하는
        <br />
        {brand}가 등록되었어요.
      </S.SuccessDescription>
      <S.CompleteButton onClick={handleClickCompleteButton}>확인</S.CompleteButton>
    </S.Container>
  );
}
