import React from 'react';
import PropTypes from 'prop-types';
function PasswordInput({
  id,
  maxLength,
  required,
  inputElementsRef,
  inputElementKey,
  setIsShowVirtualKeyboard,
}) {
  const onFocus = () => {
    setIsShowVirtualKeyboard(prev => ({
      ...prev,
      isShow: true,
      elementKey: inputElementKey,
    }));
  };

  const onKeyDown = e => {
    e.preventDefault();
    return false;
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
      onFocus={onFocus}
      onKeyDown={onKeyDown}
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
