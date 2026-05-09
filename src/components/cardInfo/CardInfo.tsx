import { Wrapper } from './CardInfo.styles';
import CardNumberField from './cardNumber/CardNumberField';
import { useCardForm } from '../useCardForm';
import {
  isCardBrandComplete,
  isCardNumberComplete,
  isExpireDateComplete,
} from './validator';
import CardBrandField from './cardBrand/CardBrandField';
import { useState } from 'react';
import ExpireDateField from './expireDate/ExpireDateField';
import CvcField from './cvc/CvcField';

interface Props {
  cardForm: ReturnType<typeof useCardForm>;
}
//카드 정보를 담고있는 컴포넌트
export default function CardInfo({ cardForm }: Props) {
  const [step, setStep] = useState(0);
  if (step === 0 && isCardNumberComplete(cardForm.cardNumber.value)) setStep(1);
  if (step === 1 && isCardBrandComplete(cardForm.cardBrand.value)) setStep(2);
  if (step === 2 && isExpireDateComplete(cardForm.expireDate.value)) setStep(3);

  return (
    <Wrapper>
      {step >= 3 && <CvcField field={cardForm.cvc} />}
      {step >= 2 && <ExpireDateField field={cardForm.expireDate} />}
      {step >= 1 && <CardBrandField field={cardForm.cardBrand} />}
      <CardNumberField field={cardForm.cardNumber} />
    </Wrapper>
  );
}
