const CVC_RULE = {
  MAX_LENGTH: 3,
} as const;

export default function useCvcNumberInputHandler(
  cvcNumbers: string,
  cvcNumbersError: string,
  handleChange: (value: string) => void,
  onComplete: () => void
) {
  const handleCardCvcNumberChange = (value: string) => {
    handleChange(value);

    const isCompleteLength = value.length === CVC_RULE.MAX_LENGTH;
    const isNoError = cvcNumbersError === "";

    if (isCompleteLength && isNoError) {
      onComplete();
    }
  };

  return {
    handleCardCvcNumberChange,
  };
}
