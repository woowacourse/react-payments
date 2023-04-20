import Input from '../../../components/Input';
import * as S from '../style';
import InputLayout from './InputLayout';

type Props = {
  creditCardCVC: string;
  errorMessage: string | null;
  setCreditCardCVC: React.Dispatch<React.SetStateAction<string>>;
};

function CreditCardCVCInput({ creditCardCVC, errorMessage, setCreditCardCVC }: Props) {
  const handleChangeCreditCardCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCVC = event.target.value;
    if (newCVC.length <= 3) {
      setCreditCardCVC(newCVC);
    }
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>
      <Input
        type="password"
        value={creditCardCVC}
        width="72px"
        textAlign="center"
        onChange={handleChangeCreditCardCVC}
      />
    </InputLayout>
  );
}

export default CreditCardCVCInput;
