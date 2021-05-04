import React from 'react';
import PropTypes from 'prop-types';
import { shuffleNumbers } from '../../../utils/utils';
import {
  KeyboardWrapper,
  KeyboardNodes,
  KeyboardNode,
  KeyboardEnter,
} from './index.styles';

const Keyboard = ({ handleKeyboardInput }) => {
  return (
    <KeyboardWrapper>
      <KeyboardNodes>
        {shuffleNumbers(0, 9).map((number) => (
          <KeyboardNode
            key={number}
            onClick={() => handleKeyboardInput(number)}
          >
            {number}
          </KeyboardNode>
        ))}
      </KeyboardNodes>
      <KeyboardEnter>확인</KeyboardEnter>
    </KeyboardWrapper>
  );
};

Keyboard.propTypes = {
  handleKeyboardInput: PropTypes.func,
};

export default Keyboard;
