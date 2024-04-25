import { ErrorText, ErrorWrapper } from '../../../styles/common';
import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';
import useDisplayingErrorStatus from '../../../hooks/useDisplayingErrorStatus';

export interface ICvcInputContainerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validateValue: (targetValue: string) => void;
  errorStatus: { errorMessage: string; isError: boolean };
  setIsCardFront?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CvcInputContainer = ({ value, onChange, errorStatus, setIsCardFront }: ICvcInputContainerProps) => {
  const {
    displayingErrorStatus: { errorMessage, isError },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  const onFocus = () => setIsCardFront && setIsCardFront(false);
  const onBlur = () => {
    bringErrorStatus();

    if (setIsCardFront) {
      setIsCardFront(true);
    }
  };

  return (
    <div>
      <InputContainer title="CVC 번호를 입력해 주세요" labelFor="CVC" labelText="CVC">
        <Input
          isError={isError}
          placeholder="123"
          maxLength={3}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          width="100%"
        />
      </InputContainer>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CvcInputContainer;
