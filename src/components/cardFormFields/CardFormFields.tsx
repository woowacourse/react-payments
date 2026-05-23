import { Wrapper } from './CardFormFields.styles';
import CardNumberField from './cardNumber/CardNumberField';
import { useCardForm } from '../useCardForm';
import CardBrandField from './cardBrand/CardBrandField';
import ExpireDateField from './expireDate/ExpireDateField';
import CvcField from './cvc/CvcField';
import CardPasswordField from './cardPassword/CardPasswordField';
import type { CardRequest } from '../../api/cards';

interface Props {
  cardForm: ReturnType<typeof useCardForm>;
  step: number;
  submitError: { code: keyof CardRequest; message: string } | null;
}
//카드 정보를 담고있는 컴포넌트
export default function CardFormFields({ cardForm, step, submitError }: Props) {
  const errorOf = (code: keyof CardRequest) =>
    submitError?.code === code ? submitError.message : null;

  return (
    <Wrapper>
      {step >= 4 && (
        <CardPasswordField
          field={cardForm.cardPassword}
          errorMessage={errorOf('cardPassword')}
        />
      )}
      {step >= 3 && <CvcField field={cardForm.cvc} errorMessage={errorOf('cvc')} />}
      {step >= 2 && (
        <ExpireDateField
          field={cardForm.expireDate}
          errorMessage={errorOf('expireDate')}
        />
      )}
      {step >= 1 && (
        <CardBrandField
          field={cardForm.cardBrand}
          errorMessage={errorOf('cardBrand')}
        />
      )}
      <CardNumberField
        field={cardForm.cardNumber}
        errorMessage={errorOf('cardNumber')}
      />
    </Wrapper>
  );
}
