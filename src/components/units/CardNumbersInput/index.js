import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import * as Style from './style';

const CardNumbersInput = (props) => {
  const { type, label, width, setCardNumbers } = props;

  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const inputRefs = [firstInput, secondInput, thirdInput, fourthInput];

  const handleChangeNumbers = (event) => {
    if (!isFourDigits(event.target.value)) return;

    const index = Number(event.target.dataset.numberIdx);
    const numberFragment = event.target.value;

    setCardNumbers((prevNumbers) => ({ ...prevNumbers, [index]: numberFragment }));

    // TODO: selector open 시 input에서 일시적으로 focus out
    index <= 3 ? moveFocusToNextFragment(index) : focusOut(index - 1);
  };

  const moveFocusToNextFragment = (index) => {
    inputRefs[index].current.focus();
  };

  const focusOut = (index) => {
    inputRefs[index].current.blur();
  };

  const isFourDigits = (value) => value.length === 4;

  return (
    <RegisterInputWrapper type={type} label={label} width={width}>
      <Style.InputWrapper>
        <Style.NumberInput
          type="number"
          width="48px"
          min="1000"
          max="9999"
          data-number-idx="1"
          onChange={handleChangeNumbers}
          ref={firstInput}
        />
        <Style.Divider>-</Style.Divider>
        <Style.NumberInput
          type="number"
          width="48px"
          min="1000"
          max="9999"
          data-number-idx="2"
          onChange={handleChangeNumbers}
          ref={secondInput}
        />
        <Style.Divider>-</Style.Divider>
        <Style.PasswordInput
          type="password"
          width="48px"
          data-number-idx={3}
          onChange={handleChangeNumbers}
          ref={thirdInput}
        />
        <Style.Divider>-</Style.Divider>
        <Style.PasswordInput
          type="password"
          width="48px"
          data-number-idx={4}
          onChange={handleChangeNumbers}
          ref={fourthInput}
        />
      </Style.InputWrapper>
    </RegisterInputWrapper>
  );
};

export default CardNumbersInput;

CardNumbersInput.propTypes = {
  setCardNumbers: PropTypes.func.isRequired,
};
