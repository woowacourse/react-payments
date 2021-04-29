import PropTypes from 'prop-types';
import { memo, useRef, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { MONTH, YEAR } from '../../../constants/inputName';
import { NUMBER_REG_EXR } from '../../../constants/regExp';
import { hasObjectAnyValue } from '../../../utils/object';
import { printColorBasedOnBoolean } from '../../../utils/printColor';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './ExpiredDateInput.style';

const FULL_INPUT_LENGTH = 2;
const transparentInputStyles = {
  color: COLOR.MINT_500,
  width: '30%',
  textAlign: 'center',
};

const isValidMonthInput = cardExpiredDate => {
  const month = Number(cardExpiredDate[MONTH]);

  return 1 <= month && month <= 12 && cardExpiredDate[MONTH].length === FULL_INPUT_LENGTH;
};

const isValidYearInput = cardExpiredDate => {
  const year = Number(cardExpiredDate[YEAR]);

  return 0 <= year && cardExpiredDate[YEAR].length === FULL_INPUT_LENGTH;
};

const ExpiredDateInput = memo(
  ({ cardExpiredDate, setCardExpiredDate, isValidCardExpiredDate, setValidCardExpiredDate }) => {
    const $yearInput = useRef(null);

    useEffect(() => {
      const isValidInput = isValidMonthInput(cardExpiredDate) && isValidYearInput(cardExpiredDate);
      setValidCardExpiredDate(isValidInput);
    }, [setValidCardExpiredDate, cardExpiredDate]);

    const handleInputChange = ({ target }) => {
      if (target.value.length > FULL_INPUT_LENGTH || !NUMBER_REG_EXR.test(target.value)) return;

      setCardExpiredDate(prevState => ({ ...prevState, [target.name]: target.value }));

      if (target.name === MONTH && target.value.length === FULL_INPUT_LENGTH) {
        $yearInput.current.disabled = false;
        $yearInput.current.focus();
      }
    };

    return (
      <div>
        <Styled.InputLabelContainer>만료일 {isValidCardExpiredDate && '✔️'}</Styled.InputLabelContainer>
        <Styled.InputContainer
          validColor={hasObjectAnyValue(cardExpiredDate) && printColorBasedOnBoolean(isValidCardExpiredDate)}
        >
          <TransparentInput
            name={MONTH}
            minLength={FULL_INPUT_LENGTH}
            maxLength={FULL_INPUT_LENGTH}
            placeholder="MM"
            value={cardExpiredDate[MONTH]}
            onChange={handleInputChange}
            styles={transparentInputStyles}
          />
          <Styled.Slash>/</Styled.Slash>
          <TransparentInput
            name={YEAR}
            min={FULL_INPUT_LENGTH}
            max={FULL_INPUT_LENGTH}
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
