import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { findNotCompletedInput } from '../../../utils/util/form';
import { useAutoFocus } from '../../../hooks/useAutoFocus';
import { useCallback } from 'react';
function PasswordInput({
  id,
  value,
  maxLength,
  required,
  inputElementsRef,
  inputElementKey,
  setIsShowVirtualKeyboard,
}) {
  const nextInputFocus = useCallback(
    (currentInput, nextInput) => {
      currentInput.isComplete = true;

      const { element: currentElement } = currentInput;
      const { element: nextElement } = nextInput;

      nextElement?.focus();

      if (!nextElement) {
        setIsShowVirtualKeyboard(prev => ({
          ...prev,
          isShow: false,
          elementKey: null,
        }));
        currentElement?.blur();
      }
    },
    [setIsShowVirtualKeyboard],
  );

  useAutoFocus({
    value,
    maxLength,
    inputElementKey,
    inputElementsRef,
    sideEffect: nextInputFocus,
  });
  // useEffect(() => {
  //   if (value.length === maxLength) {
  //     const { current: inputElementsMap } = inputElementsRef;
  //     const { element: currentElement } = inputElementsMap[inputElementKey];

  //     const {
  //       nextInput: { element: nextElement },
  //     } = findNotCompletedInput(inputElementsMap, inputElementKey);

  //     inputElementsMap[inputElementKey].isComplete = true;

  //     nextElement?.focus();

  //     if (!nextElement) {
  //       setIsShowVirtualKeyboard(prev => ({
  //         ...prev,
  //         isShow: false,
  //         elementKey: null,
  //       }));
  //       currentElement?.blur();
  //     }
  //   }
  // }, [value, inputElementsRef, inputElementKey, maxLength, setIsShowVirtualKeyboard]);

  const onFocus = () => {
    setIsShowVirtualKeyboard(prev => ({
      ...prev,
      isShow: true,
      elementKey: inputElementKey,
    }));
  };

  const onKeyDown = e => {
    if (e.key === 'Tab') {
      return;
    }

    e.preventDefault();
    return false;
  };

  return (
    <input
      className="input-basic"
      type="password"
      id={id}
      value={value}
      maxLength={maxLength}
      required={required}
      ref={element => {
        const { current } = inputElementsRef;

        current[inputElementKey] = {
          element,
          isComplete: required
            ? element?.value.length === element?.maxLength
            : element?.value.length !== 0,
        };
      }}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onChange={() => console.log('hi')}
    />
  );
}

PasswordInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  inputElementsRef: PropTypes.object,
  inputElementKey: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
  onChange: PropTypes.func,
};

export default PasswordInput;
