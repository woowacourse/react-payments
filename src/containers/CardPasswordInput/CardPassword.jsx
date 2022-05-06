import { useContext } from 'react';
import ErrorMessage from 'containers/ErrorMessage/ErrorMessage';
import validator from 'lib/validations/validator';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import AutoFocusInputBox from 'common/AutoFocusInputBox';
import Label from 'components/Label';
import Circle from 'components/Circle';
import styled from 'styled-components';
import { InputBasic } from 'components/Input';

export default function CardPassword({ color }) {
  const { cardPassword, cardPasswordErrorMessage } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPES.SET_PASSWORD, value: e.target.value, index });
  };

  const name = '카드 비밀번호';

  return (
    <>
      <Label htmlFor={name}>{name}</Label>
      <Styled.ExtendedInputBox>
        <AutoFocusInputBox maxValueLength={1}>
          <InputBasic
            type="password"
            width="43px"
            maxLength="1"
            color={color}
            value={cardPassword[0]}
            onChange={onChangeInput(0)}
            id={name}
          />
          <InputBasic
            type="password"
            width="43px"
            maxLength="1"
            color={color}
            value={cardPassword[1]}
            onChange={onChangeInput(1)}
          />
        </AutoFocusInputBox>
        <Styled.PasswordBox>
          <Circle size="5px" color={color} />
        </Styled.PasswordBox>
        <Styled.PasswordBox>
          <Circle size="5px" color={color} />
        </Styled.PasswordBox>
      </Styled.ExtendedInputBox>
      <ErrorMessage
        value={cardPassword}
        validate={validator.checkCardPassword}
        type={TYPES.SET_PASSWORD_ERROR_MESSAGE}
      >
        {cardPasswordErrorMessage}
      </ErrorMessage>
    </>
  );
}

const Styled = {
  ExtendedInputBox: styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.375rem;
    color: #d3d3d3;
    width: 220px;
    justify-content: space-between;
  `,

  PasswordBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43px;
    height: 45px;
  `,
};
