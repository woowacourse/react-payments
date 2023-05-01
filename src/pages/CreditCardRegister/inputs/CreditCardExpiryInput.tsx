import useCreditCardForm from 'hooks/useCreditCardForm';
import { markExpiry } from 'domains/creditCard';
import { ChangeEvent } from 'react';
import Input from '../../../components/Input';
import * as S from '../style';
import { validateExpiry } from '../../../domains/validations';

function CreditCardExpiryInput() {
  const { creditCardForm, updateCreditCardExpiry } = useCreditCardForm();

  const handleChangeCreditCardExpiry = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newCardExpiry = event.target.value;
    const cleanedExpiry = newCardExpiry.replaceAll('/', '').replace(/\D/g, '');
    if (cleanedExpiry.length > 4) return;
    updateCreditCardExpiry(cleanedExpiry);
  };

  const markedExpiry = markExpiry(creditCardForm.expiry);
  const isError = creditCardForm.expiry.length > 0 && !validateExpiry(creditCardForm.expiry);

  return (
    <div>
      <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
      <Input
        placeholder="MM/YY"
        type="string"
        value={markedExpiry}
        width="40%"
        textAlign="center"
        onChange={handleChangeCreditCardExpiry}
      />
      {isError && (
        <S.ErrorMessage>
          만료일은 유효한 MM/YY 형식이어야 합니다.
        </S.ErrorMessage>
      )}
    </div>
  );
}

export default CreditCardExpiryInput;
