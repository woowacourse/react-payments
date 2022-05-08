import { useEffect, useState, useCallback, useRef } from 'react';

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
  const { initialValue, maxLength, type = 'string', tryFocus = false, inputs = [] } = options || {};
  const [value, setValue] = useState(initialValue || '');
  const [errorMessage, setErrorMessage] = useState('');
  const currentTarget = useRef(null);
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
      currentTarget.current = e;

      if (type === 'number') {
        handleNumber(targetValue, targetName);
      }
      if (type === 'string') {
        handleString(targetValue);
      }
    },
    [type, handleNumber, handleString],
  );

  const handleFocus = useCallback(({ target, max, min = 0, cokeList = [] }) => {
    const go = index => {
      if (index !== cokeList.length - 1) cokeList[index + 1].current.focus();
      return false;
    };
    const back = index => {
      if (index !== min) cokeList[index - 1].current.focus();
      return false;
    };

    cokeList.every((cardNoRef, index) => {
      if (target !== cardNoRef.current) return true;

      if (target.value.length === max) go(index);
      if (target.value.length === min) back(index);

      return true;
    });
  }, []);

  useEffect(() => {
    if (!tryFocus || !currentTarget.current) return;

    handleFocus({ target: currentTarget.current.target, max: maxLength, cokeList: inputs });
  }, [value, tryFocus, inputs, handleFocus, maxLength]);

  return [value, onChangeInput, isValid.current, errorMessage];
}

export default useInput;
