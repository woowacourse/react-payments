import PropTypes from 'prop-types';
import { memo } from 'react';
import { COLOR } from '../../../constants/color';
import { INPUT_LENGTH } from '../../../constants/input';
import { ALPHABET_REG_EXR } from '../../../constants/regExp';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardOwnerInput.style';

const isValidInput = value => {
  return ALPHABET_REG_EXR.test(value) && value.length <= INPUT_LENGTH.CARD_OWNER;
};

const CardOwnerInput = memo(({ cardOwner, setCardOwner }) => {
  const handleInputChange = ({ target }) => {
    if (!isValidInput(target.value)) return;

    setCardOwner(target.value.toUpperCase());
  };

  return (
    <div>
      <Styled.InputLabelContainer>
        <div>카드 소유자 이름(선택)</div>
        <div>
          {cardOwner.length} / {INPUT_LENGTH.CARD_OWNER}
        </div>
      </Styled.InputLabelContainer>
      <Styled.InputContainer>
        <TransparentInput
          value={cardOwner}
          onChange={handleInputChange}
          styles={{ color: COLOR.MINT_500 }}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </Styled.InputContainer>
    </div>
  );
});

CardOwnerInput.defaultProps = {
  cardOwner: '',
};

CardOwnerInput.propTypes = {
  cardOwner: PropTypes.string.isRequired,
  setCardOwner: PropTypes.func.isRequired,
};

export default CardOwnerInput;
