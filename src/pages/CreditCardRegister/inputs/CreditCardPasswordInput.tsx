/* eslint-disable max-len */
import * as T from 'types';
import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  name: keyof T.CreditCard;
  creditCard: T.CreditCard;
  setCreditCard: React.Dispatch<React.SetStateAction<T.CreditCard>>;
};

function CreditCardPasswordInput({ name, creditCard, setCreditCard }: Props) {
  const handleChangeCreditCardPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSecondPassword: T.CreditCardPasswordTypeKeys = event.target.value as T.CreditCardPasswordTypeKeys;
    if (newSecondPassword.length <= 1) {
      const updatedCreditCard: T.CreditCard = { ...creditCard };
      (updatedCreditCard[name] as T.CreditCardPasswordType)[event.target.name as T.CreditCardPasswordTypeKeys] = event.target.value;
      setCreditCard(updatedCreditCard);
    }
  };

  const isError = !((creditCard.password.first.length > 0 && creditCard.password.second.length > 0)
    || (creditCard.password.first.length === 0 && creditCard.password.second.length === 0));

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>카드 비밀번호</S.CreditCardRegisterLabel>
      <S.FlexBox justifyContent="flex-start">
        <Input type="password" value={creditCard.password?.first} width="48px" textAlign="center" name="first" onChange={handleChangeCreditCardPassword} />
        <Input type="password" value={creditCard.password?.second} width="48px" textAlign="center" name="second" onChange={handleChangeCreditCardPassword} />
        <S.PasswordBox>•</S.PasswordBox>
        <S.PasswordBox>•</S.PasswordBox>
      </S.FlexBox>
      {isError && <S.ErrorMessage>비밀 번호는 앞 2자리를 입력하셔야 합니다.</S.ErrorMessage>}
    </S.Box>
  );
}

export default CreditCardPasswordInput;
