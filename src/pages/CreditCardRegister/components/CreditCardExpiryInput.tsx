import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardExpiry: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

function CreditCardExpiryInput({ creditCardExpiry, onChange }: Props) {
  return (
    <>
      <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
      <Input placeholder="MM /YY" type="string" value={creditCardExpiry} width="40%" textAlign="center" onChange={onChange} />
    </>
  );
}

export default CreditCardExpiryInput;
