import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { findNotCompletedInput } from '../../utils/util/form';

function Input({
  value,
  maxLength,
  inputElementsRef,
  inputElementKey,
  required,
  type,
  setIsShowVirtualKeyboard,
  ...props
}) {
  useEffect(() => {
    if (value.length === maxLength) {
      const { current: inputElementsMap } = inputElementsRef;

      const {
        nextInput: { element },
      } = findNotCompletedInput(inputElementsMap, inputElementKey);

      inputElementsMap[inputElementKey].isComplete = true;

      element?.focus();
    }
  }, [value]);

  if (type === 'password') {
    const onFocusPassword = () => {
      setIsShowVirtualKeyboard(true);
    };
    const onBlur = () => {
      setIsShowVirtualKeyboard(false);
    };

    return (
      <input
        className="input-basic"
        type={type}
        value={value}
        maxLength={maxLength}
        required={required}
        onFocus={onFocusPassword}
        onBlur={onBlur}
        ref={element => {
          const { current } = inputElementsRef;

          current[inputElementKey] = {
            element,
            isComplete: required
              ? element?.value.length === element?.maxLength
              : element?.value.length !== 0,
          };
        }}
        {...props}
      />
    );
  }

  const onFocus = () => {
    setIsShowVirtualKeyboard(false);
  };

  return (
    <input
      className="input-basic"
      type={type}
      value={value}
      maxLength={maxLength}
      required={required}
      onFocus={onFocus}
      ref={element => {
        const { current } = inputElementsRef;

        current[inputElementKey] = {
          element,
          isComplete: required
            ? element?.value.length === element?.maxLength
            : element?.value.length !== 0,
        };
      }}
      {...props}
    />
  );
}
Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  inputElementsRef: PropTypes.object,
  inputElementKey: PropTypes.string,
  required: PropTypes.bool,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default Input;
