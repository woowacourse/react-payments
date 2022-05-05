import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import { isNumberInRange } from '../../../utils/validation/form';
import { findNotCompletedInput } from '../../../utils/util/form';
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
    const { element: currentElement } = inputElementsMap[elementKey];
    const { value, maxLength } = currentElement;

    currentElement.focus();

    if (isNumberInRange(`${value}${textContent}`, maxLength)) {
      cardInputDispatch({
        type: 'CHANGE_PASSWORD_INPUT',
        payload: { elementKey, value: `${value}${textContent}` },
      });
    }

    // 숫자를 눌렀을 때 이미 완성되어 있다면 다음 엘리먼트가 포커싱
    if (value.length === maxLength) {
      const {
        nextInput: { element: nextElement },
      } = findNotCompletedInput(inputElementsMap, elementKey);

      inputElementsMap[elementKey].isComplete = true;

      nextElement?.focus();

      if (!nextElement) {
        setIsShowVirtualKeyboard(prev => ({
          ...prev,
          isShow: false,
          elementKey: null,
        }));
        currentElement?.blur();
      }
    }
  };

  const onClickBackSpace = () => {
    const { current: inputElementsMap } = inputElementsRef;
    const { element: inputElement } = inputElementsMap[elementKey];
    const { value } = inputElement;

    cardInputDispatch({
      type: 'CHANGE_PASSWORD_INPUT',
      payload: { elementKey, value: value.slice(0, -1) },
    });
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
