export const decideBrandName = (number: string) => {
  if (/^4/.test(number)) return "visa";
  if (/^5[1-5]/.test(number)) return "master";
  if (/^3[47]/.test(number)) return "amex";
  if (/^36/.test(number)) return "diners";

  // UnionPay 조건 1: 622126~622925
  if (number.length >= 6) {
    const prefix = parseInt(number.slice(0, 6));
    if (prefix >= 622126 && prefix <= 622925) return "unionpay";
  }

  // UnionPay 조건 2: 624~626
  if (/^62[4-6]/.test(number)) return "unionpay";

  // UnionPay 조건 3: 6282~6288
  if (/^628[2-8]/.test(number)) return "unionpay";

  return "";
};
