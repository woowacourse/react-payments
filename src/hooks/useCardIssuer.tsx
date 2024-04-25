import { CardIssuer } from '../type';
import useIsFocus from './useIsFocus';
import useRadio from './useRadio';

export interface UseCardIssuer {
  issuer: '' | CardIssuer;
  isValid: boolean;
  onClicks: (() => void)[];
  isFocus: boolean;
  onFocus: () => void;
  onBlur: () => void;
}
export default function useCardIssuer() {
  const options: CardIssuer[] = [
    'BcCard',
    'HanaCard',
    'HyndaiCard',
    'KBCard',
    'KakaoBank',
    'LotteCard',
    'ShinhanCard',
    'WooriCard',
  ];

  const { value, onClicks } = useRadio(options);
  const { isFocus, onFocus, onBlur } = useIsFocus();

  return {
    issuer: value,
    isValid: value !== '',
    onClicks,
    isFocus,
    onFocus,
    onBlur,
  };
}
