import { ErrorText, ErrorWrapper } from '../styles/common';
import Input from './common/Input';
import InputSection from './common/InputSection';

export interface ICvcInputContainerProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  errorStatus: { errorMessage: string; isError: boolean };
  updateErrorStatus: (targetValue?: string) => void;
}

const CvcInputContainer = ({ data, setData, errorStatus, updateErrorStatus }: ICvcInputContainerProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setData(e.target.value);

  return (
    <div>
      <InputSection title="CVC 번호를 입력해 주세요" labelFor="CVC" labelText="CVC">
        <Input
          placeholder="123"
          maxLength={3}
          value={data}
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
