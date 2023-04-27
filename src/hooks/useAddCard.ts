const useAddCard = (
  cardNumbers: Record<number, string>,
  expiredDate: Record<number, string>,
  securityCode: string,
  password: Record<number, string>
) => {
  const isCardNumbersValid = () => {
    const { 0: first, 1: second, 2: third, 3: fourth } = cardNumbers;
    return (
      first.length === 4 &&
      second.length === 4 &&
      third.length === 4 &&
      fourth.length === 4
    );
  };

  const isExpiredDateValid = () => {
    const { 0: expiredMonth, 1: expiredYear } = expiredDate;
    return expiredMonth.length === 2 && expiredYear.length === 2;
  };

  const isSecurityCodeValid = () => securityCode.length === 3;

  const isPasswordValid = () => {
    const { 0: first, 1: second } = password;
    return first.length === 1 && second.length === 1;
  };

  const disabled =
    !isCardNumbersValid() ||
    !isExpiredDateValid() ||
    !isSecurityCodeValid() ||
    !isPasswordValid();

  return {
    disabled,
  };
};

export default useAddCard;
