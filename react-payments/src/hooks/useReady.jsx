import { useState } from "react";

const isInValidCardNumber = (cardNumber) =>
  Object.values(cardNumber).some((number) => number.length !== 4);

const isInValidExpireDate = (expireDate) =>
  Object.values(expireDate).some((date) => date.length !== 2);

const isInValidSecurityCode = (securityCode) => securityCode.length !== 3;

const isInValidCardPassword = (cardPassword) =>
  Object.values(cardPassword).some((password) => password.length !== 1);

const isInValidCardType = (cardType) => !cardType;

const isReady = ({
  cardNumber,
  expireDate,
  securityCode,
  cardPassword,
  cardType,
}) => {
  return !(
    isInValidCardNumber(cardNumber) ||
    isInValidExpireDate(expireDate) ||
    isInValidSecurityCode(securityCode) ||
    isInValidCardPassword(cardPassword) ||
    isInValidCardType(cardType)
  );
};

const useReady = ({
  cardNumber,
  expireDate,
  securityCode,
  cardPassword,
  cardType,
}) => {
  const [ready, setReady] = useState(false);

  const checkReady = () => {
    if (
      isReady({
        cardNumber,
        expireDate,
        securityCode,
        cardPassword,
        cardType,
      }) !== ready
    ) {
      setReady((prevReady) => !prevReady);
    }
  };

  return [ready, checkReady];
};

export default useReady;
