import Input from '@Components/Input';

import * as CommonStyle from '@Styles/common';

import * as S from './style';
import InputLabel from '../InputLabel';
import InputLayout from '../InputLayout';

type Props = {
  creditCardPassword: {
    first: string;
    second: string;
  };
  errorMessage: string | null;
  updatePassword: {
    first: (newPassword: string) => void;
    second: (newPassword: string) => void;
  };
};

function CreditCardPasswordInput({ creditCardPassword, errorMessage, updatePassword }: Props) {
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
