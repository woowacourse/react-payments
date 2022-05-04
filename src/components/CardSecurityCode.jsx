import React, { useEffect } from 'react';
import useInput from '../hooks/useInput';
import ErrorMessage from './common/ErrorMessage';
import QuestionContainer from './common/QuestionIcon';

import * as S from './common/styles';

const MAX_CARD_CODE = 3;
const CVC_EXPLANATION = `CVC번호는 카드뒷면의 7자리 숫자 중 뒷 3자리입니다.`;

function CardSecurityCode({ dispatch }) {
  const [value, onChangeInputValue, isValid, errorMessage] = useInput({
    type: 'number',
    maxLength: MAX_CARD_CODE,
  });

  useEffect(() => {
    if (!isValid) return;

    const isCorrectSecurityCode = MAX_CARD_CODE === value.length;

    dispatch({
      type: 'CARD_SECURITY_CODE',
      cardSecurityCode: value,
      isCorrectSecurityCode,
    });
  }, [value, isValid, dispatch]);

  return (
    <S.InputContainer position={'relative'} width={'40%'}>
      <div>
        <S.Label>보안코드(CVC/CVV)</S.Label>
        <S.InputWrapperForm width={'80%'}>
          <S.Span>
            <S.Input type={'password'} maxLength={'3'} onChange={onChangeInputValue} value={value} />
          </S.Span>
        </S.InputWrapperForm>
        <QuestionContainer>{CVC_EXPLANATION}</QuestionContainer>
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </S.InputContainer>
  );
}

export default React.memo(CardSecurityCode);
