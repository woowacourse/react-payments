import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import InputLayout from '@Components/InputLayout';

import * as CommonStyle from '@Styles/common';

import * as S from './style';
import { CreditCardPasswordInputProps } from './type';

function CreditCardPasswordInput({ creditCardPassword, errorMessage, updatePassword }: CreditCardPasswordInputProps) {
  const handleChangeCreditCardFirstPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    updatePassword.first(event.target.value);
  };

  const handleChangeCreditCardSecondPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    updatePassword.second(event.target.value);
  };

  return (
    <InputLayout errorMessage={errorMessage}>
      <InputLabel label="카드 비밀번호" />
      <CommonStyle.FlexBox justifyContent="flex-start">
        <Input
          type="password"
          value={creditCardPassword?.first}
          width="48px"
          textAlign="center"
          onChange={handleChangeCreditCardFirstPassword}
          maxLength={1}
        />
        <Input
          type="password"
          value={creditCardPassword?.second}
          width="48px"
          textAlign="center"
          onChange={handleChangeCreditCardSecondPassword}
          maxLength={1}
        />
        <S.PasswordBox>•</S.PasswordBox>
        <S.PasswordBox>•</S.PasswordBox>
      </CommonStyle.FlexBox>
    </InputLayout>
  );
}

export default CreditCardPasswordInput;
