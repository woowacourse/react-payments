import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import InputField from './common/InputField';
import { ErrorDetail } from '../types/error';

interface CardCVCContainerProps {
  cvc: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateErrorMessage: () => void;
  errorInfo: ErrorDetail;
}

const CardCVCContainer = ({ cvc, handleChange, updateErrorMessage, errorInfo }: CardCVCContainerProps) => {
  return (
    <div>
      <InputField title="CVC 번호를 입력해 주세요" labelText="CVC" labelFor="cvc-input">
        <Input
          id="cvc-input"
          isError={errorInfo.isError}
          value={cvc}
          onChange={handleChange}
          onBlur={updateErrorMessage}
          placeholder="123"
          width="100%"
          maxLength={4}
          type="password"
        />
      </InputField>
      <ErrorWrapper>
        <ErrorText>{errorInfo.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardCVCContainer;
