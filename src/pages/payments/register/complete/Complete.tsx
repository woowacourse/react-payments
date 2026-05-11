import { useNavigate, useOutletContext } from 'react-router';

import { SymbolInfo } from '@/core/components/symbolInfo';
import { Button } from '@/core/components/button';
import { CARD_OPTIONS } from '../../register/form/constant';

export const Complete = () => {
  const navigate = useNavigate();

  const outletContext = useOutletContext<any>();
  if (!outletContext) return null;

  const { cardNumbers, card } = outletContext;
  const cardNumber = cardNumbers[0];

  const cardOption = CARD_OPTIONS.find((option) => option.value === card);

  const handleClick = () => {
    navigate('/payments/register');
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
