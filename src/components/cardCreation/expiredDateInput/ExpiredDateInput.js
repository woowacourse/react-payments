import { memo } from 'react';
import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './ExpiredDateInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  width: '30%',
  textAlign: 'center',
};

const ExpiredDateInput = memo(({ cardExpiredDate, setCardExpiredDate }) => {
  const handleInputChange = ({ target }) => {
    setCardExpiredDate(prevState => ({ ...prevState, [target.name]: target.value }));
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
          value={cardExpiredDate.year}
          onChange={handleInputChange}
          styles={transparentInputStyles}
        />
      </Styled.InputContainer>
    </div>
  );
});

export default ExpiredDateInput;
