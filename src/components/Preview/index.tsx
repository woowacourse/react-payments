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
  cardFrameColor: string;
}

const VISA_CARD_PREFIXES = '4';
const MASTERCARD_CARD_PREFIXES = {
  MIN: 51,
  MAX: 55,
} as const;

const Preview = ({
  cardNumbers,
  period,
  separatorRef,
  cardFrameColor,
}: PreviewProps) => {
  const [cardMethodSrc, setCardMethodSrc] = useState<string>('');

  const isVisa = (firstInput: string) => {
    return firstInput.startsWith(VISA_CARD_PREFIXES);
  };

  const isMastercard = (firstInput: string) => {
    const prefix = Number(firstInput.slice(0, 2));
    return (
      prefix >= MASTERCARD_CARD_PREFIXES.MIN &&
      prefix <= MASTERCARD_CARD_PREFIXES.MAX
    );
  };

  useEffect(() => {
    const firstInputValue = cardNumbers.first;
    if (isVisa(firstInputValue)) {
      setCardMethodSrc(`/images/visa.svg`);
    } else if (isMastercard(firstInputValue)) {
      setCardMethodSrc(`/images/Mastercard.svg`);
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
      cardFrameColor={cardFrameColor}
    />
  );
};

export default Preview;
