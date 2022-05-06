import { useContext } from 'react';

import validator from 'lib/validations';
import ErrorMessage from 'containers/ErrorMessage/ErrorMessage';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import Label from 'components/Label';
import InputContainer from 'components/InputContainer';
import InputBox from 'components/InputBox';
import styled from 'styled-components';
import { InputBasicLeft } from 'components/Input';

export default function CardOwner({ color }) {
  const { cardOwner, cardOwnerErrorMessage } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (e) => {
    dispatch({ type: TYPES.SET_OWNER, value: e.target.value });
  };
  const name = '카드소유자 이름(선택)';

  return (
    <>
      <Styled.TitleWrapper>
        <Label htmlFor={name} marginBottom="0px">
          {name}
        </Label>
        <Styled.NameLength isLengthValidated={cardOwner.length > 30}>
          <span>{cardOwner.length}</span>/<span>30</span>
        </Styled.NameLength>
      </Styled.TitleWrapper>
      <InputBox>
        <InputContainer>
          <InputBasicLeft
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            type="text"
            maxLength="30"
            color={color}
            value={cardOwner}
            onChange={onChangeInput}
            id={name}
          />
        </InputContainer>
      </InputBox>
      <ErrorMessage
        value={cardOwner}
        validate={validator.checkCardOwner}
        type={TYPES.SET_OWNER_ERROR_MESSAGE}
      >
        {cardOwnerErrorMessage}
      </ErrorMessage>
    </>
  );
}

const Styled = {
  TitleWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  `,
  NameLength: styled.p`
    margin: 0;
    letter-spacing: -0.05em;
    font-size: 12px;
    color: ${({ isLengthValidated }) => (isLengthValidated ? '#E24141' : '#525252')};
  `,
};
