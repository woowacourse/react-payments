import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';

import { IInputControl } from '../../../hooks/useInput';
import * as S from '../../../styles/common';

const CardholderNameInputContainer = ({ value, setValue, onBlur, errorStatus }: IInputControl) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value.toUpperCase());

  return (
    <div>
      <InputContainer title="카드 소유자 이름 입력" labelText="소유자 이름" labelFor="cardholder-name-input">
        <Input
          id="cardholder-name-input"
          isError={errorStatus.isError}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="JOHN DOE"
          width="100%"
          maxLength={100}
          autoFocus={true}
        />
      </InputContainer>
      <S.ErrorWrapper>
        <S.ErrorText>{errorStatus.errorMessage}</S.ErrorText>
      </S.ErrorWrapper>
    </div>
  );
};

export default CardholderNameInputContainer;
