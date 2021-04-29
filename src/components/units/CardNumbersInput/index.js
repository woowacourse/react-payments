import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import * as Style from './style';

const CardNumbersInput = (props) => {
  const { type, label, width, cardNumbers, setCardNumbers } = props;

  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const inputRefs = [firstInput, secondInput, thirdInput, fourthInput];

  const isFourDigits = (value) => value.length === 4;

  const handleChangeNumbers = (event) => {
    const index = Number(event.target.dataset.numberIdx);
    const numberFragment = event.target.value;

    setCardNumbers((prevNumbers) => ({ ...prevNumbers, [index]: numberFragment }));

    // TODO: selector open 시 input에서 일시적으로 focus out
    if (isFourDigits(numberFragment)) {
      index <= 3 ? moveFocusToNextFragment(index) : focusOut(index - 1);
    }
  };

  const moveFocusToNextFragment = (index) => {
    inputRefs[index].current.focus();
  };

  const focusOut = (index) => {
    inputRefs[index].current.blur();
  };

  return (
    <RegisterInputWrapper type={type} label={label} width={width}>
      <Style.InputWrapper>
        <Style.NumberInput
          type="number"
          width="54px"
          min="1000"
          max="9999"
          value={cardNumbers[1]}
          data-number-idx="1"
          onChange={handleChangeNumbers}
          ref={firstInput}
          required
        />
        <Style.Divider>-</Style.Divider>
        <Style.NumberInput
          type="number"
          width="54px"
          min="1000"
          max="9999"
          value={cardNumbers[2]}
          data-number-idx="2"
          onChange={handleChangeNumbers}
          ref={secondInput}
          required
        />
        <Style.Divider>-</Style.Divider>
        <Style.PasswordInput
          type="password"
          width="54px"
          min="1000"
          max="9999"
          value={cardNumbers[3]}
          data-number-idx={3}
          onChange={handleChangeNumbers}
          ref={thirdInput}
          required
        />
        <Style.Divider>-</Style.Divider>
        <Style.PasswordInput
          type="password"
          width="54px"
          min="1000"
          max="9999"
          value={cardNumbers[4]}
          data-number-idx={4}
          onChange={handleChangeNumbers}
          ref={fourthInput}
          required
        />
      </Style.InputWrapper>
    </RegisterInputWrapper>
  );
};

CardNumbersInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  setCardNumbers: PropTypes.func.isRequired,
};

export default CardNumbersInput;
