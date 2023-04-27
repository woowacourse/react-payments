import * as T from 'types';
import useCreditCardForm from 'hooks/useCreditCardForm';
import Input from '../../../components/Input';
import * as S from '../style';

function CreditCardCVCInput({ name }: T.CreditCardInputProps) {
  const { creditCard, setCreditCard } = useCreditCardForm();

  const handleChangeCreditCardCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCVC = event.target.value.replace(/\D/g, '');
    if (newCVC.length <= 3) {
      setCreditCard({ ...creditCard, [name]: newCVC });
    }
  };

  const isError = creditCard.cvc.length > 0 && creditCard.cvc.length < 3;

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>

      <S.FlexBox justifyContent="flex-start" alignItems="center">
        <Input type="password" value={creditCard.cvc} width="72px" textAlign="center" onChange={handleChangeCreditCardCVC} />
        <S.QuestionBox onClick={() => alert('카드 뒷 면을 참고하세요.')}>
          <S.QuestionMark>?</S.QuestionMark>
        </S.QuestionBox>
      </S.FlexBox>
      {isError && <S.ErrorMessage>CVC/CVV 번호는 3자리 숫자여야 합니다.</S.ErrorMessage>}
    </S.Box>
  );
}

export default CreditCardCVCInput;
