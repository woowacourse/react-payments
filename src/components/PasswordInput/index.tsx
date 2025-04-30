import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { Container, ErrorMessage } from '../common/Styled';
import { ERROR_MESSAGE } from '../../utils/cardValidation';
import { usePasswordContext } from '../../contexts/PasswordContext';

const PasswordInput = () => {
  const { passwordField, handlePasswordChange, passwordInputRef } =
    usePasswordContext();

  return (
    <Container data-testid="password-component">
      <InputAreaHeader
        title="비밀번호를 입력해 주세요"
        caption="앞의 2자리를 입력해주세요"
      />
      <InputTexts
        type="password"
        dataModels={passwordField}
        inputRefs={[passwordInputRef]}
        label="비밀번호 앞 2자리"
        onChange={handlePasswordChange}
      />
      <ErrorMessage>
        {passwordField.hasError ? ERROR_MESSAGE.INVALID_CHARACTER : ''}
      </ErrorMessage>
    </Container>
  );
};

export default PasswordInput;
