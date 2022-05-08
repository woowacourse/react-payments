import { useContext } from 'react';
import ErrorMessage from 'containers/ErrorMessage/ErrorMessage';
import validator from 'lib/validations';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import AutoFocusInputBox from 'common/AutoFocus/AutoFocusInputBox';
import Label from 'components/Label/Label';
import InputContainer from 'common/InputContainer/InputContainer';
import InputBox from 'common/InputBox/InputBox';
import { InputBasic } from 'components/Input/Input';

export default function CardExpiration({ color }) {
  const { cardExpiration, cardExpirationErrorMessage } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (index) => (e) => {
    dispatch({ type: TYPES.SET_EXPIRATION, value: e.target.value, index });
  };
  const name = '만료일';

  return (
    <>
      <Label htmlFor={name}>{name}</Label>
      <InputBox>
        <InputContainer width="40%">
          <AutoFocusInputBox maxValueLength={2}>
            <InputBasic
              type="text"
              placeholder="MM"
              width="48%"
              maxLength="2"
              color={color}
              value={cardExpiration[0]}
              onChange={onChangeInput(0)}
              id={name}
            />
            <InputBasic
              type="text"
              placeholder="YY"
              width="48%"
              maxLength="2"
              color={color}
              value={cardExpiration[1]}
              onChange={onChangeInput(1)}
            />
          </AutoFocusInputBox>
        </InputContainer>
      </InputBox>
      <ErrorMessage
        value={cardExpiration}
        validate={validator.checkCardExpiration}
        type={TYPES.SET_EXPIRATION_ERROR_MESSAGE}
      >
        {cardExpirationErrorMessage}
      </ErrorMessage>
    </>
  );
}
