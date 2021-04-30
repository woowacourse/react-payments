import PropTypes from 'prop-types';
import { memo, useRef } from 'react';
import { COLOR } from '../../../constants/color';
import { CARD_INPUT } from '../../../constants/standard';
import { isValidCard } from '../../../validations/card';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './ExpiredDateInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  width: '30%',
  textAlign: 'center',
};

const ExpiredDateInput = memo(({ cardExpiredDate, setCardExpiredDate }) => {
  const $yearInput = useRef(null);
  const isValidCardExpiredDate = isValidCard.ExpiredDate(cardExpiredDate);

  const handleInputChange = ({ target }) => {
    if (target.value.length > CARD_INPUT.MONTH_LENGTH) return;

    setCardExpiredDate(prevState => ({ ...prevState, [target.name]: target.value }));

    if (target.name === 'month' && target.value.length === CARD_INPUT.MONTH_LENGTH) {
      $yearInput.current.disabled = false;
      $yearInput.current.focus();
    }
  };

  return (
    <div>
      <Styled.InputLabelContainer>만료일 {isValidCardExpiredDate && '✔️'}</Styled.InputLabelContainer>
      <Styled.InputContainer isValidInput={isValidCardExpiredDate}>
        <TransparentInput
          name="month"
          type="number"
          min="1"
          max="12"
          inputmode="none"
          placeholder="MM"
          value={cardExpiredDate.month}
          onChange={handleInputChange}
          styles={transparentInputStyles}
        />
        <Styled.Slash>/</Styled.Slash>
        <TransparentInput
          name="year"
          type="number"
          min="0"
          max="99"
          inputmode="none"
          placeholder="YY"
          innerRef={$yearInput}
          value={cardExpiredDate.year}
          onChange={handleInputChange}
          styles={transparentInputStyles}
        />
      </Styled.InputContainer>
    </div>
  );
});

ExpiredDateInput.propTypes = {
  cardExpiredDate: PropTypes.object.isRequired,
  setCardExpiredDate: PropTypes.func.isRequired,
};

export default ExpiredDateInput;
