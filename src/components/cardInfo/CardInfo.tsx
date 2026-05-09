import { Wrapper } from './CardInfo.styles';
import CardNumberField from './cardNumber/CardNumberField';
import ExpireDateField from './expireDate/ExpireDateField';
import CvcField from './cvc/CvcField';
import { useCardForm } from '../useCardForm';

interface Props {
  cardForm: ReturnType<typeof useCardForm>;
}

export default function CardInfo({ cardForm }: Props) {
  return (
    <Wrapper>
      <CardNumberField field={cardForm.cardNumber} />
      <ExpireDateField field={cardForm.expireDate} />
      <CvcField field={cardForm.cvc} />
    </Wrapper>
  );
}
