import { Wrapper } from './CardInfo.styles';
import CardNumberSection from './cardNumber/CardNumberSection';
import ExpireDateSection from './expireDate/ExpireDateSection';
import CvcSection from './cvc/CvcSection';
import { useCardForm } from '../useCardForm';

interface Props {
  cardForm: ReturnType<typeof useCardForm>;
}

export default function CardInfo({ cardForm }: Props) {
  return (
    <Wrapper>
      <CardNumberSection field={cardForm.cardNumber} />
      <ExpireDateSection field={cardForm.expireDate} />
      <CvcSection field={cardForm.cvc} />
    </Wrapper>
  );
}
