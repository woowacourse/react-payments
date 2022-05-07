import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
function PasswordInput({
  id,
  value,
  maxLength,
  required,
  inputElementKey,
  setIsShowVirtualKeyboard,
  setInputElement,
  nextInputFocus,
}) {
  useEffect(() => {
    if (value.length === maxLength && setInputElement && nextInputFocus) {
      nextInputFocus(inputElementKey, () =>
        setIsShowVirtualKeyboard(prev => ({
          ...prev,
          isShow: false,
          elementKey: null,
          maxLength: null,
        })),
      );
    }
  }, [
    value,
    setInputElement,
    nextInputFocus,
    maxLength,
    inputElementKey,
    setIsShowVirtualKeyboard,
  ]);

  const onFocus = () => {
    setIsShowVirtualKeyboard(prev => ({
      ...prev,
      isShow: true,
      elementKey: inputElementKey,
      maxLength,
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
      ref={element => setInputElement && setInputElement(inputElementKey, element)}
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
  inputElementsRef: PropTypes.object,
  inputElementKey: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
  onChange: PropTypes.func,
};

export default PasswordInput;
