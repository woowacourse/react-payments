import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { findNotCompletedInput } from '../../utils/util/form';
const shuffle = array => {
  const target = [...array];
  return target.sort(() => Math.random() - 0.5);
};

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function VirtualKeyboard({
  inputElementsRef,
  elementKey,
  cardInputDispatch,
  setIsShowVirtualKeyboard,
}) {
  const onClickNumber = e => {
    const {
      target: { textContent },
    } = e;

    const { current: inputElementsMap } = inputElementsRef;
    const { element: inputElement } = inputElementsMap[elementKey];
    const { maxLength } = inputElement;

    inputElement.focus();

    if (inputElement.value.length < maxLength && typeof Number(textContent) === 'number') {
      inputElement.value = `${inputElement.value}${textContent}`;

      if (inputElement.value.length === maxLength) {
        cardInputDispatch({
          type: 'CHANGE_PASSWORD_INPUT',
          payload: { elementKey, value: inputElement.value },
        });
      }
    }

    if (inputElement.value.length === maxLength) {
      const {
        nextInput: { element: nextElement },
      } = findNotCompletedInput(inputElementsMap, elementKey);

      inputElementsMap[elementKey].isComplete = true;
      nextElement?.focus();

      if (!nextElement) {
        inputElement.blur();
        setIsShowVirtualKeyboard(prev => ({
          ...prev,
          isShow: false,
          elementKey: null,
        }));
      }
    }
  };

  const onClickBackSpace = () => {
    const { current: inputElementsMap } = inputElementsRef;
    const { element: inputElement } = inputElementsMap[elementKey];

    inputElement.value = inputElement.value.slice(0, -1);
  };

  const onClickCloseButton = () => {
    setIsShowVirtualKeyboard(prev => ({
      ...prev,
      isShow: false,
      elementKey: null,
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
