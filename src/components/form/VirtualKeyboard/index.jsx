import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { isNumberInRange } from '../../../utils/validation/form';
const shuffle = array => {
  const target = [...array];
  return target.sort(() => Math.random() - 0.5);
};

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function VirtualKeyboard({
  cardInputDispatch,
  setIsShowVirtualKeyboard,
  elementState,
  elementKey,
  maxLength,
  nextInputFocus,
}) {
  const onClickNumber = e => {
    const {
      target: { textContent },
    } = e;

    if (isNumberInRange(elementState, maxLength)) {
      cardInputDispatch({
        type: 'CHANGE_PASSWORD_INPUT',
        payload: { elementKey, value: `${elementState}${textContent}` },
      });
    }

    if (elementState.length === maxLength) {
      nextInputFocus(elementKey, () =>
        setIsShowVirtualKeyboard(prev => ({
          ...prev,
          isShow: false,
          elementKey: null,
          maxLength: null,
        })),
      );
    }
  };

  const onClickBackSpace = () => {
    cardInputDispatch({
      type: 'CHANGE_PASSWORD_INPUT',
      payload: { elementKey, value: elementState },
    });
  };

  const onClickCloseButton = () => {
    setIsShowVirtualKeyboard(prev => ({
      ...prev,
      isShow: false,
      elementKey: null,
      maxLength: null,
    }));
  };

  return (
    <div className="virtual-keyboard-wrapper">
      {shuffle(array).map(number => (
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
  inputElementsRef: PropTypes.object,
  setIsShowVirtualKeyboard: PropTypes.func,
  cardInputDispatch: PropTypes.func,
  elementKey: PropTypes.string,
};

export default VirtualKeyboard;
