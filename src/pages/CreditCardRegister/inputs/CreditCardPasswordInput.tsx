import * as Type from 'types';
import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardPassword: {
    first: string;
    second: string;
  },
  setCreditCardPassword: React.Dispatch<React.SetStateAction<Type.CreditCardPasswordType>>,
};

function CreditCardPasswordInput({
  creditCardPassword, setCreditCardPassword
}: Props) {
  const handleChangeCreditCardPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSecondPassword = event.target.value;
    if (newSecondPassword.length <= 1) {
      setCreditCardPassword({ ...creditCardPassword, [event.target.name]: event.target.value });
    }
  };

  const isError = !((creditCardPassword.first.length > 0 && creditCardPassword.second.length > 0)
    || (creditCardPassword.first.length === 0 && creditCardPassword.second.length === 0));

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>카드 비밀번호</S.CreditCardRegisterLabel>
      <S.FlexBox justifyContent="flex-start">
        <Input type="password" value={creditCardPassword?.first} width="48px" textAlign="center" name="first" onChange={handleChangeCreditCardPassword} />
        <Input type="password" value={creditCardPassword?.second} width="48px" textAlign="center" name="second" onChange={handleChangeCreditCardPassword} />
        <S.PasswordBox>•</S.PasswordBox>
        <S.PasswordBox>•</S.PasswordBox>
      </S.FlexBox>
      {isError && <S.ErrorMessage>비밀 번호는 앞 2자리를 입력하셔야 합니다.</S.ErrorMessage>}
    </S.Box>
  );
}

export default CreditCardPasswordInput;
