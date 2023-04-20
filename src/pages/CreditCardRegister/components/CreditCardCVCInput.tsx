import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardCVC: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

function CreditCardCVCInput({ creditCardCVC, onChange }: Props) {
  return (
    <>
      <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>
      <Input type="password" value={creditCardCVC} width="72px" textAlign="center" onChange={onChange} />
    </>
  );
}

export default CreditCardCVCInput;
