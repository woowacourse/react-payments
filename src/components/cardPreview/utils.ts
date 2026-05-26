import visaSrc from '../../assets/Visa.svg';
import mastercardSrc from '../../assets/Mastercard.svg';
import amexSrc from '../../assets/American_Express.svg';
import dinersSrc from '../../assets/Diners_Club.svg';
import unionpaySrc from '../../assets/China_UnionPay.svg';
import { detectCardNetwork } from '../../utils/cardNetwork';

const NETWORK_LOGO_SRC: Record<string, string> = {
  VISA: visaSrc,
  MASTER: mastercardSrc,
  AMEX: amexSrc,
  DINERS: dinersSrc,
  UNIONPAY: unionpaySrc,
};

export function getCardBrandLogoSrc(cardNumber: string): string {
  const network = detectCardNetwork(cardNumber);

  if (!network) return '';

  return NETWORK_LOGO_SRC[network] ?? '';
}
