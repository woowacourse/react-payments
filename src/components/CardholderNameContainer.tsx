import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import RegistrationLayout from './common/RegistrationLayout';

interface CardholderNameContainerProps {
  cardholderName: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  updateErrorMessage: () => void;
  errorMessage: string;
}

const CardholderNameContainer = ({
  cardholderName,
  setValue,
  updateErrorMessage,
  errorMessage,
}: CardholderNameContainerProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value.toUpperCase());

  return (
    <div>
      <RegistrationLayout title="카드 소유자 이름 입력" labelText="소유자 이름" labelFor="cardholder-name-input">
        <Input
          id="cardholder-name-input"
          isError={!!errorMessage}
          value={cardholderName}
          onChange={handleChange}
          onBlur={updateErrorMessage}
          placeholder="카드 소유자 이름을 입력해주세요"
          width="100%"
          maxLength={100}
        />
      </RegistrationLayout>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardholderNameContainer;
