import { ErrorText, ErrorWrapper } from '../../../styles/common';
import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';
import useDisplayingErrorStatus from '../../../hooks/useDisplayingErrorStatus';
import { IInputControl } from '../../../hooks/useInput';

export interface ICvcInputContainerProps {
  setIsCardFront: React.Dispatch<React.SetStateAction<boolean>>;
}

const CvcInputContainer = ({
  value,
  onChange,
  errorStatus,
  setIsCardFront,
}: IInputControl & ICvcInputContainerProps) => {
  const {
    displayingErrorStatus: { errorMessage, isError },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  const onFocus = () => setIsCardFront(false);
  const onBlur = () => {
    bringErrorStatus();
    setIsCardFront(true);
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
