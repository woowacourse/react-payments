import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardCVC: string,
  setCreditCardCVC: React.Dispatch<React.SetStateAction<string>>,
};

function CreditCardCVCInput({ creditCardCVC, setCreditCardCVC }: Props) {
  const handleChangeCreditCardCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCVC = event.target.value;
    if (newCVC.length <= 3) {
      setCreditCardCVC(newCVC);
    }
  };

  return (
    <>
      <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>
      <Input type="password" value={creditCardCVC} width="72px" textAlign="center" onChange={handleChangeCreditCardCVC} />
    </>
  );
}

export default CreditCardCVCInput;
