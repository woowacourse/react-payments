import React from 'react';
import PropTypes from 'prop-types';
import { shuffleNumbers } from '../../../utils/utils';
import { KeyboardWrapper } from './index.styles';

const Keyboard = ({ handleKeyboardInput }) => {
  return (
    <KeyboardWrapper>
      <div className='keyboard-nodes'>
        {shuffleNumbers(0, 9).map((number) => (
          <div
            key={number}
            className='keyboard-node'
            onClick={() => handleKeyboardInput(number)}
          >
            {number}
          </div>
        ))}
      </div>
      <div className='keyboard-enter'>확인</div>
    </KeyboardWrapper>
  );
};

Keyboard.propTypes = {
  handleKeyboardInput: PropTypes.func,
};

export default Keyboard;
