import React, { useEffect, useState } from 'react';
import PreviewView from './PreviewView';

type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

interface PreviewProps {
  cardNumbers: CardNumber;
  period: { month: string; year: string };
  separatorRef?: React.RefObject<HTMLDivElement | null>;
}

const VISA_CARD_PREFIXES = '4';
const MASTERCARD_CARD_PREFIXES = {
  MIN: 51,
  MAX: 55,
} as const;

const Preview = ({ cardNumbers, period, separatorRef }: PreviewProps) => {
  const [cardMethodSrc, setCardMethodSrc] = useState<string>('');

  useEffect(() => {
    if (cardNumbers.first.startsWith(VISA_CARD_PREFIXES)) {
      setCardMethodSrc(`${import.meta.env.BASE_URL}/images/visa.svg`);
    } else if (
      Number(cardNumbers.first.slice(0, 2)) >= MASTERCARD_CARD_PREFIXES.MIN &&
      Number(cardNumbers.first.slice(0, 2)) <= MASTERCARD_CARD_PREFIXES.MAX
    ) {
      setCardMethodSrc(`${import.meta.env.BASE_URL}/images/Mastercard.svg`);
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
