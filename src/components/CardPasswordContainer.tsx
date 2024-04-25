import Input from './common/input/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputField from './common/input/InputField';
import { ErrorDetail } from '../types/error';

interface CardPasswordContainerProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateErrorMessage: () => void;
  errorInfo: ErrorDetail;
}

const CardPasswordContainer = ({
  value,
  handleChange,
  updateErrorMessage,
  errorInfo,
}: CardPasswordContainerProps) => {
  return (
    <div>
      <InputField
        title="비밀번호를 입력해 주세요"
        subtitle="앞의 2자리를 입력해주세요"
        labelText="비밀번호 앞 2자리"
        labelFor="card-password-input"
      >
        <Input
          id="card-password-input"
          isError={errorInfo.isError}
          value={value}
          onChange={handleChange}
          onBlur={updateErrorMessage}
          width="100%"
          maxLength={2}
          type="password"
          placeholder="••"
          autoFocus={true}
        />
      </InputField>
      <ErrorWrapper>
        <ErrorText>{errorInfo.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardPasswordContainer;
