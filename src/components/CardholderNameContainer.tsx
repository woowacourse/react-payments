import Input from './common/Input';
import { ErrorWrapper, ErrorText } from '../styles/common';
import RegistrationLayout from './common/RegistrationLayout';

interface CardholderNameContainerProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  errorStatus: { errorMessage: string; isError: boolean };
  updateErrorStatus: () => void;
}

const CardholderNameContainer = ({ data, setData, errorStatus, updateErrorStatus }: CardholderNameContainerProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setData(e.target.value.toUpperCase());

  return (
    <div>
      <RegistrationLayout title="카드 소유자 이름 입력" labelText="소유자 이름" labelFor="cardholder-name-input">
        <Input
          id="cardholder-name-input"
          isError={errorStatus.isError}
          value={data}
          onChange={onChange}
          onBlur={updateErrorStatus}
          placeholder="카드 소유자 이름을 입력해주세요"
          width="100%"
          maxLength={100}
        />
      </RegistrationLayout>
      <ErrorWrapper>
        <ErrorText>{errorStatus.errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardholderNameContainer;
