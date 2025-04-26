import { theme } from '../../styles/theme';
import PreviewView from './PreviewView';

interface PreviewProps {
  numbers: string[];
  period: string[];
  brand: string;
  isPeriodSeparatorShowing: boolean;
}

const VISA_CARD_PREFIXES = '4';
const MASTERCARD_CARD_PREFIXES = {
  MIN: 51,
  MAX: 55,
} as const;

const Preview = ({
  numbers,
  period,
  brand,
  isPeriodSeparatorShowing,
}: PreviewProps) => {
  const getCardBrandColor = () => {
    type ColorKey = keyof typeof theme.colors.cardBrandColors;
    const key = brand as ColorKey;
    return (
      theme.colors.cardBrandColors[key] || theme.colors.cardBrandColors.default
    );
  };

  const getCardMethodSrc = () => {
    if (numbers[0].startsWith(VISA_CARD_PREFIXES)) {
      return './images/visa.svg';
    }

    if (
      Number(numbers[0].slice(0, 2)) >= MASTERCARD_CARD_PREFIXES.MIN &&
      Number(numbers[0].slice(0, 2)) <= MASTERCARD_CARD_PREFIXES.MAX
    ) {
      return './images/master.svg';
    }

    return null;
  };

  return (
    <PreviewView
      numbers={numbers}
      period={period}
      cardBrandColor={getCardBrandColor()}
      isPeriodSeparatorShowing={isPeriodSeparatorShowing}
      cardMethodSrc={getCardMethodSrc()}
    />
  );
};

export default Preview;
