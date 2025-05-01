import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Button, CheckIcon } from '@/components';
import * as S from './CompletePage.styles';

interface LocationState {
  firstCardNumber: string;
  cardCompany: string;
}

const hasLocationState = (state: any): state is LocationState => state?.firstCardNumber && state?.cardCompany;

export default function CompletePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  if (!hasLocationState(state)) return <Navigate to="/" replace />;
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <CheckIcon />
      </S.IconWrapper>
      <S.Title>{state.firstCardNumber}로 시작하는</S.Title>
      <S.Description>{state.cardCompany}가 등록되었어요.</S.Description>
      <S.ButtonWrapper>
        <Button type="button" onClick={handleClick}>
          확인
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
