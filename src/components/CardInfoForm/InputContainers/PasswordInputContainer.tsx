import InputContainer from '../../common/InputContainer';
import { ErrorText, ErrorWrapper } from '../../../styles/common';
import Input from '../../common/Input';
import useDisplayingErrorStatus from '../../../hooks/useDisplayingErrorStatus';
import { IInputControl } from '../../../hooks/useInput';

export default function PasswordInputContainer({ value, onChange, errorStatus }: IInputControl) {
  const {
    displayingErrorStatus: { errorMessage, isError },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  return (
    <div>
      <InputContainer
        title="비밀번호를 입력해 주세요"
        subtitle="앞의 2자리를 입력해 주세요"
        labelFor="password"
        labelText="비밀번호 앞 2자리"
      >
        <Input
          isError={isError}
          value={value}
          maxLength={2}
          type="password"
          width="100%"
          onChange={onChange}
          onBlur={bringErrorStatus}
          placeholder="12"
        />
      </InputContainer>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
