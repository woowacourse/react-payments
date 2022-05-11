import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function TextInput({
  id,
  placeholder,
  value,
  maxLength,
  required,
  onChange,
  inputElementKey,
  closeVirtualKeyboard,
  setInputElement,
  nextInputFocus,
}) {
  useEffect(() => {
    if (value.length === maxLength && setInputElement && nextInputFocus) {
      nextInputFocus({ inputElementKey });
    }
  }, [value, nextInputFocus, maxLength, inputElementKey, setInputElement]);

  const onFocus = () => {
    closeVirtualKeyboard();
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
      ref={element => {
        if (setInputElement) {
          setInputElement(inputElementKey, element);
        }
      }}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
}

TextInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  inputElementKey: PropTypes.string,
  onChange: PropTypes.func,
  closeVirtualKeyboard: PropTypes.func,
  setInputElement: PropTypes.func,
  nextInputFocus: PropTypes.func,
};

export default TextInput;
