export const handleAutoFocus = (
  e: React.ChangeEvent<HTMLInputElement>,
  maxLength: number,
  fieldMappings: Record<string, string>
): void => {
  const { name, value } = e.target;

  if (value.length === maxLength && fieldMappings[name]) {
    const nextInput = document.querySelector(
      `input[name="${fieldMappings[name]}"]`
    );

    if (nextInput instanceof HTMLInputElement) {
      nextInput.focus();
    }
  }
};

export const maskCardValue = (
  value: string | undefined,
  mask: boolean
): string => {
  if (!value) return '';

  return mask ? '*'.repeat(value.length) : value;
};
