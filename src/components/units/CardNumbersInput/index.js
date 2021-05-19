import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import { FRAGMENT_INDEX } from '../../../constants/constants';
import * as Style from './style';

const CardNumbersInput = (props) => {
  const { type, label, width, cardNumbers, setCardNumbers } = props;
  const { FIRST, SECOND, THIRD, FOURTH } = FRAGMENT_INDEX;

  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const inputRefs = [firstInput, secondInput, thirdInput, fourthInput];

  const isFourDigits = (value) => value.length === 4;

  const handleChangeNumbers = (event) => {
    const index = Number(event.target.dataset.numberIdx);
    const numberFragment = event.target.value;
    if (isNaN(numberFragment)) return;

    setCardNumbers((prevNumbers) => ({ ...prevNumbers, [index]: numberFragment }));

    if (isFourDigits(numberFragment)) {
      index <= THIRD ? moveFocusToNextFragment(index) : focusOut(index - 1);
    }
  };

  const moveFocusToNextFragment = (index) => {
    inputRefs[index].current.focus();
  };

  const focusOut = (index) => {
    inputRefs[index].current.blur();
  };

  const handleInvalidInput = (event) => {
    event.target.setCustomValidity('숫자를 4자리로 입력해 주세요.');
  };

  const clearValidity = (event) => {
    event.target.setCustomValidity('');
  };

  return (
    <RegisterInputWrapper type={type} label={label} width={width}>
      <Style.InputWrapper>
        <Style.NumberInput
          type="text"
          aria-label="card-numbers-input-1"
          width="54px"
          value={cardNumbers[FIRST]}
          pattern="^[0-9]{4}$"
          data-number-idx={FIRST}
          onChange={handleChangeNumbers}
          onInvalid={handleInvalidInput}
          onInput={clearValidity}
          ref={firstInput}
          required
        />
        <Style.Divider>-</Style.Divider>
        <Style.NumberInput
          type="text"
          aria-label="card-numbers-input-2"
          width="54px"
          value={cardNumbers[SECOND]}
          pattern="^[0-9]{4}$"
          data-number-idx={SECOND}
          onChange={handleChangeNumbers}
          onInvalid={handleInvalidInput}
          onInput={clearValidity}
          ref={secondInput}
          required
        />
        <Style.Divider>-</Style.Divider>
        <Style.PasswordInput
          type="password"
          aria-label="card-numbers-input-3"
          width="54px"
          value={cardNumbers[THIRD]}
          pattern="^[0-9]{4}$"
          data-number-idx={THIRD}
          onChange={handleChangeNumbers}
          onInvalid={handleInvalidInput}
          onInput={clearValidity}
          ref={thirdInput}
          required
        />
        <Style.Divider>-</Style.Divider>
        <Style.PasswordInput
          type="password"
          aria-label="card-numbers-input-4"
          width="54px"
          value={cardNumbers[FOURTH]}
          pattern="^[0-9]{4}$"
          data-number-idx={FOURTH}
          onChange={handleChangeNumbers}
          onInvalid={handleInvalidInput}
          onInput={clearValidity}
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
  cardNumbers: PropTypes.object.isRequired,
  setCardNumbers: PropTypes.func.isRequired,
};

export default CardNumbersInput;
