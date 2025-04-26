import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { PasswordInfo } from '../../types/models';
import { Container, ErrorMessage } from '../common/Styled';

interface PasswordInputViewProps {
  passwordInfo: PasswordInfo;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ERROR_MESSAGE = '숫자만 입력 가능합니다.';

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
      <ErrorMessage>{passwordInfo.isError ? ERROR_MESSAGE : ''}</ErrorMessage>
    </Container>
  );
};

export default PasswordInputView;
