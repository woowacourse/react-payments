import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import shuffle from '../../../utils/utils';
import * as Style from './style';

export const KeyboardPortal = ({ children }) => {
  const el = document.getElementById('keyboard');
  return createPortal(children, el);
};

const VirtualKeyboard = (props) => {
  const { setInputNumbers } = props;

  const originNumbers = [...Array.from({ length: 10 }, (_, idx) => idx), null, null];
  const [keypadNumbers, setKeypadNumbers] = useState(originNumbers);

  const onClickKeypad = (event) => {
    const number = event.target.dataset.number;
    if (!number) return;

    setInputNumbers((inputNumbers) => inputNumbers.concat(number));
    setKeypadNumbers(shuffle(keypadNumbers));
  };

  const onDeleteKeypad = () => {
    setInputNumbers((inputNumbers) => inputNumbers.slice(0, inputNumbers.length - 1));
  };

  const keypads = keypadNumbers.map((num, idx) => (
    <Style.Keypad className="keypad-number" key={num || idx * -1} data-number={num} onClick={onClickKeypad}>
      {num}
    </Style.Keypad>
  ));

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  return (
    <Style.Root className="keyboard-inner">
      {keypads}
      <Style.Keypad></Style.Keypad>
      <Style.Keypad onClick={onDeleteKeypad}>DELETE</Style.Keypad>
    </Style.Root>
  );
};

VirtualKeyboard.propTypes = {
  setInputNumbers: PropTypes.func.isRequired,
};

export default VirtualKeyboard;
