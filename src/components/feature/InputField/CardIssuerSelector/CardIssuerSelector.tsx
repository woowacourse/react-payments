import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import {
  CARD_ISSUER_TYPE,
  CardIssuerSelectorType,
} from '../../../../config/inputField';
import Selector from '../../../ui/Selector/Selector';

interface CardIssuerSelectorProps {
  isFocused: boolean;
  setCardIssuer: Dispatch<SetStateAction<CardIssuerSelectorType | null>>;
  onComplete: () => void;
}

function CardIssuerSelector({
  isFocused,
  setCardIssuer,
  onComplete,
}: CardIssuerSelectorProps) {
  const inputRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  });

  return (
    <Selector
      ref={inputRef}
      dropDownOptions={[...CARD_ISSUER_TYPE]}
      placeholder="카드사를 선택해주세요"
      onSelectChange={(value: CardIssuerSelectorType) => {
        setCardIssuer(value);
        onComplete?.();
      }}
    />
  );
}

export default CardIssuerSelector;
