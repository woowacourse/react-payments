import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardExpiry: string,
  setCreditCardExpiry: React.Dispatch<React.SetStateAction<string>>,
};

function CreditCardExpiryInput({ creditCardExpiry, setCreditCardExpiry }: Props) {
  const handleChangeCreditCardExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCardExpiry = event.target.value.replaceAll('/', '');

    if (newCardExpiry.length <= 2) setCreditCardExpiry(newCardExpiry);
    else if (newCardExpiry.length <= 4) {
      const newCardExpiryArray = newCardExpiry.split('');
      newCardExpiryArray.splice(2, 0, '/');
      setCreditCardExpiry(newCardExpiryArray.join(''));
    }
  };

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
      <Input placeholder="MM /YY" type="string" value={creditCardExpiry} width="40%" textAlign="center" onChange={handleChangeCreditCardExpiry} />
    </S.Box>
  );
}

export default CreditCardExpiryInput;
