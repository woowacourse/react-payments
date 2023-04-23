import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardCVC: string,
  setCreditCardCVC: React.Dispatch<React.SetStateAction<string>>,
};

function CreditCardCVCInput({ creditCardCVC, setCreditCardCVC }: Props) {
  const handleChangeCreditCardCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCVC = event.target.value.replace(/\D/g, '');
    if (newCVC.length <= 3) {
      setCreditCardCVC(newCVC);
    }
  };

  const isError = creditCardCVC.length > 0 && creditCardCVC.length < 3;

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>

      <S.FlexBox justifyContent="flex-start" alignItems="center">
        <Input type="password" value={creditCardCVC} width="72px" textAlign="center" onChange={handleChangeCreditCardCVC} />
        <S.QuestionBox onClick={() => alert('카드 뒷 면을 참고하세요.')}>
          <S.QuestionMark>?</S.QuestionMark>
        </S.QuestionBox>
      </S.FlexBox>
      {isError && <S.ErrorMessage>CVC/CVV 번호는 3자리 숫자여야 합니다.</S.ErrorMessage>}
    </S.Box>
  );
}

export default CreditCardCVCInput;
