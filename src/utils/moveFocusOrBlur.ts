const moveFocusOrBlur = ({
  index,
  value,
  maxLength,
  inputRefs,
}: {
  index: number;
  value: string;
  maxLength: number;
  inputRefs: (HTMLInputElement | null)[];
}) => {
  const isLastInput = index === inputRefs.length - 1;

  if (value.length !== maxLength) return;

  if (isLastInput) {
    inputRefs[index]?.blur();
  } else {
    inputRefs[index + 1]?.focus();
  }
};

export default moveFocusOrBlur;
