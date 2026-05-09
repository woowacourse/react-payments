import { Wrapper } from './CardInfo.styles';
import CardNumberField from './cardNumber/CardNumberField';
import { useCardForm } from '../useCardForm';
import { isCardNumberComplete } from './validator';
import CardBrandField from './cardBrand/CardBrandField';
import { useState } from 'react';

interface Props {
  cardForm: ReturnType<typeof useCardForm>;
}
//카드 정보를 담고있는 컴포넌트
export default function CardInfo({ cardForm }: Props) {
  const [step, setStep] = useState(0);
  if (step === 0 && isCardNumberComplete(cardForm.cardNumber.value)) setStep(1);

  return (
    <Wrapper>
      {step >= 1 && <CardBrandField field={cardForm.cardBrand} />}
      <CardNumberField field={cardForm.cardNumber} />
    </Wrapper>
  );
}
