import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import RegistrationLayout from './common/RegistrationLayout';
import { ErrorDetail } from './types/error';

interface CardholderNameContainerProps {
  cardholderName: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  updateErrorMessage: () => void;
  errorInfo: ErrorDetail;
}

const CardholderNameContainer = ({
  cardholderName,
  setValue,
  updateErrorMessage,
  errorInfo,
}: CardholderNameContainerProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value.toUpperCase());

  return (
    <div>
      <RegistrationLayout
        title="카드 소유자 이름 입력을 입력해 주세요"
        labelText="소유자 이름"
        labelFor="cardholder-name-input"
      >
        <Input
          id="cardholder-name-input"
          isError={errorInfo.isError}
          value={cardholderName}
          onChange={handleChange}
          onBlur={updateErrorMessage}
          placeholder="JOHN DOE"
          width="100%"
          maxLength={100}
        />
      </RegistrationLayout>
      <ErrorWrapper>
        <ErrorText>{errorInfo.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardholderNameContainer;
