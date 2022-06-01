import { useContext } from 'react';
import ErrorMessage from 'containers/ErrorMessage/ErrorMessage';
import validator from 'lib/validations';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import Label from 'components/Label/Label';
import InputContainer from 'common/InputContainer/InputContainer';
import InputBox from 'common/InputBox/InputBox';
import Tooltip from 'components/Tooltip/Tooltip';
import { InputBasic } from 'components/Input/Input';

interface Props {
  color: string;
  onClickTooltip(): void;
}

export default function CardCvc({ color, onClickTooltip }: Props) {
  const { cardCvc, cardCvcErrorMessage } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const onChangeInput = (e) => {
    dispatch({ type: TYPES.SET_CVC, value: e.target.value });
  };

  const name = '보안코드(CVC/CVV)';

  return (
    <>
      <Label htmlFor={name}>{name}</Label>
      <InputBox>
        <InputContainer width="23%">
          <InputBasic
            type="password"
            maxLength={3}
            value={cardCvc}
            color={color}
            onChange={onChangeInput}
            id={name}
          />
        </InputContainer>
        <Tooltip onClick={onClickTooltip}>?</Tooltip>
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
