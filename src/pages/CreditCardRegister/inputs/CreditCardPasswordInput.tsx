import * as T from 'types';
import useCreditCardForm from 'hooks/useCreditCardForm';
import FlexBox from 'components/FlexBox';
import { ChangeEvent } from 'react';
import Input from '../../../components/Input';
import * as S from '../style';
import { validatePassword } from '../../../domains/validations';

function CreditCardPasswordInput({ name }: T.CreditCardInputProps) {
  const { creditCardForm, setCreditCardForm } = useCreditCardForm();

  const handleChangeCreditCardPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newPassword = event.target.value.replace(/\D/g, '');
    if (newPassword.length <= 1) {
      const { password }: T.CreditCard = { ...creditCardForm };
      const targetName = event.target.name;
      if (targetName === 'first') {
        password[0] = newPassword;
      }
      if (targetName === 'second') {
        password[1] = newPassword;
      }
      setCreditCardForm({ ...creditCardForm, [name]: password });
    }
  };

  const isError = (creditCardForm.password[0].length > 0
    || creditCardForm.password[1].length > 0)
    && validatePassword(creditCardForm.password[0], creditCardForm.password[1]);

  return (
    <div>
      <S.CreditCardRegisterLabel>카드 비밀번호</S.CreditCardRegisterLabel>
      <FlexBox justifyContent="flex-start">
        <Input
          type="password"
          value={creditCardForm.password[0]}
          width="48px"
          textAlign="center"
          name="first"
          onChange={handleChangeCreditCardPassword}
        />
        <Input
          type="password"
          value={creditCardForm.password[1]}
          width="48px"
          textAlign="center"
          name="second"
          onChange={handleChangeCreditCardPassword}
        />
        <S.PasswordBox>•</S.PasswordBox>
        <S.PasswordBox>•</S.PasswordBox>
      </FlexBox>
      {isError && (
        <S.ErrorMessage>
          비밀 번호는 앞 2자리를 입력하셔야 합니다.
        </S.ErrorMessage>
      )}
    </div>
  );
}

export default CreditCardPasswordInput;
