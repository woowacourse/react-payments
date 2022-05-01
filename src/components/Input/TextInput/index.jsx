import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { findNotCompletedInput } from '../../../utils/util/form';

function TextInput({
  id,
  placeholder,
  value,
  maxLength,
  required,
  onChange,
  inputElementsRef,
  inputElementKey,
  setIsShowVirtualKeyboard,
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
  }, [value, inputElementsRef, inputElementKey, maxLength]);

  const onFocus = () => {
    setIsShowVirtualKeyboard(false);
  };

  return (
    <input
      type="text"
      className="input-basic"
      id={id}
      value={value}
      maxLength={maxLength}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
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
    />
  );
}

TextInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  inputElementsRef: PropTypes.object,
  inputElementKey: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default TextInput;
