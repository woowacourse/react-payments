import * as T from 'types';
import useCreditCardForm from 'hooks/useCreditCardForm';
import FlexBox from 'components/FlexBox';
import { validateCVC } from 'domains/validations';
import { ChangeEvent } from 'react';
import Input from '../../../components/Input';
import * as S from '../style';

function CreditCardCVCInput({ name }: T.CreditCardInputProps) {
  const { creditCardForm, setCreditCardForm } = useCreditCardForm();

  const handleChangeCreditCardCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const newCVC = event.target.value.replace(/\D/g, '');
    if (newCVC.length <= 3) {
      setCreditCardForm({ ...creditCardForm, [name]: newCVC });
    }
  };

  const isError = creditCardForm.cvc.length > 0 && validateCVC(creditCardForm.cvc);

  return (
    <div>
      <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>

      <FlexBox justifyContent="flex-start" alignItems="center">
        <Input
          type="password"
          value={creditCardForm.cvc}
          width="72px"
          textAlign="center"
          onChange={handleChangeCreditCardCVC}
        />
        <S.QuestionBox onClick={() => alert('카드 뒷 면을 참고하세요.')}>
          <S.QuestionMark>?</S.QuestionMark>
        </S.QuestionBox>
      </FlexBox>
      {isError && (
        <S.ErrorMessage>CVC/CVV 번호는 3자리 숫자여야 합니다.</S.ErrorMessage>
      )}
    </div>
  );
}

export default CreditCardCVCInput;
