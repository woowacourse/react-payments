import { useNavigate } from 'react-router-dom';
import { ConfirmButton, Wrapper } from './CardInfo.styles';
import CardNumberField from './cardNumber/CardNumberField';
import { useCardForm } from '../useCardForm';
import CardBrandField from './cardBrand/CardBrandField';
import ExpireDateField from './expireDate/ExpireDateField';
import CvcField from './cvc/CvcField';
import CardPasswordField from './cardPassword/CardPasswordField';
import { useCardStep } from './useCardStep';
import { CARD_BRANDS } from '../../constants/constants';

interface Props {
  cardForm: ReturnType<typeof useCardForm>;
}
//카드 정보를 담고있는 컴포넌트
export default function CardInfo({ cardForm }: Props) {
  const step = useCardStep(cardForm);
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/complete', {
      state: {
        cardNumberFirstSegment: cardForm.cardNumber.value[0],
        cardBrand: CARD_BRANDS[cardForm.cardBrand.value].label,
      },
    });
  };

  return (
    <Wrapper>
      {step >= 4 && <CardPasswordField field={cardForm.cardPassword} />}
      {step >= 3 && <CvcField field={cardForm.cvc} />}
      {step >= 2 && <ExpireDateField field={cardForm.expireDate} />}
      {step >= 1 && <CardBrandField field={cardForm.cardBrand} />}
      <CardNumberField field={cardForm.cardNumber} />
      {step >= 5 && <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>}
    </Wrapper>
  );
}
