import InputContainer from '../../common/InputContainer';
import Input from '../../common/Input';

import useDisplayingErrorStatus from '../../../hooks/useDisplayingErrorStatus';
import { IInputControl } from '../../../hooks/useInput';
import useFocusOnInitialRender from '../../../hooks/useFocusOnInitialRender';
import * as S from '../../../styles/common';

export default function PasswordInputContainer({ value, onChange, errorStatus }: IInputControl) {
  const initialFocusTargetRef = useFocusOnInitialRender<HTMLInputElement>();
  const {
    displayingErrorStatus: { errorMessage, isError },
    bringErrorStatus,
  } = useDisplayingErrorStatus(errorStatus);

  return (
    <div>
      <InputContainer
        title="비밀번호를 입력해 주세요"
        subtitle="앞의 2자리를 입력해 주세요"
        labelFor="password"
        labelText="비밀번호 앞 2자리"
      >
        <Input
          ref={initialFocusTargetRef}
          isError={isError}
          value={value}
          maxLength={2}
          type="password"
          width="100%"
          onChange={onChange}
          onBlur={bringErrorStatus}
          placeholder="12"
        />
      </InputContainer>
      <S.ErrorWrapper>
        <S.ErrorText>{errorMessage}</S.ErrorText>
      </S.ErrorWrapper>
    </div>
  );
}
