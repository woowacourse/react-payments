import React from 'react';
import PropTypes from 'prop-types';
import { useAutoFocus } from '../../../../hooks/useAutoFocus';
import { useCallback } from 'react';
function PasswordInput({
  id,
  value,
  maxLength,
  required,
  inputElementsRef,
  inputElementKey,
  setIsShowVirtualKeyboard,
}) {
  // 렌더링 마다 생성됨,. 너무 자주 생성됨.. -> useEffect의 deps에 들어가면 렌더링 마다 콜백을 수행한다.
  const nextInputFocus = useCallback(
    (currentInput, nextInput) => {
      currentInput.isComplete = true;

      const { element: currentElement } = currentInput;
      const { element: nextElement } = nextInput;

      nextElement?.focus();

      if (!nextElement) {
        setIsShowVirtualKeyboard(prev => ({
          ...prev,
          isShow: false,
          elementKey: null,
        }));
        currentElement?.blur();
      }
    },
    [setIsShowVirtualKeyboard],
  );

  // sideEffect -> 결정권을 사용처에서.. 주입할 수 있도록
  useAutoFocus({
    value,
    maxLength,
    inputElementKey,
    inputElementsRef,
    sideEffect: nextInputFocus,
  });

  const onFocus = () => {
    setIsShowVirtualKeyboard(prev => ({
      ...prev,
      isShow: true,
      elementKey: inputElementKey,
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
