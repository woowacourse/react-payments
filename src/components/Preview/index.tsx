import React, { useEffect, useState } from 'react';
import PreviewView from './PreviewView';

interface PreviewProps {
  cardNumbers: string[];
  period: string[];
  separatorRef?: React.RefObject<HTMLDivElement | null>;
}

const VISA_CARD_PREFIXES = '4';
const MASTERCARD_CARD_PREFIXES = {
  MIN: 51,
  MAX: 55,
} as const;

const Preview: React.FC<PreviewProps> = ({
  cardNumbers,
  period,
  separatorRef,
}) => {
  const [cardMethodSrc, setCardMethodSrc] = useState<string>('');

  useEffect(() => {
    if (cardNumbers[0].startsWith(VISA_CARD_PREFIXES)) {
      setCardMethodSrc('/images/visa.svg');
    } else if (
      Number(cardNumbers[0].slice(0, 2)) >= MASTERCARD_CARD_PREFIXES.MIN &&
      Number(cardNumbers[0].slice(0, 2)) <= MASTERCARD_CARD_PREFIXES.MAX
    ) {
      setCardMethodSrc('/images/Mastercard.svg');
    } else {
      setCardMethodSrc('');
    }
  }, [cardNumbers]);

  return (
    <PreviewView
      cardNumbers={cardNumbers}
      period={period}
      separatorRef={separatorRef}
      cardMethodSrc={cardMethodSrc}
    />
  );
};

export default Preview;
