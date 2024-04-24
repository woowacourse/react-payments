import { ErrorText, ErrorWrapper } from '../styles/common';
import Input from './common/Input';
import InputSection from './common/InputSection';
import useDisplayingErrorStatus from '../hooks/useDisplayingErrorStatus';

export interface ICvcInputContainerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errorStatus: { errorMessage: string; isError: boolean };
}

const CvcInputContainer = ({ value, setValue, errorStatus }: ICvcInputContainerProps) => {
  const {
    displayingErrorStatus: { errorMessage, isError },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <div>
      <InputSection title="CVC 번호를 입력해 주세요" labelFor="CVC" labelText="CVC">
        <Input
          isError={isError}
          placeholder="123"
          maxLength={3}
          value={value}
          onChange={onChange}
          onBlur={bringErrorStatus}
          width="100%"
        />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CvcInputContainer;
