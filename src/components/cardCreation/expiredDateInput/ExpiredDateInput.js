import { memo, useRef } from 'react';
import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './ExpiredDateInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  width: '30%',
  textAlign: 'center',
};

const ExpiredDateInput = memo(({ cardExpiredDate, setCardExpiredDate }) => {
  const $yearInput = useRef(null);

  const handleInputChange = ({ target }) => {
    if (target.value.length > 2) return;

    setCardExpiredDate(prevState => ({ ...prevState, [target.name]: target.value }));

    if (target.name === 'month' && target.value.length === 2) {
      $yearInput.current.disabled = false;
      $yearInput.current.focus();
    }
  };

  return (
    <div>
      <Styled.InputLabelContainer>만료일</Styled.InputLabelContainer>
      <Styled.InputContainer>
        <TransparentInput
          name="month"
          type="number"
          min="1"
          max="12"
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

export default ExpiredDateInput;
