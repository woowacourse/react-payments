import InputSection from './common/InputSection';
import { ErrorText, ErrorWrapper } from '../styles/common';
import Input from './common/Input';
import useDisplayingErrorStatus from '../hooks/useDisplayingErrorStatus';

export interface IPasswordInputContainerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errorStatus: { errorMessage: string; isError: boolean };
}

export default function PasswordInputContainer({ value, setValue, errorStatus }: IPasswordInputContainerProps) {
  const {
    displayingErrorStatus: { errorMessage, isError },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <div>
      <InputSection
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
        />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
