import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputSection from './common/InputSection';

interface CardholderNameInputContainerProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  errorStatus: { errorMessage: string; isError: boolean };
  updateErrorStatus: () => void;
}

const CardholderNameInputContainer = ({
  data,
  setData,
  errorStatus,
  updateErrorStatus,
}: CardholderNameInputContainerProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setData(e.target.value.toUpperCase());

  return (
    <div>
      <InputSection title="카드 소유자 이름 입력" labelText="소유자 이름" labelFor="cardholder-name-input">
        <Input
          id="cardholder-name-input"
          isError={errorStatus.isError}
          value={data}
          onChange={onChange}
          onBlur={() => updateErrorStatus()}
          placeholder="JOHN DOE"
          width="100%"
          maxLength={100}
        />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{errorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardholderNameInputContainer;
