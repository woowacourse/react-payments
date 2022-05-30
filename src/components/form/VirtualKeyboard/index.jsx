import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { isNumberInRange } from '../../../utils/validation/form';
const shuffle = (array) => {
  const target = [...array];
  return target.sort(() => Math.random() - 0.5);
};

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function VirtualKeyboard({
  cardInputDispatch,
  closeVirtualKeyboard,
  nextInputFocus,
  element,
  elementState,
  elementKey,
}) {
  const onClickNumber = (e) => {
    const {
      target: { textContent },
    } = e;

    const { maxLength } = element;

    if (isNumberInRange(`${elementState}${textContent}`, maxLength)) {
      element?.focus();

      cardInputDispatch({
        type: 'CHANGE_PASSWORD_TYPE_INPUT_VALUE',
        payload: { elementKey, value: `${elementState}${textContent}` },
      });
    }

    if (elementState.length === maxLength) {
      nextInputFocus({
        inputElementKey: elementKey,
        notExistNextElementAction: closeVirtualKeyboard,
      });
    }
  };

  const onClickBackSpace = () => {
    cardInputDispatch({
      type: 'CHANGE_PASSWORD_TYPE_INPUT_VALUE',
      payload: { elementKey, value: elementState.slice(0, -1) },
    });
  };

  const onClickCloseButton = () => {
    closeVirtualKeyboard();
  };

  return (
    <div className="virtual-keyboard-wrapper">
      {shuffle(array).map((number) => (
        <div key={uid(number)} className="virtual-keyboard-item" onClick={onClickNumber}>
          {number}
        </div>
      ))}
      <div className="virtual-keyboard-item" onClick={onClickBackSpace}>
        🔙
      </div>
      <div className="virtual-keyboard-item" onClick={onClickCloseButton}>
        ❌
      </div>
    </div>
  );
}
VirtualKeyboard.propTypes = {
  cardInputDispatch: PropTypes.func,
  closeVirtualKeyboard: PropTypes.func,
  nextInputFocus: PropTypes.func,
  element: PropTypes.any,
  elementState: PropTypes.string,
  elementKey: PropTypes.string,
};

export default VirtualKeyboard;
