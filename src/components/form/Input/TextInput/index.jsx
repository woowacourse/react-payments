import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

function TextInput({
  id,
  placeholder,
  value,
  maxLength,
  required,
  onChange,
  inputElementKey,
  setIsShowVirtualKeyboard,
  setInputElement,
  nextInputFocus,
}) {
  useEffect(() => {
    if (value.length === maxLength && setInputElement && nextInputFocus) {
      nextInputFocus(inputElementKey);
    }
  }, [value, nextInputFocus, maxLength, inputElementKey, setInputElement]);

  const onFocus = () => {
    setIsShowVirtualKeyboard(prev => ({
      ...prev,
      isShow: false,
      elementKey: null,
      maxLength: null,
    }));
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
      ref={element => setInputElement && setInputElement(inputElementKey, element)}
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
  onChange: PropTypes.func,
  inputElementsRef: PropTypes.object,
  inputElementKey: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default TextInput;
