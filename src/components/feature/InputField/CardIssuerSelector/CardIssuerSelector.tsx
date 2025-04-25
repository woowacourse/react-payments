import { Dispatch, SetStateAction } from 'react';
import {
  CARD_ISSUER_TYPE,
  CardIssuerSelectorType,
} from '../../../../config/inputField';
import Selector from '../../../ui/Selector/Selector';

interface CardIssuerSelectorProps {
  setCardIssuer: Dispatch<SetStateAction<CardIssuerSelectorType | null>>;
  onComplete: () => void;
}

function CardIssuerSelector({
  setCardIssuer,
  onComplete,
}: CardIssuerSelectorProps) {
  return (
    <Selector
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
