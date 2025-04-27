import { useRef } from "react";

const CARD_RULE = {
  MAX_LENGTH: 4,
} as const;

export default function useCardNumberInputHandler(
  cardNumbers: string[],
  handleChange: (value: string, index: number) => void,
  onComplete: () => void
) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleCardNumberChange = (value: string, index: number) => {
    handleChange(value, index);

    if (value.length === CARD_RULE.MAX_LENGTH && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    const updatedNumbers = [...cardNumbers];
    updatedNumbers[index] = value;
    const isComplete = updatedNumbers.every(
      (v) => v.length === CARD_RULE.MAX_LENGTH
    );

    if (isComplete) {
      onComplete();
    }
  };

  return {
    inputRefs,
    handleCardNumberChange,
  };
}
