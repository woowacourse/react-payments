import React from 'react';
import PropTypes from 'prop-types';
import { useAutoFocus } from '../../../../hooks/useAutoFocus';
import { useCallback } from 'react';

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
  const nextInputFocus = useCallback((currentInput, nextInput) => {
    currentInput.isComplete = true;

    const { element: currentElement } = currentInput;
    const { element: nextElement } = nextInput;

    nextElement?.focus();
    currentElement?.blur();
  }, []);

  useAutoFocus({
    value,
    maxLength,
    inputElementsRef,
    inputElementKey,
    sideEffect: nextInputFocus,
  });

  const onFocus = () => {
    setIsShowVirtualKeyboard(prev => ({
      ...prev,
      isShow: false,
      elementKey: null,
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
