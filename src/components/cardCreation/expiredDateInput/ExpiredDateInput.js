import PropTypes from 'prop-types';
import { memo, useRef } from 'react';
import { COLOR } from '../../../constants/color';
import { EXPIRED_DATE_INPUT } from '../../../constants/input';
import { PLACEHOLDER } from '../../../constants/message';
import { isFilledAllNumber } from '../../../utils';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './ExpiredDateInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  width: '30%',
  textAlign: 'center',
};

const isValidMonthInput = cardExpiredDate => {
  const month = Number(cardExpiredDate.month);

  return (
    EXPIRED_DATE_INPUT.RANGE.MONTH.MIN <= month &&
    month <= EXPIRED_DATE_INPUT.RANGE.MONTH.MAX &&
    isFilledAllNumber(cardExpiredDate.month, EXPIRED_DATE_INPUT.LENGTH)
  );
};

const isValidYearInput = cardExpiredDate => {
  const year = Number(cardExpiredDate.year);

  return (
    EXPIRED_DATE_INPUT.RANGE.YEAR.MIN <= year && isFilledAllNumber(cardExpiredDate.year, EXPIRED_DATE_INPUT.LENGTH)
  );
};

const ExpiredDateInput = ({ cardExpiredDate, setCardExpiredDate, isValidCardExpiredDate, setValidCardExpiredDate }) => {
  const $yearInput = useRef(null);

  const handleInputChange = ({ target }) => {
    if (target.value.length > EXPIRED_DATE_INPUT.LENGTH) return;

    setCardExpiredDate(prevState => ({ ...prevState, [target.name]: target.value }));

    if (target.name === EXPIRED_DATE_INPUT.NAME.MONTH && target.value.length === EXPIRED_DATE_INPUT.LENGTH) {
      $yearInput.current.disabled = false;
      $yearInput.current.focus();
    }
  };

  return (
    <div>
      <Styled.InputLabelContainer>만료일 {isValidCardExpiredDate && '✔️'}</Styled.InputLabelContainer>
      <Styled.InputContainer isValidInput={isValidCardExpiredDate}>
        <TransparentInput
          type="number"
          name={EXPIRED_DATE_INPUT.NAME.MONTH}
          min={EXPIRED_DATE_INPUT.RANGE.MONTH.MIN}
          max={EXPIRED_DATE_INPUT.RANGE.MONTH.MAX}
          placeholder={PLACEHOLDER.EXPIRED_DATE.MONTH}
          value={cardExpiredDate.month}
          onChange={handleInputChange}
          styles={transparentInputStyles}
        />
        <Styled.Slash>/</Styled.Slash>
        <TransparentInput
          type="number"
          name={EXPIRED_DATE_INPUT.NAME.YEAR}
          min={EXPIRED_DATE_INPUT.RANGE.YEAR.MIN}
          max={EXPIRED_DATE_INPUT.RANGE.YEAR.MAX}
          placeholder={PLACEHOLDER.EXPIRED_DATE.YEAR}
          innerRef={$yearInput}
          value={cardExpiredDate.year}
          onChange={handleInputChange}
          styles={transparentInputStyles}
        />
      </Styled.InputContainer>
    </div>
  );
};

ExpiredDateInput.propTypes = {
  cardExpiredDate: PropTypes.object.isRequired,
  setCardExpiredDate: PropTypes.func.isRequired,
  isValidCardExpiredDate: PropTypes.bool.isRequired,
};

export default memo(ExpiredDateInput);
