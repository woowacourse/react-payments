import * as T from 'types';
import useCreditCardForm from 'hooks/useCreditCardForm';
import FlexBox from 'components/FlexBox';
import Input from '../../../components/Input';
import * as S from '../style';
import { validatePassword } from '../../../domains/validations';

function CreditCardPasswordInput({ name }: T.CreditCardInputProps) {
  const { creditCardForm, setCreditCardForm } = useCreditCardForm();

  const handleChangeCreditCardPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = (event.target.value as T.CreditCardPasswordTypeKeys).replace(/\D/g, '');
    if (newPassword.length === 1) {
      const updatedCreditCard: T.CreditCard = { ...creditCardForm };
      const targetName = event.target.name as T.CreditCardPasswordTypeKeys;
      const targetValue = event.target.value;
      (updatedCreditCard[name] as T.CreditCardPasswordType)[targetName] = targetValue;
      setCreditCardForm(updatedCreditCard);
    }
  };

  const isError = validatePassword(creditCardForm.password.first, creditCardForm.password.second);

  return (
    <S.Box>
      <S.CreditCardRegisterLabel>카드 비밀번호</S.CreditCardRegisterLabel>
      <FlexBox justifyContent="flex-start">
        <Input
          type="password"
          value={creditCardForm.password?.first}
          width="48px"
          textAlign="center"
          name="first"
          onChange={handleChangeCreditCardPassword}
        />
        <Input
          type="password"
          value={creditCardForm.password?.second}
          width="48px"
          textAlign="center"
          name="second"
          onChange={handleChangeCreditCardPassword}
        />
        <S.PasswordBox>•</S.PasswordBox>
        <S.PasswordBox>•</S.PasswordBox>
      </FlexBox>
      {isError && <S.ErrorMessage>비밀 번호는 앞 2자리를 입력하셔야 합니다.</S.ErrorMessage>}
    </S.Box>
  );
}

export default CreditCardPasswordInput;
