import Input from '@Components/Input';

import * as CommonStyle from '@Styles/common';

import * as Type from '@Types/index';

import * as S from './style';
import InputLabel from '../InputLabel';
import InputLayout from '../InputLayout';

type Props = {
  creditCardPassword: {
    first: string;
    second: string;
  };
  errorMessage: string | null;
  setCreditCardPassword: React.Dispatch<React.SetStateAction<Type.CreditCardPasswordType>>;
};

function CreditCardPasswordInput({ creditCardPassword, errorMessage, setCreditCardPassword }: Props) {
  const handleChangeCreditCardFirstPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFirstPassword = event.target.value;
    if (newFirstPassword.length <= 1) {
      setCreditCardPassword({
        ...creditCardPassword,
        first: event.target.value,
      });
    }
  };

  const handleChangeCreditCardSecondPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSecondPassword = event.target.value;
    if (newSecondPassword.length <= 1) {
      setCreditCardPassword({
        ...creditCardPassword,
        second: event.target.value,
      });
    }
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
