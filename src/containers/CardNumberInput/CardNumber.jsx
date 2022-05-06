import { useContext } from 'react';
import ErrorMessage from 'containers/ErrorMessage/ErrorMessage';
import validator from 'lib/validations';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import AutoFocusInputBox from 'common/AutoFocusInputBox';
import Label from 'components/Label';
import styled from 'styled-components';
import InputBox from 'components/InputBox';
import { InputBasic } from 'components/Input';

export default function CardNumber({ color }) {
  const { cardNumber, cardNumberErrorMessage, cardCompanyIndex } = useContext(CardStateContext);

  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPES.SET_NUMBER, value: e.target.value, index });
  };

  const onFocusInput = () => {
    cardCompanyIndex === -1 && dispatch({ type: TYPES.SET_LIST_MODAL_FLAG, flag: true });
  };

  const name = '카드 번호';

  return (
    <>
      <Label htmlFor={name}>{name}</Label>
      <InputBox>
        <Styled.ExtendedInputContainer>
          <AutoFocusInputBox maxValueLength={4}>
            <InputBasic
              width="20%"
              type="text"
              maxLength="4"
              color={color}
              value={cardNumber[0]}
              onChange={onChangeInput(0)}
              onFocus={onFocusInput}
              id={name}
            />
            <Styled.Hyphen color={color}>-</Styled.Hyphen>
            <InputBasic
              width="20%"
              type="text"
              maxLength="4"
              color={color}
              value={cardNumber[1]}
              onChange={onChangeInput(1)}
              onFocus={onFocusInput}
            />
            <Styled.Hyphen color={color}>-</Styled.Hyphen>
            <InputBasic
              width="20%"
              type="password"
              maxLength="4"
              color={color}
              value={cardNumber[2]}
              onChange={onChangeInput(2)}
              onFocus={onFocusInput}
            />
            <Styled.Hyphen color={color}>-</Styled.Hyphen>
            <InputBasic
              width="20%"
              type="password"
              maxLength="4"
              color={color}
              value={cardNumber[3]}
              onChange={onChangeInput(3)}
              onFocus={onFocusInput}
            />
          </AutoFocusInputBox>
        </Styled.ExtendedInputContainer>
      </InputBox>
      <ErrorMessage
        value={cardNumber}
        validate={validator.checkCardNumber}
        type={TYPES.SET_NUMBER_ERROR_MESSAGE}
      >
        {cardNumberErrorMessage}
      </ErrorMessage>
    </>
  );
}

const Styled = {
  Hyphen: styled.p`
    margin: 0;
    font-size: 18px;
    line-height: 47px;
    color: ${({ color }) => color || '#737373'};
  `,

  ExtendedInputContainer: styled.div`
    display: flex;
    width: ${({ width }) => width || '100%'};
    background-color: #ecebf1;
    border-radius: 0.25rem;
    justify-content: space-between;
  `,
};
