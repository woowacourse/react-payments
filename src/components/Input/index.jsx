import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { findNotCompletedInput } from '../../utils/util';

function Input({ value, maxLength, inputElementsRef, inputElementKey, required, ...props }) {
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

  return (
    <input
      className="input-basic"
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
      {...props}
    />
  );
}
Input.propTypes = {
  value: PropTypes.string,
  maxLength: PropTypes.number,
  inputElementsRef: PropTypes.object,
  inputElementKey: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
