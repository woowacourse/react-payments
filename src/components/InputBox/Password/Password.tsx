import * as styled from './Password.styled';

import { InputBoxProps } from '../../../types/InputBox';

const Password = ({ children, error }: InputBoxProps) => {
  return (
    <styled.Password>
      <label>
        <styled.LabelHeader>카드 비밀번호</styled.LabelHeader>
        <styled.PasswordInputs>{children}</styled.PasswordInputs>
      </label>
      {(error.firstPassword || error.secondPassword) && (
        <styled.ErrorMessage>{error.firstPassword || error.secondPassword}</styled.ErrorMessage>
      )}
    </styled.Password>
  );
};

export default Password;
