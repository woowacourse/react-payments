import React, { useEffect, useState } from 'react';
import PreviewView from './PreviewView';

interface PreviewProps {
  cardNumbers: string[];
  period: string[];
  separatorRef?: React.RefObject<HTMLDivElement | null>;
}

const Preview: React.FC<PreviewProps> = ({
  cardNumbers,
  period,
  separatorRef,
}) => {
  const [cardMethodSrc, setCardMethodSrc] = useState<string>('');

  useEffect(() => {
    if (cardNumbers[0].startsWith('4')) {
      setCardMethodSrc('/images/visa.svg');
    } else if (
      Number(cardNumbers[0].slice(0, 2)) >= 51 &&
      Number(cardNumbers[0].slice(0, 2)) <= 55
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
