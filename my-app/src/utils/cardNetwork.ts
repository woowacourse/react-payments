export const detectCardNetwork = (number: string) => {
  if (/^4/.test(number)) return "visa";
  if (/^5[1-5]/.test(number)) return "master";
  if (/^3[47]/.test(number)) return "amex";
  if (/^36/.test(number)) return "diners";

  if (/^62[4-6]/.test(number)) return "unionpay";
  if (/^628[2-8]/.test(number)) return "unionpay";
  if (number.length >= 6) {
    const prefix = parseInt(number.slice(0, 6));
    if (prefix >= 622126 && prefix <= 622925) return "unionpay";
  }

  return "";
};

export const getRequiredLengthForDetection = (number: string): number => {
  if (number.startsWith("622")) return 6;
  return 4;
};

const MAX_LENGTH = {
  amex: 15,
  diners: 14,
  default: 16,
} as const;

export const getMaxLength = (network: string): number => {
  return MAX_LENGTH[network as keyof typeof MAX_LENGTH] ?? MAX_LENGTH.default;
};

export const SUPPORTED_NETWORKS_MESSAGE = "* VISA, Mastercard, AMEX, Diners, UnionPay 카드만 지원합니다";
