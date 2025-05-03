import { useRef } from "react";

export const CARD_NUMBER_KEYS = ["first", "second", "third", "fourth"] as const;
export type CardNumberKey = (typeof CARD_NUMBER_KEYS)[number];

const CARD_RULE = {
  MAX_LENGTH: 4,
} as const;

export default function useCardNumberInputHandler(
  cardNumbers: Record<CardNumberKey, string>,
  handleChange: (value: string, key: CardNumberKey) => void,
  onComplete: () => void
) {
  const initialRefs = {} as Record<CardNumberKey, HTMLInputElement | null>;
  CARD_NUMBER_KEYS.forEach((key) => {
    initialRefs[key] = null;
  });

  const inputRefs = useRef(initialRefs);

  const handleCardNumberChange = (value: string, key: CardNumberKey) => {
    handleChange(value, key);

    if (value.length === CARD_RULE.MAX_LENGTH) {
      const idx = CARD_NUMBER_KEYS.indexOf(key);
      const nextKey = CARD_NUMBER_KEYS[idx + 1];
      if (nextKey) {
        inputRefs.current[nextKey]?.focus();
      }
    }

    const isComplete = CARD_NUMBER_KEYS.every(
      (k) => cardNumbers[k].length === CARD_RULE.MAX_LENGTH
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
