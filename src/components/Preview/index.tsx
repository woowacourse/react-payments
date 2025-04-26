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
  const getcardBrandSrc = () => {
    if (cardNumbers[0].startsWith(VISA_CARD_PREFIXES)) {
      return './images/visa.svg';
    }

    if (
      Number(cardNumbers[0].slice(0, 2)) >= MASTERCARD_CARD_PREFIXES.MIN &&
      Number(cardNumbers[0].slice(0, 2)) <= MASTERCARD_CARD_PREFIXES.MAX
    ) {
      return './images/master.svg';
    }

    return null;
  };

  return (
    <PreviewView
      cardNumbers={cardNumbers}
      period={period}
      isPeriodSeparatorShowing={isPeriodSeparatorShowing}
      cardBrandSrc={getcardBrandSrc()}
    />
  );
};

export default Preview;
