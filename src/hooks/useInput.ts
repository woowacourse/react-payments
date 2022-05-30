import { useEffect, useState, useCallback, useRef } from 'react';

interface Options {
  initialValue: string;
  maxLength: number;
  type: string;
  tryFocus: boolean;
  inputs: [];
}

interface HandleFocusProps {
  target: any;
  max: number;
  min: number;
  cokeList: [] | any;
}

const convertToUpperCase = (word: string) => word.toUpperCase();
const notAlphabet = (word: string) => /[^a-zA-Z\s]/.test(word);

const numberValidator = (value: string, maxLength: number) => {
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

const stringValidator = (value: string, maxLength: number) => {
  if (notAlphabet(value)) {
    throw new Error('영어만 입력해 주세요.');
  }

  if (value.length > maxLength) {
    throw new Error(`최대 ${maxLength}글자까지 입력할 수 있습니다.`);
  }
};

function useInput(options: Options) {
  const { initialValue, maxLength, type = 'string', tryFocus = false, inputs = [] } = options || {};
  const [value, setValue] = useState<string>(initialValue || '');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const currentTarget: any = useRef(null);
  const isValid = useRef(false);

  const handleNumber = useCallback(
    (receivedValue: string, targetName = '') => {
      const result = receivedValue;

      try {
        numberValidator(result, maxLength);

        isValid.current = true;
        setErrorMessage('');

        if (targetName === '') {
          setValue(result);
        } else {
          setValue((prev: string) => ({
            ...(prev as any),
            [targetName]: result,
          }));
        }
      } catch (err) {
        isValid.current = false;
        setErrorMessage((err as Error).message);
      }
    },
    [maxLength],
  );

  const handleString = useCallback(
    (receivedValue: string) => {
      const result = convertToUpperCase(receivedValue);

      try {
        stringValidator(result, maxLength);

        isValid.current = true;
        setErrorMessage('');
        setValue(result);
      } catch (err) {
        isValid.current = false;
        setErrorMessage((err as Error).message);
      }
    },
    [maxLength],
  );

  const onChangeInput = useCallback(
    (e: any) => {
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

  const handleFocus = useCallback(({ target, max, min = 0, cokeList = [] }: HandleFocusProps) => {
    const go = (index: number) => {
      if (index !== cokeList.length - 1) cokeList[index + 1].current.focus();
      return false;
    };
    const back = (index: number) => {
      if (index !== min) cokeList[index - 1].current.focus();
      return false;
    };

    cokeList.every((cardNoRef: any, index: number) => {
      if (target !== cardNoRef.current) return true;

      if (target.value.length === max) go(index);
      if (target.value.length === min) back(index);

      return true;
    });
  }, []);

  useEffect(() => {
    if (!tryFocus || !currentTarget.current) return;

    handleFocus({ target: currentTarget.current.target, max: maxLength, cokeList: inputs } as HandleFocusProps);
  }, [value, tryFocus, inputs, handleFocus, maxLength]);

  return [value, onChangeInput, isValid.current, errorMessage];
}

export default useInput;
