import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputSection from './common/InputSection';
import useDisplayingErrorStatus from '../hooks/useDisplayingErrorStatus';

interface CardholderNameInputContainerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errorStatus: { errorMessage: string; isError: boolean };
}

const CardholderNameInputContainer = ({ value, setValue, errorStatus }: CardholderNameInputContainerProps) => {
  const {
    displayingErrorStatus: { isError, errorMessage },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value.toUpperCase());
  const onBlur = () => bringErrorStatus();

  return (
    <div>
      <InputSection title="카드 소유자 이름 입력" labelText="소유자 이름" labelFor="cardholder-name-input">
        <Input
          id="cardholder-name-input"
          isError={isError}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="JOHN DOE"
          width="100%"
          maxLength={100}
        />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardholderNameInputContainer;
