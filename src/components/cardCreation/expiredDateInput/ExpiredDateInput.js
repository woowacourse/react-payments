import PropTypes from 'prop-types';
import { memo, useRef, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { CARD_INPUT } from '../../../constants/standard';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './ExpiredDateInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  width: '30%',
  textAlign: 'center',
};

const isValidMonthInput = cardExpiredDate => {
  const month = Number(cardExpiredDate.month);

  return 1 <= month && month <= 12 && cardExpiredDate.month.length === CARD_INPUT.MONTH_LENGTH && !isNaN(month);
};

const isValidYearInput = cardExpiredDate => {
  const year = Number(cardExpiredDate.year);

  return 0 <= year && cardExpiredDate.year.length === CARD_INPUT.YEAR_LENGTH && !isNaN(year);
};

const ExpiredDateInput = memo(
  ({ cardExpiredDate, setCardExpiredDate, isValidCardExpiredDate, setValidCardExpiredDate }) => {
    const $yearInput = useRef(null);

    useEffect(() => {
      const isValidInput = isValidMonthInput(cardExpiredDate) && isValidYearInput(cardExpiredDate);
      setValidCardExpiredDate(isValidInput);
    }, [setValidCardExpiredDate, cardExpiredDate]);

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
  }
);

ExpiredDateInput.propTypes = {
  cardExpiredDate: PropTypes.object.isRequired,
  setCardExpiredDate: PropTypes.func.isRequired,
  isValidCardExpiredDate: PropTypes.bool.isRequired,
  setValidCardExpiredDate: PropTypes.func.isRequired,
};

export default ExpiredDateInput;
