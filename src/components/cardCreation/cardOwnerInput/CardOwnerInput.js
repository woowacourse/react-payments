import PropTypes from 'prop-types';
import { memo } from 'react';
import { COLOR } from '../../../constants/color';
import { CARD_OWNER_INPUT } from '../../../constants/input';
import { PLACEHOLDER } from '../../../constants/message';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardOwnerInput.style';

const CardOwnerInput = ({ cardOwner, setCardOwner }) => {
  return (
    <div>
      <Styled.InputLabelContainer>
        <div>카드 소유자 이름(선택)</div>
        <div>
          {cardOwner.length} / {CARD_OWNER_INPUT.LENGTH.MAX}
        </div>
      </Styled.InputLabelContainer>
      <Styled.InputContainer>
        <TransparentInput
          value={cardOwner}
          onChange={({ target }) => setCardOwner(target.value)}
          styles={{ color: COLOR.MINT }}
          placeholder={PLACEHOLDER.CARD_OWNER_INPUT}
        />
      </Styled.InputContainer>
    </div>
  );
};

CardOwnerInput.propTypes = {
  cardOwner: PropTypes.string.isRequired,
  setCardOwner: PropTypes.func.isRequired,
};

CardOwnerInput.defaultProps = {
  cardOwner: '',
};

export default memo(CardOwnerInput);
