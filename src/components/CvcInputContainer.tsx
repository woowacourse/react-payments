import { ErrorText, ErrorWrapper } from '../styles/common';
import Input from './common/Input';
import InputSection from './common/InputSection';

export interface ICvcInputContainerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errorStatus: { errorMessage: string; isError: boolean };
  updateErrorStatus: (targetValue?: string) => void;
}

const CvcInputContainer = ({ value, setValue, errorStatus, updateErrorStatus }: ICvcInputContainerProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <div>
      <InputSection title="CVC 번호를 입력해 주세요" labelFor="CVC" labelText="CVC">
        <Input
          placeholder="123"
          maxLength={3}
          value={value}
          onChange={onChange}
          onBlur={() => updateErrorStatus()}
          width="100%"
        />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{errorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CvcInputContainer;
