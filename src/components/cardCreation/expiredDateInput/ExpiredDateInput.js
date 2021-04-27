import PropTypes from 'prop-types';
import { memo, useRef, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { MONTH, YEAR } from '../../../constants/inputName';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './ExpiredDateInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  width: '30%',
  textAlign: 'center',
};

const isValidMonthInput = cardExpiredDate => {
  const month = Number(cardExpiredDate[MONTH]);

  return 1 <= month && month <= 12 && cardExpiredDate[MONTH].length === 2 && !isNaN(month);
};

const isValidYearInput = cardExpiredDate => {
  const year = Number(cardExpiredDate[YEAR]);

  return 0 <= year && cardExpiredDate[YEAR].length === 2 && !isNaN(year);
};

const ExpiredDateInput = memo(
  ({ cardExpiredDate, setCardExpiredDate, isValidCardExpiredDate, setValidCardExpiredDate }) => {
    const $yearInput = useRef(null);

    useEffect(() => {
      const isValidInput = isValidMonthInput(cardExpiredDate) && isValidYearInput(cardExpiredDate);
      setValidCardExpiredDate(isValidInput);
    }, [setValidCardExpiredDate, cardExpiredDate]);

    const handleInputChange = ({ target }) => {
      if (target.value.length > 2) return;

      setCardExpiredDate(prevState => ({ ...prevState, [target.name]: target.value }));

      if (target.name === MONTH && target.value.length === 2) {
        $yearInput.current.disabled = false;
        $yearInput.current.focus();
      }
    };

    return (
      <div>
        <Styled.InputLabelContainer>만료일 {isValidCardExpiredDate && '✔️'}</Styled.InputLabelContainer>
        <Styled.InputContainer isValidInput={isValidCardExpiredDate}>
          <TransparentInput
            name={MONTH}
            type="number"
            min="1"
            max="12"
            placeholder="MM"
            value={cardExpiredDate[MONTH]}
            onChange={handleInputChange}
            styles={transparentInputStyles}
          />
          <Styled.Slash>/</Styled.Slash>
          <TransparentInput
            name={YEAR}
            type="number"
            min="0"
            max="99"
            placeholder="YY"
            innerRef={$yearInput}
            value={cardExpiredDate[YEAR]}
            onChange={handleInputChange}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
      </div>
    );
  }
);

ExpiredDateInput.defaultProps = {
  cardExpiredDate: { [MONTH]: '', [YEAR]: '' },
};

ExpiredDateInput.propTypes = {
  cardExpiredDate: PropTypes.objectOf(PropTypes.string).isRequired,
  setCardExpiredDate: PropTypes.func.isRequired,
  isValidCardExpiredDate: PropTypes.bool.isRequired,
  setValidCardExpiredDate: PropTypes.func.isRequired,
};

export default ExpiredDateInput;
