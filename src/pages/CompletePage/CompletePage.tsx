import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Button from '@/components/common/Button/Button';
import CheckIcon from '@/components/icons/CheckIcon';
import * as S from './CompletePage.styles';

interface LocationState {
  cardNumber: string;
  cardCompany: string;
}

export default function CompletePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  if (!state?.cardNumber || !state?.cardCompany) {
    return <Navigate to="/" replace />;
  }

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <CheckIcon />
      </S.IconWrapper>
      <S.Title>{state.cardNumber}로 시작하는</S.Title>
      <S.Description>{state.cardCompany}가 등록되었어요.</S.Description>
      <S.ButtonWrapper>
        <Button type="button" onClick={handleClick}>
          확인
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
