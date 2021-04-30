import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shuffle from '../../../utils/utils';
import * as Style from './style';

const VirtualKeyboard = (props) => {
  const { numberLength } = props;

  const originNumbers = [...Array.from({ length: 10 }, (_, idx) => idx), null, null];
  const [keypadNumbers, setKeypadNumbers] = useState(originNumbers);
  const [inputNumbers, setInputNumbers] = useState([]);

  const onClickKeypad = (event) => {
    const number = event.target.dataset.number;
    if (!number) return;
    if (inputNumbers.length >= numberLength) return;

    setInputNumbers((inputNumbers) => inputNumbers.concat(number));
    setKeypadNumbers(shuffle(keypadNumbers));
  };

  const onDeleteKeypad = () => {
    setInputNumbers((inputNumbers) => inputNumbers.slice(0, inputNumbers.length - 1));
  };

  const keypads = keypadNumbers.map((num, idx) => (
    <Style.KeyPad className="keypad-number" key={num || idx * -1} data-number={num} onClick={onClickKeypad}>
      {num}
    </Style.KeyPad>
  ));

  return (
    <Style.Root>
      {keypads}
      <Style.KeyPad>NOTHING</Style.KeyPad>
      <Style.KeyPad onClick={onDeleteKeypad}>DELETE</Style.KeyPad>
    </Style.Root>
  );
};

VirtualKeyboard.propTypes = {
  numberLength: PropTypes.number.isRequired,
};

export default VirtualKeyboard;
