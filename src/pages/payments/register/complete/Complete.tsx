import { useNavigate, useOutletContext } from 'react-router';

import { SymbolInfo } from '@/core/components/symbolInfo';
import { Button } from '@/core/components/button';

import { ROUTES } from '@/constants/routes';

import { CARD_OPTIONS } from '../../register/form/constant';

export const Complete = () => {
  const navigate = useNavigate();

  const outletContext = useOutletContext<any>();
  if (!outletContext) return null;

  const {
    cardNumbers: { values: cardNumbers },
    card: {
      values: { card },
    },
    handleReset,
  } = outletContext;
  const cardNumber = cardNumbers[0];

  const cardOption = CARD_OPTIONS.find((option) => option.value === card);

  const handleClick = () => {
    handleReset();
    navigate(ROUTES.PAYMENTS.REGISTER);
  };

  return (
    <SymbolInfo
      full={true}
      symbol="complete"
      action={
        <Button variant="primary" block onClick={handleClick}>
          확인
        </Button>
      }
    >
      {cardNumber}로 시작하는 {cardOption?.text}가 등록되었어요.
    </SymbolInfo>
  );
};
