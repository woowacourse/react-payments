import PropTypes from 'prop-types';
import { memo, useRef } from 'react';
import { COLOR } from '../../../constants/color';
import { INPUT_NAME, INPUT_LENGTH } from '../../../constants/input';
import { NUMBER_REG_EXR } from '../../../constants/regExp';
import { hasObjectAnyValue } from '../../../utils/object';
import { printColorBasedOnBoolean } from '../../../utils/printColor';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './ExpiredDateInput.style';

const { MONTH, YEAR } = INPUT_NAME;

const transparentInputStyles = {
  color: COLOR.MINT_500,
  width: '30%',
  textAlign: 'center',
};

const ExpiredDateInput = memo(({ cardExpiredDate, setCardExpiredDate, isValidCardExpiredDate }) => {
  const $yearInput = useRef(null);

  const handleInputChange = ({ target }) => {
    if (target.value.length > INPUT_LENGTH.EXPIRED_DATE || !NUMBER_REG_EXR.test(target.value)) return;

    setCardExpiredDate(prevState => ({ ...prevState, [target.name]: target.value }));

    if (target.name === MONTH && target.value.length === INPUT_LENGTH.EXPIRED_DATE) {
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
          minLength={INPUT_LENGTH.EXPIRED_DATE}
          maxLength={INPUT_LENGTH.EXPIRED_DATE}
          placeholder="MM"
          value={cardExpiredDate[MONTH]}
          onChange={handleInputChange}
          styles={transparentInputStyles}
        />
        <Styled.Slash>/</Styled.Slash>
        <TransparentInput
          name={YEAR}
          min={INPUT_LENGTH.EXPIRED_DATE}
          max={INPUT_LENGTH.EXPIRED_DATE}
          placeholder="YY"
          innerRef={$yearInput}
          value={cardExpiredDate[YEAR]}
          onChange={handleInputChange}
          styles={transparentInputStyles}
        />
      </Styled.InputContainer>
    </div>
  );
});

ExpiredDateInput.defaultProps = {
  cardExpiredDate: { [MONTH]: '', [YEAR]: '' },
};

ExpiredDateInput.propTypes = {
  cardExpiredDate: PropTypes.objectOf(PropTypes.string).isRequired,
  setCardExpiredDate: PropTypes.func.isRequired,
  isValidCardExpiredDate: PropTypes.bool.isRequired,
};

export default ExpiredDateInput;
