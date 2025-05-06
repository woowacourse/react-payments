import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import {
  CARD_ISSUER_TYPE,
  CardIssuerSelectorType,
} from '../../../../config/inputField';
import Selector from '../../../ui/Selector/Selector';
import InputSection from '../../../ui/InputSection/InputSection';

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
    <InputSection
      title="카드사를 선택해 주세요"
      caption="현재 국내 카드사만 가능합니다."
    >
      <Selector
        ref={inputRef}
        dropDownOptions={[...CARD_ISSUER_TYPE]}
        placeholder="카드사를 선택해주세요"
        onSelectChange={(value: CardIssuerSelectorType) => {
          setCardIssuer(value);
          onComplete?.();
        }}
      />
    </InputSection>
  );
}

export default CardIssuerSelector;
