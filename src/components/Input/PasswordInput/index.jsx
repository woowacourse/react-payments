import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { findNotCompletedInput } from '../../../utils/util/form';
import { useNextInputFocus } from '../../../hooks/useNextInputFocus';
function PasswordInput({
  value,
  maxLength,
  required,
  inputElementsRef,
  inputElementKey,
  setIsShowVirtualKeyboard,
  ...props
}) {
  useNextInputFocus(value, maxLength, inputElementsRef, inputElementKey);

  const onFocus = () => {
    setIsShowVirtualKeyboard(true);
  };

  const onBlur = () => {
    setIsShowVirtualKeyboard(false);
  };

  return (
    <input
      className="input-basic"
      type={'password'}
      value={value}
      maxLength={maxLength}
      required={required}
      onFocus={onFocus}
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

PasswordInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  inputElementsRef: PropTypes.object,
  inputElementKey: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default PasswordInput;
