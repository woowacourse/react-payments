import * as S from './AddCardCompletePage.styles';
import CompleteIcon from '../../components/Icon/CompleteIcon';
import Button from '../../components/Button/Button';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function AddCardCompletePage() {
  const location = useLocation();
  const { cardNumber, cardBrandTypeState } = { ...location.state };
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate('/');
  };
  useEffect(() => {
    if (!location.state) {
      redirectToHome();
    }
  }, []);
  return (
    <S.Wrapper>
      <S.CompleteIconCircle>
        <CompleteIcon />
      </S.CompleteIconCircle>
      <S.CompleteCardInfoBox>
        <S.CompleteCardInfoText>
          {cardNumber?.first}로 시작하는
          <br />
          {cardBrandTypeState}가 등록되었습니다.
        </S.CompleteCardInfoText>
      </S.CompleteCardInfoBox>
      <Button type={'button'} onClick={redirectToHome} borderRadius={'8px'}>
        확인
      </Button>
    </S.Wrapper>
  );
}
