import Input from '../../common/Input';
import { ErrorWrapper, ErrorText } from '../../../styles/common';
import InputContainer from '../../common/InputContainer';
import useDisplayingErrorStatus from '../../../hooks/useDisplayingErrorStatus';
import { IInputControl } from '../../../hooks/useInput';

const CardholderNameInputContainer = ({ value, setValue, validateValue, errorStatus }: IInputControl) => {
  const {
    displayingErrorStatus: { isError, errorMessage },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateValue(e.target.value);
    setValue(e.target.value.toUpperCase());
  };

  return (
    <div>
      <InputContainer title="카드 소유자 이름 입력" labelText="소유자 이름" labelFor="cardholder-name-input">
        <Input
          id="cardholder-name-input"
          isError={isError}
          value={value}
          onChange={onChange}
          onBlur={bringErrorStatus}
          placeholder="JOHN DOE"
          width="100%"
          maxLength={100}
        />
      </InputContainer>
      <ErrorWrapper>
        <ErrorText>{errorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardholderNameInputContainer;
