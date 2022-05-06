import { useContext } from 'react';
import * as S from 'styles.js';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import validator from 'lib/validations/validator';
import { CARD_COMPANIES } from 'lib/constants/cardDomain';
import { CardDispatchContext, CardStateContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import Label from 'components/Label/Label';

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
      <S.InputBox>
        <S.InputContainer width="23%">
          <S.InputBasic
            type="password"
            maxLength="3"
            value={cardCvc}
            color={cardColor}
            onChange={onChangeInput}
            id={name}
          />
        </S.InputContainer>
        <S.TipButton onClick={onClickTip}>?</S.TipButton>
      </S.InputBox>
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
