import PAGE_ROUTES from '@/constants/routes';
import { useNavigate } from 'react-router-dom';
import { ConfirmPageRouteProps } from '@/types';
import * as S from '@/app.style';
import { Button } from '../composables/button.style';

export default function RoutingButton({ cardNumbers, cardIssuer }: ConfirmPageRouteProps) {
  const navigate = useNavigate();

  const handleNavigateToConfirmPage = () => {
    navigate(PAGE_ROUTES.CONFIRM, {
      state: {
        cardNumbers: cardNumbers,
        cardIssuer: cardIssuer,
        isSucceed: cardNumbers && cardIssuer ? true : false,
      },
    });
  };

  return (
    <S.ButtonContainer>
      <Button onClick={handleNavigateToConfirmPage}>확인</Button>
    </S.ButtonContainer>
  );
}
