import {
  useState,
  useRef,
  ChangeEvent,
  createRef,
  RefObject,
  useCallback,
} from 'react';
import {
  InputFieldState,
  UseInputFieldArrayParams,
  UseInputFieldArrayReturn,
} from '../types/models';

export function useInputFieldArray({
  initialValues,
  placeholders,
  maximumLength,
  validationFunction,
}: UseInputFieldArrayParams): UseInputFieldArrayReturn {
  const [values, setValues] = useState<string[]>(initialValues);
  const [errors, setErrors] = useState<
    { hasError: boolean; errorMessage: string }[]
  >(initialValues.map(() => ({ hasError: false, errorMessage: '' })));

  const inputRefs = useRef<RefObject<HTMLInputElement | null>[]>(
    initialValues.map(() => createRef<HTMLInputElement>())
  ).current;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, index: number) => {
      const next = event.target.value;
      const { isValid, errorMessage } = validationFunction(
        next,
        index,
        maximumLength
      );

      setValues((prev) =>
        prev.map((v, i) => (i === index && isValid ? next : v))
      );
      setErrors((prev) =>
        prev.map((e, i) =>
          i === index
            ? { hasError: !isValid, errorMessage: isValid ? '' : errorMessage }
            : e
        )
      );

      if (isValid && next.length === maximumLength) {
        const nextRef = inputRefs[index + 1];
        nextRef?.current?.focus();
      }
    },
    [validationFunction, maximumLength, inputRefs]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors(initialValues.map(() => ({ hasError: false, errorMessage: '' })));
    inputRefs.forEach((ref) => ref.current?.blur());
  }, [initialValues, inputRefs]);

  const fieldStates: InputFieldState[] = values.map((value, i) => ({
    value,
    hasError: errors[i].hasError,
    errorMessage: errors[i].errorMessage,
    placeholder: placeholders[i] ?? '',
    maximumLength,
  }));

  return [fieldStates, handleChange, inputRefs, reset];
}
