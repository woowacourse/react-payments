interface UseNumberInputCheckProps<T> {
  value: T;
  setValue: (value: T) => void;
  maxLengthList: number[];
  valueUpdater: (currentValue: T, newValue: string, index: number) => T;
  onComplete?: (index: number) => void;
}

export const useNumberInputCheck = <T>({
  value,
  setValue,
  maxLengthList,
  valueUpdater,
  onComplete,
}: UseNumberInputCheckProps<T>) => {
  const handleOnChange = (inputValue: string, index: number) => {
    if (!/^[0-9]*$/.test(inputValue)) return;

    const maxLength = maxLengthList[index];
    const slicedValue = inputValue.slice(0, maxLength);

    setValue(valueUpdater(value, slicedValue, index));

    if (slicedValue.length === maxLength) {
      onComplete?.(index);
    }
  };

  return { handleOnChange };
};
