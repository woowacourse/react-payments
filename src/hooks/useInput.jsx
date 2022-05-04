import { useState, useCallback, useRef } from 'react';

const convertToUpperCase = word => word.toUpperCase();
const notAlphabet = word => /[^a-zA-Z\s]/.test(word);

const numberValidator = (value, maxLength) => {
  if (value.includes(' ') || Number.isNaN(Number(value))) {
    throw new Error('숫자만 입력해주세요.');
  }

  if (value.includes('.')) {
    throw new Error('소수점은 입력하실 수 없습니다.');
  }

  if (maxLength && value.length > maxLength) {
    throw new Error(`한 칸당 최대 ${maxLength}개의 숫자를 입력해야 합니다.`);
  }
};

const stringValidator = (value, maxLength) => {
  if (notAlphabet(value)) {
    throw new Error('영어만 입력해 주세요.');
  }

  if (value.length > maxLength) {
    throw new Error(`최대 ${maxLength}글자까지 입력할 수 있습니다.`);
  }
};

function useInput(options) {
  const {
    maxValue,
    minValue,
    initialValue,
    maxLength,
    minLength = 0,
    autoFix = true,
    type = 'string',
    focusCallback,
  } = options || {};
  const [value, setValue] = useState(initialValue || '');
  const [errorMessage, setErrorMessage] = useState('');
  const isValid = useRef(false);

  const handleNumber = useCallback(
    (receivedValue, targetName = '') => {
      const result = receivedValue;

      try {
        numberValidator(result, maxLength);

        isValid.current = true;
        setErrorMessage('');

        if (targetName === '') {
          setValue(result);
        } else {
          setValue(prev => ({
            ...prev,
            [targetName]: result,
          }));
        }
      } catch (err) {
        isValid.current = false;
        setErrorMessage(err.message);
      }
    },
    [maxLength],
  );

  const handleString = useCallback(
    receivedValue => {
      const result = convertToUpperCase(receivedValue);

      try {
        stringValidator(result, maxLength);

        isValid.current = true;
        setErrorMessage('');
        setValue(result);
      } catch (err) {
        isValid.current = false;
        setErrorMessage(err.message);
      }
    },
    [maxLength],
  );

  const onChangeInput = useCallback(
    e => {
      const targetValue = e.target.value || '';
      const targetName = e.target.name || '';

      if (type === 'number') {
        handleNumber(targetValue, targetName);
      }
      if (type === 'string') {
        handleString(targetValue);
      }

      if (typeof focusCallback === 'function') {
        focusCallback({ e, max: maxLength });
      }
    },
    [type, handleNumber, handleString, focusCallback, maxLength],
  );

  return [value, onChangeInput, isValid.current, errorMessage];
}

export default useInput;
