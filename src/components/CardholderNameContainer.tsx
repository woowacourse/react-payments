import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputField from './common/InputField';
import { ErrorDetail } from '../types/error';

interface CardholderNameContainerProps {
  cardholderName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  errorInfo: ErrorDetail;
}

const CardholderNameContainer = ({
  cardholderName,
  handleChange,
  handleBlur,
  handleKeyDown,
  errorInfo,
}: CardholderNameContainerProps) => {
  return (
    <div>
      <InputField
        title="카드 소유자 이름 입력을 입력해 주세요"
        labelText="소유자 이름"
        labelFor="cardholder-name-input"
      >
        <Input
          id="cardholder-name-input"
          isError={errorInfo.isError}
          value={cardholderName}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder="JOHN DOE"
          width="100%"
          maxLength={100}
          autoFocus={true}
        />
      </InputField>
      <ErrorWrapper>
        <ErrorText>{errorInfo.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardholderNameContainer;
