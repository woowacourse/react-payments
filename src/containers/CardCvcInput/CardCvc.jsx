import { useContext } from 'react';
import ErrorMessage from 'containers/ErrorMessage/ErrorMessage';
import validator from 'lib/validations';
import { CARD_COMPANIES } from 'lib/constants';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import Label from 'components/Label';
import InputContainer from 'components/InputContainer';
import InputBox from 'components/InputBox';
import Tooltip from 'components/Tooltip';
import { InputBasic } from 'components/Input';

export default function CardCvc() {
  const { cardCvc, cardCvcErrorMessage, cardCompanyIndex } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (e) => {
    dispatch({ type: TYPES.SET_CVC, value: e.target.value });
  };

  const onClickTip = () => {
    dispatch({ type: TYPES.SET_TIP_MODAL_FLAG, flag: true });
  };

  const cardColor = cardCompanyIndex === -1 ? '#737373' : CARD_COMPANIES[cardCompanyIndex].COLOR;

  const name = '보안코드(CVC/CVV)';

  return (
    <>
      <Label htmlFor={name}>{name}</Label>
      <InputBox>
        <InputContainer width="23%">
          <InputBasic
            type="password"
            maxLength="3"
            value={cardCvc}
            color={cardColor}
            onChange={onChangeInput}
            id={name}
          />
        </InputContainer>
        <Tooltip onClick={onClickTip}>?</Tooltip>
      </InputBox>
      <ErrorMessage
        value={cardCvc}
        validate={validator.checkCardCvc}
        type={TYPES.SET_CVC_ERROR_MESSAGE}
      >
        {cardCvcErrorMessage}
      </ErrorMessage>
    </>
  );
}
