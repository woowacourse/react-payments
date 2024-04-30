import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';

import { IInputControl } from '../../../hooks/useInput';
import * as S from '../../../styles/common';
import makeUniqueString from '../../../utils/getUniqueId';

const CardholderNameInputContainer = ({ value, setValue, onBlur, errorStatus }: IInputControl) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value.toUpperCase());
  const inputId = makeUniqueString(`cardholder-name-input`);

  return (
    <div>
      <InputContainer title="카드 소유자 이름 입력" labelText="소유자 이름" labelFor={inputId}>
        <Input
          id={inputId}
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
