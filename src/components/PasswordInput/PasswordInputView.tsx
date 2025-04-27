import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { InputFieldState } from '../../types/models';
import { Container, ErrorMessage } from '../common/Styled';
import { ERROR_MESSAGE } from '../../utils/cardValidation';
import { ChangeEvent } from 'react';

interface PasswordInputViewProps {
  passwordInfo: InputFieldState;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInputView = ({
  passwordInfo,
  handleInputChange,
}: PasswordInputViewProps) => {
  return (
    <Container data-testid="password-component">
      <InputAreaHeader
        title="비밀번호를 입력해 주세요"
        caption="앞의 2자리를 입력해주세요"
      />
      <InputTexts
        type="password"
        dataModels={passwordInfo}
        label="비밀번호 앞 2자리"
        onChange={handleInputChange}
      />
      <ErrorMessage>
        {passwordInfo.hasError ? ERROR_MESSAGE.INVALID_CHARACTER : ''}
      </ErrorMessage>
    </Container>
  );
};

export default PasswordInputView;
