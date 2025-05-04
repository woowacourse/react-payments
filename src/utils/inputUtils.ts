export const handleAutoFocus = (
  e: React.ChangeEvent<HTMLInputElement>,
  maxLength: number,
  fieldMappings: Record<string, string>,
  prevFieldMappings?: Record<string, string>
): void => {
  const { name, value } = e.target;
  const prevValue = e.target.dataset.prevValue;

  if (value.length === maxLength && fieldMappings[name]) {
    const nextInput = document.querySelector(
      `input[name="${fieldMappings[name]}"]`
    );

    if (nextInput instanceof HTMLInputElement) {
      nextInput.focus();
    }
  }

  if (
    prevValue?.length === 1 &&
    value.length === 0 &&
    prevFieldMappings &&
    prevFieldMappings[name]
  ) {
    const prevInput = document.querySelector(
      `input[name="${prevFieldMappings[name]}"]`
    );

    if (prevInput instanceof HTMLInputElement) {
      prevInput.focus();
    }
  }

  e.target.dataset.prevValue = value;
};

export const maskCardValue = (
  value: string | undefined,
  mask: boolean
): string => {
  if (!value) return '';

  return mask ? '*'.repeat(value.length) : value;
};
