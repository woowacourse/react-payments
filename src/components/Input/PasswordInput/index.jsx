import React from 'react';
import PropTypes from 'prop-types';
import { isNumberInRange } from '../../../utils/validation/form';
import { findNotCompletedInput } from '../../../utils/util/form';
function PasswordInput({
  id,
  maxLength,
  required,
  inputElementsRef,
  inputElementKey,
  setIsShowVirtualKeyboard,
  setPasswordInputValue,
}) {
  const onChange = e => {
    const {
      target: { value, maxLength },
    } = e;

    if (!isNumberInRange(value, maxLength)) {
      e.target.value = value.slice(0, -1);
      return;
    }

    if (value.length === maxLength) {
      const { current: inputElementsMap } = inputElementsRef;

      const {
        nextInput: { element },
      } = findNotCompletedInput(inputElementsMap, inputElementKey);

      inputElementsMap[inputElementKey].isComplete = true;

      element?.focus();
    }

    if (value.length === maxLength) {
      setPasswordInputValue(value);
    }
  };

  const onFocus = () => {
    setIsShowVirtualKeyboard(true);
  };

  const onBlur = () => {
    setIsShowVirtualKeyboard(false);
  };

  return (
    <input
      className="input-basic"
      type="password"
      id={id}
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
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

PasswordInput.propTypes = {
  id: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  inputElementsRef: PropTypes.object,
  inputElementKey: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
  setPasswordInputValue: PropTypes.func,
};

export default PasswordInput;
