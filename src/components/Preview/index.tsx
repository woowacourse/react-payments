import { useEffect, useState } from 'react';
import PreviewView from './PreviewView';

interface PreviewProps {
  cardNumbers: string[];
  period: string[];
  isPeriodSeparatorShowing: boolean;
}

const VISA_CARD_PREFIXES = '4';
const MASTERCARD_CARD_PREFIXES = {
  MIN: 51,
  MAX: 55,
} as const;

const Preview = ({
  cardNumbers,
  period,
  isPeriodSeparatorShowing,
}: PreviewProps) => {
  const [cardMethodSrc, setCardMethodSrc] = useState<string | null>(null);

  useEffect(() => {
    if (cardNumbers[0].startsWith(VISA_CARD_PREFIXES)) {
      setCardMethodSrc('./images/visa.svg');
    } else if (
      Number(cardNumbers[0].slice(0, 2)) >= MASTERCARD_CARD_PREFIXES.MIN &&
      Number(cardNumbers[0].slice(0, 2)) <= MASTERCARD_CARD_PREFIXES.MAX
    ) {
      setCardMethodSrc('./images/master.svg');
    } else {
      setCardMethodSrc('');
    }
  }, [cardNumbers]);

  return (
    <PreviewView
      cardNumbers={cardNumbers}
      period={period}
      isPeriodSeparatorShowing={isPeriodSeparatorShowing}
      cardMethodSrc={cardMethodSrc}
    />
  );
};

export default Preview;
