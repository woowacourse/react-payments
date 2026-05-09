import { Wrapper } from './CardInfo.styles';
import CardNumberField from './cardNumber/CardNumberField';
import { useCardForm } from '../useCardForm';
import {
  isCardBrandComplete,
  isCardNumberComplete,
  isCvcComplete,
  isExpireDateComplete,
} from './validator';
import CardBrandField from './cardBrand/CardBrandField';
import { useState } from 'react';
import ExpireDateField from './expireDate/ExpireDateField';
import CvcField from './cvc/CvcField';
import CardPasswordField from './cardPassword/CardPasswordField';

interface Props {
  cardForm: ReturnType<typeof useCardForm>;
}
//카드 정보를 담고있는 컴포넌트
export default function CardInfo({ cardForm }: Props) {
  const [step, setStep] = useState(0);
  if (step === 0 && isCardNumberComplete(cardForm.cardNumber.value)) setStep(1);
  if (step === 1 && isCardBrandComplete(cardForm.cardBrand.value)) setStep(2);
  if (step === 2 && isExpireDateComplete(cardForm.expireDate.value)) setStep(3);
  if (step === 3 && isCvcComplete(cardForm.cvc.value)) setStep(4);

  return (
    <Wrapper>
      {step >= 4 && <CardPasswordField field={cardForm.cardPassword} />}
      {step >= 3 && <CvcField field={cardForm.cvc} />}
      {step >= 2 && <ExpireDateField field={cardForm.expireDate} />}
      {step >= 1 && <CardBrandField field={cardForm.cardBrand} />}
      <CardNumberField field={cardForm.cardNumber} />
    </Wrapper>
  );
}
