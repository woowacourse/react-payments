import useCreditCardForm from 'hooks/useCreditCardForm';
import FlexBox from 'components/FlexBox';
import { validateCVC } from 'domains/validations';
import Input from '../../../components/Input';
import * as S from '../style';

function CreditCardCVCInput() {
  const { creditCardForm, handleCreditCardCVCChange } = useCreditCardForm();

  const isError = creditCardForm.cvc.length > 0 && !validateCVC(creditCardForm.cvc);

  return (
    <div>
      <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>

      <FlexBox justifyContent="flex-start" alignItems="center">
        <Input
          type="password"
          value={creditCardForm.cvc}
          width="72px"
          textAlign="center"
          onChange={handleCreditCardCVCChange}
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
