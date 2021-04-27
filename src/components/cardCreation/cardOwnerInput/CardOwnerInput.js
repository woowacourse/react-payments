import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { CARD_INPUT } from '../../../constants/standard';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardOwnerInput.style';

const isValidInput = carOwner => {
  return carOwner.length <= CARD_INPUT.OWNER_MAX_LENGTH;
};

const CardOwnerInput = memo(({ cardOwner, setCardOwner, setValidCardOwner }) => {
  useEffect(() => {
    setValidCardOwner(isValidInput(cardOwner));
  }, [setValidCardOwner, cardOwner]);

  return (
    <div>
      <Styled.InputLabelContainer>
        <div>카드 소유자 이름(선택)</div>
        <div> {cardOwner.length} / 30</div>
      </Styled.InputLabelContainer>
      <Styled.InputContainer>
        <TransparentInput
          value={cardOwner}
          maxLength={CARD_INPUT.OWNER_MAX_LENGTH}
          onChange={({ target }) => setCardOwner(target.value)}
          styles={{ color: COLOR.MINT }}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </Styled.InputContainer>
    </div>
  );
});

CardOwnerInput.propTypes = {
  cardOwner: PropTypes.string.isRequired,
  setCardOwner: PropTypes.func.isRequired,
  setValidCardOwner: PropTypes.func.isRequired,
};

CardOwnerInput.defaultProps = {
  cardOwner: '',
};

export default CardOwnerInput;
