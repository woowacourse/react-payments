export const getCardBrand = (cardNumbers: {
  first: string;
  second: string;
  third: string;
  fourth: string;
}): "visa" | "master" | "diners" | "amex" | "unionpay" | null => {
  const firstInput = cardNumbers.first;

  if (firstInput.length < 1) return null;
  if (firstInput[0] === "4") return "visa";

  if (firstInput.length < 2) return null;
  const second = Number(firstInput[1]);

  if (firstInput[0] === "5") {
    return 1 <= second && second <= 5 ? "master" : null;
  }

  if (firstInput[0] === "3") {
    if (second === 6) return "diners";
    if (second === 4 || second === 7) return "amex";
    return null;
  }

  if (firstInput[0] === "6") {
    if (firstInput.length < 3) return null;
    const first3 = Number(firstInput.slice(0, 3));
    if (624 <= first3 && first3 <= 626) return "unionpay";

    if (firstInput.length < 4) return null;
    const first4 = Number(firstInput);
    if (6282 <= first4 && first4 <= 6288) return "unionpay";

    const firstSix = (firstInput + cardNumbers.second).slice(0, 6);
    if (firstSix.length < 6) return null;
    const firstSixNum = Number(firstSix);
    if (622126 <= firstSixNum && firstSixNum <= 622925) return "unionpay";

    return null;
  }

  return null;
};
