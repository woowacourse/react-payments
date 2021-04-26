import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as Style from './style';

const CardNumbersInput = (props) => {
  const { setCardNumbers } = props;

  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const inputRefs = [firstInput, secondInput, thirdInput, fourthInput];

  const handleChangeNumbers = (event) => {
    if (!isFourDigits(event.target.value)) return;

    const index = event.target.dataset.numberIdx;
    const numberFragment = event.target.value;

    setCardNumbers((prevNumbers) => ({ ...prevNumbers, [index]: numberFragment }));

    index <= 3 ? moveFocusToNextFragment(Number(index)) : focusOut(Number(index) - 1);
  };

  const moveFocusToNextFragment = (index) => {
    inputRefs[index].current.focus();
  };

  const focusOut = (index) => {
    inputRefs[index].current.blur();
  };

  const isFourDigits = (value) => value.length === 4;

  return (
    <>
      <Style.Input
        type="number"
        width="44px"
        min="1000"
        max="9999"
        data-number-idx="1"
        onChange={handleChangeNumbers}
        ref={firstInput}
      />
      <Style.Divider>-</Style.Divider>
      <Style.Input
        type="number"
        width="44px"
        min="1000"
        max="9999"
        data-number-idx="2"
        onChange={handleChangeNumbers}
        ref={secondInput}
      />
      <Style.Divider>-</Style.Divider>
      <Style.Input type="password" width="44px" data-number-idx={3} onChange={handleChangeNumbers} ref={thirdInput} />
      <Style.Divider>-</Style.Divider>
      <Style.Input type="password" width="44px" data-number-idx={4} onChange={handleChangeNumbers} ref={fourthInput} />
    </>
  );
};

export default CardNumbersInput;

CardNumbersInput.propTypes = {
  setCardNumbers: PropTypes.func.isRequired,
};
