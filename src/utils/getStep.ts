export function getStep({
  isCardNumberValid,
  isCardIssuerValid,
  isCardExpiryValid,
  isCvcValid,
}: {
  isCardNumberValid: boolean;
  isCardIssuerValid: boolean;
  isCardExpiryValid: boolean;
  isCvcValid: boolean;
}) {
  if (!isCardNumberValid) {
    return 0;
  }

  if (!isCardIssuerValid) {
    return 1;
  }

  if (!isCardExpiryValid) {
    return 2;
  }

  if (!isCvcValid) {
    return 3;
  }

  return 4;
}
