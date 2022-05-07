import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
function PasswordInput({
  id,
  value,
  maxLength,
  required,
  inputElementKey,
  isShowVirtualKeyboard,
  openVirtualKeyboard,
  closeVirtualKeyboard,
  setInputElement,
  nextInputFocus,
}) {
  const inputRef = useRef();

  useEffect(() => {
    if (isShowVirtualKeyboard) {
      inputRef.current?.focus();
    }
  }, [value, isShowVirtualKeyboard]);

  useEffect(() => {
    if (value.length === maxLength && setInputElement && nextInputFocus) {
      nextInputFocus({
        inputElementKey,
        notExistNextElementAction: closeVirtualKeyboard,
      });
    }
  }, [value, setInputElement, nextInputFocus, maxLength, inputElementKey, closeVirtualKeyboard]);

  const onFocus = () => {
    openVirtualKeyboard(inputElementKey, maxLength);
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
        if (setInputElement) {
          setInputElement(inputElementKey, element);
        }

        inputRef.current = element;
      }}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onChange={() => false}
    />
  );
}

PasswordInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  inputElementKey: PropTypes.string,
  isShowVirtualKeyboard: PropTypes.bool,
  openVirtualKeyboard: PropTypes.func,
  closeVirtualKeyboard: PropTypes.func,
  setInputElement: PropTypes.func,
  nextInputFocus: PropTypes.func,
};

export default PasswordInput;
