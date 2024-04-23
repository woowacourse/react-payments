import InputSection from './common/InputSection';
import { ErrorText, ErrorWrapper } from '../styles/common';
import Input from './common/Input';

export interface IPasswordInputContainerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errorStatus: { errorMessage: string; isError: boolean };
  updateErrorStatus: (targetValue?: string) => void;
}

export default function PasswordInputContainer({
  value,
  setValue,
  errorStatus,
  updateErrorStatus,
}: IPasswordInputContainerProps) {
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
          value={value}
          maxLength={2}
          type="password"
          width="100%"
          onChange={onChange}
          onBlur={() => updateErrorStatus()}
        />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{errorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
