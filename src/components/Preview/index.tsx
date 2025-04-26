import { useCardForm } from '../../contexts/CardFormContext';
import { theme } from '../../styles/theme';
import PreviewView from './PreviewView';

const VISA_CARD_PREFIX = '4';
const MASTERCARD_PREFIX_RANGE = { MIN: 51, MAX: 55 } as const;

type ColorKey = keyof typeof theme.colors.cardBrandColors;

const Preview = () => {
  const { numberFields, expiryFields, brand, isPeriodSeparatorShowing } =
    useCardForm();

  const numbers = numberFields.map((field) => field.value);
  const period = expiryFields.map((field) => field.value);

  const getCardBrandColor = (): string => {
    const key = brand as ColorKey;
    return (
      theme.colors.cardBrandColors[key] || theme.colors.cardBrandColors.default
    );
  };

  const getCardMethodSrc = (): string | null => {
    const firstSegment = numbers[0] || '';

    if (firstSegment.startsWith(VISA_CARD_PREFIX)) {
      return './images/visa.svg';
    }

    const prefixNumber = Number(firstSegment.slice(0, 2));
    if (
      prefixNumber >= MASTERCARD_PREFIX_RANGE.MIN &&
      prefixNumber <= MASTERCARD_PREFIX_RANGE.MAX
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
