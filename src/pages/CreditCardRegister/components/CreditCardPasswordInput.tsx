import Input from '../../../components/Input';
import * as S from '../style';

type Props = {
  creditCardPassword: {
    first: string;
    second: string;
  }
  onChangeFirstPassword: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeSecondPassword: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

function CreditCardPasswordInput({
  creditCardPassword, onChangeFirstPassword, onChangeSecondPassword
}: Props) {
  return (
    <>
      <S.CreditCardRegisterLabel>카드 비밀번호</S.CreditCardRegisterLabel>
      <S.FlexBox justifyContent="flex-start">
        <Input type="password" value={creditCardPassword?.first} width="48px" textAlign="center" onChange={onChangeFirstPassword} />
        <Input type="password" value={creditCardPassword?.second} width="48px" textAlign="center" onChange={onChangeSecondPassword} />
        <S.PasswordBox>•</S.PasswordBox>
        <S.PasswordBox>•</S.PasswordBox>
      </S.FlexBox>
    </>
  );
}

export default CreditCardPasswordInput;
